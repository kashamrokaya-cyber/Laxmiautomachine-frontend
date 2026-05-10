import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Basic Repair',
    price: 'Rs. 500 to 1000',
    period: 'per visit',
    features: [
      'Basic Cleaning',
      'Sensor Calibration',
      'Software Update',
      '30-days warranty',
      'Checking of spare parts',
      'Free pick-up and drop-off service',
      'On-site Service'

    ],
    notIncluded: [

      'Priority Support'
    ],
    recommended: false
  },
  {
    name: 'Standard Maintenance',
    price: 'Rs. 1000 to 2,500',
    period: 'per month',
    features: [
      'Deep Internal Cleaning',
      'Full Calibration',
      'Genuine Parts Replacement',
      '60-Day Warranty',
      'On-site Service'
    ],

    notIncluded: [
      'Priority Support',
      'Replacement Machine'
    ],
    recommended: true
  },
  {
    name: 'Annual Package',
    price: 'Up to 20,000',
    period: 'per year',
    features: [
      'Unlimited Repairs',
      'Quarterly Maintenance',
      'Priority Support',
      'On-site Services',
      '1-Year Warranty'
    ],
    notIncluded: [],
    recommended: false
  }
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Service Pricing</h2>
          <p className="text-slate-600 dark:text-slate-400">Transparent pricing for all our repair and maintenance services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border ${plan.recommended ? 'border-blue-500 scale-105 z-10' : 'border-slate-100 dark:border-slate-700'
                }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                <span className="text-slate-500 text-sm">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 opacity-50">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigate('/book', { state: { planName: plan.name } })}
                className='bg-blue-600 w-full py-4 rounded-xl font-bold transition-all text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30'
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
