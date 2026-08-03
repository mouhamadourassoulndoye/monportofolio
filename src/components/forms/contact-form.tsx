'use client';

// ============================================================
// Contact Form — Portfolio Mouhamed Ndoye
// ============================================================

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_c32usde';
const EMAILJS_TEMPLATE_ID = 'template_uvd1ws5';
const EMAILJS_PUBLIC_KEY = 'qKjWwwtSuI8FoKJ5J';

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
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

  if (status === 'error') {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 mb-4">
          <AlertCircle className="h-8 w-8 text-red-500" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Erreur d&apos;envoi
        </h3>
        <p className="text-sm text-muted-foreground">
          Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      ref={formRef}
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
          <option value="Collaboration">Collaboration</option>
          <option value="Recrutement">Recrutement</option>
          <option value="Recherche / Doctorat">Recherche / Doctorat</option>
          <option value="Projet">Projet</option>
          <option value="Autre">Autre</option>
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
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 rounded-xl bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Envoyer le message
            </>
          )}
        </button>
      </motion.div>
    </motion.form>
  );
}
