import { generateSEOMetadata, generateStructuredData } from "@/components/Metadata";
import LandingPage from "@/components/LandingPage";

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
        <LandingPage />
    </>
  );
}
