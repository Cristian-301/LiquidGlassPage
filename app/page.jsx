import { generateSEOMetadata, generateStructuredData } from "@/components/Metadata";
import MouseFollow from "@/components/MouseFollow";

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
          <MouseFollow />
        <div className="w-full h-screen flex justify-center items-center bg-[#fefefe] z-50">

        </div>
    </>
  );
}
