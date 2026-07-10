import type { SVGProps } from "react";

const base = (props: SVGProps<SVGSVGElement>) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
);
export const Calendar = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
);
export const Arrow = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Star = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
);
export const Pin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const Clock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Check = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M20 6 9 17l-5-5" /></svg>
);
export const Tooth = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 5.5c-1.6-1.6-3.2-2-4.7-2C5 3.5 3.5 5.4 3.5 8c0 2 .6 3.2 1.1 5.2.4 1.6.5 3 .8 4.6.2 1.4.6 2.7 1.5 2.7 1 0 1.2-1.2 1.5-2.8.3-1.5.4-2.9 1.3-2.9h.6c.9 0 1 1.4 1.3 2.9.3 1.6.5 2.8 1.5 2.8.9 0 1.3-1.3 1.5-2.7.3-1.6.4-3 .8-4.6.5-2 1.1-3.2 1.1-5.2 0-2.6-1.5-4.5-3.8-4.5-1.5 0-3.1.4-4.7 2Z" /></svg>
);
