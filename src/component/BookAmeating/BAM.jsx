import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Bam.css";
import logo from '../../assets/logo/newlogo.png'

const Bam = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [userTimeZone, setUserTimeZone] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [guests, setGuests] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    services: [],
    additionalInfo: "",
  });

  const availableTimeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00",
  ];

  const onDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setShowForm(false);
  };

  const onTimeChange = (time) => {
    setSelectedTime(time);
    setShowForm(true);
  };

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimeZone(timeZone);

    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleAddGuest = () => {
    if (guests.length < 2) {
      setGuests([...guests, ""]);
    }
  };

  const handleGuestEmailChange = (index, email) => {
    const newGuests = [...guests];
    newGuests[index] = email;
    setGuests(newGuests);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (e) => {
    const options = e.target.options;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setFormData((prev) => ({ ...prev, services: selected }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      guests,
      selectedDate,
      selectedTime,
    };
    console.log("Form Submitted:");
    console.table(data);  // This logs all form data in a table format
    
    const alertMessage = "Meeting scheduled successfully!"; // You can change this based on condition
    if (alertMessage === "Meeting scheduled successfully!") {
      alert(alertMessage);
      window.location.href = "/"; // Redirect to home page
    } else {
      alert("Something went wrong, please try again.");
      window.location.reload(); // Reload the page to start fresh
    }
  };
  
  
  return (
    <div className="bam-body">
      <div className="bam-container">
        {/* Sidebar */}
        <div className="bam-sidebar">
          <img
            src={logo}
            alt="Profile"
            className="bam-profile-img"
          />
          <h3>Schedule a Meeting</h3>
          <h3>
            {selectedDate && selectedTime
              ? `Time: ${selectedTime}, ${selectedDate.toDateString()}`
              : "Select a Time"}
          </h3>
          <p>30 min</p>
          <p>
            No matter where you're at (research, planning, or last-minute),
            we're here to listen, advise, and craft a plan that works. Start
            with a free 30-minute chat!
          </p>
        </div>

        {/* Calendar and Time Slots */}
        {!showForm && (
          <div className="bam-calendar-time">
            <div className="bam-calendar-container">
            <Calendar
              onChange={onDateChange}
              value={selectedDate}
              tileDisabled={({ date, view }) => 
              view === "month" && 
               (date < new Date().setHours(0, 0, 0, 0) || date.getDay() === 0)
              }
              showNeighboringMonth={false}
            />

              <p className="bam-timezone">
                 Time zone: <b>{userTimeZone} ({currentTime})</b>
              </p>
            </div>

            <div className="bam-time-slots">
              <h3>{selectedDate ? selectedDate.toDateString() : "Select a Date"}</h3>
              <div className="bam-time-slots-grid">
                {selectedDate &&
                  availableTimeSlots.map((time, index) => (
                    <button
                      key={index}
                      className="bam-time-slot"
                      onClick={() => onTimeChange(time)}
                    >
                      {time}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Form Section */}
        {showForm && (
          <div className="bam-form">
            <h3>Enter Details</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Guest Emails */}
              {guests.map((guest, index) => (
                <div key={index}>
                  <label>Guest Email {index + 1}</label>
                  <input
                    type="email"
                    value={guest}
                    onChange={(e) => handleGuestEmailChange(index, e.target.value)}
                    required
                  />
                </div>
              ))}
              {guests.length < 2 && (
                <button type="button" onClick={handleAddGuest}>
                  Add Guest
                </button>
              )}

              {/* Location Options */}
              <div>
                <label>Location</label>
                <div className="location-container">
                  <div className="location-item">
                    <input
                      type="radio"
                      id="zoom"
                      name="location"
                      value="Zoom"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="zoom">Zoom</label>
                  </div>
                  <div className="location-item">
                    <input
                      type="radio"
                      id="googleMeet"
                      name="location"
                      value="Google Meet"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="googleMeet">Google Meet</label>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <label htmlFor="services">Services you require</label>
                <select
                  id="services"
                  name="services"
                  multiple
                  onChange={handleServiceChange}
                >
                  {[
                    "AI/ML Development",
                    "Web Application Development",
                    "Mobile Application Development",
                    "Hire Dedicated Developers",
                    "MVP Development",
                    "DevOps Consulting",
                    "UI/UX Design",
                    "Software Testing and QA",
                    "Front-end Development",
                    "Backend Development",
                    "eCommerce Development",
                    "Other",
                  ].map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>
                  Anything you want to share that can help us make the meeting
                  productive
                </label>
                <textarea
                  rows="4"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Schedule Event</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bam;
