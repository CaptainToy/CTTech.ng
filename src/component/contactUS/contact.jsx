import contact from './contact.svg'
import './contact.css'
const Contact = () => {
    return (
        <div className="max-w-100% mx-auto px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Section */}
                <div className="flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black-800 dark:text-black-100">
                            Let's Connect!
                        </h2>
                        <p className="text-lg text-black-600 dark:text-black-400">
                            Reach out to us for any inquiries or just to say hi. We're here to help you!
                        </p>
                    </div>
                    <img 
                        src={contact}
                        alt="Contact Illustration" 
                        className="w-47 h-47 md:w-61 md:h-61 mx-auto md:mx-20"
                    />
                </div>

                {/* Form Section */}
                <form noValidate className="space-y-8 bg-black-50 dark:bg-black-800 p-6 ">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black-700 dark:text-black-300">
                            Full Name
                        </label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="Your full name" 
                            className="mt-1 block w-full px-4 py-2 border border-black-300 dark:border-black-700 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 dark:bg-black-700 dark:text-black-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black-700 dark:text-black-300">
                            Email
                        </label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="Your email address" 
                            className="mt-1 block w-full px-4 py-2 border border-black-300 dark:border-black-700 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 dark:bg-black-700 dark:text-black-100"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-black-700 dark:text-black-300">
                            Message
                        </label>
                        <textarea 
                            id="message" 
                            rows="4" 
                            placeholder="Write your message here" 
                            className="mt-1 block w-full px-4 py-2 border border-black-300 dark:border-black-700 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 dark:bg-black-700 dark:text-black-100"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-3 px-6 bg-lime-600 text-white font-semibold rounded-md shadow-md hover:bg-lime-500 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-700">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
