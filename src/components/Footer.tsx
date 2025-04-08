export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-slate-950 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 glow-text">
                John Doe
              </h2>
              <p className="text-gray-400 mt-2">Building exceptional digital experiences</p>
            </div>
  
            <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 text-cyan-400">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
  
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 text-cyan-400">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {currentYear} John Doe. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">Designed and built with ❤️</p>
          </div>
        </div>
      </footer>
    )
  }
  