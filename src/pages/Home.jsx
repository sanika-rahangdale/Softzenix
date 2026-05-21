import sanika from "../assets/team/sanika.jpg";
import suhani from "../assets/team/suhani.jpg";
import rishika from "../assets/team/rishika.jpg";
import vikas from "../assets/team/vikas.jpg";
import vishal from "../assets/team/vishal.jpg";
import { useState } from "react";

import {
  ArrowUpRight,
  Github,Phone, MapPin, Send, 
  Clock
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Globe,
  Layers,
  Palette,
  Code2,
  Smartphone,
  Search,
  Linkedin,
  Mail,
} from "lucide-react";

import PageTransition from "../components/PageTransition.jsx";
import ParticleField from "../components/ParticleField.jsx";
import Typewriter from "../components/Typewriter.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const stats = [
  { v: "50+", l: "Projects" },
  { v: "20+", l: "Clients" },
  { v: "99%", l: "Satisfaction" },
  { v: "AI", l: "Powered" },
];

const techs = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "AI / ML",
  "Cloud",
];

const why = [
  {
    icon: Code2,
    t: "Web Development",
    d: "Modern, scalable, and high-performance web applications designed for seamless digital experiences.",
  },

  {
    icon: Smartphone,
    t: "Mobile Development",
    d: "Powerful Android and iOS applications built for speed, usability, and cross-platform performance.",
  },

  {
    icon: Globe,
    t: "Digital Marketing",
    d: "Data-driven marketing strategies that increase brand visibility, engagement, and business growth.",
  },

  {
    icon: Layers,
    t: "Cloud Services",
    d: "Secure and scalable cloud infrastructure solutions optimized for modern businesses and startups.",
  },

  {
    icon: Search,
    t: "SEO Services",
    d: "Advanced SEO techniques to improve search rankings, organic traffic, and online visibility.",
  },

  {
    icon: Palette,
    t: "UI/UX Design",
    d: "Beautiful, user-focused interfaces crafted to deliver intuitive and engaging user experiences.",
  },
];

const team = [
  {
    name: "Er. Sanika Rahangdale",
    role: "Founder & Software Engineer (SDE)",
    college: "B.Tech, RGPV Bhopal",

    bio: "Visionary leader with a passion for building scalable software solutions and driving digital transformation.",

    skills: [
      "System Design",
      "React",
      "Node.js",
      "Python",
      "AWS",
      "DevOps",
      "AI",
    ],

    image: sanika,
    linkedin: "#",
    gmail: "mailto:sanika@gmail.com",
  },

  {
    name: "Er. Suhani Rahangdale",
    role: "Co-Founder & Software Engineer",

    college: "B.Tech, Oriental College Bhopal",

    bio: "Creative strategist dedicated to building modern digital experiences and innovative products.",

    skills: [
      "Full Stack",
      "React",
      "MongoDB",
      "Cloud",
      "UI/UX",
      "AI",
    ],

    image: suhani,
    linkedin: "#",
    gmail: "mailto:suhani@gmail.com",
  },

  {
    name: "Er. Rishika",
    role: "UI/UX Designer",

    college: "B.Des, Design Institute",

    bio: "Designing elegant interfaces with user-focused modern experiences and smooth interactions.",

    skills: [
      "Figma",
      "UI Design",
      "UX Research",
      "Wireframing",
      "Branding",
    ],

    image: rishika,
    linkedin: "#",
    gmail: "mailto:rishika@gmail.com",
  },

  {
    name: "Er. Vikas Sharma",
    role: "Full Stack Developer",

    college: "B.Tech, LNCT Bhopal",

    bio: "Expert in scalable MERN stack applications and backend architecture systems.",

    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "DevOps",
    ],

    image: vikas,
    linkedin: "#",
    gmail: "mailto:vikas@gmail.com",
  },
];

const portfolioProjects = [
  {
    category: "Web Development",
    title: "Skydoo Tour & Travel Website",
    description:
      "Modern travel booking platform with destination packages and responsive UI.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },

  {
    category: "Web Development",
    title: "MedBridge - Rural Health Appointment Website",
    description:
      "Healthcare platform connecting rural patients with doctors.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
  },

  {
    category: "App Development",
    title: "Vingo Food Delivery App",
    description:
      "Modern food ordering mobile app with live tracking.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },

  {
    category: "App Development",
    title: "MediGoods App",
    description:
      "Medicine delivery and pharmacy management application.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
  },

  {
    category: "UI/UX Design",
    title: "Evolve - ADHD Productivity App",
    description:
      "Minimal productivity app specially designed for ADHD users.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },

  {
    category: "UI/UX Design",
    title: "Agies Disaster Alerts App",
    description:
      "Emergency alert system UI for disaster notifications.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },

  {
    category: "UI/UX Design",
    title: "Globalantic Corporate Website",
    description:
      "Premium futuristic corporate website experience.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  },

  {
    category: "UI/UX Design",
    title: "Modern Ecommerce Platform",
    description:
      "Luxury ecommerce shopping experience with premium UI.",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546",
  },
];
const testimonials = [
  {
    name: "Ananya Kapoor",
    role: "Founder, NovaTech",
    q: "Softzenix delivered our MVP in record time with stunning design.",
  },

  {
    name: "Vikram Joshi",
    role: "CTO, FinEdge",
    q: "Their AI integration transformed our customer support overnight.",
  },

  {
    name: "Meera Nair",
    role: "Product Lead, Skylark",
    q: "Premium quality, smooth communication, futuristic UI.",
  },
];



export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

const filteredProjects =
  activeCategory === "All"
    ? portfolioProjects
    : portfolioProjects.filter(
        (project) => project.category === activeCategory
      );
  return (
  
      <PageTransition>

 
      {/* HERO */}
      
      <section className="relative min-h-[92vh] grid-bg overflow-hidden">

        <div className="absolute inset-0">
          <ParticleField />
        </div>

        <div className="
  absolute
  top-[-200px]
  left-1/2
  -translate-x-1/2
  w-[900px]
  h-[900px]
  bg-purple-500/20
  blur-[180px]
  rounded-full
"></div>

        <div className="absolute inset-0 bg-grad-radial pointer-events-none" />


<div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-extrabold tracking-tight mt-6 leading-[1.05]"
          >
            Featured Services <br />

            <Typewriter
              words={[
                "Smart Digital Solutions",
                "AI-Powered Apps",
                "Scalable SaaS",
                "Modern Web",
              ]}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto mt-6 text-texts text-lg"
          >
            We create scalable software, AI-powered systems,
            and modern web experiences for startups and businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary">
              Start Project <ArrowRight size={16} />
            </Link>

            <Link to="/services" className="btn-outline">
              Explore Services
            </Link>
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
     
      <section className="py-24 max-w-7xl mx-auto px-6">

        <SectionTitle
          eyebrow="Our Services"
          title="Future-Ready Digital Solutions"
          subtitle="Empowering businesses with scalable software, AI-driven innovation, and cutting-edge digital experiences."
        />

        <div className="
  absolute
  top-[-200px]
  left-1/2
  -translate-x-1/2
  w-[900px]
  h-[900px]
  bg-purple-500/20
  blur-[180px]
  rounded-full
  pointer-events-none
"></div>

        <div className="grid md:grid-cols-3 gap-6">

          {why.map((w, i) => (
            <motion.div
              key={w.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
             className="
card-soft
group
relative
overflow-hidden
border border-white/10
hover:border-brand/40
transition-all duration-500
hover:-translate-y-2
backdrop-blur-xl
"
            >

              <div className="w-12 h-12 rounded-xl bg-grad-brand grid place-items-center mb-4 group-hover:scale-110 transition">
                <w.icon size={20} />
              </div>

              <h3 className="font-display font-semibold text-lg">
                {w.t}
              </h3>

              <p className="text-texts text-sm mt-2">
                {w.d}
              </p>

            </motion.div>
          ))}

        </div>
      </section>
{/* TEAM */}

<section className="py-24 relative">

  <div className="max-w-7xl mx-auto px-6">

    <div className="
  absolute
  top-[-200px]
  left-1/2
  -translate-x-1/2
  w-[900px]
  h-[900px]
  bg-purple-500/20
  blur-[180px]
  rounded-full
  pointer-events-none
"></div>

    <SectionTitle
      eyebrow="Our Team"
      title="Meet the Experts"
      subtitl
      e="A passionate team of developers, designers, and innovators."
    />

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

      {team.map((m, i) => (

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="
group
relative
overflow-hidden
rounded-[28px]
border border-blue-500/20
bg-[#07152f]
hover:border-cyan-400/40
transition-all duration-500
hover:-translate-y-2
hover:shadow-2xl
hover:shadow-cyan-500/10
backdrop-blur-xl
"
        >

       <div className="relative h-[300px] overflow-hidden group">

  {/* IMAGE */}
  <img
    src={m.image}
    alt={m.name}
    className="
      w-full
      h-full
      object-cover
      transition duration-700
      group-hover:scale-105
    "
  />

  {/* DARK OVERLAY */}
  <div className="
    absolute inset-0
    bg-gradient-to-t
    from-black/80
    via-black/20
    to-transparent
  " />

  {/* BADGE */}
  <div className="absolute top-4 left-4 z-20">
    <span className="
      px-4 py-1
      rounded-full
      text-[11px]
      font-semibold
      tracking-wider
      bg-black/40
      border border-cyan-400/30
      text-cyan-300
      backdrop-blur-md
    ">
      LEADERSHIP
    </span>
  </div>

  {/* HOVER ICONS */}
  <div
    className="
      absolute bottom-5 left-5
      flex items-center gap-3
      opacity-0
      translate-y-5
      group-hover:opacity-100
      group-hover:translate-y-0
      transition-all duration-500
      z-20
    "
  >

    <a
      href={m.linkedin}
      target="_blank"
      rel="noreferrer"
      className="
        w-11 h-11
        rounded-xl
        bg-[#1b2640]/90
        backdrop-blur-md
        border border-white/10
        flex items-center justify-center
        text-white
        hover:bg-[#2563eb]
        hover:scale-110
        transition
      "
    >
      <Linkedin size={18} />
    </a>

    <a
      href={m.gmail}
      target="_blank"
      rel="noreferrer"
      className="
        w-11 h-11
        rounded-xl
        bg-[#1b2640]/90
        backdrop-blur-md
        border border-white/10
        flex items-center justify-center
        text-white
        hover:bg-[#2563eb]
        hover:scale-110
        transition
      "
    >
      <Mail size={18} />
    </a>

  </div>

</div>
          

        {/* CONTENT */}
<div className="bg-[#06142d] p-5">

  {/* NAME */}
  <h3 className="text-[20px] font-bold text-white leading-snug">
    {m.name}
  </h3>

  {/* ROLE */}
  <p className="text-[#3b82f6] text-[13px] font-semibold uppercase mt-2 leading-5">
    {m.role}
  </p>

  {/* COLLEGE */}
  <p className="text-gray-400 text-sm mt-3">
    🎓 {m.college}
  </p>

  {/* BIO */}
  <p className="text-gray-400 text-[14px] leading-7 mt-4">
    {m.bio}
  </p>

  {/* SKILLS */}
  <div className="flex flex-wrap gap-2 mt-5">

    {m.skills.map((skill, idx) => (
      <span
        key={idx}
        className="
          px-3 py-1
          rounded-md
          text-[10px]
          font-semibold
          uppercase
          bg-[#13284d]
          border border-white/10
          text-gray-300
        "
      >
        {skill}
      </span>
    ))}

  </div>

</div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

{/* PORTFOLIO */}

<section className="py-24 relative">

  <div className="max-w-7xl mx-auto px-6">

    <div className="
  absolute
  top-[-200px]
  left-1/2
  -translate-x-1/2
  w-[900px]
  h-[900px]
  bg-purple-500/20
  blur-[180px]
  rounded-full
  pointer-events-none
"></div>

    

    <SectionTitle
      eyebrow="Portfolio"
      title="Our Recent Projects"
      subtitle="Modern digital products crafted with innovation, creativity, and scalable technology."
    />
    

    {/* FILTER BUTTONS */}
    <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
      

      {[
        "All",
        "Web Development",
        "App Development",
        "UI/UX Design",
      ].map((category, i) => (

        <button
          key={i}
          onClick={() => setActiveCategory(category)}
          className={`
            px-7 py-3 rounded-full font-semibold transition-all duration-300

            ${
              activeCategory === category
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "bg-white/5 border border-white/10 text-gray-300 hover:border-blue-500/40 hover:text-white"
            }
          `}
        >
          {category}
        </button>

      ))}

    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {filteredProjects.map((project, i) => (

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
         className="
group
relative
overflow-hidden
rounded-[28px]
border border-blue-500/20
bg-[#07152f]
hover:border-cyan-400/40
transition-all duration-500
hover:-translate-y-2
hover:shadow-2xl
hover:shadow-cyan-500/10
backdrop-blur-xl
"
        >

          {/* IMAGE */}
          <div className="relative h-[240px] overflow-hidden">

            <img
              src={project.image}
              alt={project.title}
              className="
                w-full h-full object-cover
                group-hover:scale-110
                transition duration-700
              "
            />

            {/* OVERLAY */}
            <div className="
              absolute inset-0
              bg-black/50
              opacity-0
              group-hover:opacity-100
              transition
            " />
{/* HOVER ICONS */}
<div className="
  absolute inset-0
  flex items-center justify-center gap-4
  opacity-0
  group-hover:opacity-100
  transition duration-500
">

  {/* LIVE LINK */}
  <button className="
    w-12 h-12 rounded-full
    bg-white/10
    backdrop-blur-md
    border border-white/20
    flex items-center justify-center
    text-white
    hover:bg-blue-600
    hover:scale-110
    transition
  ">
    <ArrowUpRight size={20} />
  </button>

  {/* GITHUB */}
  <button className="
    w-12 h-12 rounded-full
    bg-white/10
    backdrop-blur-md
    border border-white/20
    flex items-center justify-center
    text-white
    hover:bg-blue-600
    hover:scale-110
    transition
  ">
    <Github size={20} />
  </button>

</div>
</div>

          {/* CONTENT */}
          <div className="p-6">

            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wide">
              {project.category}
            </p>

            <h3 className="text-2xl font-bold text-white mt-3 leading-snug">
              {project.title}
            </h3>

            <p className="text-gray-400 leading-7 mt-4 text-[15px]">
              {project.description}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>
</section>
     {/* Testimonials Section */}
     
<section className="py-24 px-6 relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand/20 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    <div className="
  absolute
  top-[-200px]
  left-1/2
  -translate-x-1/2
  w-[900px]
  h-[900px]
  bg-purple-500/20
  blur-[180px]
  rounded-full
  pointer-events-none
"></div>

    {/* Heading */}
    <div className="text-center mb-16">

      <span className="inline-block px-4 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium mb-4">
  Client Stories
</span>
<h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
  Trusted by Brands,
  <span className="grad-text">
    {" "}Loved by Clients
    </span>
    </h2>

<p className="text-texts mt-5 max-w-2xl mx-auto">
  Real experiences from founders, startups, and businesses
  who trusted Softzenix to bring their ideas to life.
</p>

    </div>

    {/* Moving Testimonials */}
    <div className="relative overflow-hidden">
      

      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >

        {[
          {
            name: "Aarav Sharma",
            role: "Startup Founder",
            text: "Amazing UI/UX and clean development. Highly recommended!",
          },
          {
            name: "Priya Mehta",
            role: "Business Owner",
            text: "Professional team with excellent communication skills.",
          },
          {
            name: "Rohan Verma",
            role: "Product Manager",
            text: "Our app performance and design improved drastically.",
          },
          {
            name: "Sneha Kapoor",
            role: "Entrepreneur",
            text: "They delivered beyond expectations with modern design.",
          },
          {
            name: "Aditya Singh",
            role: "CEO",
            text: "Fast delivery, scalable product, and premium experience.",
          },
          {
            name: "Neha Jain",
            role: "Marketing Lead",
            text: "Beautiful website and smooth animations everywhere.",
          },
          {
            name: "Kabir Malhotra",
            role: "Tech Founder",
            text: "The best development team we've worked with so far.",
          },

          /* Duplicate for smooth infinite loop */
          {
            name: "Aarav Sharma",
            role: "Startup Founder",
            text: "Amazing UI/UX and clean development. Highly recommended!",
          },
          {
            name: "Priya Mehta",
            role: "Business Owner",
            text: "Professional team with excellent communication skills.",
          },
          {
            name: "Rohan Verma",
            role: "Product Manager",
            text: "Our app performance and design improved drastically.",
          },
          {
            name: "Sneha Kapoor",
            role: "Entrepreneur",
            text: "They delivered beyond expectations with modern design.",
          },
          {
            name: "Aditya Singh",
            role: "CEO",
            text: "Fast delivery, scalable product, and premium experience.",
          },
          {
            name: "Neha Jain",
            role: "Marketing Lead",
            text: "Beautiful website and smooth animations everywhere.",
          },
          {
            name: "Kabir Malhotra",
            role: "Tech Founder",
            text: "The best development team we've worked with so far.",
          },
        ].map((item, index) => (

          <div
            key={index}
           className="
min-w-[320px]
max-w-[320px]
card-soft
p-6
rounded-3xl
border border-white/10
hover:border-brand/40
hover:-translate-y-2
transition-all duration-500
backdrop-blur-xl
hover:shadow-2xl
hover:shadow-brand/10
"
          >

            {/* Stars */}
            <div className="text-yellow-400 text-lg mb-4">
              ★★★★★
            </div>

            {/* Comment */}
            <p className="text-texts leading-relaxed">
              "{item.text}"
            </p>

            {/* User */}
            <div className="mt-6 flex items-center gap-4">

              {/* Logo / Avatar */}
              <div className="w-14 h-14 rounded-full bg-grad-brand flex items-center justify-center text-lg font-bold">
                {item.name.charAt(0)}
              </div>

              <div>
                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-sm text-texts">
                  {item.role}
                </p>
              </div>

            </div>

          </div>

        ))}

      </motion.div>

    </div>

  </div>
</section>
      {/* Contact Section */}
      
<section className="py-24 px-6 relative overflow-hidden">
  
  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand/20 blur-[120px] rounded-full"></div>

  <div className="max-w-6xl mx-auto relative z-10">

    <div className="
  absolute
  top-[-200px]
  left-1/2
  -translate-x-1/2
  w-[900px]
  h-[900px]
  bg-purple-500/20
  blur-[180px]
  rounded-full
  pointer-events-none
"></div>
    
    {/* Heading */}
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium mb-4">
        Contact Us
      </span>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Let’s Build Something
        <span className="bg-gradient-to-r from-brand to-purple-400 bg-clip-text text-transparent">
          {" "}Amazing
        </span>
      </h2>

      <p className="text-texts mt-5 max-w-2xl mx-auto">
        Have a project idea or need a modern website/app for your business?
        Send us a message and our team will contact you within 24 hours.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* Left Info Cards */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-5"
      >
        {[
          {
            icon: Mail,
            title: "Email",
            desc: "softzenix@gmail.com",
          },
          {
            icon: Phone,
            title: "Phone",
            desc: "+91 8468958829",
          },
          {
            icon: MapPin,
            title: "Location",
            desc: "Bhopal, Madhya Pradesh, India",
          },
           {
            icon: Clock,
            title: "Working Hours",
            desc: "9.00 AM - 6.00 PM (Mon - Fri)",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="card-soft p-5 flex items-start gap-4 hover:scale-[1.02] transition"
          >
            <div className="w-14 h-14 rounded-2xl bg-grad-brand flex items-center justify-center">
              <item.icon size={22} />
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-texts">
                {item.title}
              </p>

              <h4 className="text-lg font-semibold mt-1">
                {item.desc}
              </h4>
            </div>
          </div>
        ))}
      </motion.div>

     {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="card-soft grad-border p-8 space-y-5"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand w-full"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand w-full"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand w-full"
        />

        <textarea
          rows={5}
          placeholder="Write your message..."
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand w-full resize-none"
        ></textarea>

        <button
          type="submit"
          className="btn-primary w-full justify-center flex items-center gap-2"
        >
          Send Message
          <Send size={18} />
        </button>
      </motion.form>

    </div>
  </div>
</section>  is section me jo bg color h vo mujhe har section me chahiy

    </PageTransition>
  );
}
