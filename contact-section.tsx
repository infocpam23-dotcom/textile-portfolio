import { useState } from 'react';
import { MapPin, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('এই ফর্মটি এখনো বার্তা পাঠানোর সেবার সঙ্গে যুক্ত নয়। আপনার বার্তা পাঠাতে সরাসরি যোগাযোগের তথ্য প্রয়োজন।');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            টেক্সটাইল ডিজাইন বা সহযোগিতা নিয়ে কথা বলতে যোগাযোগের তথ্য শিগগির যোগ করা হবে।
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6">Contact Information</h3>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="mb-1">Location</h4>
                  <p className="text-muted-foreground">Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="mb-2">Important note</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                এই ফর্মটি বর্তমানে ডেমো হিসেবে রয়েছে। বাস্তব ইমেইল বা নিরাপদ ফর্ম-সার্ভিস যুক্ত না করা পর্যন্ত এটি কোনো বার্তা পাঠাবে না।
              </p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="mb-6">Draft a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring" placeholder="আপনার নাম" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring" placeholder="আপনার ইমেইল" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="আপনার বার্তা লিখুন..." />
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <Send className="w-5 h-5" aria-hidden="true" />
                Check Form Status
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
