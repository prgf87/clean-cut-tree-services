'use server';

import nodemailer from 'nodemailer';

const Handlebars = require('handlebars');

Handlebars.registerHelper('capitalise', function (str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
});

Handlebars.registerHelper('eq', function (a: number, b: number) {
  return a === b;
});

Handlebars.registerHelper('not', function (value: boolean) {
  return !value;
});

Handlebars.registerHelper(
  'calculateTotalPrice',
  function (pricePerGram: number, grams: number) {
    const totalPrice = pricePerGram * grams;
    return (Math.floor(totalPrice * 100) / 100).toFixed(2);
  }
);

export async function sendSellGoldOrderEmailSmtp({
  name,
  email,
  subject,
  phone,
  orderNumber,
  paymentMethod,
  address,
  priceQuoted,
  products,
  goldPacks,
}) {
  const template = Handlebars.compile(sellGoldOrderMinified);
  const date = new Date();
  const ukDate = date.toLocaleDateString('en-GB');
  const currentYear = date.getFullYear();

  const htmlToSend = template({
    name: name,
    date: ukDate,
    orderNumber: orderNumber,
    email: email,
    phone: phone,
    paymentMethod: paymentMethod,
    address: address,
    priceQuoted: priceQuoted,
    products: products,
    year: currentYear,
    goldPacks,
  });

  const transporter = nodemailer.createTransport({
    host: process.env.OUTGOING_SMTP_SERVER,
    port: process.env.OUTGOING_SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.ORDERS_EMAIL,
      pass: process.env.ORDERS_EMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `webuyanygold.com - Gold Pack Order ${process.env.ORDERS_EMAIL}`,
    to: email,
    // bcc: process.env.ORDERS_EMAIL,
    subject: subject || `webuyanygold.com - Gold Pack Order #${orderNumber}`,
    html: htmlToSend,
    attachments: [
      {
        filename: 'logo.png',
        path: 'https://res.cloudinary.com/dzitj9wug/image/upload/v1722872402/logo.png',
        cid: 'logo',
      },
      {
        filename: '512px-Instagram_icon.png',
        path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/512px-Instagram_icon.png',
        cid: 'insta-logo',
      },
      {
        filename: '512px-EBay_logo.png',
        path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/EBay_logo.png/512px-EBay_logo.png',
        cid: 'ebay-logo',
      },
      {
        filename: 'favicon.png',
        path: 'https://res.cloudinary.com/dzitj9wug/image/upload/v1722872402/favicon.png',
        cid: 'wbag-logo',
      },
    ],
  });

  if (info.response) {
    return {
      messageId: info.messageId,
    };
  } else {
    return {
      error: 'An error occurred while sending the email.',
    };
  }
}
