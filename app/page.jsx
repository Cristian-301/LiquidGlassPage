import { generateSEOMetadata, generateStructuredData } from "@/components/Metadata";
import Snippets from "@/components/Snippets";
import dedent from 'dedent';

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

    </>
  );
}
