
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'CysertHQ — Cybersecurity Solutions',
  description: 'ISO 27001 audits, VAPT, and security consultancy.',
  keywords: ['cybersecurity', 'ISO 27001', 'VAPT', 'penetration testing', 'risk assessment'],
  openGraph: {
    title: 'CysertHQ — Cybersecurity Solutions',
    description: 'ISO 27001 audits, VAPT, and security consultancy.',
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
