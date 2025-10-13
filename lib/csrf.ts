// import crypto from 'node:crypto';

// const csrfKey = process.env.CSRF_COOKIE_KEY!;
// if (!csrfKey) {
//   throw new Error('Missing CSRF_SECRET env var');
// }

// type CsrfPayload = {
//   iat: number; // issued at (epoch seconds)
//   exp: number; // expires at (epoch seconds)
//   rnd: string; // random nonce
// };

// function b64url(buf: Buffer | string) {
//   return Buffer.from(buf)
//     .toString('base64')
//     .replace(/\+/g, '-')
//     .replace(/\//g, '_')
//     .replace(/=+$/g, '');
// }

// export function createCsrfToken(ttlSeconds = 60 * 30): string {
//   const now = Math.floor(Date.now() / 1000);
//   const payload: CsrfPayload = {
//     iat: now,
//     exp: now + ttlSeconds,
//     rnd: crypto.randomBytes(16).toString('hex'),
//   };

//   const body = b64url(Buffer.from(JSON.stringify(payload)));
//   const sig = crypto.createHmac('sha256', csrfKey).update(body).digest();
//   const mac = b64url(sig);

//   // format: <payload>.<mac>
//   return `${body}.${mac}`;
// }
