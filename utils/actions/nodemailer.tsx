'use server';

import { sendTestEmail } from '../emails';

// This file will used to define server actions for the application.

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  // const { sendContactEmail } = await import('@/utils/emails');
  // const res = await sendContactEmail(data);

  const res = await sendTestEmail();

  console.log('Email sent successfully:', res);

  return res;
}
