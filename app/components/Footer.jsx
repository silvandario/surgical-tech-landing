"use client"

const Footer = () => {
  return (
    <footer className="border-t border-black/5 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-black rounded-lg"></div>
                <span className="text-xl font-semibold">SurgeTech</span>
              </div>
              <p className="text-black/60 text-sm max-w-xs">
                AI-powered surgical guidance for the modern operating room.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold mb-4">Product</div>
              <ul className="space-y-3 text-sm text-black/60">
                <li><a href="#" className="hover:text-black transition">Features</a></li>
                <li><a href="#" className="hover:text-black transition">Pricing</a></li>
                <li><a href="#" className="hover:text-black transition">Security</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold mb-4">Company</div>
              <ul className="space-y-3 text-sm text-black/60">
                <li><a href="#" className="hover:text-black transition">About</a></li>
                <li><a href="#" className="hover:text-black transition">Careers</a></li>
                <li><a href="#" className="hover:text-black transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold mb-4">Legal</div>
              <ul className="space-y-3 text-sm text-black/60">
                <li><a href="#" className="hover:text-black transition">Privacy</a></li>
                <li><a href="#" className="hover:text-black transition">Terms</a></li>
                <li><a href="#" className="hover:text-black transition">HIPAA</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-black/60">
            <p>© 2025 SurgeTech. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-black transition">Twitter</a>
              <a href="#" className="hover:text-black transition">LinkedIn</a>
              <a href="#" className="hover:text-black transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer