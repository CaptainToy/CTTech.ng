import React from "react";
import './footer.css'
const Footer = () => {
    return (
        <div style={{ backgroundColor: "#F0F8FF" }}>
            <footer className="dark:text-gray-900">
                <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
                    <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="flex flex-col justify-center pt-6 lg:pt-0">
                        <div className="flex justify-center space-x-4">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                title="Instagram"
                                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-green-600">
                                <i className="bi bi-instagram icon-color-Instagram"></i>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                title="Twitter"
                                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-green-600">
                                <i className="bi bi-twitter icon-color-Twitter"></i>
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                title="Facebook"
                                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-green-600 icon-color-Facebook">
                                <i className="bi bi-facebook icon-color-Facebook"></i>
                            </a>
                            <a
                                 rel="noopener noreferrer"
                                 href="#"
                                 title="Gmail"
                                 className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-green-600 icon-color-Facebook">
                                <i className="bi bi-envelope text-black"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
       </div>
    );
};

export default Footer;
