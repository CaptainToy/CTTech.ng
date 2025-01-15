import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "../../assets/logo/newlogo.png";
import "./Bam.css";
import ClientForm from "../loader/loader";

const Bam = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showModal, setShowModal] = useState(false);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const headerRef = useRef(null);
  const calendarRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    gsap.fromTo(calendarRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, delay: 0.3 });
    gsap.fromTo(footerRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.6 });
  }, []);

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    if (currentMonth === 0) setCurrentYear(currentYear - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    if (currentMonth === 11) setCurrentYear(currentYear + 1);
  };

  const handleDateClick = (date) => {
    if (selectedTime) {
      setSelectedDate(date);
      const currentDate = new Date();
      const [hour, minute] = selectedTime.split(":").map((num) => parseInt(num, 10));
      const selectedDateTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), date, hour, minute);
      if (!isNaN(selectedDateTime)) sendDataToApi(selectedDateTime);
    } else {
      console.error("Please select a time first.");
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const sendDataToApi = async (selectedDateTime) => {
    try {
      const formData = new FormData();
      formData.append("access_key", "8ab6f305-eefb-492a-ab31-82f8466f99ea");
      formData.append("selectedDateTime", selectedDateTime.toISOString());
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      console.log("Response from API:", data);
    } catch (error) {
      console.error("Error sending data to API:", error);
    }
  };

  const handleNextStep = () => {
    if (selectedDate && selectedTime) setShowModal(true);
  };

  return (
    <div className="scheduler-container">
      <div ref={headerRef} className="scheduler-header">
        <img src={Logo} alt="Logo" />
        <h1>Schedule a Meeting</h1>
        <p>10-30 minutes</p>
      </div>

      <div ref={calendarRef} className="scheduler-body">
        <div className="calendar">
          <div className="calendar-header">
            <button onClick={handlePrevMonth}>&lt;</button>
            <span>
              {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })} {currentYear}
            </span>
            <button onClick={handleNextMonth}>&gt;</button>
          </div>
          <div className="calendar-grid">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="calendar-day-header">
                {day}
              </div>
            ))}
            {Array(firstDayOfMonth).fill(null).map((_, index) => (
              <div key={index} className="calendar-empty"></div>
            ))}
            {Array(daysInMonth).fill(null).map((_, index) => (
              <div
                key={index + 1}
                className={`calendar-date ${selectedDate === index + 1 ? "selected" : ""}`}
                onClick={() => handleDateClick(index + 1)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="time-slots">
          {["9:00", "10:00", "10:30", "11:00", "11:30", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"].map((time) => (
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
        <button className="next-step-btn" disabled={!selectedDate || !selectedTime} onClick={handleNextStep}>
          Next Step
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <ClientForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Bam;
