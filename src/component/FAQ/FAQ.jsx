const FAQ = () => {
	return (
	  <section className="dark:bg-gray-100 dark:text-gray-800">
		<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		  <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
			Frequently Asked Questions
		  </h2>
		  <div className="divide-y dark:divide-gray-300">
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
			  <h3 className="font-semibold md:col-span-5">
				What services does your web development company provide?
			  </h3>
			  <p className="md:pl-0 md:col-span-7">
				We offer a range of services including website design, front-end and back-end development, e-commerce solutions, custom web applications, website maintenance, and SEO optimization.
			  </p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
			  <h3 className="font-semibold md:col-span-5">
				How long does it take to build a website?
			  </h3>
			  <p className="md:pl-0 md:col-span-7">
				The timeline depends on the complexity and requirements of the project. A basic website may take 2-4 weeks, while more complex websites or applications can take several months. We ensure timely delivery without compromising quality.
			  </p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
			  <h3 className="font-semibold md:col-span-5">
				Will my website be mobile-friendly?
			  </h3>
			  <p className="md:pl-0 md:col-span-7">
				Absolutely. We design and develop websites with a mobile-first approach to ensure they are fully responsive and provide an excellent user experience on all devices.
			  </p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
			  <h3 className="font-semibold md:col-span-5">
				Do you provide website maintenance and support?
			  </h3>
			  <p className="md:pl-0 md:col-span-7">
				Yes, we offer ongoing maintenance and support services to ensure your website stays updated, secure, and performs optimally.
			  </p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
			  <h3 className="font-semibold md:col-span-5">
				Can you help improve the SEO of my website?
			  </h3>
			  <p className="md:pl-0 md:col-span-7">
				Yes, our team provides SEO optimization services, including keyword research, on-page SEO, and performance enhancements, to help improve your website's visibility on search engines.
			  </p>
			</div>
		  </div>
		</div>
	  </section>
	);
  };
  
  export default FAQ;
  