export const profile = {
  name: "Muhammad Ali Butt",
  shortName: "Ali Butt",
  title: "Full Stack Developer",
  titleShort: "full stack developer",
  location: "Lahore, Punjab, Pakistan",
  email: "alliybutt3@gmail.com",
  phone: "+923230112504",
  phoneDisplay: "+92 323 0112504",
  photo: "/assets/images/profile.jpg",
  linkedin: "https://www.linkedin.com/in/muhammad-ali-butt-1a7758299",
  heroText:
    "I build scalable web applications with React, Laravel, MERN, and Docker — clean UI on the front, solid APIs and databases on the back.",
  aboutText:
    "I'm a Full Stack Developer based in Lahore with hands-on experience building modern web apps. I work across React.js, Laravel, PHP, Node.js, Express, MongoDB, MySQL, and Docker — from responsive interfaces to reliable backends and containerized deployments. I've shipped features for startups and software houses across travel, healthcare, fintech, and education products.",
  aboutHighlights: [
    "MERN Stack Apps",
    "React.js Frontend",
    "Laravel & PHP Backend",
    "Docker & MySQL",
  ],
  stats: {
    years: 2,
    projects: 15,
    satisfaction: 98,
  },
  // Experience: ArhamSoft confirmed by you as current workplace.
  // Older roles matched from LinkedIn public Experience section.
  experience: [
    {
      years: "Present",
      title: "Full Stack Developer",
      company: "ArhamSoft (Pvt) Ltd",
      location: "Lahore, Punjab, Pakistan",
    },
    {
      years: "Mar 2025 – 2025",
      title: "Junior Web Developer",
      company: "Eye4Tech (Pvt Ltd)",
      location: "Lahore, Punjab, Pakistan",
    },
    {
      years: "Dec 2024 – Mar 2025",
      title: "Back End Developer Intern",
      company: "Eye4Tech (Pvt Ltd)",
      location: "Lahore, Punjab, Pakistan",
    },
    {
      years: "Sep 2024 – Dec 2024",
      title: "Back End Developer",
      company: "Consecutive Bytes",
      location: "Lahore, Punjab, Pakistan",
    },
  ],
  education: [
    {
      years: "2020 – 2024",
      title: "Bachelor's in Information Technology",
      school: "University of Education, Lahore",
      location: "Lahore, Punjab, Pakistan",
    },
  ],
  services: [
    {
      number: "01.",
      title: "Full Stack Web Development",
      text: "End-to-end web apps with React frontend and Laravel/Node backends.",
    },
    {
      number: "02.",
      title: "MERN Stack Development",
      text: "MongoDB, Express, React, and Node.js apps with clean APIs.",
    },
    {
      number: "03.",
      title: "Laravel Backend & APIs",
      text: "Secure APIs, auth, and business logic with Laravel & PHP.",
    },
    {
      number: "04.",
      title: "MySQL & MongoDB",
      text: "Structured schemas and data flows for scalable products.",
    },
    {
      number: "05.",
      title: "Dockerized Deployments",
      text: "Containerized setups for consistent local and production environments.",
    },
    {
      number: "06.",
      title: "UI Implementation",
      text: "Pixel-clean layouts converted into fast, usable interfaces.",
    },
  ],
  skills: [
    { image: "/assets/images/skill1.png", name: "Docker", percent: "85%" },
    { image: "/assets/images/skill2.png", name: "React.js", percent: "90%" },
    { image: "/assets/images/skill3.png", name: "Node.js", percent: "88%" },
    { image: "/assets/images/skill4.png", name: "Express", percent: "86%" },
    { image: "/assets/images/skill5.png", name: "MongoDB", percent: "84%" },
    { image: "/assets/images/skill6.png", name: "Laravel", percent: "88%" },
    { image: "/assets/images/skill7.png", name: "MySQL", percent: "86%" },
    { image: "/assets/images/skill8.png", name: "PHP", percent: "85%" },
  ],
  projects: [
    {
      slug: "get-alpha",
      title: "Get Alpha",
      tag: "Laravel / FinTech",
      image: "/assets/images/project-getalpha-home.png",
      gallery: [
        {
          src: "/assets/images/project-getalpha-home.png",
          label: "Homepage",
        },
        {
          src: "/assets/images/project-getalpha-price-page.png",
          label: "Pricing Plans Page",
        },
        {
          src: "/assets/images/project-getalpha-login.png",
          label: "Login Page",
        },
        {
          src: "/assets/images/project-getalpha-register.png",
          label: "Register Page",
        },
      ],
      url: "https://www.getalpha.net/",
      description:
        "A Laravel-based stock research platform with smart price targets, portfolio strategies, buy lists, and subscription plans for S&P 500, NASDAQ 100, and Dow 30 investors.",
      details:
        "Get Alpha is a FinTech web platform built with Laravel and templates. It helps investors discover ranked stock opportunities across the S&P 500, NASDAQ 100, and Dow 30 using quantitative price targets, diversified portfolio strategies, watch lists, buy lists, and paid subscription plans.",
      highlights: [
        "Laravel + Blade Templates",
        "Smart Price Targets",
        "Portfolio Strategies",
        "Subscription Plans",
      ],
      reverse: false,
    },
    {
      slug: "curehotline",
      title: "CureHotline",
      tag: "MERN / Healthcare",
      image: "/assets/images/project-curehotline-home.png",
      gallery: [
        {
          src: "/assets/images/project-curehotline-home.png",
          label: "Homepage / Patient Landing",
        },
        {
          src: "/assets/images/project-curehotline-doctor-signup.png",
          label: "Doctor Signup (NPI Registration)",
        },
        {
          src: "/assets/images/project-curehotline-doctor-login.png",
          label: "Doctor / User Login",
        },
        {
          src: "/assets/images/project-curehotline-prescription.png",
          label: "Prescription Refill Page",
        },
        {
          src: "/assets/images/project-curehotline-faqs.png",
          label: "FAQs Page",
        },
        {
          src: "/assets/images/project-curehotline-contact.png",
          label: "Contact Page",
        },
        {
          src: "/assets/images/project-curehotline-about.png",
          label: "About Page",
        },
      ],
      url: "https://demo.curehotline.com/",
      description:
        "A MERN stack telehealth platform with doctor and patient panels — domain-based doctor clinics, specialty setup, and consultation booking via video call or live form sessions.",
      details:
        "CureHotline is a multi-role healthcare platform. Doctors create accounts, admins approve them and assign custom domains, then doctors complete setup with medical specialties. Patients register on a doctor's domain and book consultations through video calling or live form sessions. Built with the MERN stack for scalable doctor and user panels.",
      highlights: [
        "MERN Stack (MongoDB, Express, React, Node)",
        "Doctor + Patient Panels",
        "Admin Domain Assignment",
        "Video & Live Form Consultations",
      ],
      reverse: true,
    },
    {
      slug: "bhsusa-mrt",
      title: "Brown Harris Stevens (BHSUSA)",
      tag: "Laravel / Livewire / Typesense",
      image: "/assets/images/project-bhsusa-home.png",
      gallery: [
        {
          src: "/assets/images/project-bhsusa-home.png",
          label: "Homepage & Property Search",
        },
        {
          src: "/assets/images/project-bhsusa-for-sale.png",
          label: "For Sale Map + Listings Search",
        },
        {
          src: "/assets/images/project-bhsusa-agents.png",
          label: "Agent Finder",
        },
        {
          src: "/assets/images/project-bhsusa-neighborhood.png",
          label: "Neighborhoods Explorer",
        },
        {
          src: "/assets/images/project-bhsusa-new-listings.png",
          label: "New Listings",
        },
        {
          src: "/assets/images/project-bhsusa-about.png",
          label: "About Brown Harris Stevens",
        },
        {
          src: "/assets/images/project-bhsusa-contact.png",
          label: "Contact Page",
        },
      ],
      url: "https://staging-mrt-bhsusa.superk.dev/",
      description:
        "Luxury real estate platform for Brown Harris Stevens with map-based listings, agent search, and Typesense-powered fast search — built with Laravel and Livewire.",
      details:
        "A large-scale real estate web platform featuring property search across NYC, Hamptons, Westchester, Miami, Palm Beach and more. Includes interactive map listings, filters, agent finder, neighborhoods, and content pages. Built with Laravel + Livewire for reactive UI and Typesense for high-performance search.",
      highlights: [
        "Laravel + Livewire",
        "Typesense Fast Search",
        "Map + Listings Experience",
        "Agent & Neighborhood Modules",
      ],
      reverse: false,
    },
    {
      slug: "humanop",
      title: "HumanOp",
      tag: "React + Laravel",
      image: "/assets/images/project-humanop-home.png",
      gallery: [
        {
          src: "/assets/images/project-humanop-home.png",
          label: "Homepage / Nature Map Intro",
        },
        {
          src: "/assets/images/project-humanop-app.png",
          label: "Assessment App Entry",
        },
        {
          src: "/assets/images/project-humanop-nexus.png",
          label: "Nexus Community Workshops",
        },
        {
          src: "/assets/images/project-humanop-optimization.png",
          label: "Human Optimization Overview",
        },
        {
          src: "/assets/images/project-humanop-ctho.png",
          label: "CTHO Certification",
        },
        {
          src: "/assets/images/project-humanop-about.png",
          label: "About Page",
        },
        {
          src: "/assets/images/project-humanop-contact.png",
          label: "Contact Page",
        },
      ],
      url: "https://humanop.com/",
      description:
        "A React + Laravel personality platform where users take a Nature Map assessment, get a personalized personality read, and receive a 90-day feedback plan.",
      details:
        "HumanOp is a human-performance platform built with React and Laravel. Users complete a free Nature Map assessment, receive a personalized personality analysis across multiple dimensions, and get guided 90-day feedback planning. The ecosystem also includes Nexus workshops, HAi coaching intelligence, and professional certification tracks.",
      highlights: [
        "React + Laravel Stack",
        "Personality Assessment Engine",
        "90-Day Feedback Plan",
        "Nature Map Dimensions",
      ],
      reverse: true,
    },
    {
      slug: "alhamd-tours",
      title: "Al Hamd Tours",
      tag: "Travel / Umrah Packages",
      image: "/assets/images/project-alhamd-home.png",
      gallery: [
        {
          src: "/assets/images/project-alhamd-home.png",
          label: "Homepage / Package Finder",
        },
        {
          src: "/assets/images/project-alhamd-packages.png",
          label: "All Umrah Packages",
        },
        {
          src: "/assets/images/project-alhamd-3star.png",
          label: "3 Star Umrah Packages",
        },
        {
          src: "/assets/images/project-alhamd-5star.png",
          label: "5 Star Umrah Packages",
        },
        {
          src: "/assets/images/project-alhamd-hajj.png",
          label: "Hajj Guide",
        },
        {
          src: "/assets/images/project-alhamd-about.png",
          label: "About Us",
        },
        {
          src: "/assets/images/project-alhamd-contact.png",
          label: "Contact Us",
        },
      ],
      url: "https://www.alhamdtours.co.uk/",
      description:
        "UK-based Hajj & Umrah travel website with package search, seasonal deals, guides, and enquiry flows for travelers booking from London and across the UK.",
      details:
        "Al Hamd Tours is a travel booking platform focused on Umrah and Hajj packages from the UK. It includes package browsing by month and hotel star rating, Hajj/Umrah guides, ziyarat and transport pages, and contact/callback enquiry options for customers.",
      highlights: [
        "Umrah Package Listings",
        "Seasonal Package Filters",
        "Hajj & Umrah Guides",
        "Enquiry / Callback Flow",
      ],
      reverse: false,
    },
    {
      slug: "echo-fine-properties",
      title: "Echo Fine Properties",
      tag: "WordPress / Real Estate",
      image: "/assets/images/project-echofine-placeholder.svg",
      gallery: [
        {
          src: "/assets/images/project-echofine-placeholder.svg",
          label: "Property Platform Overview",
        },
      ],
      url: "https://www.echofineproperties.com/",
      description:
        "A WordPress real estate website with responsive property listings, CRM and lead management integrations, SEO, and performance-focused UX across desktop and mobile.",
      details:
        "Key responsibilities included customizing WordPress functionality, implementing responsive front-end designs, optimizing website performance, ensuring cross-browser compatibility, and integrating third-party tools for CRM, property listings, and lead management. Special attention was given to SEO best practices, page speed optimization, and creating a user-friendly experience across desktop and mobile devices.",
      highlights: [
        "WordPress + PHP Customization",
        "Responsive Front-End Design",
        "CRM / Listings / Lead Integrations",
        "SEO & Performance Optimization",
      ],
      technologies: [
        "WordPress",
        "PHP",
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "MySQL",
        "REST APIs",
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Third-Party Integrations",
      ],
      reverse: true,
    },
  ],
  blogs: [
    {
      image: "/assets/images/blog1.png",
      title: "What I Learned About Large Language Models (LLMs)",
      tags: ["AI", "Learning"],
    },
    {
      image: "/assets/images/blog2.png",
      title: "How Tokenization Works in ChatGPT and Other LLMs",
      tags: ["AI", "LLM"],
    },
  ],
  contactPoints: [
    "Full Stack Developer · React & Laravel",
    "MERN + PHP / MySQL",
    "Docker & API Development",
    "Clean, Maintainable Code",
  ],
};
