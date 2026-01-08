import { useEffect } from 'react';
import { generateSitemap } from '../utils/generateSitemap';

const Sitemap = () => {
  useEffect(() => {
    const sitemap = generateSitemap();
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Generating sitemap...</p>
    </div>
  );
};

export default Sitemap;


