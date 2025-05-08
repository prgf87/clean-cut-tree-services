'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="/" className="">
          <Image
            src="/images/logo.png"
            alt="Clean Cut Tree Services logo"
            width={60}
            height={60}
          />
        </Link>
        <p className="text-4xl font-semibold text-black pl-4">Clean Cut</p>
        <p className="text-4xl font-extralight text-[#4CAF50] pl-4">
          Tree Services
        </p>
      </div>
      <nav>
        <Link
          href="#contact"
          className="text-[#4CAF50] font-medium hover:underline"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
