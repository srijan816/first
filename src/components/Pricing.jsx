import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for individuals exploring AI capabilities',
      features: [
        'Basic neural network access',
        'Limited API calls (1000/month)',
        'Community support',
        'Basic documentation'
      ],
      buttonText: 'Get Started',
      highlighted: false
    },
    {
      id: 2,
      name: 'Pro',
      price: '$10',
      period: 'per month',
      description: 'Ideal for startups and small businesses',
      features: [
        'Advanced neural processing',
        'Unlimited API calls',
        'Priority support',
        'Full documentation',
        'Custom model training',
        'Data visualization tools',
        'Integration with 3rd party services',
        'Team collaboration features',
        'Analytics dashboard',
        'Regular updates'
      ],
      buttonText: 'Subscribe Now',
      highlighted: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For organizations with advanced AI needs',
      features: [
        'All Pro features',
        'Dedicated support team',
        'Custom AI model development',
        'On-premise deployment options',
        'Advanced security features',
        'SLA guarantees',
        'Training and workshops'
      ],
      buttonText: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title">Pricing Plans</h2>
        <p className="pricing-subtitle">Choose the plan that fits your needs</p>
        
        <div className="pricing-grid">
          {pricingPlans.map(plan => (
            <div 
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`} 
              key={plan.id}
            >
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              
              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pricing-footer">
                <button className={`btn ${plan.highlighted ? 'btn-highlighted' : ''}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
