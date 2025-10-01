 "use client"
import React from "react";
import Image from "next/image";
import { Card } from "@/app/ui/Card";
import { roboto_condensed } from "@/app/ui/fonts";
import { motion } from "framer-motion";
import { useState } from "react";
import { useIsMobile } from "./hooks/useIsMobile";



const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };


export default function ServiceSection() {
  return (
    <div className={`${roboto_condensed.className} flex flex-col max-w-[90%] md:max-w-[90%] mb-7 mx-auto justify-center items-center space-y-10`}>
      <div className="text-center max-w-full mb-6">
        <h1 className="text-3xl text-black md:text-4xl font-bold mb-4">OUR SERVICES</h1>
        <p className="text-sm md:text-2xl text-black">
          E-Africa equips individuals with job-ready skills and helps organizations build better teams        
          through training, consulting, and talent sourcing.
        </p>
      </div>

      <div className="w-full relative">
        <Card className="w-full max-w-full mx-auto p-4 bg-transparent border-none shadow-[0_0_10px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col md:flex-row gap-8 mb-12 ">
            <ServiceCard 
            image="/service1.webp"
            title="Workforce Training & Development"
            description="Equip your team with in-demand soft and technical skills through structured, practical training programs.Soft Skills: Sales, Communication, Project Management, Customer Success
            Technical Skills: CRM, Prompt Engineering, AI Tools, IoT Basics"
            direction="left"
             />
            <ServiceCard
              direction="right"
              image="/service-2.webp"
              title="Talent Pool & Placement"
              description="Qualified individuals are added to a live talent pool where partner companies can recruit directly. Easy application via form profile + CV review, visibility to hiring partners"
            />
          </div>
          <WideServiceCard
            image="/service-3.webp"
            title="CX & Strategy Consulting"
            description="Build a customer-centric company with expert-designed CX systems, playbooks, and support team coaching. Onboarding Systems, CSM Playbook Design and CX Coaching & Feedback Loops"
          />
        </Card>
      </div>

      <div className="w-full relative">
        <Card className="w-full max-w-full mx-auto p-4 bg-transparent border-none  shadow-[0_0_10px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <ServiceCard
              direction="left"
              image="/service4.webp"
              title="Consulting & Strategy"
              description="Work with our experts to streamline your business with digital transformation, automation, and growth strategies. AI Task Automation, customer Success Optimization, process Mapping, IoT Efficiency Audits"
            />
            <ServiceCard
              direction="right"
              image="/service-5.webp"
              title="Employer Branding & LinkedIn Strategy"
              description="Attract better talent and improve your visibility with personalized employer branding and LinkedIn optimization. Company Page Optimization, job Marketing Campaigns, content Strategy & Visual Branding"
            />
          </div>
          <WideServiceCard
            image="/service-6.webp"
            title="Career Coaching & Mentorship"
            description="Pair learners with coaches or mentors to help them stay accountable, build confidence, and transition successfully into new roles. Personalized support, group coaching options, accountability system"
          />
        </Card>
      </div>

      <div className="w-full relative text-black">
        <Card className="w-full max-w-full mx-auto p-4 bg-transparent border-none shadow-[0_0_10px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <ServiceCard
              direction="left"
              image="/service-7.webp"
              title="Training for Individuals"
              description="Help individuals develop job-ready skills through hands-on, expert-led courses designed for the African market. Free & premium training options, mentorship & accountability partners, remote learning and community access"
            />
            <ServiceCard
              direction="right"
              image="/service-8.webp"
              title="Talent Sourcing & Staffing"
              description="Hire pre-vetted junior and mid-level professionals across Africa for remote, hybrid, or on-site roles. Talent from Nigeria, Ghana, Kenya, Cameroon, and beyond, cultural-fit and onboarding support included"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}



function ServiceCard({
  image,
  title,
  description,
  direction = "left",
}: {
  image: string;
  title?: string;
  description?: string;
  direction?: "left" | "right";
}) {
  const [hovered, setHovered] = useState(false);
  const isMobile = useIsMobile();
  const variant = direction === "left" ? fadeLeft : fadeRight;

  return (
    <motion.div
      className="relative text-black w-full md:w-1/2 aspect-[4/3] h-[335px] sm:h-[100%] overflow-hidden rounded-xl"
      variants={variant}
      initial="hidden"
      animate={{
        scale: hovered ? 1.06 : 1,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      transition={{ duration: 0.9 }}
      whileInView="visible"
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title || "Service"}
          fill
          className="object-cover"
        />
      </div>

      {title && description && (
        <>
          {isMobile ? (
            <div className="absolute bottom-0 w-full backdrop-blur-sm bg-white/50 px-4 py-6">
              <div className="flex flex-col justify-center items-start space-y-2">
                <h2 className="font-bold text-base text-black sm:text-lg md:text-2xl">
                  {title}
                </h2>
                <p className="text-sm text-black md:text-lg">{description}</p>
              </div>
            </div>
          ) : (
            <motion.div
              animate={{ y: hovered ? "0%" : "55%" }}
              transition={{ type: "spring", stiffness: 600, damping: 52 }}
              className="absolute bottom-0 w-full md:h-40 backdrop-blur-md bg-white/70 px-4 py-6"
            >
              <div className="flex flex-col justify-center items-start space-y-5">
                <h2 className="font-bold text-base sm:text-lg md:text-2xl truncate">
                  {title}
                </h2>
                <p className="text-sm md:text-lg line-clamp-2">{description}</p>
              </div>
            </motion.div>
          )}
        </>
      )}
    </motion.div>
  );
}


function WideServiceCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative text-black w-full aspect-[5/2] h-[335px] sm:h-[100%] overflow-hidden rounded-xl"
      variants={fadeUp}
      initial="hidden"
      animate={{
        scale: !isMobile && hovered ? 1.06 : 1,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      transition={{ duration: 0.9 }}
      whileInView="visible"
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />

      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title || "Service"}
          fill
          className="object-cover"
        />
      </div>

      {title && description && (
        <>
          {isMobile ? (
            <div className="absolute bottom-0 w-full backdrop-blur-md bg-white/50 px-4 py-6">
              <div className="flex flex-col justify-center items-start space-y-5">
                <h2 className="font-bold text-base sm:text-lg md:text-2xl">
                  {title}
                </h2>
                <p className="text-sm mt-3.5 md:text-lg">{description}</p>
              </div>
            </div>
          ) : (
            <motion.div
              animate={{ y: hovered ? "0%" : "55%",
                marginBottom: hovered ? 0 : 20
               }}
              transition={{ type: "spring", stiffness: 600, damping: 52 }}
              className={`absolute bottom-0 w-full backdrop-blur-md bg-white/70 px-4 py-6  }`}
            >
              <div className="flex flex-col text-black justify-center items-start space-y-2">
                <h2 className="font-bold text-black text-base sm:text-lg md:text-2xl">
                  {title}
                </h2>
                <p className="text-sm mt-2.5 text-black md:text-lg">{description}</p>
              </div>
            </motion.div>
          )}
        </>
      )}
    </motion.div>
  );
}



