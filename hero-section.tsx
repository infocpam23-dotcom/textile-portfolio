import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1701964620963-4dcaab6d020f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFicmljJTIwcGF0dGVybnxlbnwxfHx8fDE3NjgyMDIyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Textile Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
          Mohammad Rafiqul Islam
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8">
          Textile Designer
        </p>
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-12">
          Creating innovative and sustainable textile designs that blend traditional craftsmanship with contemporary aesthetics
        </p>
        <button
          onClick={() => {
            const element = document.getElementById('portfolio');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-white text-primary px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
        >
          View My Work
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-2 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
