import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Epic Tech AI
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              Sign In
            </button>
            <Link 
              href="https://buy.stripe.com/7sI3dlgcQ4uL0gMeUW"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}