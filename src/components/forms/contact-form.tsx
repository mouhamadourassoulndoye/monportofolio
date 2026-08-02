'use client';

// ============================================================
// Contact Form — Portfolio Mouhamed Ndoye
// ============================================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mb-4">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Message envoyé !
        </h3>
        <p className="text-sm text-muted-foreground">
          Merci pour votre message. Je vous répondrai dans les plus brefs délais.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div variants={fadeInUp} className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-foreground"
          >
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/20 focus:outline-none focus:ring-2 focus:ring-foreground/5 transition-all duration-200 backdrop-blur-sm"
            placeholder="Votre nom"
          />
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/20 focus:outline-none focus:ring-2 focus:ring-foreground/5 transition-all duration-200 backdrop-blur-sm"
            placeholder="votre@email.com"
          />
        </motion.div>
      </div>

      <motion.div variants={fadeInUp} className="space-y-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium text-foreground"
        >
          Sujet
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm text-foreground focus:border-foreground/20 focus:outline-none focus:ring-2 focus:ring-foreground/5 transition-all duration-200 backdrop-blur-sm"
        >
          <option value="">Sélectionner un sujet</option>
          <option value="collaboration">Collaboration</option>
          <option value="recrutement">Recrutement</option>
          <option value="recherche">Recherche / Doctorat</option>
          <option value="projet">Projet</option>
          <option value="autre">Autre</option>
        </select>
      </motion.div>

      <motion.div variants={fadeInUp} className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/20 focus:outline-none focus:ring-2 focus:ring-foreground/5 transition-all duration-200 backdrop-blur-sm resize-none"
          placeholder="Votre message..."
        />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
        >
          <Send className="h-4 w-4" />
          Envoyer le message
        </button>
      </motion.div>
    </motion.form>
  );
}
