'use server';

/**
 * @param {string} from An Amazon SES verified email address.
 * @param {*} to An Amazon SES verified email address.
 */

import nodemailer from 'nodemailer';
import { contactReceivedMinify } from './templates/minifiedTemplates';
import Handlebars from 'handlebars';
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

// const Handlebars = require('handlebars');

// Handlebars.registerHelper('capitalise', function (str) {
//   return str.replace(/\w\S*/g, function (txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// });

// Handlebars.registerHelper('eq', function (a, b) {
//   return a === b;
// });

// Handlebars.registerHelper('not', function (value) {
//   return !value;
// });

// Handlebars.registerHelper(
//   'calculateTotalPrice',
//   function (pricePerGram, grams) {
//     const totalPrice = pricePerGram * grams;
//     return (Math.floor(totalPrice * 100) / 100).toFixed(2);
//   }
// );

export async function sendTestEmail() {
  const sesClient = new SESv2Client({ region: process.env.AWS_REGION });

  console.log('SES Client created:', sesClient);

  console.log('AWS SES From Email:', process.env.AWS_SES_FROM_EMAIL);
  console.log('AWS SES Region:', process.env.AWS_REGION);

  const config = {
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  };

  const sesCommand = new SendEmailCommand({
    Destination: {
      ToAddresses: ['globalwebsystems.official@gmail.com'],
    },
    Content: {
      Simple: {
        Subject: {
          Data: 'Test Email from AWS SES',
        },
        Body: {
          Text: {
            Data: 'This is a test email sent using AWS SES.',
          },
        },
      },
    },
    FromEmailAddress: process.env.AWS_SES_FROM_EMAIL,
    ReplyToAddresses: ['globalwebsystems.official@gmail.com'],
  });

  // const transporter = nodemailer.createTransport({
  //   SES: { sesClient, SendEmailCommand },
  // });

  // console.log('Transporter created:', transporter);

  // const info = await transporter.sendMail({
  //   from: process.env.AWS_SES_FROM_EMAIL,
  //   to: ['globalwebsystems.official@gmail.com'],
  //   subject: 'Message via SES transport',
  //   text: 'I hope this message gets sent!',
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   ses: {
  //     EmailTags: [{ Name: 'tag_name', Value: 'tag_value' }],
  //   },
  // });

  // console.log('Message sent: %s', info.messageId);
}

// export async function sendContactEmail({ name, email, phone, message }) {
//   console.log('Data : ', name, email, phone, message);

//   const template = Handlebars.compile(contactReceivedMinify);
//   const date = new Date();
//   const ukDate = date.toLocaleDateString('en-GB');
//   const currentYear = date.getFullYear();

//   const html = template({
//     name: name,
//     date: ukDate,
//     email: email,
//     phone: phone,
//     message: message,
//     year: currentYear,
//   });

//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     secure: true,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   console.log('transporter : ', transporter);

//   // 2️⃣  Send a message
//   const emailSent = await transporter
//     .sendMail({
//       from: `Welcome Email ${process.env.AWS_SES_FROM_EMAIL}`,
//       to: process.env.AWS_SES_FROM_EMAIL,
//       bcc: 'globalwebsystems.official@gmail.com',
//       subject: 'Hello from tests ✔',
//       text: 'This message was sent from a Node.js integration test.',
//       html: html,
//     })
//     .then((info) => {
//       console.log('Message sent: %s', info.messageId);
//       console.log('Email sent successfully:', info);
//       // Preview the stored message in Ethereal’s web UI
//       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//     })
//     .catch(console.error);

//   console.log('Email logging : ', emailSent);
// }

// export async function sendContactEmail({ name, email, phone, message }) {
//   console.log('Data : ', name, email, phone, message);

//   const template = Handlebars.compile(contactReceivedMinify);
//   const date = new Date();
//   const ukDate = date.toLocaleDateString('en-GB');
//   const currentYear = date.getFullYear();

//   const html = template({
//     name: name,
//     date: ukDate,
//     email: email,
//     phone: phone,
//     message: message,
//     year: currentYear,
//   });

//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     secure: true,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   console.log('transporter : ', transporter);

//   // 2️⃣  Send a message
//   const emailSent = await transporter
//     .sendMail({
//       from: `Welcome Email ${process.env.AWS_SES_FROM_EMAIL}`,
//       to: process.env.AWS_SES_FROM_EMAIL,
//       bcc: 'globalwebsystems.official@gmail.com',
//       subject: 'Hello from tests ✔',
//       text: 'This message was sent from a Node.js integration test.',
//       html: html,
//     })
//     .then((info) => {
//       console.log('Message sent: %s', info.messageId);
//       console.log('Email sent successfully:', info);
//       // Preview the stored message in Ethereal’s web UI
//       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//     })
//     .catch(console.error);

//   console.log('Email logging : ', emailSent);
// }

// export async function sendSellGoldOrderEmailSmtp({
//   name,
//   email,
//   subject,
//   phone,
//   orderNumber,
//   paymentMethod,
//   address,
//   priceQuoted,
//   products,
//   goldPacks,
// }) {
//   const template = Handlebars.compile(sellGoldOrderMinified);
//   const date = new Date();
//   const ukDate = date.toLocaleDateString('en-GB');
//   const currentYear = date.getFullYear();

//   const htmlToSend = template({
//     name: name,
//     date: ukDate,
//     orderNumber: orderNumber,
//     email: email,
//     phone: phone,
//     paymentMethod: paymentMethod,
//     address: address,
//     priceQuoted: priceQuoted,
//     products: products,
//     year: currentYear,
//     goldPacks,
//   });

//   const transporter = nodemailer.createTransport({
//     host: process.env.OUTGOING_SMTP_SERVER,
//     port: process.env.OUTGOING_SMTP_PORT,
//     secure: true,
//     auth: {
//       user: process.env.ORDERS_EMAIL,
//       pass: process.env.ORDERS_EMAIL_PASSWORD,
//     },
//   });

//   const info = await transporter.sendMail({
//     from: `webuyanygold.com - Gold Pack Order ${process.env.ORDERS_EMAIL}`,
//     to: email,
//     // bcc: process.env.ORDERS_EMAIL,
//     subject: subject || `webuyanygold.com - Gold Pack Order #${orderNumber}`,
//     html: htmlToSend,
//     attachments: [
//       {
//         filename: 'logo.png',
//         path: 'https://res.cloudinary.com/dzitj9wug/image/upload/v1722872402/logo.png',
//         cid: 'logo',
//       },
//       {
//         filename: '512px-Instagram_icon.png',
//         path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/512px-Instagram_icon.png',
//         cid: 'insta-logo',
//       },
//       {
//         filename: '512px-EBay_logo.png',
//         path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/EBay_logo.png/512px-EBay_logo.png',
//         cid: 'ebay-logo',
//       },
//       {
//         filename: 'favicon.png',
//         path: 'https://res.cloudinary.com/dzitj9wug/image/upload/v1722872402/favicon.png',
//         cid: 'wbag-logo',
//       },
//     ],
//   });

//   if (info.response) {
//     return {
//       messageId: info.messageId,
//     };
//   } else {
//     return {
//       error: 'An error occurred while sending the email.',
//     };
//   }
// }
