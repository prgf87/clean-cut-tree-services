import { FaCalculator, FaPhone, FaClock, FaShieldAlt } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IoIosStar } from 'react-icons/io';

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block mb-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Free Quote
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Tree Service Estimate
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Receive a detailed, no-obligation quote for your tree service needs.
            Our certified arborists will assess your project and provide
            transparent pricing.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-md shadow-md border border-gray-200">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold flex items-center mb-2">
                    <FaCalculator className="h-6 w-6 text-green-600 mr-2" />
                    Request Your Free Quote
                  </h2>
                  <p className="text-gray-600">
                    Please provide details about your tree service needs for an
                    accurate estimate.
                  </p>
                </div>

                <form className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Contact Information
                    </h3>
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

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
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
                    </div>
                  </div>

                  {/* Property Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Property Information
                    </h3>
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Property Address *
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label
                          htmlFor="propertyType"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Property Type
                        </label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        >
                          <option value="">Select property type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="municipal">Municipal</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="accessType"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Property Access
                        </label>
                        <select
                          id="accessType"
                          name="accessType"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        >
                          <option value="">Select access type</option>
                          <option value="easy">Easy access</option>
                          <option value="moderate">Moderate access</option>
                          <option value="difficult">Difficult access</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Service Details
                    </h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Services Needed (Select all that apply)
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          'Tree Removal',
                          'Tree Trimming/Pruning',
                          'Stump Grinding',
                          'Emergency Service',
                          'Tree Health Assessment',
                          'Crown Reduction',
                          'Storm Cleanup',
                          'Other',
                        ].map((service, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              id={`service-${index}`}
                              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label
                              htmlFor={`service-${index}`}
                              className="text-sm"
                            >
                              {service}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="treeCount"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Number of Trees
                      </label>
                      <select
                        id="treeCount"
                        name="treeCount"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Select number of trees</option>
                        <option value="1">1 tree</option>
                        <option value="2-3">2-3 trees</option>
                        <option value="4-5">4-5 trees</option>
                        <option value="6-10">6-10 trees</option>
                        <option value="10+">More than 10 trees</option>
                      </select>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="treeSize"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Tree Size (Approximate)
                      </label>
                      <select
                        id="treeSize"
                        name="treeSize"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Select tree size</option>
                        <option value="small">Small (under 25 feet)</option>
                        <option value="medium">Medium (25-50 feet)</option>
                        <option value="large">Large (50-75 feet)</option>
                        <option value="extra-large">
                          Extra Large (over 75 feet)
                        </option>
                        <option value="mixed">Mixed sizes</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Project Details
                    </h3>
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Detailed Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        placeholder="Please describe your project in detail, including tree species (if known), specific concerns, obstacles, and any other relevant information..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
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
                          <option value="emergency">Emergency (ASAP)</option>
                          <option value="this-week">This week</option>
                          <option value="this-month">This month</option>
                          <option value="next-month">Next month</option>
                          <option value="flexible">I'm flexible</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Budget Range (Optional)
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-500">Under £500</option>
                          <option value="500-1000">£500 - £1,000</option>
                          <option value="1000-2500">£1,000 - £2,500</option>
                          <option value="2500-5000">£2,500 - £5,000</option>
                          <option value="over-5000">Over £5,000</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Options */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Additional Options
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="photos"
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor="photos" className="text-sm">
                          I can provide photos of the trees/project area
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="onsite"
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor="onsite" className="text-sm">
                          I would like an on-site consultation
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="cleanup"
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor="cleanup" className="text-sm">
                          I need complete debris removal and cleanup
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="permits"
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label htmlFor="permits" className="text-sm">
                          I may need help with permits
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0e7f31] transition duration-300 border hover:border-green-700 text-white px-10 py-3 rounded-md hover:shadow-lg hover:bg-white hover:text-[#0e7f31]"
                  >
                    Submit Quote Request
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quote Process */}
              <div className="bg-white p-8 rounded-md shadow-md border border-gray-200">
                <div className="mb-6">
                  <h2 className="text-xl font-bold">Our Quote Process</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#0e7f31] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Submit Request</h4>
                      <p className="text-xs text-gray-600">
                        Fill out the detailed form
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#0e7f31] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Initial Review</h4>
                      <p className="text-xs text-gray-600">
                        We review your request within 2 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#0e7f31] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Site Assessment</h4>
                      <p className="text-xs text-gray-600">
                        On-site evaluation if needed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-[#0e7f31] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Detailed Quote</h4>
                      <p className="text-xs text-gray-600">
                        Receive comprehensive estimate
                      </p>
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
                    <span className="text-sm">100% Free quotes</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Quick response time</span>
                  </div>
                  <div className="flex items-center">
                    <FaShieldAlt className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Licensed & insured</span>
                  </div>
                  <div className="flex items-center">
                    <BsFillCheckCircleFill className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">No hidden fees</span>
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
                  <h2 className="text-xl font-bold text-red-800">
                    Need Emergency Service?
                  </h2>
                </div>

                <p className="text-red-600 text-sm mb-4">
                  For urgent tree emergencies, call us directly for immediate
                  assistance.
                </p>
                <a href="tel:07809476910">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition duration-300 flex items-center justify-center">
                    <FaPhone className="h-4 w-4 mr-2" />
                    Emergency: 07809 476910
                  </button>
                </a>
              </div>

              {/* Pricing Info */}
              <div className="bg-white p-8 rounded-md shadow-md border border-gray-200">
                <div className="mb-6">
                  <h2 className="text-xl font-bold">Pricing Information</h2>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Tree Removal:</span>
                    <span className="font-semibold">£300+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tree Trimming:</span>
                    <span className="font-semibold">£150+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stump Grinding:</span>
                    <span className="font-semibold">£75+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tree Assessment:</span>
                    <span className="font-semibold">£100+</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  *Prices vary based on tree size, location, and complexity. All
                  quotes include cleanup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              See why homeowners and businesses trust us with their tree care
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300 bg-white">
              <div className="relative flex space-x-2 mb-4">
                <IoIosStar size={24} color="green" />
                <IoIosStar size={24} color="green" />
                <IoIosStar size={24} color="green" />
                <IoIosStar size={24} color="green" />
                <IoIosStar size={24} color="green" />
              </div>
              <p className="text-gray-600 mb-4">
                "The quote was detailed and fair. They explained everything
                clearly and completed the work exactly as promised."
              </p>
              <div className="font-semibold text-zinc-500">- David Wilson</div>
              <div className="text-sm text-zinc-500">Dover, Kent</div>
            </div>

            <div className="flex flex-col p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300 bg-white">
              <div className="relative flex space-x-2 mb-4">
                <IoIosStar size={24} color="green" />
                <IoIosStar size={24} color="green" />
                <IoIosStar size={24} color="green" />
                <IoIosStar size={24} color="green" />
                <IoIosStar size={24} color="green" />
              </div>
              <p className="text-gray-600 mb-4">
                "Fast response to my quote request. They came out the same day
                and provided a comprehensive estimate."
              </p>
              <div className="font-semibold text-zinc-500">- Lisa Thompson</div>
              <div className="text-sm text-zinc-500">Canterbury, Kent</div>
            </div>

            <div className="flex flex-col p-8 rounded-md shadow-md border border-[#0e7f31]/30 hover:border-[#0e7f31] hover:shadow-lg transition duration-300 bg-white">
              <div className="relative flex space-x-2 mb-4">
                <IoIosStar size={24} color="green" />
                <IoIosStar size={24} color="green" />
                <IoIosStar size={24} color="green" />
                <IoIosStar size={24} color="green" />
                <IoIosStar size={24} color="green" />
              </div>
              <p className="text-gray-600 mb-4">
                "No surprises, no hidden fees. The final cost matched the quote
                exactly. Very professional service."
              </p>
              <div className="font-semibold text-zinc-500">
                - Robert Harrison
              </div>
              <div className="text-sm text-zinc-500">Folkestone, Kent</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
