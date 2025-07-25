// Icons
import js from "../assets/icons/skills-icon/javascript.svg";
import html from "../assets/icons/skills-icon/html.svg";
import css from "../assets/icons/skills-icon/css.svg";
import figma from "../assets/icons/skills-icon/figma.svg";
// import md from "../assets/icons/skills-icon/mongodb.svg";
// import next from "../assets/icons/skills-icon/nextjs.svg";
// import node from "../assets/icons/skills-icon/nodejs.svg";
import react from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";

// projectImagess
import movie1 from "../assets/images/projectImages/project1.png"
import movie2 from "../assets/images/projectImages/project2.png"
import coffee from "../assets/images/projectImages/project3.png"
import Book from "../assets/images/projectImages/project4.png"
import Restaurant from "../assets/images/projectImages/project5.png"
import Portfolio from "../assets/images/projectImages/project6.png"
import Portfolio1 from "../assets/images/projectImages/project7.png"
import Sneakers from "../assets/images/projectImages/project8.png"

// projectReports
import report1 from "../assets/doc/Reports/report1.txt"
import report2 from "../assets/doc/Reports/report2.txt"
import report3 from "../assets/doc/Reports/report3.txt"
import report4 from "../assets/doc/Reports/report4.txt"
import report5 from "../assets/doc/Reports/report5.txt"
import report6 from "../assets/doc/Reports/report6.txt"
import report7 from "../assets/doc/Reports/report7.txt"


export const Projects = {
    "movie1": {
        "image": movie1,
        "title": "Movie App",
        "subTitle": "Real-Time Movie Explorer with API Integration",
        "insights": {
            "desc": `A responsive movie search app built using React.js, designed to fetch and display data from a movie database API. It implements debounced search, loading states, and clean component architecture using Context API and Custom Hooks.`,
            "category": "React.js, Web Application, API Integration",
            "techStack": [react, tailwind, js],
            "reportLink": report1
        },
        "githubLink": "https://github.com/IrfanNaikwade28/RespireX.git"
    },

    "movie2": {
        "image": movie2,
        "title": "Movie App2",
        "subTitle": "Movie Discovery App with Debounced Search",
        "insights": {
            "desc": `Built using React.js and TailwindCSS, this application helps users discover trending movies with live search and filtered results. It uses debouncing, Axios for API calls, and React Router for seamless navigation.`,
            "category": "React.js, Axios, Front-End Development",
            "techStack": [react, tailwind, js, figma],
            "reportLink": report2
        },
        "githubLink": "https://github.com/IrfanNaikwade28/Insightify.git"
    },

    "coffee": {
        "image": coffee,
        "title": "Coffee Cafe",
        "subTitle": "Product Landing Page with Dynamic Interactions",
        "insights": {
            "desc": `A visually appealing product landing page for a coffee brand built using JavaScript, HTML5, and CSS3. Includes dynamic menu filtering, interactive modals, and mobile-first design for improved user experience.`,
            "category": "JavaScript, UI Design, Responsive Layout",
            "techStack": [js, html, css],
            "reportLink": report3
        },
        "githubLink": "https://github.com/IrfanNaikwade28/MetaShield.git"
    },

    "Book": {
        "image": Book,
        "title": "Book Store",
        "subTitle": "Interactive Quiz Platform using Vanilla JS",
        "insights": {
            "desc": `A web-based quiz application developed with JavaScript, HTML, and CSS. Designed for real-time feedback and score tracking with a clean, responsive layout. Implements modular JS functions and browser storage for user progress.`,
            "category": "JavaScript, Web Development, Education",
            "techStack": [js, html, css],
            "reportLink": report4
        },
        "githubLink": "https://github.com/IrfanNaikwade28/Quizwhiz-Junction.git"
    },

    "Restaurant": {
        "image": Restaurant,
        "title": "Restaurant",
        "subTitle": "Static E-commerce Page with Interactive Cart",
        "insights": {
            "desc": `A fully responsive restaurant e-commerce page built using JavaScript, HTML, and CSS. Features a dynamic cart, product filters, and mobile navigation to simulate real-world ordering experience.`,
            "category": "JavaScript, HTML, CSS, Responsive UI",
            "techStack": [js, html, css],
            "reportLink": report5
        },
        "githubLink": "https://github.com/IrfanNaikwade28/E-medicine.git"
    },

    "Portfolio": {
        "image": Portfolio,
        "title": "Portfolio",
        "subTitle": "Static Developer Portfolio (HTML/JS)",
        "insights": {
            "desc": `A static portfolio site built using HTML, CSS, and JavaScript showcasing projects and skills. Designed with semantic structure and optimized layout to highlight work experience and contact information.`,
            "category": "HTML, CSS, JavaScript, Personal Branding",
            "techStack": [js, html, css],
            "reportLink": report6
        },
        "githubLink": "https://github.com/IrfanNaikwade28/AlgoAnalyzer.git"
    },

    "Portfolio1": {
        "image": Portfolio1,
        "title": "React Portfolio",
        "subTitle": "Responsive Portfolio Website in React",
        "insights": {
            "desc": `A personal developer portfolio showcasing projects and skills using React, TailwindCSS, and Vite. Designed with performance in mind using code splitting and lazy loading. Focused on accessibility and pixel-perfect layout via Figma design translation.`,
            "category": "Portfolio, React.js, Responsive Design",
            "techStack": [react, tailwind, figma, html, css, js],
            "reportLink": report7
        },
        "githubLink": "https://github.com/IrfanNaikwade28/AlgoAnalyzer.git"
    },

    "Sneakers": {
        "image": Sneakers,
        "title": "Sneakers",
        "subTitle": "Product Showcase Page using HTML/CSS/JS",
        "insights": {
            "desc": `A clean and responsive product detail page for sneakers built with HTML, CSS, and JavaScript. Includes image sliders, size selection, and quantity controls with smooth animations.`,
            "category": "JavaScript, UI/UX, Product Page",
            "techStack": [js, html, css],
            "reportLink": ""
        },
        "githubLink": "https://github.com/IrfanNaikwade28/AlgoAnalyzer.git"
    },
}

