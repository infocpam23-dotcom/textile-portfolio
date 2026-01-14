import { useState } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

type Category = 'all' | 'traditional' | 'modern' | 'prints' | 'embroidery';

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Traditional Handwoven Textile',
    category: 'traditional',
    imageUrl: 'https://images.unsplash.com/photo-1760328715296-9714daa8a737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZhYnJpYyUyMHdlYXZpbmd8ZW58MXx8fHwxNzY4MTk1ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Traditional weaving technique with indigenous patterns'
  },
  {
    id: 2,
    title: 'Vibrant Color Palette',
    category: 'modern',
    imageUrl: 'https://images.unsplash.com/photo-1731275668160-f18f97c6faac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHRleHRpbGUlMjBwYXR0ZXJufGVufDF8fHx8MTc2ODI4OTI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Contemporary color combinations for modern fashion'
  },
  {
    id: 3,
    title: 'Batik Inspired Design',
    category: 'traditional',
    imageUrl: 'https://images.unsplash.com/photo-1761516659497-8478e39d2b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRpayUyMGZhYnJpYyUyMGRlc2lnbnxlbnwxfHx8fDE3NjgyODkyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Traditional batik technique with modern twist'
  },
  {
    id: 4,
    title: 'Modern Abstract Print',
    category: 'prints',
    imageUrl: 'https://images.unsplash.com/photo-1763581366713-80bc40b50f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZXh0aWxlJTIwcHJpbnR8ZW58MXx8fHwxNzY4Mjg5MjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Digital textile print with abstract motifs'
  },
  {
    id: 5,
    title: 'Intricate Embroidery',
    category: 'embroidery',
    imageUrl: 'https://images.unsplash.com/photo-1712255830188-9c4e38b2600d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJ5JTIwdGV4dGlsZSUyMGFydHxlbnwxfHx8fDE3NjgyODkyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Hand-embroidered textile art with traditional motifs'
  },
  {
    id: 6,
    title: 'Geometric Patterns',
    category: 'modern',
    imageUrl: 'https://images.unsplash.com/photo-1759267134622-811ea9198bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBmYWJyaWMlMjBwYXR0ZXJufGVufDF8fHx8MTc2ODI4OTI1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Modern geometric design for contemporary apparel'
  },
  {
    id: 7,
    title: 'Luxury Silk Texture',
    category: 'modern',
    imageUrl: 'https://images.unsplash.com/photo-1612744204774-5d0573587ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwZmFicmljJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjgyODkyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Premium silk fabric with elegant texture'
  },
  {
    id: 8,
    title: 'Organic Cotton Weave',
    category: 'traditional',
    imageUrl: 'https://images.unsplash.com/photo-1598616068517-c75ad397a436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjB0ZXh0aWxlJTIwd2VhdmV8ZW58MXx8fHwxNzY4MTg3NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Sustainable organic cotton with traditional weave'
  },
  {
    id: 9,
    title: 'Floral Textile Art',
    category: 'prints',
    imageUrl: 'https://images.unsplash.com/photo-1712255830050-a7ab819c196b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yYWwlMjB0ZXh0aWxlJTIwZGVzaWdufGVufDF8fHx8MTc2ODI4OTI2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Botanical print design inspired by nature'
  }
];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'traditional', label: 'Traditional' },
    { id: 'modern', label: 'Modern' },
    { id: 'prints', label: 'Prints' },
    { id: 'embroidery', label: 'Embroidery' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Portfolio</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            আমার সৃজনশীল কাজের নমুনা যা ঐতিহ্য এবং আধুনিকতার সংমিশ্রণ
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-foreground hover:bg-accent border border-border'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white w-full">
                  <h3 className="mb-2 text-white">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
