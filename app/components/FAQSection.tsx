// components/FAQSection.tsx
import React from 'react';
import FAQItem from './FAQItem';

const faqData = [
  {
    question: "What services does NexaReach offer?",
    answer: "At NexaReach, we provide comprehensive digital marketing solutions, including Facebook Ads lead generation, appointment setting to qualify each lead on your behalf, and assistance with registering your business on online directories like Yelp and Trustpilot."
  },
  {
    question: "How does your lead generation through Facebook Ads work?",
    answer: "We create targeted Facebook ad campaigns specifically designed to attract potential customers who are interested in your services. Our team constantly optimizes the ads to ensure you get the best results and high-quality leads that match your business goals."
  },
  {
    question: "What is appointment setting and why is it important?",
    answer: "Our appointment setting service involves pre-qualifying the leads we generate and scheduling them for you, ensuring that only serious prospects are passed on to your sales team. This saves you time and increases the likelihood of closing deals."
  },
  {
    question: "Can you help me with online visibility?",
    answer: "Yes! We assist businesses in getting listed on popular platforms like Yelp, Trustpilot, and other online directories. These listings increase your online credibility and help you attract more potential customers by making your business easily discoverable."
  },
  {
    question: "How much do your services cost?",
    answer: "We offer customized pricing based on your business needs and the services you require. Contact us to get a personalized quote and discuss a package that suits your goals."
  },
  {
    question: "How long does it take to see results from Facebook Ads?",
    answer: "Results from Facebook Ads can vary depending on your industry and target audience. Typically, you can start seeing initial results within a few weeks, but sustained success builds over time as we optimize and refine your campaigns."
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Absolutely! Whether you're a small local business or a larger company, we tailor our services to fit your needs and help you grow. Our team is experienced in working with a variety of industries and scales."
  },
  {
    question: "How do I get started with NexaReach?",
    answer: "Getting started is easy! Simply reach out through our contact form, and we’ll schedule a free consultation to discuss your business goals and how we can help you achieve them."
  }
];

const FAQSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 shadow-md rounded-lg">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-6 underline decoration-blue-400">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
