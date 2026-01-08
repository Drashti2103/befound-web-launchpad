import { useState, useEffect } from "react";

interface ServiceItem {
  image: string;
  title: string;
  description: string;
}

interface ExpandCardsProps {
  services: ServiceItem[];
  defaultExpanded?: number;
  title?: string;
  subtitle?: string;
}

const ExpandCards = ({ services, defaultExpanded = 3, title, subtitle }: ExpandCardsProps) => {
  const [expandedImage, setExpandedImage] = useState(defaultExpanded);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getImageWidth = (index: number) => {
    if (isMobile) {
      return "0"; // Hidden on mobile (handled separately)
    } else if (isTablet) {
      return index === expandedImage ? "18rem" : "4rem";
    }
    return index === expandedImage ? "24rem" : "5rem";
  };

  return (
    <div className="w-full bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-befoundPurple px-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {/* Mobile: Vertical Stack */}
        <div className="block md:hidden space-y-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl h-64 cursor-pointer group"
              onClick={() => setExpandedImage(idx + 1)}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={service.image}
                alt={service.title}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Desktop: Horizontal Expand Cards */}
        <div className="hidden md:block relative min-h-[400px] md:min-h-[500px] items-center justify-center p-2 transition-all duration-300 ease-in-out">
          <div className="w-full h-full overflow-hidden rounded-3xl">
            <div className="flex h-full w-full items-center justify-center overflow-hidden bg-gray-50">
              <div className="relative w-full max-w-7xl px-2 md:px-5">
                <div className="flex w-full items-center justify-center gap-1 overflow-x-auto scrollbar-hide">
                  {services.map((service, idx) => {
                    const isExpanded = idx + 1 === expandedImage;
                    return (
                      <div
                        key={idx}
                        className="relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ease-in-out group flex-shrink-0"
                        style={{
                          width: getImageWidth(idx + 1),
                          height: "24rem",
                        }}
                        onMouseEnter={() => setExpandedImage(idx + 1)}
                      >
                        <div className="relative w-full h-full">
                          <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            src={service.image}
                            alt={service.title}
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop';
                            }}
                          />
                          {isExpanded && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6">
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                {service.title}
                              </h3>
                              <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
                                {service.description}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandCards;

