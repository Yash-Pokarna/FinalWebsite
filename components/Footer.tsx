import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 pt-8 pb-8 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} CysertHQ - All rights reserved.</div>

        {/* Links */}
        <div className="flex gap-4">
          <a href="../pages/privacy.js" className="hover:text-white">Privacy</a>
          <a href="../pages/sitemap.js" className="hover:text-white">Terms</a>
          <a href="../pages/terms.js" className="hover:text-white">Sitemap</a>
        </div>

        {/* Social Media */}
        <div className="flex gap-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
