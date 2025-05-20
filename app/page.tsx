import Image from 'next/image';
import Link from 'next/link';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FaStethoscope, FaTree } from 'react-icons/fa';
import { FaMinimize } from 'react-icons/fa6';
import { FiAlertTriangle, FiScissors } from 'react-icons/fi';
import { GiAxeInStump } from 'react-icons/gi';
import { IoIosStar } from 'react-icons/io';

export default function Home() {
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
                <Link href={'/#get-a-quote'}>
                  <button className="bg-[#0e7f31] hover:bg-green-700 text-white px-10 py-3 rounded-md  ">
                    Talk to an Expert
                  </button>
                </Link>
                <Link href={'/#services'}>
                  <button className="border border-[#0e7f31] text-[#0e7f31] hover:bg-green-50 px-12 py-3 rounded-md">
                    Our Services
                  </button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <BsFillCheckCircleFill className="h-5 w-5 text-[#0e7f31]" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BsFillCheckCircleFill className="h-5 w-5 text-[#0e7f31]" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BsFillCheckCircleFill className="h-5 w-5 text-[#0e7f31]" />
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

      <section className="bg-white py-12" id="services">
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
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
                  <button className="bg-[#0e7f31] hover:bg-green-700 text-white px-10 py-3 rounded-md  ">
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
    </main>
  );
}
