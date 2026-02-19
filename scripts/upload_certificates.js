const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load env from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const CERTIFICATES_DIR = path.resolve(__dirname, 'item/certificates');

async function uploadCertificates() {
  console.log(`Scanning directory: ${CERTIFICATES_DIR}`);

  if (!fs.existsSync(CERTIFICATES_DIR)) {
    console.error(`Directory not found: ${CERTIFICATES_DIR}`);
    return;
  }

  const files = fs.readdirSync(CERTIFICATES_DIR);
  // Filter for PNG images (based on file list seen previously)
  const pngFiles = files.filter(file => file.endsWith('.png'));

  console.log(`Found ${pngFiles.length} certificates.`);

  for (const file of pngFiles) {
    const filePath = path.join(CERTIFICATES_DIR, file);
    const fileBuffer = fs.readFileSync(filePath);

    // Parse filename: ID_Name_Team.png or similar
    // Example: 100_Harshith_seela_Unique.png
    // Pattern seems to be: ID_Name_Team.png
    // But some names/teams have underscores.
    // Strategy: Split by '_'
    // First part is ID.
    // Last part (minus .png) is Team? 
    // Wait, "100_Harshith_seela_Unique.png" -> ID: 100, Name: Harshith seela, Team: Unique?
    // "101_Dammu_Mahesh_Vijay_Kumar_Unique.png" -> ID: 101, Name: Dammu Mahesh Vijay Kumar, Team: Unique.
    // "112_Navdeep_Singh_Neural_Nomads.png" -> Team: Neural Nomads.

    // We need a robust parsing strategy.
    // Assumption: ID is always first, separated by '_'.
    // Scaling: We can try to extract ID.
    // Then finding Team might be tricky if Team also has underscores.
    // However, looking at the list:
    // "100_Harshith_seela_Unique.png"
    // "112_Navdeep_Singh_Neural_Nomads.png"
    // Maybe we just store the full filename and the ID?
    // And allow search by partial match on the filename?
    // Or try to parse. 
    // Let's try to parse:
    // parts = file.replace('.png', '').split('_');
    // id = parts[0];
    // The rest is Name + Team.
    // It's hard to distinguish Name vs Team without a known list.
    // Better approach: Store `filename` and `parsed_text` (filename without extension) for search.
    // We can also try to extract ID.

    const id = file.split('_')[0];
    const nameForSearch = file.replace('.png', '').replace(/_/g, ' '); // "100 Harshith seela Unique"

    console.log(`Uploading ${file}...`);

    // Upload to Storage
    const { data: storageData, error: storageError } = await supabase
      .storage
      .from('certificates')
      .upload(file, fileBuffer, {
        contentType: 'image/png',
        upsert: true
      });

    if (storageError) {
      console.error(`Failed to upload ${file}:`, storageError.message);
      continue;
    }

    // Get Public URL
    const { data: { publicUrl } } = supabase
      .storage
      .from('certificates')
      .getPublicUrl(file);

    // Metadata for Database
    const { error: dbError } = await supabase
      .from('certificates')
      .upsert({
        // certificate_id removed as it is not in the schema and id is auto-generated
        filename: file,
        search_text: nameForSearch,
        public_url: publicUrl,
        created_at: new Date()
      }, { onConflict: 'filename' });

    if (dbError) {
      console.error(`Failed to insert metadata for ${file}:`, dbError.message);
    } else {
      console.log(`Success: ${file}`);
    }
  }
}

uploadCertificates();
