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
<Snippets language="javascript" extraClass="w-1/2">
{dedent(`
import {GlassCard} from '@developer-hub/liquid-glass'

function App() {
  return 
  (
    <GlassCard>
        <div className="p-6">
            <h2>Welcome to Liquid Glass</h2>
            <p>Experience the future of UI design with smooth, organic animations.</p>
        </div>
    </GlassCard>
  )
}
`)}
</Snippets>
    </>
  );
}
