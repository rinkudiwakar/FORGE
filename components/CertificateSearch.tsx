'use client';

import { useState, useEffect, useCallback } from 'react';

type Certificate = {
  id: number;
  filename: string;
  search_text: string;
  public_url: string;
};

// Debounce helper hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function CertificateSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Debounce the query to avoid firing requests on every keystroke
  const debouncedQuery = useDebounce(query, 500);

  const searchCertificates = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    setLoading(true);
    setHasSearched(true);
    try {
      const res = await fetch(`/api/certificates/search?query=${encodeURIComponent(searchQuery)}`);
      const json = await res.json();
      if (json.data) {
        setResults(json.data);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error('Search failed', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Trigger search when debounced query changes
  useEffect(() => {
    if (debouncedQuery) {
      searchCertificates(debouncedQuery);
    } else {
      setResults([]);
      setHasSearched(false);
    }
  }, [debouncedQuery, searchCertificates]);

  const downloadImage = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed', error);
      window.open(url, '_blank');
    }
  };

  const copyLink = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <section id="certificates" className="py-20 bg-brand-dark border-y border-white/5 scroll-reveal">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-white text-center mb-12">Find Your <span className="text-brand-orange">Certificate</span></h2>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Start typing your name or team name..."
              className="w-full bg-brand-surface border border-white/10 rounded-lg px-6 py-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors shadow-lg"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">
              {loading ? <i className="fas fa-spinner fa-spin text-brand-orange"></i> : <i className="fas fa-search"></i>}
            </div>
            {query && !loading && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
          <p className="text-gray-500 text-sm mt-3 ml-2 flex items-center">
            {loading ? (
              <>
                <i className="fas fa-circle-notch fa-spin mr-2 text-brand-orange"></i> Searching...
              </>
            ) : (
              <>
                <i className="fas fa-info-circle mr-2"></i> Results will appear automatically as you type
              </>
            )}
          </p>
        </div>

        {/* Results Grid */}
        {results.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {results.map((cert) => (
              <div key={cert.id} className="bg-brand-surface rounded-xl overflow-hidden border border-white/5 hover:border-brand-orange/30 transition-all hover:-translate-y-1 shadow-lg group">
                <div className="relative aspect-[4/3] bg-black/50 overflow-hidden">
                  <img src={cert.public_url} alt="Certificate" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold mb-4 truncate capitalize" title={cert.filename}>{cert.filename.replace(/_/g, ' ').replace('.png', '').replace(/^\d+\s*/, '')}</h3>
                  <div className="flex gap-4">
                    <button
                      onClick={() => downloadImage(cert.public_url, cert.filename)}
                      className="flex-1 bg-brand-orange/10 text-brand-orange border border-brand-orange/50 py-2 rounded-lg text-center font-bold hover:bg-brand-orange hover:text-white transition-colors text-sm"
                    >
                      <i className="fas fa-download mr-2"></i> Download
                    </button>
                    <button
                      onClick={() => copyLink(cert.public_url)}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 transition-colors tooltip relative group/btn"
                      title="Copy Link"
                    >
                      <i className="fas fa-link"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {hasSearched && !loading && results.length === 0 && query.trim() !== '' && (
          <div className="text-center text-gray-500 mt-8 bg-brand-surface/50 p-8 rounded-xl border border-white/5 max-w-lg mx-auto animate-fade-in">
            <i className="fas fa-search text-4xl mb-4 text-gray-600"></i>
            <p>No certificates found for &quot;{query}&quot;. <br /> Please check the spelling or try the team name.</p>
          </div>
        )}

      </div>
    </section>
  );
}
