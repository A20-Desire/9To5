"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GradientBackground from '../components/GradientBackground';
import ZentryHero from '../components/ZentryHero';
import ThreePillarsSection from '../components/ThreePillarsSection';

// Icons
const IconHanger = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
);

const IconCompass = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
  </svg>
);

const IconClipboard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/20 py-4">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg className="h-6 w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-base text-white/70">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function LandingPage() {
  return (
    <div className="relative min-h-screen text-white">
      <GradientBackground />
      <div className="relative z-10">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo: If you have the image file, save it as public/logo.png and uncomment the Image component below */}
        {/* <Image src="/logo.png" alt="9To5 Logo" width={120} height={40} /> */}
        <div className="flex flex-col items-start leading-none select-none cursor-pointer">
          <div className="font-bold text-3xl tracking-tight flex items-center">
            <span className="text-white">9</span>
            <span className="text-brand-green">To5</span>
          </div>
          <span className="text-[0.65rem] tracking-[0.2em] text-brand-green font-bold uppercase">Consultancy</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="#" className="text-white/80 hover:text-white">About us</Link>
          <Link href="#" className="text-white/80 hover:text-white">Services</Link>
          <Link href="#" className="text-white/80 hover:text-white">Process</Link>
          <Link href="#" className="text-white/80 hover:text-white">Contact</Link>
        </div>
        <button className="bg-brand-dark-green text-white px-6 py-2 rounded-full hover:opacity-90 transition">
          Join
        </button>
      </nav>

      {/* Hero Section */}
      <ZentryHero />

      {/* Three Pillars Section - Animated Zentry Style */}
      <ThreePillarsSection />

      {/* What Sets Us Apart */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <span className="text-sm font-bold tracking-wider text-white/70 uppercase mb-2 block">Why Us</span>
        <h2 className="text-3xl md:text-4xl font-zentry uppercase tracking-wide font-bold mb-6">What sets us apart</h2>
        <p className="max-w-2xl mx-auto text-white/80 mb-10">
          We don't just change how you look; we transform how you live. Our integrated approach ensures consistency across all facets of your life.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="border border-white/30 text-white/90 px-6 py-2 rounded-md hover:bg-white/5 transition">
            Our Process
          </button>
          <button className="text-white/90 font-medium px-6 py-2 hover:text-brand-dark-green transition">
            Gallery &rarr;
          </button>
        </div>
      </section>

      {/* Feature Section A */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-bold tracking-wider text-white/70 uppercase mb-2 block">Design</span>
            <h2 className="text-3xl md:text-4xl font-zentry uppercase tracking-wide font-bold mb-6">Interiors in your life</h2>
            <p className="text-white/80 mb-8">
              Your environment shapes your mindset. We design interiors that are not only visually stunning but also conducive to your lifestyle and well-being.
            </p>
            <div className="flex space-x-4">
              <button className="border border-white/30 text-white/90 px-6 py-2 rounded-md hover:bg-white/5 transition">
                View Projects
              </button>
              <button className="text-white/90 font-medium px-6 py-2 hover:text-brand-dark-green transition">
                Learn more &rarr;
              </button>
            </div>
          </div>
          <div className="bg-white/10 h-[400px] rounded-lg flex items-center justify-center">
             <svg className="w-20 h-20 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
          </div>
        </div>
      </section>

      {/* Feature Section B */}
      <section className="bg-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
               <div className="w-12 h-12 bg-white/20 rounded-full mb-6 flex items-center justify-center">
                  <span className="font-zentry font-bold text-xl">9</span>
               </div>
              <h2 className="text-3xl md:text-4xl font-zentry uppercase tracking-wide font-bold mb-6">Built on integrity and attention</h2>
              <p className="text-white/80 mb-8">
                We believe in transparent processes and meticulous attention to detail. Our team is dedicated to understanding your unique needs and delivering beyond expectations.
              </p>
              <div className="flex space-x-4">
                <button className="border border-white/30 text-white/90 px-6 py-2 rounded-md hover:bg-white hover:text-gray-900 transition">
                  About Us
                </button>
                <button className="text-white/90 font-medium px-6 py-2 hover:text-brand-dark-green transition">
                  Meet the Team &rarr;
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-white/20 h-[400px] rounded-lg flex items-center justify-center">
               <svg className="w-20 h-20 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-wider text-white/70 uppercase mb-2 block">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-zentry uppercase tracking-wide font-bold mb-6">Choose your path</h2>
          <p className="text-white/80 mb-8">Select the package that best fits your transformation goals.</p>
          
          <div className="inline-flex bg-white/10 p-1 rounded-lg">
            <button className="px-6 py-2 bg-white shadow-sm rounded-md text-sm font-medium text-gray-900">Monthly</button>
            <button className="px-6 py-2 text-sm font-medium text-white/70 hover:text-white">Yearly</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <h3 className="font-bold text-lg mb-2">Style Consultation</h3>
            <p className="text-white/70 text-sm mb-6">Perfect for a wardrobe refresh.</p>
            <div className="text-4xl font-bold mb-6">$299</div>
            <button className="w-full bg-brand-dark-green text-white py-2 rounded-md hover:opacity-90 transition mb-8">Get started</button>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center"><svg className="w-4 h-4 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Wardrobe Audit</li>
              <li className="flex items-center"><svg className="w-4 h-4 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Personal Shopping (2 hrs)</li>
              <li className="flex items-center"><svg className="w-4 h-4 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Style Guide</li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="bg-white/5 p-8 rounded-xl border border-white/10 relative">
            <h3 className="font-bold text-lg mb-2">Full Transformation</h3>
            <p className="text-white/70 text-sm mb-6">Complete overhaul of style & space.</p>
            <div className="text-4xl font-bold mb-6">$599</div>
            <button className="w-full bg-brand-dark-green text-white py-2 rounded-md hover:opacity-90 transition mb-8">Get started</button>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center"><svg className="w-4 h-4 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Everything in Basic</li>
              <li className="flex items-center"><svg className="w-4 h-4 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Room Redesign (1 Room)</li>
              <li className="flex items-center"><svg className="w-4 h-4 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Color Consultation</li>
              <li className="flex items-center"><svg className="w-4 h-4 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Priority Support</li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <h3 className="font-bold text-lg mb-2">Lifestyle Management</h3>
            <p className="text-white/70 text-sm mb-6">Ongoing support for all needs.</p>
            <div className="text-4xl font-bold mb-6">$1,299</div>
            <button className="w-full bg-brand-dark-green text-white py-2 rounded-md hover:opacity-90 transition mb-8">Get started</button>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center"><svg className="w-4 h-4 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Full Home Consultation</li>
              <li className="flex items-center"><svg className="w-4 h-4 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Event Planning Service</li>
              <li className="flex items-center"><svg className="w-4 h-4 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Seasonal Wardrobe Updates</li>
              <li className="flex items-center"><svg className="w-4 h-4 text-brand-green mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> 24/7 Concierge</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="mb-8 flex justify-center">
           {/* Testimonial logo placeholder */}
           <span className="font-bold text-xl flex items-center gap-2">
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
             Testimonial
           </span>
        </div>
        <blockquote className="text-2xl md:text-3xl font-sans italic font-light leading-relaxed mb-10">
          "Working with 9TO5 has been a game changer. They transformed not just my wardrobe, but my entire outlook on personal branding."
        </blockquote>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-white/30 rounded-full mb-3"></div>
          <div className="font-bold">Sarah Jenkins</div>
          <div className="text-sm text-white/70">CEO, TechStart</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-zentry uppercase tracking-wide font-bold mb-6">Ready to begin your<br />transformation?</h2>
        <p className="text-white/80 mb-10">Schedule your initial consultation today and take the first step.</p>
        <div className="flex justify-center space-x-4 mb-16">
          <button className="bg-brand-dark-green text-white px-8 py-3 rounded-md hover:opacity-90 transition">
            Get Started
          </button>
          <button className="border border-white/30 text-white/90 px-8 py-3 rounded-md hover:bg-white/5 transition">
            Contact Us
          </button>
        </div>
        <div className="w-full h-[400px] bg-white/20 rounded-lg flex items-center justify-center">
           <svg className="w-24 h-24 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-zentry uppercase tracking-wide font-bold mb-4">Questions</h2>
            <p className="text-white/80">Common inquiries about our services.</p>
          </div>
          
          <div className="space-y-2">
            <FAQItem 
              question="How long does a typical consultation take?" 
              answer="Our initial consultation usually lasts about 60-90 minutes, where we discuss your goals, preferences, and assess your current needs." 
            />
            <FAQItem 
              question="Do you offer virtual services?" 
              answer="Yes, we offer comprehensive virtual styling and interior design consultations for clients worldwide." 
            />
            <FAQItem 
              question="What is your pricing structure?" 
              answer="We offer both package-based pricing (as seen above) and hourly rates for specific ad-hoc services." 
            />
            <FAQItem 
              question="Can I combine different services?" 
              answer="Absolutely. We specialize in creating bespoke packages that combine wardrobe, interior, and event services." 
            />
            <FAQItem 
              question="How do I get started?" 
              answer="Simply click the 'Get Started' button to schedule your initial discovery call." 
            />
          </div>

          <div className="text-center mt-12">
            <h3 className="font-bold text-lg mb-2">Still have questions?</h3>
            <p className="text-white/80 mb-6">We're here to help.</p>
            <button className="border border-white/30 text-white/90 px-6 py-2 rounded-md hover:bg-white hover:text-gray-900 transition">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-zentry uppercase tracking-wide font-bold mb-4">Get style insights delivered</h2>
        <p className="text-white/80 mb-8">Join our newsletter for weekly tips on fashion and living.</p>
        <div className="flex max-w-md mx-auto gap-4 mb-16">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 border border-white/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-dark-green"
          />
          <button className="bg-brand-dark-green text-white px-6 py-2 rounded-md hover:opacity-90 transition">
            Subscribe
          </button>
        </div>
        <div className="w-full h-[300px] bg-white/20 rounded-lg flex items-center justify-center">
           <svg className="w-20 h-20 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/20">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-bold text-xl mb-4">9TO5</div>
            <p className="text-white/80 text-sm mb-4">
              Elevating lifestyles through integrated design and style consultancy.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              <div className="w-6 h-6 bg-white/20 rounded-full"></div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Press</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#">Image Consultancy</Link></li>
              <li><Link href="#">Interior Design</Link></li>
              <li><Link href="#">Event Planning</Link></li>
              <li><Link href="#">Corporate</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
              <li><Link href="#">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70 pt-8 border-t border-white/10">
          <div>&copy; 2025 9TO5 Consultancy. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
