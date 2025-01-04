import Link from 'next/link'
import React from 'react'

function CTA() {
  return (
    <div>
        {/* Call to Action */}
      <section className="bg-blue-900 text-white py-12 text-center mt-12">
        <p className="text-lg">Enjoyed this blog? Check out more on our homepage.</p>
        <Link
          href="/"
          className="mt-4 inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
          Go to Homepage
        </Link>
      </section>
    </div>
  )
}

export default CTA