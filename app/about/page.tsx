import Image from 'next/image';
import Link from 'next/link';
import { FaUsers, FaAward, FaClock, FaShieldAlt } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional Tree Care Since 2010
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Clean Cut Tree Services has been providing expert tree care and
                maintenance to residential and commercial properties for over a
                decade. Our certified arborists combine years of experience with
                the latest equipment to ensure your trees are healthy, safe, and
                beautiful.
              </p>
              <Link href="/contact">
                <button className="bg-[#0e7f31] transition duration-300 border hover:border-green-700 text-white px-10 py-3 rounded-md hover:shadow-lg hover:bg-white hover:text-[#0e7f31]">
                  Get Free Estimate
                </button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/img14.jpg"
                  alt="Professional tree service team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Trees Removed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Clean Cut Tree Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to providing the highest quality tree care
              services with safety, professionalism, and customer satisfaction
              as our top priorities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col bg-[#0e7f31]/5 p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300 text-center">
              <div className="relative">
                <FaUsers
                  size={48}
                  color="green"
                  className="mx-auto mb-4 p-2.5 rounded-lg bg-[#0e7f31]/25 shadow-sm"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Certified Arborists
              </h3>
              <p className="text-gray-600">
                Our team consists of ISA certified arborists with extensive
                training and experience.
              </p>
            </div>

            <div className="flex flex-col bg-[#0e7f31]/5 p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300 text-center">
              <div className="relative">
                <FaShieldAlt
                  size={48}
                  color="green"
                  className="mx-auto mb-4 p-2.5 rounded-lg bg-[#0e7f31]/25 shadow-sm"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">
                Complete liability and workers&apos; compensation insurance for
                your peace of mind.
              </p>
            </div>

            <div className="flex flex-col bg-[#0e7f31]/5 p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300 text-center">
              <div className="relative">
                <FaAward
                  size={48}
                  color="green"
                  className="mx-auto mb-4 p-2.5 rounded-lg bg-[#0e7f31]/25 shadow-sm"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                We stand behind our work with a satisfaction guarantee on all
                services.
              </p>
            </div>

            <div className="flex flex-col bg-[#0e7f31]/5 p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300 text-center">
              <div className="relative">
                <FaClock
                  size={48}
                  color="green"
                  className="mx-auto mb-4 p-2.5 rounded-lg bg-[#0e7f31]/25 shadow-sm"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency</h3>
              <p className="text-gray-600">
                Emergency tree removal and storm damage cleanup available around
                the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to keeping your trees healthy
              and your property safe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col bg-white p-8 rounded-md shadow-md border border-gray-200 hover:border-[#0e7f31] hover:shadow-lg transition duration-300 text-center">
              <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full mx-auto mb-4">
                <Image
                  src="/images/img16.jpg"
                  alt="Josh - Owner"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Josh</h3>
              <p className="text-green-600 font-medium mb-2">
                Owner & Lead Arborist
              </p>
              <p className="text-gray-600">
                ISA Certified Arborist with 15+ years of experience in tree care
                and removal.
              </p>
            </div>

            <div className="flex flex-col bg-white p-8 rounded-md shadow-md border border-gray-200 hover:border-[#0e7f31] hover:shadow-lg transition duration-300 text-center">
              <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full mx-auto mb-4">
                <Image
                  src="/images/img8.jpg"
                  alt="Operations Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Davis</h3>
              <p className="text-green-600 font-medium mb-2">
                Operations Manager
              </p>
              <p className="text-gray-600">
                Coordinates all operations and ensures every project meets our
                high standards.
              </p>
            </div>

            <div className="flex flex-col bg-white p-8 rounded-md shadow-md border border-gray-200 hover:border-[#0e7f31] hover:shadow-lg transition duration-300 text-center">
              <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full mx-auto mb-4">
                <Image
                  src="/images/img3.jpg"
                  alt="Senior Arborist"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tom Wilson</h3>
              <p className="text-green-600 font-medium mb-2">Senior Arborist</p>
              <p className="text-gray-600">
                Specializes in tree health assessment and complex removal
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work with the Best?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Contact us today for a free consultation and estimate for your tree
            care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-green-600 border hover:border hover:border-gray-100 hover:bg-green-700 hover:text-gray-100 px-12 py-3 rounded-md shadow-md hover:shadow-lg transition duration-300">
                Get Free Estimate
              </button>
            </Link>
            <Link href="tel:07809476910">
              <button className="border border-white text-white hover:bg-white hover:text-green-600 px-12 py-3 rounded-md transition duration-300">
                Call 07809 476910
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
