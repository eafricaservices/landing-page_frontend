

// This file contains the definition of the Button component and its props.
// The Button component is a reusable UI element that can be customized with different sizes, colors, and click actions.

export type ButtonProps = {
    label: string;
    size?: 'sm' | 'md' | 'lg';
    bgColor?: string;      
    textColor?: string;    
    hoverColor?: string;   
    onClick?: () => void;
    type?: 'button' | 'submit';
  };
  
  export type signinProps = {
      className?: string; 
  }
  export type patnerCardProps = {
      title: string;
      description?: string;
      description2?: string;
      imageUrl: string;
      className?: string; 
      children?: React.ReactNode;
  };
  export type ImageProps = {
      src: string;
      alt: string;
      width?: number;
      height?: number;
      className?: string;
  };


export const stats = [
    { value: "100+", label: "Professionals Trained" },
    { value: "8+", label: "African Countries Active" },
    { value: "20+", label: "Companies Trust Us" },
    { value: "85%", label: "Placement Success Rate" },
    { value: "100%", label: "Certified in CX, IoT & PM" }
  ];



export const trustBullets = [
"1,000+ Trained Across Africa",
"Trusted By 20+ Companies",
"Proven Results In Sales, CX, And Operational Efficiency",
"Vetted, Job-Ready Talent Pool",
"Led By Industry Professionals With Real-World Experience",
];


export const serviceCards = [
    {
    title: "Workforce Training & Development",
    text: "Customized Soft + Technical Training For Modern Teams.",
    img: "/trust1.webp",
    },
    {
    title: "Talent Sourcing & Staffing",
    text: "Hire Pre-Vetted Junior–Mid Professionals From Our Pool.",
    img: "/trust2.webp",
    },
    {
    title: "Consulting & Strategy",
    text: "CX Design, AI Task Automation, And Digital Transformation",
    img: "/trust3.webp",
    },
    {
    title: "Employer Branding Services",
    text: "Optimize Your Presence On LinkedIn And Attract Talent.",
    img: "/trust4.webp",
    },
];