import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: <Phone className="text-blue-600" />, label: 'Phone', value: '+977 9847348949' },
    { icon: <MessageCircle className="text-green-500" />, label: 'WhatsApp', value: '+977 9848109713', isLink: true },
    { icon: <Mail className="text-red-500" />, label: 'Email', value: 'laxmiautomachine@gmail.com' },
    { icon: <MapPin className="text-purple-600" />, label: 'Location', value: 'Suryabinayk,  Bhaktapur Nepal' },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Contact Us</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Need immediate repair or have a query? Reach out to us directly through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <div className="text-sm text-slate-500">{info.label}</div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">{info.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-blue-600 w-8 h-8" />
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Business Hours</h4>
            </div>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                <span>Monday - Friday</span>
                <span className="font-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
                <span>Saturday - Sunday</span>
                <span className="font-semibold">8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden h-[450px] shadow-xl border border-slate-200 dark:border-slate-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.316259513!2d85.291113!3d27.7089559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1715050000000!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
