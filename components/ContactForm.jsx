"use client";

const ContactForm = () => {
  return (
    <form className="mt-6 flex flex-col gap-4 text-left">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-green transition"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-green transition"
      />
      <input
        type="tel"
        placeholder="Phone / WhatsApp Number"
        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-green transition"
      />
      <select
        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white/70 focus:outline-none focus:border-brand-green transition"
        defaultValue=""
      >
        <option value="" disabled>What is your budget?</option>
        <option value="under-250">Under 250</option>
        <option value="250-500">250 - 500</option>
        <option value="500-1000">500 - 1000</option>
        <option value="1000-2500">1000 - 2500</option>
        <option value="2500-plus">2500+</option>
      </select>
      <textarea
        rows={4}
        placeholder="Tell us a little about your style goals..."
        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-green transition resize-none"
      />
      <button
        type="submit"
        className="w-full py-4 rounded-full bg-brand-dark-green text-white font-semibold hover:opacity-90 transition text-base"
      >
        Submit Request
      </button>
    </form>
  );
};

export default ContactForm;
