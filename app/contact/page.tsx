import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaComments,
} from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block mb-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Tree Service Quote
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to transform your landscape? Contact Clean Cut Tree Services
            today for professional tree care solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-md shadow-md border border-gray-200">
              <div className="mb-6">
                <h2 className="text-2xl font-bold flex items-center mb-2">
                  <FaComments className="h-6 w-6 text-green-600 mr-2" />
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Property Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select a service</option>
                    <option value="tree-removal">Tree Removal</option>
                    <option value="tree-trimming">
                      Tree Trimming & Pruning
                    </option>
                    <option value="stump-grinding">Stump Grinding</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="tree-health">Tree Health Assessment</option>
                    <option value="crown-reduction">Crown Reduction</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Please describe your tree service needs, including tree size, location, and any specific concerns..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">As soon as possible</option>
                    <option value="this-week">This week</option>
                    <option value="this-month">This month</option>
                    <option value="next-month">Next month</option>
                    <option value="flexible">I&apos;m flexible</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0e7f31] transition duration-300 border hover:border-green-700 text-white px-10 py-3 rounded-md hover:shadow-lg hover:bg-white hover:text-[#0e7f31]"
                >
                  Send Message & Get Free Quote
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white p-8 rounded-md shadow-md border border-gray-200">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
                  <p className="text-gray-600">
                    Multiple ways to reach us for your convenience.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-green-100 p-3">
                      <FaPhone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">07809 476910</p>
                      <p className="text-sm text-gray-500">
                        24/7 Emergency Line
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-green-100 p-3">
                      <FaEnvelope className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@cleancuttree.com</p>
                      <p className="text-sm text-gray-500">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-green-100 p-3">
                      <FaMapMarkerAlt className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">
                        The Burrow Meadows, Chartham, Kent, CT4 7JH
                      </p>
                      <p className="text-sm text-gray-500">
                        Serving Kent and surrounding areas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-green-100 p-3">
                      <FaClock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Sunday: 6am - 6pm</p>
                        <p className="text-green-600 font-medium">
                          24/7 Emergency Services Available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white p-8 rounded-md shadow-md border border-gray-200">
                <div className="mb-6">
                  <h2 className="text-xl font-bold">Why Choose Us?</h2>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <BsFillCheckCircleFill className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Free, no-obligation quotes</span>
                  </div>
                  <div className="flex items-center">
                    <BsFillCheckCircleFill className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Licensed & fully insured</span>
                  </div>
                  <div className="flex items-center">
                    <BsFillCheckCircleFill className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">15+ years experience</span>
                  </div>
                  <div className="flex items-center">
                    <BsFillCheckCircleFill className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">24/7 emergency service</span>
                  </div>
                  <div className="flex items-center">
                    <BsFillCheckCircleFill className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Complete cleanup included</span>
                  </div>
                  <div className="flex items-center">
                    <BsFillCheckCircleFill className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Satisfaction guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 p-8 rounded-md shadow-md">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-red-800 mb-2">
                    Emergency Services
                  </h2>
                  <p className="text-red-600">
                    For urgent tree emergencies, call us immediately.
                  </p>
                </div>

                <a href="tel:07809476910">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition duration-300 flex items-center justify-center">
                    <FaPhone className="h-4 w-4 mr-2" />
                    Call Emergency Line: 07809 476910
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-gray-50">
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
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-[#0e7f31] hover:shadow-md transition duration-300"
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
    </div>
  );
}
