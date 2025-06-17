import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import { generateSEOMetadata } from "@/components/Metadata";

export const metadata = generateSEOMetadata({
  contentMetadata: {
      metadataBase: true,
      title: 'Liquid Glass Card Component | Apple WWDC 2025 Inspired React UI',
      description: 'Stunning React component with Apple WWDC 2025-inspired liquid glass transparency effects. Dynamic SVG animations, glassmorphism aesthetics, and modern UI design for next-generation applications.',
      keywords: [
          'liquid glass',
          'react component',
          'glassmorphism',
          'apple design',
          'WWDC 2025',
          'transparency effects',
          'SVG animations',
          'modern UI',
          'glass card',
          'backdrop filter',
          'liquid animations',
          'react library',
          'UI components',
          'design system',
          'web components'
      ],
      siteColor: 'dark',
      url: 'https://liquid-glass-js.com',
      siteName: 'Liquid Glass Documentation',
      image: 'https://liquid-glass-js.com/assets/herosection/Screenshot 2025-06-17 122847.png', 
      imageAlt: 'Liquid Glass Card Component Preview - Apple WWDC 2025 inspired glassmorphism effects',
      appleMobileWebAppTitle: 'Liquid Glass',
  }
});

export default function RootLayout({children,}) {

  return (
    <html lang="it">
      <body className={""}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}