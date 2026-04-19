import React from "react";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <footer id="contact" className="py-20 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-neutral-400 mb-8 max-w-md">
            Interested in collaborating or have a project in mind? Feel free to reach out via the form or WhatsApp.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-neutral-300">
              <Mail className="w-5 h-5 text-blue-500" />
              <span>waqarazeem_kpsi@hotmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 w-full">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            <input type="hidden" name="access_key" value="eb2123c6-6282-42cd-ad82-e3f2a58a77ec" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                required 
                className="bg-black border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                className="bg-black border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows={4} 
              required
              className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
            ></textarea>
            <div className="h-captcha" data-captcha="true"></div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-neutral-900 text-center text-neutral-500 text-sm">
        © 2026 Waqar Azeem. Built with Next.js & Aceternity UI.
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/923349887654" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </footer>
  );
}
