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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "Web Designer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "FrontEnd Developer",
    icon: backend,
  },
  {
    title: "UI/UX Creator",
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
  
];

const experiences = [
  {
    title: "Beginning",
    company_name: "From Basics",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2018 - March 2020",
    points: [
      "My journey began in 2018 when I first delved into the world of web development.",
      "With a curiosity for building websites, I started learning the fundamentals of HTML and CSS.",
      "As I acquired the necessary skills, I began crafting my own projects, experimenting with different layouts, and exploring various design concepts.",
      "It was a thrilling experience to see my ideas come to life on the screen, and I eagerly continued to expand my knowledge.",
    ],
  },
  {
    title: "Web Designer at ScriberHive",
    company_name: "Creating Impactful Designs",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Jan 2021",
    points: [
      "In 2018, I joined ScriberHive as a Web Designer. My role involved developing responsive websites that adhered to web standards and ensured cross-browser compatibility.",
      "I utilized tools like Adobe XD and Figma to create wireframes and mockups, effectively communicating design ideas.",
      "Collaborating with developers, I implemented design elements and functionalities using HTML5, CSS3, and JavaScript. My work also involved enhancing user experience through usability testing and iterative design improvements.",
    ],
  },
  {
    title: "Web Designer at SICIPL",
    company_name: "Leading Design Initiatives",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2021 - May 2024",
    points: [
      "From February 2021, I took on the role of a Web Designer at SICIPL. Here, I led a team of designers in creating visually compelling and user-friendly websites.",
      "My responsibilities included conducting client meetings, utilizing tools like Sketch and Photoshop for advanced design tasks, and implementing SEO strategies to enhance website visibility.",
      "I also ensured that all websites adhered to WCAG standards and conducted A/B testing to optimize web pages for better performance and user engagement.",
    ],
  },
  {
    title: "Front-End developer",
    company_name: "ThreeJS",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "But my thirst for knowledge didn't stop there. Eager to push the boundaries of my skills, I ventured into the world of ThreeJS, a JavaScript library for creating 3D graphics in the browser.",
      "Although I found it to be a more challenging domain, I remained determined to learn and improve.",
      "I embraced tutorials, documentation, and online resources to grasp the intricacies of ThreeJS and explore the possibilities of creating immersive and visually stunning 3D experiences.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "My first goal is to become a skilled Full-stack Developer. This involves mastering both front-end and back-end development technologies.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "My second goal is to work and learn with renowned companies like Google and Microsoft. Aim to gain industry experience and learn from the best.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "My third goal is to build my own company. Once I have gained experience and expertise through working with reputable organizations.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shopty",
    description:
      "Shopty.in is an e-commerce website that serves as an online store specializing in customized t-shirts. A platform where users can browse through a wide range of t-shirt designs, customize them with their preferred colors, patterns, and texts, and make purchases seamlessly.",
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
    image: carrent,
  },
  {
    name: "ShoeTopia",
    description:
      "The shoe buying site is another project that I have worked on, aiming to create an online platform for users to explore and purchase a wide range of shoes. A website that provides an intuitive and visually appealing interface, allowing users to easily browse, select, and buy their desired footwear.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Old one ",
    description:
      "Welcome to my old portfolio website! This project was created using HTML, CSS, and ReactJS, and it served as a showcase of my skills, experience, and projects. The design of the portfolio was built using HTML and CSS, allowing me to create a visually appealing and user-friendly interface.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
