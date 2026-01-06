"use client";
import React from "react";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { ChevronLeft, ChevronRight, MapPin, MessageSquare, Phone, Star } from "lucide-react";
export default function ArchitectsPage() {

   return (
      <div className="min-h-screen bg-white">
         <Header activePage="architects" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {/* Left Column */}
               <div className="lg:col-span-2 space-y-6">
                  {/* Profile Header */}
                  <div className="bg-white rounded-lg shadow p-6">
                     <div className="flex items-start space-x-4">
                        <img
                           src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                           alt="Profile"
                           className="w-20 h-20 rounded-full"
                        />
                        <div className="flex-1">
                           <div className="flex items-center space-x-2">
                              <h2 className="text-2xl font-bold">Monkey D. Luffy</h2>
                              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                 <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                           </div>
                           <div className="flex items-center space-x-2 mt-2">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-semibold">5.0</span>
                           </div>
                           <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                 <MapPin className="w-4 h-4" />
                                 <span>Jaipur, Rajasthan</span>
                              </div>
                              <span>English, Hindi</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* About Us */}
                  <div className="bg-white rounded-lg shadow p-6">
                     <h3 className="text-xl font-bold mb-4">About Us</h3>
                     <p className="text-gray-700 leading-relaxed">
                        Hi, I am Alexandru and I am 25 years old. I have 8 years experience in Web Development. I am web developer with experience in HTML, JavaScript, CSS, PHP, NodeJS, EJS, SQL, and jQuery. I specialize in building dynamic and responsive web applications, ensuring seamless user experiences and efficient backend functionality. Passionate about coding, I enjoy solving complex problems and continuously learning new technologies to enhance my skills. I worked in a lots of projects, for the most part in gambling websites, online casino development.
                     </p>
                  </div>

                  {/* Skills */}
                  <div className="bg-white rounded-lg shadow p-6">
                     <h3 className="text-xl font-bold mb-4">Skills</h3>
                     <div className="flex flex-wrap gap-2">
                        {['User Experience Design', 'UX Wireframe', 'UI Designer', 'User Experience Design', 'UX Wireframe'].map((skill, index) => (
                           <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                              {skill}
                           </span>
                        ))}
                     </div>
                  </div>

                  {/* Portfolio */}
                  <div className="bg-white rounded-lg shadow p-6">
                     <h3 className="text-xl font-bold mb-4">Portfolio</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2].map((item) => (
                           <div key={item} className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-8 aspect-video flex items-center justify-center">
                              <span className="text-5xl font-bold text-green-400">forest</span>
                           </div>
                        ))}
                     </div>
                     <p className="text-sm text-gray-600 mt-2">Portfolio as an Architect</p>
                  </div>

                  {/* Gallery */}
                  <div className="bg-white rounded-lg shadow p-6">
                     <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold">Gallery</h3>
                        <div className="flex space-x-2">
                           <button className="p-2 rounded-full border hover:bg-gray-50">
                              <ChevronLeft className="w-5 h-5" />
                           </button>
                           <button className="p-2 rounded-full border hover:bg-gray-50">
                              <ChevronRight className="w-5 h-5" />
                           </button>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((item) => (
                           <div key={item} className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-6 aspect-square flex items-center justify-center">
                              <span className="text-3xl font-bold text-green-400">forest</span>
                           </div>
                        ))}
                     </div>
                     <p className="text-sm text-gray-600 mt-2">Portfolio as an Architect</p>
                  </div>
               </div>

               {/* Right Column - Contact Card */}
               <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow p-6 sticky top-8">
                     <div className="flex items-center space-x-4 mb-6">
                        <img
                           src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                           alt="Gagan Kumar"
                           className="w-12 h-12 rounded-full"
                        />
                        <div>
                           <h4 className="font-bold">Gagan Kumar</h4>
                           <p className="text-sm text-gray-600">Experienced Interior Designer</p>
                        </div>
                     </div>

                     <p className="text-sm text-gray-600 mb-4">
                        Average response time: <span className="font-semibold">2 hours</span>
                     </p>

                     <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                           <div className="flex items-center justify-center space-x-1 mb-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-bold">5.0</span>
                           </div>
                           <p className="text-xs text-gray-600">Rating</p>
                        </div>
                        <div className="text-center">
                           <p className="font-bold">₹20/min</p>
                           <p className="text-xs text-gray-600">Price</p>
                        </div>
                        <div className="text-center">
                           <p className="font-bold">2+yrs</p>
                           <p className="text-xs text-gray-600">Experience</p>
                        </div>
                     </div>

                     <p className="text-center font-semibold mb-4">
                        ₹31,500 / 100 Sq. Yards (Approx.)
                     </p>

                     <div className="space-y-3">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2">
                           <MessageSquare className="w-5 h-5" />
                           <span>Chat</span>
                        </button>
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2">
                           <Phone className="w-5 h-5" />
                           <span>Call Expert</span>
                        </button>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
                           Contact me
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}