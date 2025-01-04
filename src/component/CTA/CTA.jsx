const CTA = () => {
	return (
	  <div style={{ backgroundColor: "#F0F8FF" }}>
		<section className="py-6 ">
		  <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
			<div className="flex flex-col space-y-4 text-center lg:text-left">
			  <h1 className="text-5xl font-bold leading-none">Stay in the loop</h1>
			  <p className="text-lg">
				Doloribus consectetur quasi ipsa quo neque culpa blanditiis ducimus recusandae a veritatis optio cumque, in harum ad nam!
			  </p>
			</div>
			<div className="flex flex-row items-center self-center justify-center flex-shrink-10 shadow-md lg:justify-end">
			  <div className="flex flex-row">
				<input
				  type="email"
				  placeholder="example@email.com"
				  className="w-3/5 p-3 rounded-l-lg sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-lime-600"
				/>
				<button
				  type="button"
				  className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-lime-600 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-600"
				>
				  Subscribe
				</button>
			  </div>
			</div>
		  </div>
		</section>
	  </div>
	);
  };
  
  export default CTA;
  