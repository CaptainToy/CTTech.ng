import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "../../assets/logo/newlogo.png";
import "./Bam.css";
import ClientForm from "../form/form";

const Bam = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const headerRef = useRef(null);
  const calendarRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Animate the header
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    // Animate the calendar
    gsap.fromTo(
      calendarRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.3 }
    );

    // Animate the footer
    gsap.fromTo(
      footerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.6 }
    );
  }, []);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const handleDateClick = (date) => {
    if (selectedTime) {
      setSelectedDate(date);
      gsap.fromTo(
        `.calendar-date.selected`,
        { scale: 1.1 },
        { scale: 1, duration: 0.3 }
      );

      // Log the selected date and time (for example, to console)
      const currentDate = new Date();

      // Ensure that selectedTime is properly formatted (e.g., "10:30" -> [10, 30])
      const [hour, minute] = selectedTime.split(":").map((num) => parseInt(num, 10));

      // Create a new Date object with the selected date and time
      const selectedDateTime = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        date,
        hour,
        minute
      );

      // Check if the selectedDateTime is valid
      if (isNaN(selectedDateTime)) {
        console.error("Invalid Date object:", selectedDateTime);
        return;
      }

      console.log("Selected Date and Time: ", selectedDateTime);

      // Send data to API (add your API request here)
      sendDataToApi(selectedDateTime);
    } else {
      console.log("Please select a time first.");
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    gsap.fromTo(
      `.time-slot.selected`,
      { backgroundColor: "#f0f8ff" },
      { backgroundColor: "#d0e8ff", duration: 0.5 }
    );
  };

  const sendDataToApi = (selectedDateTime) => {
    const formData = new FormData();
    formData.append("access_key", "8ab6f305-eefb-492a-ab31-82f8466f99ea");
    formData.append("selectedDateTime", selectedDateTime.toISOString());

    // Example of a POST request to your API
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from API:", data);
      })
      .catch((error) => {
        console.error("Error sending data to API:", error);
      });
  };

  const handleNextStep = () => {
    if (selectedDate && selectedTime) {
      setShowModal(true); // Show modal when "Next Step" is clicked
    }
  };

  return (
    <div className="scheduler-container">
      <div ref={headerRef} className="scheduler-header">
        <img src={Logo} alt="" />
        <h1>Schedule a Meeting</h1>
        <p>10-30 minutes</p>
      </div>

      <div ref={calendarRef} className="scheduler-body">
        {/* Calendar Section */}
        <div className="calendar">
          <div className="calendar-header">
            <button onClick={handlePrevMonth}>&lt;</button>
            <span>
              {new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "long",
              })}{" "}
              {currentYear}
            </span>
            <button onClick={handleNextMonth}>&gt;</button>
          </div>
          <div className="calendar-grid">
            {/* Days of the week */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="calendar-day-header">
                {day}
              </div>
            ))}
            {/* Empty slots for days before the first day */}
            {Array(firstDayOfMonth)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="calendar-empty"></div>
              ))}
            {/* Dates */}
            {Array(daysInMonth)
              .fill(null)
              .map((_, index) => {
                const date = index + 1;
                return (
                  <div
                    key={date}
                    className={`calendar-date ${
                      selectedDate === date ? "selected" : ""
                    }`}
                    onClick={() => handleDateClick(date)}
                  >
                    {date}
                  </div>
                );
              })}
          </div>
        </div>

        {/* Time Slots Section */}
        <div className="time-slots">
          {[
            "9:00",
            "10:00",
            "10:30",
            "11:00",
            "11:30",
            "12:00",
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
          ].map((time) => (
            <div
              key={time}
              className={`time-slot ${selectedTime === time ? "selected" : ""}`}
              onClick={() => handleTimeClick(time)}
            >
              {time}
            </div>
          ))}
        </div>
      </div>

      <div ref={footerRef} className="scheduler-footer">
        <button
          className="next-step-btn"
          disabled={!selectedDate || !selectedTime}
          onClick={handleNextStep}
        >
          Next Step
        </button>
      </div>

      {/* Modal Section */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <ClientForm />
            {/* <button onClick={() => setShowModal(false)}>Close</button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Bam;
