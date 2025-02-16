import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const DINNextUltraLight = localFont({
  src: './font/GraphikArabic-Extralight.ttf',
  variable: '--font-ultraLight',
});
const DINNextLight = localFont({
  src: './font/GraphikArabic-Extralight.ttf',
  variable: '--font-light',
});
const DINNextRegular = localFont({
  src: './font/GraphikArabic-Regular.ttf',
  variable: '--font-regular',
});
const DINNextMedium = localFont({
  src: './font/GraphikArabic-Medium.ttf',
  variable: '--font-medium',
});
const DINNextBold = localFont({
  src: './font/GraphikArabic-Bold.ttf',
  variable: '--font-bold',
});

const DINNextHeavy = localFont({
  src: './font/GraphikArabic-Super.ttf',
  variable: '--font-ultraBold',
});
const DINNextThin = localFont({
  src: './font/GraphikArabic-Thin.ttf',
  variable: '--font-ultraBold',
});

export const metadata: Metadata = {
  title: 'mudeer',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html dir="ltr">
      <body
        className={`
          ${DINNextUltraLight.variable}
        ${DINNextLight.variable}
        ${DINNextRegular.variable}
        ${DINNextMedium.variable}
        ${DINNextBold.variable}
        ${DINNextThin.variable}
        ${DINNextHeavy.variable}
         bg-[#F5F5F4]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
