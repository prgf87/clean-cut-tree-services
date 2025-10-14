'use client';

import { sendContactEmail } from '@/utils/emails';
import { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

// const data = {
//   email: 'globalwebsystems.official@gmail.com',
//   name: 'Test Customer',
//   phone: 'Test Customer',
//   subject: 'Test Email Subject',
//   message: 'This is a test email message.',
//   htmlBody: 'This is a test email html body.',
//   textBody: 'This is a test email in plain text - text body.',
// };

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    //extract data from event here
    console.log('Form Submitted!!' + formData);
    const rawFormData = {
      name: formData.get('first-name') + ' ' + formData.get('last-name'),
      email: formData.get('email'),
      message: formData.get('message'),
      phone: formData.get('phone'),
      service: formData.get('service'),
    };
    console.log('Form Data:', rawFormData);

    // Call the emailer function to send the email
    const res = await sendContactEmail(rawFormData);

    console.log('Email sent successfully!', res);

    // await sendContactEmail(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // const handleClick = async (e: any) => {
  //   console.log('Test Email : ', data.email);
  //   const res = await sendContactEmail(data);
  //   console.log('Test email sent successfully!', res);
  // };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 rounded-full bg-green-100 p-3">
          <BsFillCheckCircleFill className="h-5 w-5 text-[#0e7f31]" />
        </div>
        <h3 className="text-xl font-bold">Thank You!</h3>
        <p className="mt-2 mb-4 text-gray-600">
          Your message has been received. We&apos;ll get back to you shortly.
        </p>
        <button
          className="bg-[#0e7f31] transition duration-300 border hover:border-green-700 text-white px-10 py-3 rounded-md hover:shadow-lg hover:bg-white hover:text-[#0e7f31]"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <>
      <form action={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2 flex flex-col">
              <label htmlFor="first-name">First name</label>
              <input name="first-name" placeholder="Peter" required />
            </div>
            <div className="space-y-2 flex flex-col">
              <label htmlFor="last-name">Last name</label>
              <input name="last-name" placeholder="Jones" required />
            </div>
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              placeholder="peter.jones@example.com"
              type="email"
              required
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              placeholder="07123 456 789"
              type="tel"
              required
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="service">Service Needed</label>
            <select name="service">
              <option value="tree-removal">Tree Removal</option>
              <option value="tree-pruning">Tree Pruning</option>
              <option value="stump-grinding">Stump Grinding</option>
              <option value="tree-health">Tree Health Assessment</option>
              <option value="emergency">Emergency Service</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="Please provide details about your tree service needs..."
              rows={4}
              required
            />
          </div>
        </div>
        <button
          className="w-full bg-[#0e7f31] transition duration-300 border hover:border-green-700 text-white px-10 py-3 rounded-md hover:shadow-lg hover:bg-white hover:text-[#0e7f31]"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {/* <button
        className="mt-8 w-full bg-[#0e7f31] transition duration-300 border hover:border-green-700 text-white text-lg px-10 py-3 rounded-md hover:shadow-lg hover:bg-white font-bold uppercase hover:text-[#0e7f31]"
        onClick={handleClick}
      >
        TEST ME!
      </button> */}
    </>
  );
}
