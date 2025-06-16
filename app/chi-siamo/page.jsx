import { generateSEOMetadata, generateStructuredData } from "@/components/Metadata";

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

export default function ChiSiamo() {


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
        <div className="bg-black w-full h-screen flex justify-center items-center">
            <h1 className="text-4xl md:text-7xl text-white font-semibold drop-shadow-2xl">
              Chi Siamo
            </h1>
        </div>
    </>
  );
}
