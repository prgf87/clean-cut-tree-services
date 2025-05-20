import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FaStethoscope, FaTree } from 'react-icons/fa';
import { FaMinimize } from 'react-icons/fa6';
import { FiAlertTriangle, FiScissors } from 'react-icons/fi';
import { GiAxeInStump } from 'react-icons/gi';
import { IoIosStar } from 'react-icons/io';

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative bg-gradient-to-b from-green-50 to-white py-10 lg:py-20">
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
                <Link href={'/#contact'}>
                  <button className="bg-[#0e7f31] transition duration-300 border hover:border-green-700 text-white px-10 py-3 rounded-md hover:shadow-lg hover:bg-white hover:text-[#0e7f31]">
                    Talk to an Expert
                  </button>
                </Link>
                <Link href={'/#services'}>
                  <button className="bg-white transition duration-300 border hover:border-white text-[#0e7f31] px-10 py-3 rounded-md hover:shadow-lg hover:bg-[#0e7f31] hover:text-white">
                    Our Services
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
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full md:h-[450px] md:w-[450px]">
                <Image
                  src="/logo-white.png"
                  alt="Clean Cut Tree Services"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-8 pb-12" id="services">
        <div className="container mx-auto px-4 md:px-6 ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide comprehensive tree care services to keep your
                property safe and beautiful.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            <div className="flex flex-col bg-[#0e7f31]/5 p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300">
              <div className="relative ">
                <FaTree
                  size={64}
                  color="green"
                  className="p-2.5 rounded-lg bg-[#0e7f31]/25 shadow-sm"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Tree Removal</h3>

              <p className="mt-2 text-gray-600">
                Safe and efficient removal of trees of all sizes, including
                emergency services for storm-damaged trees.
              </p>

              <Link
                href="/services/tree-services"
                className="mt-4 text-[#0e7f31] hover:underline"
              >
                Learn More
              </Link>
            </div>

            <div className="flex flex-col bg-[#0e7f31]/5 p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300">
              <div className="relative">
                <FiScissors
                  size={64}
                  color="green"
                  className="p-2.5 rounded-lg bg-[#0e7f31]/25 shadow-sm"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Tree Pruning</h3>

              <p className="mt-2 text-gray-600">
                Expert pruning to improve tree health, appearance, and safety
                while promoting proper growth patterns.
              </p>

              <Link
                href="/services/tree-services"
                className="mt-4 text-[#0e7f31] hover:underline"
              >
                Learn More
              </Link>
            </div>

            <div className="flex flex-col bg-[#0e7f31]/5 p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300">
              <div className="relative">
                <GiAxeInStump
                  size={64}
                  color="green"
                  className="p-2.5 rounded-lg bg-[#0e7f31]/25 shadow-sm"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Stump Grinding</h3>

              <p className="mt-2 text-gray-600">
                Complete removal of unsightly stumps to reclaim your yard space
                and prevent pest infestations.
              </p>

              <Link
                href="/services/tree-services"
                className="mt-4 text-[#0e7f31] hover:underline"
              >
                Learn More
              </Link>
            </div>

            <div className="flex flex-col bg-[#0e7f31]/5 p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300">
              <div className="relative">
                <FaStethoscope
                  size={64}
                  color="green"
                  className="p-2.5 rounded-lg bg-[#0e7f31]/25 shadow-sm"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                Tree Health Assessment
              </h3>

              <p className="mt-2 text-gray-600">
                Professional diagnosis of tree health issues and treatment
                recommendations to preserve your trees.
              </p>

              <Link
                href="/services/tree-services"
                className="mt-4 text-[#0e7f31] hover:underline"
              >
                Learn More
              </Link>
            </div>

            <div className="flex flex-col bg-[#0e7f31]/5 p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300">
              <div className="relative">
                <FaMinimize
                  size={64}
                  color="green"
                  className="p-2.5 rounded-lg bg-[#0e7f31]/25 shadow-sm"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Crown Reduction</h3>

              <p className="mt-2 text-gray-600">
                Careful reduction of tree size while maintaining natural shape
                and structural integrity.
              </p>

              <Link
                href="/services/tree-services"
                className="mt-4 text-[#0e7f31] hover:underline"
              >
                Learn More
              </Link>
            </div>

            <div className="flex flex-col bg-[#0e7f31]/5 p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300">
              <div className="relative">
                <FiAlertTriangle
                  size={64}
                  color="green"
                  className="p-2.5 rounded-lg bg-[#0e7f31]/25 shadow-sm"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Emergency Services</h3>

              <p className="mt-2 text-gray-600">
                24/7 response for storm damage, fallen trees, and other
                tree-related emergencies.
              </p>

              <Link
                href="/services/tree-services"
                className="mt-4 text-[#0e7f31] hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16" id="about">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex justify-center">
              <div className="relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/img14.jpg"
                  alt="Clean Cut Tree Services Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl pt-8">
                About Clean Cut Tree Services
              </h2>
              <p className="text-gray-600">
                With over 15 years of experience, Clean Cut Tree Services has
                been providing expert tree care to residential and commercial
                properties. Our team of certified arborists and tree surgeons is
                committed to delivering the highest quality service with a focus
                on safety, efficiency, and environmental responsibility.
              </p>
              <p className="text-gray-600">
                We take pride in our work and strive to exceed our customers'
                expectations on every project. From routine pruning to complex
                tree removals, we have the knowledge, skills, and equipment to
                handle any tree care challenge.
              </p>
              <div className="flex flex-col gap-2 pt-4 min-[400px]:flex-row">
                <Link href={'/#certifications'}>
                  <button className="bg-[#0e7f31] transition duration-300 border hover:border-green-700 text-white px-10 py-3 rounded-md hover:shadow-lg hover:bg-white hover:text-[#0e7f31]">
                    Our Certifications
                  </button>
                </Link>
                <Link href={'/#about-us'}>
                  <button className="border border-[#0e7f31] text-[#0e7f31] hover:bg-green-50 px-12 py-3 rounded-md">
                    Meet Our Team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" id="testimonials">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Clients Say
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our satisfied
                customers have to say.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col  p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300">
              <div className="relative flex space-x-2 ">
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-500">
                Michael Thompson
              </h3>
              <p className="mb-4 font-semibold text-zinc-500">Ashford, Kent</p>

              <p className="mt-2 text-gray-600">
                I was impressed with the level of service provided by Josh and
                his team. He took the time to explain the process and answered
                all my questions. The team was friendly and worked quickly. My
                trees have never looked better!
              </p>
            </div>

            <div className="flex flex-col  p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300">
              <div className="relative flex space-x-2 ">
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-500">
                George Harrison
              </h3>
              <p className="mb-4 font-semibold text-zinc-500">
                Folkestone, Kent
              </p>

              <p className="mt-2 text-gray-600">
                I had a tree emergency after a storm, and Clean Cut was there
                within hours. They handled the situation with care and
                professionalism. I can't thank them enough for their quick
                response and excellent service.
              </p>
            </div>

            <div className="flex flex-col  p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300">
              <div className="relative flex space-x-2 ">
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-500">
                David Wilson
              </h3>
              <p className="mb-4 font-semibold text-zinc-500">Dover, Kent</p>

              <p className="mt-2 text-gray-600">
                The team at Clean Cut is knowledgeable and skilled. They
                provided a thorough assessment of my trees and recommended the
                best course of action. I appreciate their honesty and expertise.
              </p>
            </div>

            <div className="flex flex-col  p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300">
              <div className="relative flex space-x-2 ">
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
                <IoIosStar size={48} color="green" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-500">
                Sophie Jenkins
              </h3>
              <p className="mb-4 font-semibold text-zinc-500">
                Canterbury, Kent
              </p>

              <p className="mt-2 text-gray-600">
                Clean Cut Tree Services did an exceptional job pruning my oak
                tree. The team was punctual, polite, and left my garden
                spotless. I highly recommend their services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16" id="portfolio">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Recent Work
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take a look at some of our recent tree care projects.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[16, 8, 3, 18, 20, 2].map((item) => (
              <div
                key={item}
                className="relative h-64 overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={`/images/img${item}.jpg`}
                  alt={`Portfolio image ${item}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-700 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Property?
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a free, no-obligation quote on your tree
                care needs.
              </p>
            </div>
            <Link href={'/#contact'}>
              <button className="bg-white text-[#0e7f31] border hover:border hover:border-gray-100 hover:bg-green-700 hover:text-gray-100 px-12 py-3 rounded-md shadow-md hover:shadow-lg transition duration-300">
                Request a Callback Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Contact Us
              </h2>
              <p className="text-gray-600">
                Have questions or ready to schedule a service? Fill out the form
                and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-green-100 p-3">
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
                      className="h-6 w-6 text-green-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600">07809 476910</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-green-100 p-3">
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
                      className="h-6 w-6 text-green-600"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">info@cleancuttree.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-green-100 p-3">
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
                      className="h-6 w-6 text-green-600"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-600">
                      The Burrow Meadows, Chartham, Kent, CT4 7JH
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-10 border rounded-md border-zinc-300 bg-green-50 shadow-md">
              <div className="p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="relative h-16 w-48">
                <Image
                  src="/logo-white.png"
                  alt="Clean Cut Tree Services"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-400 lg:pr-28">
                Professional tree care services for residential and commercial
                properties.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Tree Removal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Tree Pruning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Stump Grinding
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Emergency Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Tree Health Assessment
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Business Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Sunday: 6am - 6pm</li>

                <li className="pt-2 font-bold text-green-400">
                  24/7 Emergency Services Available
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
            <p className="text-gray-400">
              © {year} Clean Cut Tree Services. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-4 md:mt-0">
              <a
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
              </a>
              {/* <a
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
              </a>
              <a
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
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
