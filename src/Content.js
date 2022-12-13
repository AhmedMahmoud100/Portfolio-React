// import images
import Hero_person from "./assets/images/Hero/person.png";

import reactjs from "./assets/images/Skills/react.png";
import JavaScript from "./assets/images/Skills/javascript-0.png";
import TypeScript from "./assets/images/Skills/typescript.png";
import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import sass from "./assets/images/Skills/sass-0.png";

import project1 from "./assets/images/projects/e-commerce.png";
import project2 from "./assets/images/projects/photo-shop.png";
import project3 from "./assets/images/projects/crypto.png";
import project4 from "./assets/images/projects/fitness-page.png";
import project5 from "./assets/images/projects/admin-0.png";
import project6 from "./assets/images/projects/youtube-clone.png";

import person_project from "./assets/images/projects/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Front-end Developer",
    firstName: "Ahmed",
    LastName: "Mahmoud",
    image: Hero_person,
    hero_content: [
      {
        text: "I am a Front end Developer who is passionate about software engineering.",
      },
      {
        text: "I like to craft solid and scalable frontend products with great user experience.",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: [
          "complete understanding of JSX.",
          "Good understanding of React Hooks.",
          "Good understanding of StateMangement in react.",
          "Good understanding of Performance Optimization Techniques for React Apps.",
          "Good understaning of Redux Toolkit.",
          "Good understanding of routing in reactJS using react-router-dom.",
          "Good understanding of Babel.",
          "Good understanding of NPM and how to install packages using NPM.",
        ],
        logo: reactjs,
      },
      {
        name: "JavaScript",
        para: [
          "Good understanding of Asynchronous Programming.",
          "Good understanding of Functional Programming.",
          "Good understanding of Closure.",
          "Good understaning of ECMAScript.",
        ],
        logo: JavaScript,
      },
      {
        name: "TypeScript",
        para: [
          "Good understanding of Data Types.",
          "Good understanding of using TypeScript with React Hooks.",
          "Good understanding of using TypeScript with Redux Toolkit.",
        ],
        logo: TypeScript,
      },
      {
        name: "HTML",
        para: [
          "Good understanding of using semantic elements.",
          "Good understanding of using Accessible Links.",
          "Good understanding of using forms , images and files.",
        ],
        logo: html,
      },
      {
        name: "SASS",
        para: [
          "Good understanding of using variables inside sass files.",
          "Good understanding of using nesting CSS selectors.",
          "Good understanding of using Operators inside sass files.",
        ],
        logo: sass,
      },
      {
        name: "CSS",
        para: [
          "Good understanding of CSS units and values.",
          "Good understanding of Box model and margin collapse.",
          "Good understanding of using The containing block.",
          "Good understanding of Responsive web design"
        ],
        logo: css,
      }
    ],
    icon: MdArrowForward,
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "E-commerce",
        image: project1,
        link : "https://e-commerece1.pages.dev/"
      },
      {
        title: "PhotoShop",
        image: project2,
        link : 'https://online-photo-shop.pages.dev/'
      },
      {
        title: "Crypto Hunter",
        image: project3,
        link : 'https://crypto-tracker-4um.pages.dev/'
      },
      {
        title: "Fitness Page",
        image: project4,
        link : 'https://fitness-page.pages.dev/'
      },
      {
        title: "Admin Dashboard",
        image: project5,
        link : 'https://admin-react-app.pages.dev/'
      },
      {
        title: "Youtube Clone",
        image: project6,
        link : 'https://youtube-clone-x3g.pages.dev/'
      }
    ],
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ahmedopo100@gmail.com",
        icon: GrMail,
        link: "mailto:ahmedopo100@gmail.com",
      },
      {
        text: "01145628177",
        icon: MdCall,
        link: "https://wa.me/01145628177",
      }
    ],
  }
};
