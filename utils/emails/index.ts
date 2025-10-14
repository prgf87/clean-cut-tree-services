'use server';

import { Resend } from 'resend';
import { contactReceivedMinify } from './templates/contactReceivedMinify';

const resend = new Resend(process.env.RESEND_API_KEY!);

type ActionResult = { ok: true } | { ok: false; error: string };

function fillTemplate(template: string, data: Record<string, string>) {
  return Object.entries(data).reduce((acc, [key, val]) => {
    // replace all occurrences of {{key}}
    return acc.replace(new RegExp(`{{\\s*${key}\\s*}}`, 'g'), val);
    // If your template never repeats keys, you could use a single replace, but global is safer.
  }, template);
}

export async function sendContactEmail(formData: {
  name?: string;
  email?: FormDataEntryValue | null;
  message?: FormDataEntryValue | null;
  phone?: FormDataEntryValue | null;
  service?: FormDataEntryValue | null;
}): Promise<ActionResult> {
  // const privateKey = process.env.CONTACT_FORM_KEY;
  // const formKey = (formData.get('formKey') ?? '').toString();
  // if (formKey !== privateKey) {
  //   return { ok: false, error: 'Invalid form key.' };
  // }

  try {
    console.log('Form Data: - ', formData);
    const name = formData.name?.toString().trim();
    const email = formData.email?.toString().trim();
    const message = formData.message?.toString().trim();
    const phone = formData.phone?.toString().trim() || 'Not provided';
    const service = formData.service?.toString().trim() || 'Not provided';

    if (!name || !email || !message) {
      return { ok: false, error: 'Please fill in all required fields.' };
    }

    // Prepare date bits for your placeholders
    const now = new Date();
    const date = now.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
    const year = String(now.getFullYear());

    // ⬇️ Use the minified HTML **string** and replace placeholders
    const html = fillTemplate(contactReceivedMinify, { name, date, year });

    // Send to customer
    await resend.emails.send({
      from: process.env.TEST_FROM_EMAIL!,
      to: email || '',
      subject: "We've received your enquiry — Clean Cut Tree Services",
      html,
    });

    // Internal notification (plain text)
    await resend.emails.send({
      from: process.env.TEST_FROM_EMAIL!,
      to: process.env.TEST_TO_INTERNAL!,
      subject: 'New enquiry received - Clean Cut Tree Services Website',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nService Required: ${service}\n\nMessage:\n${message}`,
    });

    return { ok: true };
  } catch (err) {
    console.error(err);
    return { ok: false, error: 'Something went wrong sending your message.' };
  }
}
