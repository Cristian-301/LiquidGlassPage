import { generateSEOMetadata, generateStructuredData } from "@/components/Metadata";
import LandingPage from "@/components/LandingPage";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export const metadata = generateSEOMetadata({
  contentMetadata: {
      title: '',
      description: '',
      keywords: [],
      siteColor: 'dark',
      url: '',
      siteName: '',
      image: '',
      imageAlt: '',
  }
});


export default function Home() {


  return (
    <>
        {generateStructuredData({
          schema: {
              type: '',
              title: '',
              description: '',
              url: '',
          }
        })}
        <HeroSection/>  
        <LandingPage/>
        <Footer/>
    </>
  );
}
