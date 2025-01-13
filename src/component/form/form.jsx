import React, { useState } from "react";
import Swal from "sweetalert2";
import "./form.css";

const ClientForm = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState([]);
  const [service, setService] = useState("");
  const [customService, setCustomService] = useState("");
  const [meetingPlatform, setMeetingPlatform] = useState("");
  const [externalInfo, setExternalInfo] = useState("");

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

  const handleAddGuest = () => {
    if (guests.length < 3) {
      setGuests([...guests, { email: "" }]);
    }
  };

  const handleGuestEmailChange = (index, newEmail) => {
    const updatedGuests = [...guests];
    updatedGuests[index].email = newEmail;
    setGuests(updatedGuests);
  };

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
      html: `
        <strong>Client Name:</strong> ${clientName} <br />
        <strong>Email:</strong> ${email} <br />
        <strong>Service:</strong> ${service === "other" ? customService : service} <br />
        <strong>Meeting Platform:</strong> ${meetingPlatform} <br />
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
    <form onSubmit={handleSubmit} className="client-form">
      <div className="form-group">
        <label>
          Client Name:
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Guests (max 3):
          <button
            type="button"
            onClick={handleAddGuest}
            disabled={guests.length >= 3}
          >
            Add Guest
          </button>
        </label>
        <ul>
          {guests.map((guest, index) => (
            <li key={index}>
              <label>
                Guest {index + 1} Email:
                <input
                  type="email"
                  value={guest.email}
                  onChange={(e) =>
                    handleGuestEmailChange(index, e.target.value)
                  }
                  required
                />
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="form-group">
        <label>
          What We Do:
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            {services.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        {service === "other" && (
          <div className="form-group">
            <label>
              Please Specify:
              <input
                type="text"
                value={customService}
                onChange={(e) => setCustomService(e.target.value)}
                required
              />
            </label>
          </div>
        )}
      </div>

      <div className="form-group">
        <label>
          Preferred Meeting Platform:
          <div>
            <label>
              <input
                type="radio"
                name="meetingPlatform"
                value="google-meet"
                checked={meetingPlatform === "google-meet"}
                onChange={(e) => setMeetingPlatform(e.target.value)}
                required
              />
              Google Meet
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="meetingPlatform"
                value="zoom"
                checked={meetingPlatform === "zoom"}
                onChange={(e) => setMeetingPlatform(e.target.value)}
                required
              />
              Zoom
            </label>
          </div>
        </label>
      </div>

      <div className="form-group">
        <label>
          External Information:
          <textarea
            value={externalInfo}
            onChange={(e) => setExternalInfo(e.target.value)}
          ></textarea>
        </label>
      </div>

      <div className="form-group">
        <button
          type="submit"
          disabled={!clientName || !email || !service || !meetingPlatform}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ClientForm;
