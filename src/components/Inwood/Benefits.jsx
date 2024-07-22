import React from 'react';

const benefits = [
  {
    title: 'Payment Method',
    description: 'We offer flexible payment options, to make easier.',
    icon: '../../assets/Inwood/payment.png',
  },
  {
    title: 'Return Policy',
    description: 'You can return a product within 30 days.',
    icon: '../../assets/Inwood/policy.png',
  },
  {
    title: 'Customer Support',
    description: 'Our customer support is 24/7.',
    icon: '../../assets/Inwood/customer.png',
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">Benefits for your expediency</h2>
        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start space-y-6 lg:space-y-0">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center w-full lg:w-1/3 px-4">
              <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-900">{benefit.title}</h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
