import { Award, Briefcase, GraduationCap } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-6">About Me</h2>
          <p className="text-muted-foreground text-lg">
            আমি মোহাম্মদ রফিকুল ইসলাম, একজন পেশাদার টেক্সটাইল ডিজাইনার যিনি ঐতিহ্যবাহী বাংলাদেশী
            টেক্সটাইল শিল্পের সাথে আধুনিক ডিজাইনের সংমিশ্রণে বিশ্বাস করি। আমার লক্ষ্য হল এমন
            টেক্সটাইল তৈরি করা যা শুধুমাত্র সুন্দরই নয়, বরং টেকসই এবং কার্যকরী।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Experience Card */}
          <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h3 className="mb-2">Experience</h3>
            <p className="text-muted-foreground">
              10+ years in textile design and pattern development
            </p>
          </div>

          {/* Education Card */}
          <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="mb-2">Education</h3>
            <p className="text-muted-foreground">
              Bachelor's in Textile Design from Bangladesh University of Textiles
            </p>
          </div>

          {/* Achievements Card */}
          <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="mb-2">Achievements</h3>
            <p className="text-muted-foreground">
              Award-winning designs showcased in national and international exhibitions
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-center mb-8">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['Pattern Design', 'Color Theory', 'Fabric Selection', 'CAD Design', 'Weaving Techniques', 'Print Design', 'Sustainability', 'Trend Forecasting'].map((skill) => (
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
