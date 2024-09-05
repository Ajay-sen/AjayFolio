import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    unstop,
    siemens,
    codealpha,
    esarthi,
    wanderlust,
    chatapp,
    healthcare,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Competitive Programmer",
      icon: backend,
    },
    {
      title: "AI/ML Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Testing and Content Development Intern",
      company_name: "Unstop",
      icon: unstop,
      iconBg: "#383E56",
      date: "July 2024 - Sept 2024",
      points: [
        "Conduct thorough code reviews to detect plagiarism, identify potential bugs, and ensure adherence to best coding practices. ",
        " Ensure error-free execution by resolving runtime issues, syntax errors, and logic flaws, while improving code readability and maintainability.",
        "Ensure that solutions meet performance benchmarks across test cases, including edge cases, for robustness and accuracy.",
       
      ],
    },
    {
      title: "SSP Siemens Scholar",
      company_name: "Siemens",
      icon: siemens,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Feb 2026",
      points: [
        "Completed team-based projects and courses in Web Development, IoT, and AI, enhancing practical knowledge and collaboration skills in cutting-edge technologies.",
        "Participated in in-depth, offline mechatronics training sessions in Mumbai, gaining real-world exposure to advanced systems and machinery integration.",
        "Received one-on-one mentorship from industry experts and attended Growth Center and RIPE sessions, fostering both technical expertise and overall professional development.",
       
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "CodeAlpha",
      icon: codealpha,
      iconBg: "#383E56",
      date: "Dec 2023 - Jan 2024",
      points: [
        "Built an interactive food recipe website using HTML, CSS, Bootstrap, and JavaScript, integrated with the FreeMealDB API to enable users to search for recipes based on ingredients and preferences.",
        "Designed and implemented a task dashboard using HTML, CSS, JavaScript, and NodeJS, enabling users to efficiently manage tasks with a clean, intuitive interface.",
        "Coded and tested projects in Visual Studio Code and deployed them on GitHub, ensuring seamless version control and accessibility for collaboration and future updates.",
       
      ],
    },
    {
      title: "Founder",
      company_name: "E-Sarthi",
      icon: esarthi,
      iconBg: "#E6DEDD",
      date: "Aug 2024 - Present",
      points: [
        "Established a customer service platform providing 24/7 support for online orders, bookings, buying, and selling, offering solutions at minimal cost to customers.",
        "Led and managed diverse teams across marketing, customer service, and technical departments, organizing meetings, setting objectives, and driving effective collaboration.",
        "Developed operational strategies, ensured smooth communication across departments, and maintained high customer satisfaction through continuous team coordination and support.",
       
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "To Kaise H Aaplog! Yaar, aapka portfolio site killer lag raha hai! Design aur functionality dono hi top-notch hain. Great job!",
      name: "Carry Minati",
      designation: "Youtuber",
      company: "Acme Co",
      image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-18024,resizemode-75,msid-102070316/news/new-updates/carryminati-meet-the-charismatic-indian-youtuber-redefining-online-comedy/carryminati.jpg",
    },
    {
      testimonial:
        " Mere Bhaiyon aur Beheno !! ye portfolio site dekh kar mujhe bahut khushi hui. desh mein aise hi pragati aur naya soch ki zarurat hai ",
      name: "Narendra Modi",
      designation: "PM",
      company: "DEF Corp",
      image: "https://www.shutterstock.com/image-photo/new-delhi-india-sep-28-260nw-2367229259.jpg",
    },
    {
      testimonial:
        "Violence. Violence. Violence. I don’t like it. I avoid. But… Violence likes me. I can’t avoid it, And so did i liked your site a KILLER one!",
      name: "Rocky Bhai",
      designation: "CTOSultan of KGF",
      company: "456 Enterprises",
      image: "https://i.pinimg.com/736x/07/e8/ca/07e8ca6f67c87dbcab987172490170a4.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Healthcare Innovation",
      description:
        "Developed a fullstack hospital website featuring user dashboards, appointment scheduling, nutrition tracking, and a fitness blog. Designed and implemented the frontend using ReactJS and TailwindCSS, ensuring a responsive and user-friendly interface. Utilized MongoDB for data management and BcryptJS for secure authentication.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: healthcare,
      source_code_link: "https://healthcare-2-2dje.onrender.com/",
    },
    {
      name: "Wanderlust",
      description:
        "Developed a fullstack real estate business website allowing users to buy, sell, and manage property details. Enabled account creation, property listings, and information retrieval using HTML, CSS, NodeJS, Bootstrap, and ExpressJS. Explored middleware and worked extensively with APIs to enhance functionality and user experience.",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: wanderlust,
      source_code_link: "https://wanderlust-1-9s1g.onrender.com/listings",
    },
    {
      name: "lets Chat!",
      description:
        "Developed a fullstack chatting app featuring one-to-one and group chats, group creation, and a dark mode option. Implemented authorization and authentication using BcryptJS to ensure secure user access and interactions.",
      tags: [
        {
          name: "reactJS",
          color: "blue-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "green-text-gradient",
        },
        {
          name: "SocketIO",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/Ajay-sen/Chat_App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };