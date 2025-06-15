'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';
import { useState } from 'react';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Large Oak Tree Removal',
      description: 'Safe removal of 80-foot oak tree near residential home',
      category: 'Tree Removal',
      image: '/images/img16.jpg',
    },
    {
      title: 'Storm Damage Cleanup',
      description: 'Emergency cleanup after severe storm damage',
      category: 'Emergency Service',
      image: '/images/img8.jpg',
    },
    {
      title: 'Crown Thinning & Pruning',
      description: 'Professional pruning to improve tree health and appearance',
      category: 'Tree Pruning',
      image: '/images/img3.jpg',
    },
    {
      title: 'Stump Grinding Service',
      description: 'Complete stump removal and site cleanup',
      category: 'Stump Grinding',
      image: '/images/img18.jpg',
    },
    {
      title: 'Commercial Property Maintenance',
      description: 'Ongoing tree care for office complex',
      category: 'Commercial',
      image: '/images/img20.jpg',
    },
    {
      title: 'Tree Health Assessment',
      description: 'Professional evaluation and treatment of diseased tree',
      category: 'Tree Health',
      image: '/images/img2.jpg',
    },
    {
      title: 'Crown Reduction Work',
      description: 'Careful reduction while maintaining natural tree shape',
      category: 'Crown Reduction',
      image: '/images/img14.jpg',
    },
    {
      title: 'Power Line Clearance',
      description: 'Safe trimming around electrical infrastructure',
      category: 'Tree Pruning',
      image: '/images/img16.jpg',
    },
    {
      title: 'Residential Tree Care',
      description: 'Seasonal maintenance for backyard trees',
      category: 'Tree Pruning',
      image: '/images/img8.jpg',
    },
  ];

  const categories = [
    'All',
    'Tree Removal',
    'Tree Pruning',
    'Emergency Service',
    'Stump Grinding',
    'Commercial',
    'Tree Health',
    'Crown Reduction',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block mb-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Take a look at some of our recent tree service projects. From
            routine maintenance to complex removals, we handle every job with
            professionalism and care.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-md transition duration-300 ${
                  activeFilter === category
                    ? 'bg-[#0e7f31] text-white shadow-lg'
                    : 'bg-white border border-[#0e7f31] text-[#0e7f31] hover:bg-[#0e7f31] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-md border border-gray-200 hover:border-[#0e7f31] hover:shadow-lg transition duration-300 overflow-hidden"
              >
                <div className="relative">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <span className="absolute top-4 left-4 bg-[#0e7f31] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Before & After Transformations
            </h2>
            <p className="text-xl text-gray-600">
              See the dramatic difference our professional tree services can
              make.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-md shadow-md border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src="/images/img20.jpg"
                      alt="Before tree removal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src="/images/img2.jpg"
                      alt="After tree removal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute top-4 left-4 bg-[#0e7f31] text-white px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Hazardous Tree Removal
                </h3>
                <p className="text-gray-600">
                  Removed dangerous leaning tree that threatened the home&apos;s
                  foundation and safety.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-md shadow-md border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src="/images/img18.jpg"
                      alt="Before pruning"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src="/images/img3.jpg"
                      alt="After pruning"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute top-4 left-4 bg-[#0e7f31] text-white px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Professional Pruning
                </h3>
                <p className="text-gray-600">
                  Crown thinning and deadwood removal improved tree health and
                  appearance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don&apos;t just take our word for it - hear from satisfied
              customers.
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
                &quot;Excellent service! They removed a huge oak tree from our
                backyard safely and cleaned up everything perfectly. Highly
                recommend!&quot;
              </p>
              <div className="font-semibold text-zinc-500">
                - Sarah Thompson
              </div>
              <div className="text-sm text-zinc-500">Ashford, Kent</div>
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
                &quot;Professional, punctual, and reasonably priced. They
                trimmed all our trees and the property looks amazing now.&quot;
              </p>
              <div className="font-semibold text-zinc-500">- Mike Roberts</div>
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
                &quot;Called them for emergency storm cleanup. They responded
                quickly and handled everything professionally. Great team!&quot;
              </p>
              <div className="font-semibold text-zinc-500">
                - Jennifer Lewis
              </div>
              <div className="text-sm text-zinc-500">Dover, Kent</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Let us help you achieve the same great results. Contact us today for
            your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-green-600 border hover:border hover:border-gray-100 hover:bg-green-700 hover:text-gray-100 px-12 py-3 rounded-md shadow-md hover:shadow-lg transition duration-300">
                Get Free Quote
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-white text-white hover:bg-white hover:text-green-600 px-12 py-3 rounded-md transition duration-300">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
