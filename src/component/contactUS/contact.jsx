import contact from './contact.svg'
import './contact.css'
const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("access_key", "8ab6f305-eefb-492a-ab31-82f8466f99ea");
        formData.append("Full Name", Full_Name);
        formData.append("email", email);
        formData.append("message", message);
const result = await Swal.fire({
      title: "Confirm Submission",
      html: `
        <strong>Full_Name:</strong> ${Full_Name}
      `,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Submit",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();

        if (data.success) {
          Swal.fire("Success", "Your information has been submitted!", "success").then(() => {
            window.location.href = "/"; 
          });
        } else {
          Swal.fire("Error", data.message, "error");
        }
      } catch (error) {
        Swal.fire("Error", "An error occurred while submitting the form.", "error");
      }
    }
  };    
    return (
        <div className="max-w-100% mx-auto px-6 py-12 md:py-20" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Section */}
                <div className="flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black-800 dark:text-black-100 text-center">
    Let's Connect!
</h2>

                        <p className="text-lg text-black-600 dark:text-black-400">
                            Reach out to us for any inquiries or just to say hi. We're here to help you!
                        </p>
                    </div>
                    <img 
                        src="https://i.pinimg.com/originals/c6/34/78/c634786383032dc04dfb30d835cf8650.gif"
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
    className="mt-1 block w-full px-4 py-2 border border-black-300 dark:border-black-700 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 dark:bg-black-700 dark:text-black-100 resize-none"
></textarea>

                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-3 px-6 bg-lime-600 text-white font-semibold rounded-md shadow-md hover:bg-lime-500 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-700"
                        style={{background: "#4AB90E"}}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
