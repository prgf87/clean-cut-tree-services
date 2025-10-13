// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { createCsrfToken } from './lib/csrf';

// const crsfKey = process.env.CSRF_COOKIE_NAME || 'csrf_token';

// // Limit token lifetime to 30 minutes (1800s)
// const TOKEN_TTL_SECONDS = 60 * 30;

// export function middleware(req: NextRequest) {
//   // Only mint on safe navigations so we don't interfere with non-idempotent requests
//   if (req.method !== 'GET' && req.method !== 'HEAD') {
//     return NextResponse.next();
//   }

//   const res = NextResponse.next();

//   // Always regenerate a new token for each GET/HEAD as requested
//   const token = createCsrfToken(TOKEN_TTL_SECONDS);

//   res.cookies.set({
//     name: crsfKey,
//     value: token,
//     httpOnly: true, // JS cannot read it
//     sameSite: 'lax',
//     secure: process.env.NODE_ENV === 'production',
//     path: '/',
//     maxAge: TOKEN_TTL_SECONDS, // browser will drop it after 30 minutes
//   });

//   return res;
// }

// // If you want to scope this to certain paths only, uncomment and tweak:
// // export const config = { matcher: ['/', '/contact', '/(marketing)/:path*'] };
