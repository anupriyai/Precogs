import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Precogs',
  description: 'Compliance Made Simple',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Precogs</title>
        <meta name="description" content="Compliance Made Simple" />
      </head>
      <body className={`${inter.className} fade-in flex flex-col min-h-screen bg-gradient-to-b from-cyan-900 via-cyan-800 to-cyan-600 text-white`}>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16 fade-in">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
