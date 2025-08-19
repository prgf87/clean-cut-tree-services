import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export const metadata: Metadata = {
  title:
    'Clean Cut Tree Services | Professional Tree Surgery in Canterbury, Kent',
  description:
    'Clean Cut Tree is a tree surgery company based in Kent, providing professional tree care and maintenance services. We specialize in tree felling, pruning, and stump removal, ensuring the health and safety of your trees. Our experienced team is dedicated to delivering high-quality service with a focus on customer satisfaction.',
  keywords: [
    'tree surgery',
    'Kent',
    'Canterbury',
    'tree care',
    'tree maintenance',
    'tree felling',
    'tree pruning',
    'stump removal',
    'professional tree services',
    'tree health',
    'tree safety',
    'arborist',
    'tree removal',
    'tree trimming',
    'landscaping',
    'garden services',
    'tree management',
    'tree inspection',
    'tree assessment',
    'tree preservation',
    'tree planting',
    'tree care tips',
    'tree service company',
    'Kent tree services',
    'tree care professionals',
    'tree care experts',
    'tree care solutions',
    'tree care specialists',
    'tree care advice',
    'tree care techniques',
    'tree care equipment',
    'tree care products',
    'tree care methods',
    'tree care safety',
    'tree care best practices',
    'tree care maintenance',
    'tree care services',
    'tree surgery kent',
    'kent tree care',
    'tree fellign',
    'tree prunign',
    'stump removl',
    'professioanl tree services',
    'tree helath',
    'tree saefty',
    'arboris',
    'tree removl',
    'tree trimmign',
    'landscapign',
    'garden servcies',
    'tree managemnt',
    'tree inspeciton',
    'tree assesment',
    'tree preservaton',
    'tree plantign',
    'tree care tps',
    'tree service compan',
    'Kent tree servces',
    'tree care profesionals',
    'tree care expets',
    'tree care solutons',
    'tree care specialsts',
    'tree care advce',
    'tree care techniqes',
    'tree care equpment',
    'tree care prducts',
    'tree care methdos',
    'tree care safet',
    'tree care best practces',
    'tree care maintenace',
    'tree care servces',
    'tree surgry',
    'tree fellingg',
    'tree prunin',
    'stump removall',
    'professioanl tree servces',
    'tree helth',
    'tree safty',
    'arboristt',
    'tree removall',
    'tree triming',
    'landscapingg',
    'garden servces',
    'tree managment',
    'tree inspecton',
    'tree assesment',
    'tree preservtion',
    'tree plantin',
    'tree care tip',
    'tree service compny',
    'Kent tree surgen',
    'tree care pro',
    'tree expert',
    'tree solutons',
    'tree specialst',
    'tree advic',
    'tree techniqe',
    'tree equiptment',
    'tree producs',
    'tree methd',
    'tree saftey',
    'tree best practis',
    'tree maintnance',
    'tree srvs',
    'emergency tree removal',
    'storm damage tree service',
    'tree cutting',
    'tree lopping',
    'hedge trimming',
    'hedge cutting',
    'hedge maintenance',
    'tree surgeon',
    'tree surgeons',
    'tree surgeon near me',
    'tree surgery near me',
    'Canterbury tree surgeon',
    'Kent tree surgeon',
    'Canterbury tree services',
    'affordable tree surgery',
    'cheap tree removal',
    'tree stump grinding',
    'wood chipping',
    'tree crown reduction',
    'tree crown lifting',
    'tree pollarding',
    'tree bracing',
    'tree cabling',
    'tree disease treatment',
    'tree pest control',
    'tree risk assessment',
    'tree consultancy',
    'commercial tree services',
    'residential tree services',
    'council tree contractors',
    '24 hour tree service',
    'urgent tree work',
    'tree waste removal',
    'garden clearance',
    'tree recycling',
    'timber harvesting',
    'arboriculture',
    'arboricultural services',
    'tree climbing',
    'tree dismantling',
    'deadwood removal',
    'tree shaping',
    'tree thinning',
    'tree reduction',
    'tree surgery prices',
    'tree surgery quotes',
    'tree surgery cost',
    'free tree survey',
    'tree work',
    'tree services Canterbury',
    'Canterbury tree care',
    'Canterbury tree felling',
    'Canterbury tree pruning',
    'Canterbury stump removal',
    'Canterbury arborist',
    'Kent arborist',
    'Canterbury tree experts',
    'local tree surgeons',
    'reliable tree services',
    'certified arborist',
    'qualified tree surgeon',
    'experienced tree care',
    'emergency tree surgery',
    'tree surgery insurance',
    'tree surgery equipment',
    'eco-friendly tree care',
    'sustainable tree management',
    'tree protection',
    'tree conservation',
    'tree law',
    'tree regulations',
    'TPO trees',
    'Tree Preservation Order',
    'planning permission trees',
    'tree report',
    'tree survey',
    'tree consultancy services',
    'tree surgery training',
    'tree climbing gear',
    'chainsaw services',
    'woodland management',
    'forestry services',
    'tree care Canterbury',
    'tree care Kent',
    'Canterbury tree maintenance',
    'Kent tree maintenance',
    'Canterbury tree trimming',
    'Kent tree trimming',
    'Canterbury tree cutting',
    'Kent tree cutting',
    'Canterbury tree lopping',
    'Kent tree lopping',
    'Canterbury hedge services',
    'Kent hedge services',
    'Canterbury garden maintenance',
    'Kent garden maintenance',
    'Canterbury landscaping',
    'Kent landscaping',
    'Canterbury tree experts',
    'Kent tree experts',
    'Canterbury tree specialists',
    'Kent tree specialists',
    'Canterbury emergency tree work',
    'Kent emergency tree work',
    'Canterbury tree clearance',
    'Kent tree clearance',
    'Canterbury tree recycling',
    'Kent tree recycling',
    'Canterbury timber services',
    'Kent timber services',
    'Canterbury arboriculture',
    'Kent arboriculture',
    'Canterbury tree consultancy',
    'Kent tree consultancy',
    'Canterbury tree survey',
    'Kent tree survey',
    'Canterbury tree report',
    'Kent tree report',
    'Canterbury TPO advice',
    'Kent TPO advice',
    'Canterbury tree protection',
    'Kent tree protection',
    'Canterbury tree conservation',
    'Kent tree conservation',
    'Canterbury tree law',
    'Kent tree law',
    'Canterbury tree regulations',
    'Kent tree regulations',
    'Canterbury tree surgery prices',
    'Kent tree surgery prices',
    'Canterbury tree surgery quotes',
    'Kent tree surgery quotes',
    'Canterbury tree surgery cost',
    'Kent tree surgery cost',
    'Canterbury free tree survey',
    'Kent free tree survey',
    'Canterbury tree work',
    'Kent tree work',
    'tree surgeon Canterbury',
    'tree surgeon Kent',
    'tree surgeons Canterbury',
    'tree surgeons Kent',
    'tree surgery Canterbury',
    'tree surgery Kent',
    'tree services Kent',
    'tree care Kent',
    'tree maintenance Kent',
    'tree felling Kent',
    'tree pruning Kent',
    'stump removal Kent',
    'professional tree services Kent',
    'tree health Kent',
    'tree safety Kent',
    'arborist Kent',
    'tree removal Kent',
    'tree trimming Kent',
    'landscaping Kent',
    'garden services Kent',
    'tree management Kent',
    'tree inspection Kent',
    'tree assessment Kent',
    'tree preservation Kent',
    'tree planting Kent',
    'tree care tips Kent',
    'tree service company Kent',
    'Kent tree services',
    'tree care professionals Kent',
    'tree care experts Kent',
    'tree care solutions Kent',
    'tree care specialists Kent',
    'tree care advice Kent',
    'tree care techniques Kent',
    'tree care equipment Kent',
    'tree care products Kent',
    'tree care methods Kent',
    'tree care safety Kent',
    'tree care best practices Kent',
    'tree care maintenance Kent',
    'tree care services Kent',
    'emergency tree removal Kent',
    'storm damage tree service Kent',
    'tree cutting Kent',
    'tree lopping Kent',
    'hedge trimming Kent',
    'hedge cutting Kent',
    'hedge maintenance Kent',
    'tree surgeon near me Kent',
    'tree surgery near me Kent',
    'affordable tree surgery Kent',
    'cheap tree removal Kent',
    'tree stump grinding Kent',
    'wood chipping Kent',
    'tree crown reduction Kent',
    'tree crown lifting Kent',
    'tree pollarding Kent',
    'tree bracing Kent',
    'tree cabling Kent',
    'tree disease treatment Kent',
    'tree pest control Kent',
    'tree risk assessment Kent',
    'tree consultancy Kent',
    'commercial tree services Kent',
    'residential tree services Kent',
    'council tree contractors Kent',
    '24 hour tree service Kent',
    'urgent tree work Kent',
    'tree waste removal Kent',
    'garden clearance Kent',
    'tree recycling Kent',
    'timber harvesting Kent',
    'arboriculture Kent',
    'arboricultural services Kent',
    'tree climbing Kent',
    'tree dismantling Kent',
    'deadwood removal Kent',
    'tree shaping Kent',
    'tree thinning Kent',
    'tree reduction Kent',
    'tree surgery prices Kent',
    'tree surgery quotes Kent',
    'tree surgery cost Kent',
    'free tree survey Kent',
    'tree work Kent',
    'local tree surgeons Kent',
    'reliable tree services Kent',
    'certified arborist Kent',
    'qualified tree surgeon Kent',
    'experienced tree care Kent',
    'emergency tree surgery Kent',
    'tree surgery insurance Kent',
    'tree surgery equipment Kent',
    'eco-friendly tree care Kent',
    'sustainable tree management Kent',
    'tree protection Kent',
    'tree conservation Kent',
    'tree law Kent',
    'tree regulations Kent',
    'TPO trees Kent',
    'Tree Preservation Order Kent',
    'planning permission trees Kent',
    'tree report Kent',
    'tree survey Kent',
    'tree consultancy services Kent',
    'tree surgery training Kent',
    'tree climbing gear Kent',
    'chainsaw services Kent',
    'woodland management Kent',
    'forestry services Kent',
    'Canterbury tree care',
    'Canterbury tree maintenance',
    'Canterbury tree trimming',
    'Canterbury tree cutting',
    'Canterbury tree lopping',
    'Canterbury hedge services',
    'Canterbury garden maintenance',
    'Canterbury landscaping',
    'Canterbury tree experts',
    'Canterbury tree specialists',
    'Canterbury emergency tree work',
    'Canterbury tree clearance',
    'Canterbury tree recycling',
    'Canterbury timber services',
    'Canterbury arboriculture',
    'Canterbury tree consultancy',
    'Canterbury tree survey',
    'Canterbury tree report',
    'Canterbury TPO advice',
    'Canterbury tree protection',
    'Canterbury tree conservation',
    'Canterbury tree law',
    'Canterbury tree regulations',
    'Canterbury tree surgery prices',
    'Canterbury tree surgery quotes',
    'Canterbury tree surgery cost',
    'Canterbury free tree survey',
    'Canterbury tree work',
    'tree surgeon Canterbury',
    'tree surgeons Canterbury',
    'tree surgery Canterbury',
    'tree services Canterbury',
    'tree care Canterbury',
    'tree maintenance Canterbury',
    'tree felling Canterbury',
    'tree pruning Canterbury',
    'stump removal Canterbury',
    'professional tree services Canterbury',
    'tree health Canterbury',
    'tree safety Canterbury',
    'arborist Canterbury',
    'tree removal Canterbury',
    'tree trimming Canterbury',
    'landscaping Canterbury',
    'garden services Canterbury',
    'tree management Canterbury',
    'tree inspection Canterbury',
    'tree assessment Canterbury',
    'tree preservation Canterbury',
    'tree planting Canterbury',
    'tree care tips Canterbury',
    'tree service company Canterbury',
    'Canterbury tree services',
    'tree care professionals Canterbury',
    'tree care experts Canterbury',
    'tree care solutions Canterbury',
    'tree care specialists Canterbury',
    'tree care advice Canterbury',
    'tree care techniques Canterbury',
    'tree care equipment Canterbury',
    'tree care products Canterbury',
    'tree care methods Canterbury',
    'tree care safety Canterbury',
    'tree care best practices Canterbury',
    'tree care maintenance Canterbury',
    'tree care services Canterbury',
    'emergency tree removal Canterbury',
    'storm damage tree service Canterbury',
    'tree cutting Canterbury',
    'tree lopping Canterbury',
    'hedge trimming Canterbury',
    'hedge cutting Canterbury',
    'hedge maintenance Canterbury',
    'tree surgeon near me Canterbury',
    'tree surgery near me Canterbury',
    'affordable tree surgery Canterbury',
    'cheap tree removal Canterbury',
    'tree stump grinding Canterbury',
    'wood chipping Canterbury',
    'tree crown reduction Canterbury',
    'tree crown lifting Canterbury',
    'tree pollarding Canterbury',
    'tree bracing Canterbury',
    'tree cabling Canterbury',
    'tree disease treatment Canterbury',
    'tree pest control Canterbury',
    'tree risk assessment Canterbury',
    'tree consultancy Canterbury',
    'commercial tree services Canterbury',
    'residential tree services Canterbury',
    'council tree contractors Canterbury',
    '24 hour tree service Canterbury',
    'urgent tree work Canterbury',
    'tree waste removal Canterbury',
    'garden clearance Canterbury',
    'tree recycling Canterbury',
    'timber harvesting Canterbury',
    'arboriculture Canterbury',
    'arboricultural services Canterbury',
    'tree climbing Canterbury',
    'tree dismantling Canterbury',
    'deadwood removal Canterbury',
    'tree shaping Canterbury',
    'tree thinning Canterbury',
    'tree reduction Canterbury',
    'tree surgery prices Canterbury',
    'tree surgery quotes Canterbury',
    'tree surgery cost Canterbury',
    'free tree survey Canterbury',
    'tree work Canterbury',
    'local tree surgeons Canterbury',
    'reliable tree services Canterbury',
    'certified arborist Canterbury',
    'qualified tree surgeon Canterbury',
    'experienced tree care Canterbury',
    'emergency tree surgery Canterbury',
    'tree surgery insurance Canterbury',
    'tree surgery equipment Canterbury',
    'eco-friendly tree care Canterbury',
    'sustainable tree management Canterbury',
    'tree protection Canterbury',
    'tree conservation Canterbury',
    'tree law Canterbury',
    'tree regulations Canterbury',
    'TPO trees Canterbury',
    'Tree Preservation Order Canterbury',
    'planning permission trees Canterbury',
    'tree report Canterbury',
    'tree survey Canterbury',
    'tree consultancy services Canterbury',
    'tree surgery training Canterbury',
    'tree climbing gear Canterbury',
    'chainsaw services Canterbury',
    'woodland management Canterbury',
    'forestry services Canterbury',
  ],
  alternates: {
    canonical: 'https://cleancuttree.co.uk',
  },
  openGraph: {
    title: 'Clean Cut Tree Services | Canterbury, Kent',
    description:
      'Professional tree surgery services in Kent. Emergency tree removal, pruning, and stump grinding. Call for a free survey!',
    url: 'https://cleancuttree.co.uk',
    siteName: 'Clean Cut Tree Services',
    images: [
      {
        url: 'https://cleancuttree.co.uk/images/img1.jpg', // High-res preview image
        width: 1200,
        height: 630,
        alt: 'Clean Cut Tree team working on tree removal',
      },
    ],
    locale: 'en_UK',
    type: 'website',
  },

  // Mobile/UX Optimization

  // Business-specific metadata
  category: 'tree services', // Helps search engines classify
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Local Business SEO (critical for "near me" searches)
  metadataBase: new URL('https://cleancuttree.co.uk'),
  authors: [{ name: 'Clean Cut Tree', url: 'https://cleancuttree.co.uk' }],
  publisher: 'Clean Cut Tree',
  creator: 'Clean Cut Tree',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Apple/Safari specific
  appleWebApp: {
    capable: true,
    title: 'Clean Cut Tree Services',
    statusBarStyle: 'black-translucent',
  },

  // Icons & Favicons (for browser tabs/bookmarks)
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },

  // Manifest (for PWA)
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <header className="relative bg-gradient-to-b from-green-50 to-white py-10 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl/none xl:text-5xl/none">
                    Professional Tree Care for Your{' '}
                    <span className="text-green-600">Property</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Expert tree surgeons providing safe, efficient, and
                    environmentally conscious tree services for residential and
                    commercial properties.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href={'/#services'}>
                    <button className="bg-white transition duration-300 border hover:border-white text-[#0e7f31] px-10 py-3 rounded-md hover:shadow-lg hover:bg-[#0e7f31] hover:text-white">
                      Our Services
                    </button>
                  </Link>
                  <Link href={'/contact'}>
                    <button className="bg-[#0e7f31] transition duration-300 border hover:border-green-700 text-white px-10 py-3 rounded-md hover:shadow-lg hover:bg-white hover:text-green-800">
                      Talk to an Expert
                    </button>
                  </Link>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <BsFillCheckCircleFill className="h-6 w-6 text-[#0e7f31]" />
                    <span>Fully Insured</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BsFillCheckCircleFill className="h-6 w-6 text-[#0e7f31]" />
                    <span>15+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BsFillCheckCircleFill className="h-6 w-6 text-[#0e7f31]" />
                    <span>Free Estimates</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="relative h-[300px] w-[300px] overflow-hidden rounded-full md:h-[450px] md:w-[450px]">
                  <Link href="/">
                    <Image
                      src="/logo-white.png"
                      alt="Clean Cut Tree Services"
                      fill
                      className="object-contain"
                      priority
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-gray-900 py-12 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <Link href="/#">
                  <div className="relative -left-16 top-0 h-16 w-48">
                    <Image
                      src="/logo-white.png"
                      alt="Clean Cut Tree Services"
                      fill
                      className="object-contain cursor-pointer"
                    />
                  </div>
                </Link>
                <p className="text-gray-400 pr-20">
                  Professional tree care services for residential and commercial
                  properties.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold">Site Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/#"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/quote"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      Free Quote
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      Tree Removal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      Tree Pruning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      Stump Grinding
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      Emergency Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      Tree Health Assessment
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold">Business Hours</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Monday - Sunday: 6am - 6pm</li>
                  <li className="pt-2 pb-4 font-bold text-green-400">
                    24/7 Emergency Services Available
                  </li>
                  <li>
                    <a href="tel:07809476910">
                      <button className="w-full bg-red-700 hover:bg-red-700 text-white  py-3 rounded-md transition duration-300  cursor-pointer drop-shadow-md drop-shadow-red-900 border border-black">
                        <p className="flex items-center justify-center text-xl font-bold">
                          Emergency?
                        </p>
                        <p className="flex items-center justify-center  font-bold">
                          Call us immediately
                        </p>
                        <span className="font-bold text-lg">07809 476 910</span>
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
              <a href="#" className="text-gray-400">
                <span className="hover:underline">
                  © {year} Clean Cut Tree Services
                </span>{' '}
                - All rights reserved.
              </a>
              <div className="mt-4 flex space-x-4 md:mt-0">
                <Link
                  href="https://www.facebook.com/CleanCutTreeUK"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
