export default function RegisterInfo() {
  return (
    <section id="register-info" className="py-20 bg-brand-dark border-y border-white/5 scroll-reveal">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white text-center mb-12">Registration <span
            className="text-brand-cyan">Information</span></h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Registration Dates */}
            <div className="bg-brand-surface p-8 rounded-xl border border-white/10">
              <div className="flex items-center mb-4">
                <i className="fas fa-calendar-alt text-brand-cyan text-2xl mr-3"></i>
                <h3 className="text-xl text-white font-bold">Important Dates</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Registration Starts:</span>
                  <span className="text-brand-orange font-bold">Feb 6, 2026</span>
                </div>
                <div className="h-px bg-white/10"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Last Date:</span>
                  <span className="text-red-500 font-bold">14TH FEB TILL 7 PM</span>
                </div>
                <div className="h-px bg-white/10"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Event Date:</span>
                  <span className="text-white font-bold">Feb 15, 2026</span>
                </div>
              </div>
            </div>

            {/* No Fee Highlight */}
            <div
              className="bg-gradient-to-br from-brand-orange/20 to-brand-cyan/20 p-8 rounded-xl border border-brand-orange/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full filter blur-2xl">
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <i className="fas fa-gift text-brand-orange text-2xl mr-3"></i>
                  <h3 className="text-xl text-white font-bold">Free Entry</h3>
                </div>
                <p
                  className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-cyan mb-2">
                  NO REGISTRATION FEE</p>
                <p className="text-gray-300">Completely free to participate. Just bring your passion and skills!
                </p>
              </div>
            </div>
          </div>

          {/* QR Codes */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Registration QR */}
            <div className="bg-white p-8 rounded-xl text-center shadow-xl">
              <h4 className="text-brand-dark font-bold text-xl mb-6 uppercase tracking-wider">Scan to Register
              </h4>
              <div className="bg-orange-50 p-4 rounded-lg mb-6 inline-block border-4 border-brand-orange">
                <img src="/assets/registration_qr.jpg" alt="Registration QR Code"
                  className="w-56 h-56 mx-auto rounded" />
              </div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSez5FNre4moJEgHFhAeXGRyJ1x24RQqUObyMH0sR6KsNecKpg/viewform?usp=publish-editor"
                target="_blank"
                className="inline-flex items-center justify-center bg-brand-orange text-white pr-8 pl-2 py-2 rounded-full font-bold hover:bg-brand-orange/80 transition-all text-lg min-w-[200px] shadow-lg hover:shadow-brand-orange/30 transform hover:-translate-y-1">
                <div
                  className="bg-white/20 p-2.5 rounded-full mr-4 backdrop-blur-sm flex items-center justify-center">
                  <i className="fas fa-user-plus text-xl"></i>
                </div>
                <span>Register Now</span>
              </a>
            </div>

            {/* WhatsApp QR */}
            <div className="bg-white p-8 rounded-xl text-center shadow-xl">
              <h4 className="text-brand-dark font-bold text-xl mb-6 uppercase tracking-wider">Join WhatsApp Group
              </h4>
              <div className="bg-green-50 p-4 rounded-lg mb-6 inline-block border-4 border-green-500">
                <img src="/assets/whatsapp_qr.jpg" alt="WhatsApp Group QR Code"
                  className="w-56 h-56 mx-auto rounded" />
              </div>
              <a href="https://chat.whatsapp.com/CIdLwB27FS60E7yd3lxepT?mode=gi_t" target="_blank"
                className="inline-flex items-center justify-center bg-green-500 text-white pr-8 pl-2 py-2 rounded-full font-bold hover:bg-green-600 transition-all text-lg min-w-[200px] shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1">
                <div
                  className="bg-white/20 p-2.5 rounded-full mr-4 backdrop-blur-sm flex items-center justify-center">
                  <i className="fab fa-whatsapp text-2xl"></i>
                </div>
                <span>Join Group</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
