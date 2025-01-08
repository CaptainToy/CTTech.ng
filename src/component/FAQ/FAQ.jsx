import React from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "What services does your web development company provide?",
      answer: "We offer a range of services including website design, front-end and back-end development, e-commerce solutions, custom web applications, website maintenance, and SEO optimization."
    },
    {
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the complexity and requirements of the project. A basic website may take 2-4 weeks, while more complex websites or applications can take several months. We ensure timely delivery without compromising quality."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely. We design and develop websites with a mobile-first approach to ensure they are fully responsive and provide an excellent user experience on all devices."
    },
    {
      question: "Do you provide website maintenance and support?",
      answer: "Yes, we offer ongoing maintenance and support services to ensure your website stays updated, secure, and performs optimally."
    },
    {
      question: "Can you help improve the SEO of my website?",
      answer: "Yes, our team provides SEO optimization services, including keyword research, on-page SEO, and performance enhancements, to help improve your website's visibility on search engines."
    }
  ];

  return (
    <section className="dark:text-gray-800">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-4 mb-8 dark:text-gray-600">
        </p>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <details key={index} className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-lime-600">
                {item.question}
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
