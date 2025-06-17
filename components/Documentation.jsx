"use client"

import { FaGithub, FaNpm } from "react-icons/fa";
import Link from "next/link";

export default function Documentation() {
  return (
    <div className="relative lg:w-full bg-neutral-900 text-white lg:py-10 py-5 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Liquid Glass Card Component</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            A stunning React component that brings Apple's WWDC 2025-inspired liquid glass transparency effects to your applications. 
            This component combines dynamic SVG-based liquid animations with sophisticated glassmorphism aesthetics for a truly modern user interface.
          </p>
          <div className="flex flex-col pt-5">
          <Link href="https://github.com/viraj-perera-dev/liquid-glass" className="flex items-center gap-2 text-white">
          <FaGithub className="text-3xl"/> GitHub Repository
          </Link>
          <Link href="https://www.npmjs.com/package/@developer-hub/liquid-glass" className="flex items-center gap-2  text-white">
          <FaNpm className="text-5xl"/> NPM Package
          </Link>
        </div>
        </div>


        {/* Quick Start */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Quick Start</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="mb-4 font-medium text-black">Install the package via npm:</p>
            <code className="bg-gray-800 text-green-400 px-4 py-2 rounded block font-mono text-sm">
              npm install @developer-hub/liquid-glass
            </code>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="mb-4 font-medium text-black">Import and use the component in your React application:</p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
              <code>{`import {GlassCard} from '@developer-hub/liquid-glass'

function App() {
  return (
    <GlassCard>
      <div className="p-6">
        <h2>Welcome to Liquid Glass</h2>
        <p>Experience the future of UI design with smooth, organic animations.</p>
      </div>
    </GlassCard>
  )
}`}</code>
            </pre>
          </div>
        </section>

        {/* Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Examples</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Interactive Button with Custom Styling</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
                <code>{`<GlassCard
  displacementScale={100}
  blurAmount={0.01}
  cornerRadius={10}
  padding="8px 16px"
  onClick={() => console.log('Glass button clicked!')}
>
  <span className="text-white font-medium">Get Started</span>
</GlassCard>`}</code>
              </pre>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Card with Shadow Mode for Light Backgrounds</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
                <code>{`<GlassCard
  shadowMode={true}
  cornerRadius={16}
  className="max-w-md mx-auto"
>
  <div className="p-8">
    <h3 className="text-xl font-bold mb-4">Premium Features</h3>
    <p className="text-gray-600">Enhanced visual effects optimized for light themes.</p>
  </div>
</GlassCard>`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">API Reference</h2>
          <h3 className="text-xl font-medium mb-4">Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Property</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Default</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">children</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">React.ReactNode</td>
                  <td className="border border-gray-300 px-4 py-3">-</td>
                  <td className="border border-gray-300 px-4 py-3">Content rendered within the glass container</td>
                </tr>
                <tr className="">
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">displacementScale</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">number</td>
                  <td className="border border-gray-300 px-4 py-3">100</td>
                  <td className="border border-gray-300 px-4 py-3">Intensity of the liquid displacement effect (0-200)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">blurAmount</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">number</td>
                  <td className="border border-gray-300 px-4 py-3">0.01</td>
                  <td className="border border-gray-300 px-4 py-3">Blur intensity for the glass effect (0-1)</td>
                </tr>
                <tr className="">
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">cornerRadius</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">number</td>
                  <td className="border border-gray-300 px-4 py-3">999</td>
                  <td className="border border-gray-300 px-4 py-3">Border radius in pixels</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">className</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">string</td>
                  <td className="border border-gray-300 px-4 py-3">""</td>
                  <td className="border border-gray-300 px-4 py-3">Additional CSS classes for custom styling</td>
                </tr>
                <tr className="">
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">padding</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">string</td>
                  <td className="border border-gray-300 px-4 py-3">-</td>
                  <td className="border border-gray-300 px-4 py-3">CSS padding value (e.g., "16px", "1rem")</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">style</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">React.CSSProperties</td>
                  <td className="border border-gray-300 px-4 py-3">-</td>
                  <td className="border border-gray-300 px-4 py-3">Inline styles object</td>
                </tr>
                <tr className="">
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">shadowMode</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">boolean</td>
                  <td className="border border-gray-300 px-4 py-3">false</td>
                  <td className="border border-gray-300 px-4 py-3">Optimizes appearance for light backgrounds</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">onClick</td>
                  <td className="border border-gray-300 px-4 py-3 font-mono text-sm">{`() => void`}</td>
                  <td className="border border-gray-300 px-4 py-3">-</td>
                  <td className="border border-gray-300 px-4 py-3">Click event handler</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🎨</span>
                <h3 className="font-semibold text-black">Premium Design Language</h3>
              </div>
              <p className="text-gray-600">Faithfully recreates Apple's WWDC 2025 glassmorphism aesthetic with pixel-perfect attention to detail</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🌊</span>
                <h3 className="font-semibold text-black">Organic Liquid Animations</h3>
              </div>
              <p className="text-gray-600">SVG-powered blob animations that create mesmerizing, fluid visual effects</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🖱️</span>
                <h3 className="font-semibold text-black">Mouse-Responsive Interactions</h3>
              </div>
              <p className="text-gray-600">Dynamic animations that respond naturally to user cursor movement</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">📱</span>
                <h3 className="font-semibold text-black">Cross-Device Compatibility</h3>
              </div>
              <p className="text-gray-600">Seamlessly adapts to desktop, tablet, and mobile screen sizes</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🌙</span>
                <h3 className="font-semibold text-black">Intelligent Theme Support</h3>
              </div>
              <p className="text-gray-600">Automatically adjusts to dark and light themes with sophisticated color management</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-100 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">♿</span>
                <h3 className="font-semibold text-black">Accessibility First</h3>
              </div>
              <p className="text-gray-600">Respects prefers-reduced-motion and includes proper ARIA support</p>
            </div>
          </div>
        </section>

        {/* Customization */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Customization</h2>
          <p className="text-gray-300 mb-6">The component provides multiple layers of customization:</p>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Built-in Styling</h3>
            <p className="text-gray-300 mb-4">The component automatically handles:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Advanced backdrop blur filters with fallbacks</li>
              <li>Smooth CSS transitions and GPU-accelerated animations</li>
              <li>Responsive breakpoint adaptations</li>
              <li>System theme detection and adaptation</li>
              <li>High contrast mode compatibility</li>
              <li>Reduced motion accessibility compliance</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Custom Styling Options</h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Props-based customization</strong> - Use the provided props for common adjustments</li>
              <li><strong>CSS class extension</strong> - Add custom classes via the className prop</li>
              <li><strong>CSS custom properties</strong> - Override internal CSS variables for deep customization</li>
            </ol>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-medium mb-4 text-black">Example CSS Override</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto text-sm">
              <code>{`.my-custom-glass {
  --glass-opacity: 0.15;
  --glass-blur: 20px;
  --animation-duration: 3s;
}`}</code>
            </pre>
          </div>
        </section>

        {/* Technical Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Technical Requirements</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Browser Compatibility</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-black">Chrome/Edge</h4>
                <p className="text-gray-500">Version 76 and above</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-black">Firefox</h4>
                <p className="text-gray-500">Version 72 and above</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-black">Safari</h4>
                <p className="text-gray-500">Version 13 and above</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm text-gray-500">
                <strong>Note:</strong> The component requires backdrop-filter support for optimal glass effects. 
                Older browsers receive a graceful fallback with standard transparency effects.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Performance Considerations</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Uses hardware acceleration when available</li>
              <li>Optimized SVG rendering for smooth 60fps animations</li>
              <li>Minimal reflow impact through transform-based animations</li>
              <li>Efficient event handling with debounced mouse tracking</li>
            </ul>
          </div>
        </section>

                {/* Credits */}
                <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Credits & Thank You Notes</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🍎</span>
                <h3 className="font-semibold text-lg text-black">Apple Design Inspiration</h3>
              </div>
              <p className="text-gray-700">
                Special thanks to Apple for the incredible design inspiration from WWDC 2025. 
                Their innovative glassmorphism aesthetic and attention to detail continues to push the boundaries of modern UI design.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">💻</span>
                <h3 className="font-semibold text-lg text-black">Code Base Inspiration</h3>
              </div>
              <p className="text-gray-700 mb-3">
                This component was inspired by the excellent work from the{' '}
                <a 
                  href="https://github.com/rdev/liquid-glass-react" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 underline font-medium"
                >
                  liquid-glass-react
                </a>{' '}
                library. Their foundational approach to liquid glass effects provided valuable insights for creating this minimal version.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">👥</span>
                <h3 className="font-semibold text-lg text-black">Contributors</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Heartfelt appreciation to the amazing contributors who made this library possible:
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    VP
                  </div>
                  <div>
                    <p className="font-semibold">
                      <a 
                        href="https://github.com/viraj-perera-dev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        Viraj Perera
                      </a>
                    </p>
                    <p className="text-sm text-gray-600">Core contributor and maintainer</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    CM
                  </div>
                  <div>
                    <p className="font-semibold">
                      <a 
                        href="https://github.com/Cristian-301" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 underline"
                      >
                        Cristian Mihai
                      </a>
                    </p>
                    <p className="text-sm text-gray-600">Core contributor and maintainer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Contributing & Support</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-500 mb-4">
              We welcome contributions from the community! Whether it's bug reports, feature requests, or code contributions, 
              please feel free to fork the repository, create a feature branch, and submit a pull request with detailed description.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <strong>License:</strong> MIT License © developer-hub
              </p>
              <p className="text-sm text-gray-600">
                <strong>Questions or Issues?</strong> Check out our GitHub Issues or start a Discussion.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}