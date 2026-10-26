import { Briefcase, Palette, Sparkles } from 'lucide-react';

export function AboutSection() {
  const skills = [
    'Textile Print Design',
    'Pattern Development',
    'Color Coordination',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'All-over Print',
    'Motif Development',
    'Digital Textile Design',
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-6">About Me</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            আমি মোহাম্মদ রফিকুল ইসলাম, একজন টেক্সটাইল ডিজাইনার। ডিজিটাল টুল ব্যবহার করে
            রঙ, মোটিফ ও প্যাটার্ন নিয়ে কাজ করতে ভালোবাসি। এই পোর্টফোলিওতে আমার দক্ষতা,
            ডিজাইন প্রক্রিয়া এবং নির্বাচিত কাজ উপস্থাপনের লক্ষ্য রয়েছে।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Briefcase className="w-8 h-8 text-primary" aria-hidden="true" />
            </div>
            <h3 className="mb-2">Design Focus</h3>
            <p className="text-muted-foreground">Textile prints, patterns and surface design</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Palette className="w-8 h-8 text-primary" aria-hidden="true" />
            </div>
            <h3 className="mb-2">Creative Tools</h3>
            <p className="text-muted-foreground">Adobe Photoshop and Adobe Illustrator</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-8 h-8 text-primary" aria-hidden="true" />
            </div>
            <h3 className="mb-2">Design Approach</h3>
            <p className="text-muted-foreground">Thoughtful color, repeat patterns and print-ready artwork</p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center mb-8">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill} className="bg-accent px-4 py-3 rounded-lg text-center">
                <span className="text-accent-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
