import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export const metadata = {
  title: 'CysertHQ - Security Compliance Trust',
  description: 'ISO 27001 audits, VAPT, and security consultancy.',
  keywords: ['cybersecurity', 'ISO 27001', 'VAPT', 'penetration testing', 'risk assessment'],
  openGraph: {
    title: 'CysertHQ - Cybersecurity Solutions',
    description: 'ISO 27001 audits, VAPT, and security consultancy.',
  },
  icons: {
    icon: '/public/IMG_7087.png',       // standard favicon
    shortcut: '/public/IMG_7087.png',   // browser shortcut
    apple: '/public/IMG_7087.png',      // Apple touch icon
  }
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
