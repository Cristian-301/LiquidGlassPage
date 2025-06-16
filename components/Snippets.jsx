'use client';

import { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { Copy } from 'lucide-react'; // Optional: If you're using an icon library

export default function Snippets({ children, language = 'javascript', extraClass = '' }) {
    const codeRef = useRef(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (codeRef.current) {
            hljs.highlightElement(codeRef.current);
        }
    }, [children]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(children);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    };

    return (
        <div className={`relative rounded-md ${extraClass}`}>
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-white text-black text-sm px-2 py-1 rounded hover:bg-gray-200 transition-all"
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>

            <pre className="rounded-md overflow-x-auto  whitespace-pre-wrap">
                <code ref={codeRef} className={`language-${language}  font-mono whitespace-pre-wrap`}>
                    {children}
                </code>
            </pre>
        </div>
    );
}
