import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LenisProvider from '@/components/LenisProvider';
import AOSInit from '@/components/AOSInit';
import { generateSEOMetadata } from "@/components/Metadata";

export const metadata = generateSEOMetadata({
  contentMetadata: {
      metadataBase: true,
      title: 'CAREISLIFE | La Protezione spiegata in modo semplice',
      description: 'Soluzioni semplici, chiare e utili per proteggere salute, reddito e futuro. CAREISLIFE ti accompagna senza stress e burocrazia.',
      keywords: [
          'protezione sanitaria',
          'assicurazione',
          'infortuni', 
          'protezione',
          'reddito e risparmi',
          'tutela famiglia',
      ],
      siteColor: 'dark',
      url: 'https://careislife.it/soluzioni',
      siteName: 'CareIslife',
      image: 'https://careislife.it/assets/images/careislife/consulenza.jpg',
      imageAlt: 'Gruppo consulenti',
  }
});


export default function RootLayout({children,}) {

  return (
    <html lang="it">
      <body className={""}>
        <LenisProvider>
          <AOSInit />
          {/* <Navbar/> */}
          {children}
          <Footer/>
        </LenisProvider>
      </body>
    </html>
  );
}