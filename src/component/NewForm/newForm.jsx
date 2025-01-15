import { useState, useEffect } from "react";
import Swal from "sweetalert2"; // Ensure this is installed and imported
import "./newForm.css";

const NewForm = () => {
  const [resultMessage, setResultMessage] = useState("");
  const [service, setService] = useState(""); // State for service selection
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState([]);
  const [meetingPlatform, setMeetingPlatform] = useState("");
  const [externalInfo, setExternalInfo] = useState("");
  const [customService, setCustomService] = useState("");

  useEffect(() => {
    const today = new Date();
    const minDate = today.toISOString().split("T")[0]; // Today's date
    const dateInput = document.getElementById("calendar");
    if (dateInput) {
      dateInput.setAttribute("min", minDate); // Disable past dates
    }

    // Disable Sundays
    const daysOff = new Date();
    daysOff.setDate(daysOff.getDate() + 1); // Date starts tomorrow to avoid issue of setting it today
    if (daysOff.getDay() === 0 && dateInput) {
      dateInput.setAttribute("disabled", true);
    }

    // Time Input settings
    const timeInput = document.getElementById("time");
    if (timeInput) {
      timeInput.setAttribute("min", "09:00"); // Minimum time: 9:00 AM
      timeInput.setAttribute("max", "18:00"); // Maximum time: 6:00 PM
    }
  }, []);

  const services = [
    { value: "website-development", label: "Website Development" },
    { value: "web-application", label: "Web Application Development" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "maintenance-support", label: "Maintenance and Support" },
    { value: "mobile-app-development", label: "Mobile App Development" },
    { value: "ecommerce-solutions", label: "E-commerce Solutions" },
    { value: "cloud-services", label: "Cloud Services" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "analytics-reporting", label: "Analytics and Reporting" },
    { value: "training-consultation", label: "Training and Consultation" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("access_key", "8ab6f305-eefb-492a-ab31-82f8466f99ea");
    formData.append("clientName", clientName);
    formData.append("email", email);
    formData.append("service", service === "other" ? customService : service);
    formData.append("meetingPlatform", meetingPlatform);
    formData.append("externalInfo", externalInfo);

    // Append guests
    guests.forEach((guest, index) => {
      formData.append(`guests[${index}][email]`, guest.email);
    });

    const result = await Swal.fire({
      title: "Confirm Submission",
      html: `Meeting will be scheduled as planned `,
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
            window.location.href = "/"; // Redirect to home page
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
    <div className="flex items-center min-h-screen border-1px solid black">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-black-700 dark:text-black-200">
              Book a Meeting
            </h1>
            <p className="text-gray-400 dark:text-gray-400">
              Fill up the form below to book a meeting.
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
              <input type="hidden" name="access_key" value="8ab6f305-eefb-492a-ab31-82f8466f99ea" />
              <input type="hidden" name="subject" value="New Submission from Web3Forms" />

              <div className="flex mb-6 space-x-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="fname" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="first_name"
                    placeholder="John"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="lname" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john.doe@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>

              <div className="flex mb-6 space-x-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="calendar" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Pick a date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="calendar"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="time" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Pick a time (9:00AM - 6:00PM)
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
              </div>

              <div className="w-full mb-6">
                <label htmlFor="service" className="block text-sm mb-2 text-gray-600 dark:text-gray-400">
                  What we do
                </label>
                <select
                  name="service"
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                >
                  <option value="">Select a service</option>
                  {services.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                ></textarea>
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-green-500 rounded-md focus:bg-green-600 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewForm;
