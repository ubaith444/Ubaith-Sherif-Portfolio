"use client";

import { Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  company: "",
  subject: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSuccess(false);
  }

  function validate() {
    const nextErrors: Partial<FormState> = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }

    if (form.message.trim().length < 20) {
      nextErrors.message = "Message should be at least 20 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 650));
    setLoading(false);
    setSuccess(true);
    setForm(initialState);
  }

  return (
    <form className="rounded-[8px] border border-zinc-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.045)] dark:border-white/10 dark:bg-white/[0.055] md:p-7" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          error={errors.fullName}
          label="Full Name"
          onChange={(value) => updateField("fullName", value)}
          placeholder="Your name"
          value={form.fullName}
        />
        <Field
          error={errors.email}
          label="Email"
          onChange={(value) => updateField("email", value)}
          placeholder="you@company.com"
          type="email"
          value={form.email}
        />
        <Field
          label="Company"
          onChange={(value) => updateField("company", value)}
          placeholder="Company or team"
          value={form.company}
        />
        <Field
          error={errors.subject}
          label="Subject"
          onChange={(value) => updateField("subject", value)}
          placeholder="Role, project, or collaboration"
          value={form.subject}
        />
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Message</span>
        <textarea
          className="mt-2 min-h-36 w-full rounded-[8px] border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-white/16 dark:bg-zinc-950 dark:text-white dark:focus:border-blue-300 dark:focus:ring-blue-400/10"
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Share the context, constraints, timeline, and what you need help with."
          value={form.message}
        />
        {errors.message ? <span className="mt-1 block text-xs font-medium text-red-600 dark:text-red-300">{errors.message}</span> : null}
      </label>
      <button
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[8px] border border-[#111827] bg-[#111827] px-5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-600 hover:bg-blue-600 hover:shadow-[0_12px_30px_rgba(37,99,235,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 dark:border-blue-400 dark:bg-blue-400 dark:text-zinc-950 dark:hover:border-blue-300 dark:hover:bg-blue-300"
        disabled={loading}
        type="submit"
      >
        <Send aria-hidden="true" size={16} />
        {loading ? "Preparing message..." : "Send Message"}
      </button>
      {success ? (
        <p className="mt-4 rounded-[8px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
          Message drafted successfully. Connect by email or LinkedIn for the fastest response.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  error,
  label,
  onChange,
  placeholder,
  type = "text",
  value
}: {
  error?: string;
  label: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  value: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{label}</span>
      <input
        className="mt-2 h-12 w-full rounded-[8px] border border-zinc-300 bg-white px-4 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 dark:border-white/16 dark:bg-zinc-950 dark:text-white dark:focus:border-blue-300 dark:focus:ring-blue-400/10"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error ? <span className="mt-1 block text-xs font-medium text-red-600 dark:text-red-300">{error}</span> : null}
    </label>
  );
}
