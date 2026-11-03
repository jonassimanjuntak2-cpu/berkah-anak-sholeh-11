import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({ math, block = false, className = '' }) => {
  const renderedHtml = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
        output: 'html',
      });
    } catch {
      // Infallible fallback: format superscripts, subscripts, fractions cleanly without raw latex codes
      const cleanFallback = math
        .replace(/\\text\{([^}]+)\}/g, '$1')
        .replace(/\\cdot/g, '·')
        .replace(/\\times/g, '×')
        .replace(/\\le/g, '≤')
        .replace(/\\ge/g, '≥')
        .replace(/\\approx/g, '≈')
        .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
        .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
        .replace(/\\theta/g, 'θ')
        .replace(/\\alpha/g, 'α')
        .replace(/\\omega/g, 'ω')
        .replace(/\\Sigma/g, 'Σ')
        .replace(/\\Delta/g, 'Δ')
        .replace(/\\tau/g, 'τ')
        .replace(/\\pi/g, 'π')
        .replace(/\\quad/g, ' ')
        .replace(/\\implies/g, '=>')
        .replace(/\\sin/g, 'sin')
        .replace(/\\cos/g, 'cos')
        .replace(/\\tan/g, 'tan')
        .replace(/\\/g, '');

      return `<span class="italic font-serif">${cleanFallback}</span>`;
    }
  }, [math, block]);

  return (
    <span
      className={`inline-block ${block ? 'my-2 block text-center overflow-x-auto py-1' : ''} ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};
