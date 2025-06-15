import Image from 'next/image';
import Link from 'next/link';
import { FaTree, FaStethoscope } from 'react-icons/fa';
import { FiScissors, FiAlertTriangle } from 'react-icons/fi';
import { GiAxeInStump } from 'react-icons/gi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FaMinimize } from 'react-icons/fa6';

export default function ServicesPage() {
  const services = [
    {
      icon: FaTree,
      title: 'Tree Removal',
      description:
        'Safe and efficient removal of trees of all sizes, including hazardous and hard-to-reach trees.',
      features: [
        'Emergency removal',
        'Complete cleanup',
        'Permit assistance',
        'Insurance approved',
      ],
      price: 'Starting at £300',
    },
    {
      icon: FiScissors,
      title: 'Tree Trimming & Pruning',
      description:
        'Professional pruning to maintain tree health, improve appearance, and ensure safety.',
      features: [
        'Crown thinning',
        'Deadwood removal',
        'Shape correction',
        'Growth management',
      ],
      price: 'Starting at £150',
    },
    {
      icon: FiAlertTriangle,
      title: 'Emergency Storm Cleanup',
      description:
        '24/7 emergency response for storm-damaged trees and debris removal.',
      features: [
        '24/7 availability',
        'Insurance claims help',
        'Priority response',
        'Safety assessment',
      ],
      price: 'Call for pricing',
    },
    {
      icon: GiAxeInStump,
      title: 'Stump Grinding',
      description:
        'Complete stump removal using professional grinding equipment.',
      features: [
        'Any size stump',
        'Below ground level',
        'Cleanup included',
        'Site restoration',
      ],
      price: 'Starting at £75',
    },
    {
      icon: FaStethoscope,
      title: 'Tree Health Assessment',
      description:
        'Professional evaluation of tree health and safety by certified arborists.',
      features: [
        'Disease diagnosis',
        'Pest identification',
        'Treatment plans',
        'Written reports',
      ],
      price: 'Starting at £100',
    },
    {
      icon: FaMinimize,
      title: 'Crown Reduction',
      description:
        'Careful reduction of tree size while maintaining natural shape and structural integrity.',
      features: [
        'Size management',
        'Safety improvement',
        'Structural integrity',
        'Natural appearance',
      ],
      price: 'Starting at £200',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block mb-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Tree Care Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From routine maintenance to emergency removal, we provide
            comprehensive tree care services to keep your property safe and
            beautiful.
          </p>
          <Link href="/quote">
            <button className="bg-[#0e7f31] transition duration-300 border hover:border-green-700 text-white px-10 py-3 rounded-md hover:shadow-lg hover:bg-white hover:text-[#0e7f31]">
              Get Free Quote
            </button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col bg-[#0e7f31]/5 p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300"
              >
                <div className="relative mb-4">
                  <service.icon
                    size={48}
                    color="green"
                    className="p-2.5 rounded-lg bg-[#0e7f31]/25 shadow-sm"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <BsFillCheckCircleFill className="h-4 w-4 text-[#0e7f31] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-semibold text-green-600">
                    {service.price}
                  </span>
                  <Link href="/quote">
                    <button className="border border-[#0e7f31] text-[#0e7f31] hover:bg-[#0e7f31] hover:text-white px-6 py-2 rounded-md transition duration-300">
                      Get Quote
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent, and professional from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0e7f31] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
              <p className="text-gray-600">
                We assess your needs and provide a detailed, no-obligation
                quote.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0e7f31] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule Service</h3>
              <p className="text-gray-600">
                Choose a convenient time that works with your schedule.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0e7f31] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
              <p className="text-gray-600">
                Our certified team completes the work safely and efficiently.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0e7f31] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Cleanup</h3>
              <p className="text-gray-600">
                We leave your property clean and ready to enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <FiAlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Emergency Services
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                24/7 Emergency Tree Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                When storms strike or trees become hazardous, we&apos;re here to
                help. Our emergency response team is available around the clock
                to handle dangerous situations quickly and safely.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <BsFillCheckCircleFill className="h-5 w-5 text-green-600 mr-3" />
                  <span>Storm damage cleanup</span>
                </div>
                <div className="flex items-center">
                  <BsFillCheckCircleFill className="h-5 w-5 text-green-600 mr-3" />
                  <span>Hazardous tree removal</span>
                </div>
                <div className="flex items-center">
                  <BsFillCheckCircleFill className="h-5 w-5 text-green-600 mr-3" />
                  <span>Power line clearance</span>
                </div>
                <div className="flex items-center">
                  <BsFillCheckCircleFill className="h-5 w-5 text-green-600 mr-3" />
                  <span>Insurance claim assistance</span>
                </div>
              </div>
              <Link href="tel:07809476910">
                <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-md transition duration-300 hover:shadow-lg">
                  Call Emergency Line: 07809 476910
                </button>
              </Link>
            </div>
            <div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/img18.jpg"
                  alt="Emergency tree removal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Providing professional tree services throughout Kent and
              surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Canterbury',
              'Ashford',
              'Folkestone',
              'Dover',
              'Margate',
              'Maidstone',
              'Tunbridge Wells',
              'Gravesend',
              'Dartford',
              'Sevenoaks',
              'Faversham',
              'Whitstable',
            ].map((area, index) => (
              <div
                key={index}
                className="bg-green-50 p-4 rounded-lg shadow-sm border border-gray-100 hover:border-[#0e7f31] hover:shadow-md transition duration-300"
              >
                <span className="font-medium text-gray-800">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don&apos;t see your area listed?{' '}
              <span className="text-green-600 font-medium">Call us</span> - we
              may still be able to help!
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Clean Cut Tree Services?
            </h2>
            <p className="text-xl text-gray-600">
              We&apos;re committed to providing the highest quality tree care
              with safety and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0e7f31]/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <BsFillCheckCircleFill className="h-8 w-8 text-[#0e7f31]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">
                Complete liability and workers&apos; compensation insurance for
                your peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0e7f31]/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <BsFillCheckCircleFill className="h-8 w-8 text-[#0e7f31]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                15+ Years Experience
              </h3>
              <p className="text-gray-600">
                Experienced professionals with extensive training in all aspects
                of tree care.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0e7f31]/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <BsFillCheckCircleFill className="h-8 w-8 text-[#0e7f31]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Estimates</h3>
              <p className="text-gray-600">
                No-obligation quotes with transparent pricing and no hidden
                fees.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0e7f31]/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <BsFillCheckCircleFill className="h-8 w-8 text-[#0e7f31]" />
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Contact us today for a free consultation and quote for any of our
            tree services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <button className="bg-white text-green-600 border hover:border hover:border-gray-100 hover:bg-green-700 hover:text-gray-100 px-12 py-3 rounded-md shadow-md hover:shadow-lg transition duration-300">
                Get Free Quote
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-white text-white hover:bg-white hover:text-green-600 px-12 py-3 rounded-md transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
