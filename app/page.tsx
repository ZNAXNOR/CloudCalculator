// app/page.tsx

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">CloudCalculator</h1>
        <p className="text-lg text-gray-700 mb-8">
          Simplify your cloud cost management with ease.
        </p>
        <div>
          <a href="/start">
            <a className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition">
              Start Calculating
            </a>
          </a>
          <div className="mt-4">
            <a href="/cost-breakdown">
              <a className="text-blue-500 underline">Explore Cost Breakdown</a>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Real-Time Tracking</h3>
            <p className="text-gray-600 mb-4">Monitor your cloud costs in real-time.</p>
            <a href="/features#real-time-tracking">
              <a className="text-blue-500 underline">Learn More</a>
            </a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Multi-Cloud Support</h3>
            <p className="text-gray-600 mb-4">
              Seamlessly integrate GCP, AWS, and Azure.
            </p>
            <a href="/features#multi-cloud-support">
              <a className="text-blue-500 underline">Learn More</a>
            </a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Detailed Breakdown</h3>
            <p className="text-gray-600 mb-4">
              Gain insights into your cloud expenditures.
            </p>
            <a href="/features#detailed-breakdown">
              <a className="text-blue-500 underline">Learn More</a>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        <p>&copy; 2024 CloudCalculator. All rights reserved.</p>
      </footer>
    </main>
  )
}
