import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionCount, setSubmissionCount] = useState(0);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formState.message.trim()) newErrors.message = 'Message note is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setStatus('loading');

    // Artificial delay to simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // For now, we prevent actual submission and indicate it's not connected
    // This meets the user's requirement to not fake success and show it's not connected.
    setStatus('error');
    setSubmissionCount(prev => prev + 1);
  };

  if (status === 'success') {
    return (
      <div 
        id="contact-success-state"
        className="bg-[#F4F1EA] border border-[#D8D3C8] p-8 sm:p-12 text-center space-y-4"
      >
        <CheckCircle2 className="w-10 h-10 mx-auto text-[#7C8B78]" />
        <h4 className="font-display text-2xl text-[#171717]">Dispatch Transmitted</h4>
        <p className="text-sm text-[#77736B] font-sans max-w-sm mx-auto">
          Thank you for reaching out. I will review your message and reply to your email address promptly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-xs font-mono uppercase tracking-widest text-[#C65A3A] hover:underline pt-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="border border-[#D8D3C8] bg-[#FAF8F4] p-8 sm:p-10">
      <form 
        id="contact-form-component"
        onSubmit={handleSubmit} 
        className="space-y-6"
      >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="meta-tag text-[#77736B] block">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            placeholder="e.g. Jordan Miller"
            className={`w-full px-4 py-3 bg-[#F4F1EA] border ${
              errors.name ? 'border-[#C65A3A]' : 'border-[#D8D3C8]'
            } text-[#171717] placeholder-[#9E998E] text-sm focus:outline-none focus:border-[#171717] transition-colors`}
          />
          {errors.name && <p className="text-[10px] text-[#C65A3A] uppercase tracking-wider">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="meta-tag text-[#77736B] block">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            placeholder="jordan@domain.com"
            className={`w-full px-4 py-3 bg-[#F4F1EA] border ${
              errors.email ? 'border-[#C65A3A]' : 'border-[#D8D3C8]'
            } text-[#171717] placeholder-[#9E998E] text-sm focus:outline-none focus:border-[#171717] transition-colors`}
          />
          {errors.email && <p className="text-[10px] text-[#C65A3A] uppercase tracking-wider">{errors.email}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="meta-tag text-[#77736B] block">
          Subject / Focus
        </label>
        <input
          type="text"
          id="subject"
          value={formState.subject}
          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
          placeholder="Project Inquiry / Engineering Role"
          className="w-full px-4 py-3 bg-[#F4F1EA] border border-[#D8D3C8] text-[#171717] placeholder-[#9E998E] text-sm focus:outline-none focus:border-[#171717] transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="meta-tag text-[#77736B] block">
          Message Note *
        </label>
        <textarea
          id="message"
          rows={4}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          placeholder="Please share details about your inquiry or role..."
          className={`w-full px-4 py-3 bg-[#F4F1EA] border ${
            errors.message ? 'border-[#C65A3A]' : 'border-[#D8D3C8]'
          } text-[#171717] placeholder-[#9E998E] text-sm focus:outline-none focus:border-[#171717] transition-colors resize-none`}
        />
        {errors.message && <p className="text-[10px] text-[#C65A3A] uppercase tracking-wider">{errors.message}</p>}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <button
          type="submit"
          disabled={status === 'loading'}
          data-cursor="TRANSMIT"
          className="btn-editorial-primary w-full sm:w-auto px-8 py-3.5 text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-wait transition-all"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Transmitting...</span>
            </>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>Send Dispatch</span>
            </>
          )}
        </button>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-[#C65A3A] animate-in fade-in slide-in-from-left-2 duration-300">
            <AlertCircle className="w-4 h-4" />
            <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
              Interface Offline — Deployment in Progress
            </span>
          </div>
        )}
      </div>

      {status === 'error' && (
        <p className="text-[11px] text-[#77736B] font-sans italic">
          Note: The contact system is currently in development mode and not connected to an email server. 
          Please reach out directly via LinkedIn or GitHub in the meantime.
        </p>
      )}
    </form>
    </div>
  );
};
