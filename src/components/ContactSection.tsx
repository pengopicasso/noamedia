import { useState } from 'react';
import GlowButton from './GlowButton';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telegram: '',
    website: '',
    budget: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Show success message
    toast.success("Form submitted successfully! We'll be in touch soon.");

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      telegram: '',
      website: '',
      budget: ''
    });
  };

  const budgetOptions = ["Please Select", "$1,000 - $2,500", "$2,500 - $5,000", "$5,000 - $10,000", "$10,000+"];

  return <section id="contact" className="py-20 md:py-32 relative bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 text-green-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
            Your Brand, Our Ark. Let's Work Together!
          </h2>
          <p className="text-green-700 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours to discuss how we can help your project shine.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-green-100">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-green-800 mb-2">
                  First name<span className="text-glow-cyan">*</span>
                </label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-900 focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all" />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-green-800 mb-2">
                  Last name
                </label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-900 focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-green-800 mb-2">
                  Email<span className="text-glow-cyan">*</span>
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-900 focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all" />
              </div>
              
              <div>
                <label htmlFor="telegram" className="block text-green-800 mb-2">
                  Telegram
                </label>
                <input type="text" id="telegram" name="telegram" value={formData.telegram} onChange={handleChange} placeholder="t.me/username" className="w-full bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-900 focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all" />
              </div>
              
              <div>
                <label htmlFor="website" className="block text-green-800 mb-2">
                  Website URL<span className="text-glow-cyan">*</span>
                </label>
                <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} required className="w-full bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-900 focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all" />
              </div>
            </div>
            
            <div className="mb-8">
              <label htmlFor="budget" className="block text-green-800 mb-2">
                Expected Monthly Budget<span className="text-glow-cyan">*</span>
              </label>
              <p className="text-sm text-green-600 mb-2">Your best guess is fine.</p>
              <select id="budget" name="budget" value={formData.budget} onChange={handleChange} required className="w-full bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-900 focus:border-glow-cyan focus:ring-1 focus:ring-glow-cyan outline-none transition-all appearance-none">
                {budgetOptions.map((option, index) => (
                  <option key={index} value={option} className="bg-white text-green-900">
                    {option}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <p className="text-green-700 text-sm">
                By submitting this form you consent to receive communications from Glow Media and/or its affiliates.
                You can unsubscribe at any time. We don't spam.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <GlowButton type="submit" size="lg" variant="primary" className="w-40">
                Submit
              </GlowButton>
            </div>
          </form>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-green-700/60 mb-6">Follow us</p>
          <div className="flex justify-center space-x-4">
            <a href="https://twitter.com/noamediaxyz" className="text-green-700/60 hover:text-glow-cyan transition-colors" aria-label="X (Twitter)">
              <img src="/lovable-uploads/848cf121-11e3-4d8c-ac2b-27a4cf933369.png" alt="X (Twitter)" className="w-6 h-6 hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://t.me/noamediaxyz" className="text-green-700/60 hover:text-glow-cyan transition-colors" aria-label="Telegram">
              <img src="/lovable-uploads/9a9a0a34-7bbd-476e-87d3-53d7b5e8fb6b.png" alt="Telegram" className="w-6 h-6 hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute w-full h-full">
          <img src="public/lovable-uploads/117e59eb-d4e2-4ede-a75f-6a7cbbd23c5c.png" alt="Ripple Background" className="w-full h-full object-cover opacity-30" />
        </div>
      </div>
    </section>;
};

export default ContactSection;
