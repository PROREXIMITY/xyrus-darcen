'use client'

export default function Footer() {
  return (
    <footer className="bg-white py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Copyright */}
          <div className="text-gray-600 text-sm text-center">
            <p>© {new Date().getFullYear()} Xyrus Darcen. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  )
}
