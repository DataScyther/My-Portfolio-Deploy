export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-8 bg-background">
      <h2 className="text-center gradient-text text-4xl font-bold mb-12">
        Say Hi! and tell me about your idea
      </h2>
      <div className="max-w-2xl mx-auto glass-card p-8 rounded-xl">
        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="form-input w-full rounded-lg p-3 bg-muted text-white" />
          <input type="email" placeholder="Your Email" className="form-input w-full rounded-lg p-3 bg-muted text-white" />
          <input type="text" placeholder="Company" className="form-input w-full rounded-lg p-3 bg-muted text-white" />
          <textarea placeholder="Your Message" rows="5" className="form-input w-full rounded-lg p-3 bg-muted text-white"></textarea>
          <button type="submit" className="gradient-button px-8 py-3 rounded-lg text-white font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}