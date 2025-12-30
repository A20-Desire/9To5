"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function InteriorDesignPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white font-sans">
      {/* Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between border-b border-gray-800">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center">
            <span className="font-bold text-white text-lg">DHI</span>
          </div>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex space-x-8 text-sm">
          <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition">Projects</Link>
          <Link href="#studio" className="text-gray-300 hover:text-white transition">Studio</Link>
          <Link href="#clients" className="text-gray-300 hover:text-white transition">Our Clients</Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition">Contact</Link>
          <Link href="#blog" className="text-gray-300 hover:text-white transition">Blog</Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          <button className="px-5 py-2 border border-teal-500 text-teal-400 rounded-md hover:bg-teal-500/10 transition text-sm">
            Sign Up
          </button>
          <button className="px-5 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-md hover:opacity-90 transition text-sm">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a2e] to-[#0f2419]">
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        {/* Floating Chair Left */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-48 h-48 opacity-80 z-10 hidden lg:block">
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl shadow-2xl transform -rotate-12"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-zentry uppercase tracking-wide font-bold text-5xl md:text-7xl leading-tight mb-6">
              Transform Your Space Into
              <span className="block text-teal-400">A Living Masterpiece</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mb-8">
              Experience the art of luxurious interior design where every detail tells a story of elegance, 
              comfort, and timeless sophistication. Let us craft spaces that inspire.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="studio">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div>
              <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase">About Us</span>
              <h2 className="font-zentry uppercase tracking-wide font-bold text-4xl md:text-5xl mt-4 mb-6">
                Creating Spaces That Reflect Your Soul
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                For over a decade, we&apos;ve been transforming ordinary spaces into extraordinary experiences. 
                Our team of award-winning designers combines artistic vision with practical functionality 
                to deliver interiors that exceed expectations.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700">
                <div className="text-4xl font-bold text-teal-400 mb-2">255+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700">
                <div className="text-4xl font-bold text-teal-400 mb-2">255+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700">
                <div className="text-4xl font-bold text-teal-400 mb-2">255+</div>
                <div className="text-gray-400 text-sm">Design Awards</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700">
                <div className="text-4xl font-bold text-teal-400 mb-2">255+</div>
                <div className="text-gray-400 text-sm">Team Members</div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full hover:opacity-90 transition shadow-lg shadow-teal-500/30 text-lg font-medium">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="relative">
            {/* Circular Badge */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 z-30 w-24 h-24 hidden lg:block">
              <div className="w-full h-full border-2 border-teal-400 rounded-full flex items-center justify-center bg-gray-900 animate-spin-slow">
                <div className="text-xs text-center font-semibold">
                  <div className="text-teal-400">AWARD</div>
                  <div className="text-white">WINNING</div>
                </div>
              </div>
            </div>

            {/* Image Masonry Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1 - Tall */}
              <div className="row-span-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl h-96 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Image 2 */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl h-44 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Image 3 */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl h-44 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Image 4 - Wide */}
              <div className="col-span-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl h-48 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            {/* Floating Chair Left */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 z-10 hidden lg:block">
              <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl shadow-2xl transform rotate-6"></div>
            </div>

            {/* Main Image */}
            <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl h-[500px] overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Text & Steps */}
          <div className="space-y-8">
            <div>
              <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase">How It Works</span>
              <h2 className="font-zentry uppercase tracking-wide font-bold text-4xl md:text-5xl mt-4 mb-6">
                Your Journey to Beautiful Spaces
              </h2>
            </div>

            {/* Steps List */}
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-teal-400 transition">Initial Consultation</h3>
                  <p className="text-gray-400">We meet to discuss your vision, preferences, and budget to create a personalized design plan.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-teal-400 transition">Design Development</h3>
                  <p className="text-gray-400">Our team creates detailed 3D renderings and mood boards to bring your vision to life.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-teal-400 transition">Material Selection</h3>
                  <p className="text-gray-400">Choose from our curated collection of premium materials, furniture, and finishes.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-teal-400 transition">Project Execution</h3>
                  <p className="text-gray-400">We manage every detail from procurement to installation, ensuring flawless execution.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full hover:opacity-90 transition shadow-lg shadow-teal-500/30 text-lg font-medium">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Floating Chair Right */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-48 h-48 z-10 hidden xl:block">
          <div className="w-full h-full bg-gradient-to-br from-teal-400 to-emerald-500 rounded-3xl shadow-2xl transform -rotate-12"></div>
        </div>
      </section>

      {/* Featured Projects Showcase / Bottom Gallery */}
      <section className="relative py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]" id="projects">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase">Portfolio</span>
            <h2 className="font-zentry uppercase tracking-wide font-bold text-4xl md:text-5xl mt-4 mb-6">
              Our Recent Masterpieces
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Navigation Controls */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex flex-col space-y-4">
              <button 
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                className="w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center backdrop-blur-sm transition"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setCurrentSlide(Math.min(2, currentSlide + 1))}
                className="w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center backdrop-blur-sm transition"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Main Showcase Image */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl h-[600px] overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-32 h-32 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500 text-lg">Modern Living Room Design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="max-w-7xl mx-auto mt-8 flex items-center justify-between px-4">
            <button className="px-6 py-3 bg-teal-500/20 border border-teal-500 text-teal-400 rounded-full hover:bg-teal-500/30 transition flex items-center space-x-2">
              <span>Visit Site</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    currentSlide === index ? 'bg-teal-400 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <div className="w-32"></div> {/* Spacer for balance */}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center" id="contact">
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-3xl p-12 md:p-16">
          <h2 className="font-zentry uppercase tracking-wide font-bold text-4xl md:text-5xl mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss your project and create something extraordinary together. 
            Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full hover:opacity-90 transition shadow-lg shadow-teal-500/30 text-lg font-medium">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-full hover:bg-gray-800 transition text-lg font-medium">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold text-white text-lg">DHI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Creating timeless interiors that inspire and delight.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="#projects" className="hover:text-white transition">Projects</Link></li>
                <li><Link href="#studio" className="hover:text-white transition">Studio</Link></li>
                <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition">Residential Design</Link></li>
                <li><Link href="#" className="hover:text-white transition">Commercial Design</Link></li>
                <li><Link href="#" className="hover:text-white transition">Consultation</Link></li>
                <li><Link href="#" className="hover:text-white transition">3D Visualization</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition">Instagram</Link></li>
                <li><Link href="#" className="hover:text-white transition">Pinterest</Link></li>
                <li><Link href="#" className="hover:text-white transition">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-white transition">Facebook</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 DHI Interior Design. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
