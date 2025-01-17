import React from "react"
import img1 from '../../assets/img/airplane.png'

const UI = ()=>{
    return(
        <section className="p-4 lg:p-8 dark:text-gray-800">
        <div className="container mx-auto space-y-12">
            {/* left */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                <img src="https://i.pinimg.com/736x/8c/c9/48/8cc94830f551ed8ca045a0db3eb73475.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                    <h3 className="text-3xl font-bold">Custom Web Application Development</h3>
                    <div>
                       <p className="my-6 dark:text-gray-600">
                            We build custom web application designed to address your specific business requirement.Our solution are robust, flexible, and scalable, ensuring they grow with your business
                        </p>
                    </div>
                </div>
            </div>
            {/* right */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img src="https://i.pinimg.com/736x/14/fd/fb/14fdfb9767fdae135fadbce6f1c6e24f.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                    <h3 className="text-3xl font-bold">E-Commerce Web Development</h3>
                    <p className="my-6 dark:text-gray-600">Empower your online store with intuitive, fast, and secure e-commerce platform. we integrate advanced features like payment gateways, inventory management and customer analytics for a seamless shoppng experience</p>
                </div>
            </div>
             {/* left */}
             <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                <img src="https://i.pinimg.com/736x/a2/12/3f/a2123f36517f03287cd911060c99989e.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                    <h3 className="text-3xl font-bold">API Integration and development</h3>
                    <div>
                       <p className="my-6 dark:text-gray-600">
                           Connect your web application seamlessly with third-party tools and services through our api integration solution. we also develop custom API's to enhance functionality and data exchange
                        </p>
                    </div>
                </div>
            </div>
              {/* right */}
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img src="https://i.pinimg.com/736x/5a/08/5d/5a085dffa839cb746a15478feb360337.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                    <h3 className="text-3xl font-bold">Responsive Web Application</h3>
                    <p className="my-6 dark:text-gray-600">Our Web application are designed to platform flawlessly across all devices and screen size, ensuring an optimal user experience for mobile, tablet, and desktop users</p>
                </div>
            </div>
             {/* left */}
             <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                <img src="https://i.pinimg.com/736x/b7/5a/f2/b75af2fceab0bc1b185cecc6482b92da.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                    <h3 className="text-3xl font-bold">Cloud-Based web Application</h3>
                    <div>
                       <p className="my-6 dark:text-gray-600">
                           Experience the flexibility and scalability of cloud computing. we develop cloud-based web application that are secured, efficient, and accessible from anywhere in the world
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default UI