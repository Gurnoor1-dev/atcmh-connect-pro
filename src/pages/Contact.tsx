import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_trawh95",
        "template_hsvzqhd",
        formRef.current,
        "VoZtn40X1pZcCi7-I"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          formRef.current?.reset();
        },
        () => {
          alert("Failed to send message");
          setLoading(false);
        }
      );
  };

  return (
    <section className="min-h-screen pt-28 px-6 flex items-center justify-center">
      <div className="w-full max-w-2xl">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Have questions? Send us a message.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-xl p-6 space-y-5 shadow-xl"
        >

          {/* Name */}
          <div>
            <label className="text-sm mb-1 block">Name</label>
            <Input name="name" placeholder="Your name" required />
          </div>

          {/* IFC Account */}
          <div>
            <label className="text-sm mb-1 block">IFC Account</label>
            <Input name="ifc_account" placeholder="Your IFC username" />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm mb-1 block">Email</label>
            <Input type="email" name="email" placeholder="you@example.com" required />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm mb-1 block">Message</label>
            <textarea
              name="message"
              required
              placeholder="Write your message..."
              className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success */}
          {success && (
            <p className="text-green-500 text-sm text-center">
              Message sent successfully!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
