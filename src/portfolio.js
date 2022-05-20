/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji"

const greeting = {
  /* Your Summary And Greeting Section */
  username: "James Muriithi",
  title: "Hi there, I'm James",
  subTitle: emoji(
    "Fullstack Developer — Frontend heavy with vue.js, angular, react, node, PHP and python"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qsD6ObPScQQ0XAfbB7XdEq5tKZG1__A-/view?usp=sharing",
}

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/james-muriithi",
  linkedin: "https://www.linkedin.com/in/james-muriithi/",
  gmail: "muriithijames556@gmail.com",
  twitter: "https://www.twitter.com/jam_es_muriithi",
  // Instagram and Twitter are also supported in the links!
}

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "AMBITIOUS FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji(
      "⚡ Integration of payment services such as M-Pesa and paypal"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'Vue',
      fontAwesomeClassname:'fab fa-vuejs'
    },
    {
      skillName: 'Angular',
      fontAwesomeClassname:'fab fa-angular'
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: 'Laravel',
      fontAwesomeClassname:'fab fa-laravel'
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
  ],
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Vue",
      progressPercentage: "85%",
    },
    {
      Stack: "Laravel",
      progressPercentage: "80%",
    },
    {
      Stack: "React",
      progressPercentage: "50%",
    },
    {
      Stack: "Nuxt",
      progressPercentage: "50%",
    },
    {
      Stack: "Python",
      progressPercentage: "70%",
    },
    {
      Stack: "NodeJs",
      progressPercentage: "70%",
    },
    {
      Stack: "Flutter",
      progressPercentage: "30%",
    },
  ],
}

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Developer",
      company: "Talentator",
      companylogo: "https://media-exp1.licdn.com/dms/image/C560BAQFoevNgyIFTjg/company-logo_100_100/0/1648716599843?e=1661385600&v=beta&t=WccrgCtraxI4sq_gcOPXFi2uN9bfOaQR4D4x7P31W5M",
      date: "Jan 2021 – Present",
      desc:
        "Roles and responsibilities",
      descBullets: [
        "Develop and implement the company's web application using Vuejs and serveless API using cloud functions",
        "Develop new features and infrastructure development in support of rapidly emerging business and project requirements",
        "Ensure application performance, uptime, and scale, maintaining high standards of code quality and thoughtful application design",
        "Work with agile development methodologies, adhering to best practices and pursuing continued learning opportunities."
      ],
    },
    {
      role: "Fullstack Developer",
      company: "Brance Technologies",
      companylogo: "https://res.cloudinary.com/james-m/image/upload/f_webp/v1616101308/1626649573724_pzqqrg.jpg",
      date: "Sept 2018 – Nov 2020",
      desc:
        "My tasks at Brance included",
      descBullets: [
        "Involved in developing and implementing the web application using Vuejs/Nuxtjs, and RESTful APIs (Laravel and Nodejs+Express)",
        "Took full service ownership constantly monitoring web transactions, error rates, and data quality to identify, and prioritize problems",
        "Collaborated with the design team on developing micro-services",
        "Developed and maintained internal software tools",
        "Wrote technical documents"
      ],
    },
    {
      role: "PHP Developer",
      company: "Digital Tailor Agency",
      companylogo: require("./assets/images/experiences/dta.jpeg"),
      date: "Mar 2017 – Aug 2018",
      desc:
        "My tasks at DTA were",
      descBullets: [
        "Designed and implemented scalable web services, applications, and APIs using Vuejs and Laravel",
        "Structured system requirements and suggest a testing and development road-map.",
        "Set up Continuous Integration Testing and testing to guard against regression of the code base.",
        "Met with the software development team to define the scope and scale of software projects.",
      ],
    },
  ],
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.GATSBY_GITHUB_TOKEN,
  githubUserName: "james-muriithi", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
}

// some small projects
const projectsSection = {
  title: emoji("Projects"),
  subtitle: "",
  projects: [
    {
      title: "Music Cloud",
      subtitle:
        "A music app that consumes apple music API and Genius lyrics Api, built with Vue, Vuex, Vue Router and Vuetify.",
      image: "https://res.cloudinary.com/james-m/image/upload/f_webp/v1635354996/Screenshot_from_2021-10-27_20-15-33_nqzou2.png",
      url: "https://musik-cloud.netlify.app/",
    },
    {
      title: "My Bus",
      subtitle:
        "A Bus reservation system am currently working on. Login credentials are  email: admin@admin.com pasword: password",
      image: "https://res.cloudinary.com/james-m/image/upload/ar_16:9,c_fill,e_sharpen,f_webp,g_auto,w_1000/v1616099485/screenshot3_oucawy.png",
      url: "https://mybus.theschemaqhigh.co.ke/login",
    },
    {
      title: "Movie Palace",
      subtitle:
        "A simple website (PWA) to show movies and tv shows built with nodejs, express and ejs.",
      image: require("./assets/images/projects/movie-palace.webp"),
      url: "https://moviepalace.herokuapp.com/",
    },
    {
      title: "Coding Jobs",
      subtitle:
        "A twitter bot that finds developer (IT) jobs off the internet and post them on twitter.",
      image: "https://res.cloudinary.com/james-m/image/upload/ar_16:9,c_fill,e_sharpen,f_webp,g_auto,w_1000/v1616099874/coding_jobs_gpe2dz.png",
      url: "https://twitter.com/coding_jobs_ke",
    },
    {
      title: "Ecomart",
      subtitle:
        "An online shop website built with vuejs.",
      image: "https://res.cloudinary.com/james-m/image/upload/f_webp/v1616100352/screenshot_adcbh2.png",
      url: "https://e-comart.web.app/",
    },
    {
      title: "E-Shop",
      subtitle:
        "An online ecommerce shop built with gatsabyjs, redux and react.",
      image: require("./assets/images/projects/e-shop.webp"),
      url: "https://my-online-shop.netlify.app",
    },
    {
      title: "Indexfand",
      subtitle:
        "Indexfand is a personal and peer savings and payment platform running on a private blockchain network.",
      image: require("./assets/images/projects/indexfand.webp"),
      url: "https://indexfand.com",
    },
  ],
}

// Some Big Projects You have worked with your company

const bigProjects = {
  viewBigProjecst: false,
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/big-projects/brance.png"),
      link: "https://brancetech.com/",
    },
    {
      image: require("./assets/images/big-projects/indexfand.png"),
      link: "http://indexfand.com/",
    },
  ],
}

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",

  achivementsCards: [
    {
      title: "Vue.js",
      subtitle:
        "Vue.js Certifcation from Udemy",
      image: "https://res.cloudinary.com/james-m/image/upload/f_webp/v1653078727/1024px-Vue.js_Logo_2.svg_l4m58y.png",
      footerLink: [
        { name: "Certification", url: "https://udemy-certificate.s3.amazonaws.com/image/UC-f07c35a2-1b10-47fa-8ba1-5a3fac7ccf9b.jpg?v=1621659397000" },
        { name: "Final Project", url: "https://e-comart.web.app/" },
      ],
    },
    {
      title: "Nuxt.js",
      subtitle:
        "Nuuxt.js Certifcation from Udemy",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/312px-Nuxt_logo.svg.png",
      footerLink: [
        { name: "Certification", url: "https://udemy-certificate.s3.amazonaws.com/image/UC-90883265-7806-4a01-a253-8dcddf655347.jpg?v=1622667311000" },
        { name: "Final Project", url: "http://goflix-tv.herokuapp.com/" },
      ],
    },
    {
      title: "PWA Web App Developer",
      subtitle:
        "Completed Certifcation from PluralSight for PWA Web App Development",
      image: require("./assets/images/achievements/pwa-logo.svg"),
      footerLink: [
        { name: "Certification", url: "#" },
        { name: "Final Project", url: "https://moviepalace.herokuapp.com/" },
      ],
    },
  ],
}

// Blogs Section

const blogSection = {}

// Talks Sections

const talkSection = {}

// Podcast Section

const podcastSection = {}

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+254746792699",
  email_address: "muriithijames556@gmail.com",
}

//Twitter Section

const twitterDetails = {
  userName: "jam_es_muriithi", //Replace "twitter" with your twitter username without @
}

const servicesSection = {
  title: "Services",
  services: [
    {
      title: "API design/Integration",
      description:
        "Developing a highly secure, fast and scalable APIs both REST and GraphQL.",
      image: require("./assets/images/services/service-1.svg"),
    },
    {
      title: "Web Development",
      description:
        "Get a blazing fast front-end for your backend using React, Gatsby or Bootstrap.",
      image: require("./assets/images/services/service-2.svg"),
    },
    {
      title: "Bots",
      description:
        "Do you need your social media account automated? I build Twitter, Facebook and Telegram bots.",
      image: require("./assets/images/services/chatbots2.webp"),
    },
    {
      title: "Mpesa Integration",
      description:
        "I integrate mpesa paybill with platforms to automate payment process.",
      image: require("./assets/images/services/mpesa-logo.webp"),
    },
  ],
}

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  servicesSection,
  projectsSection,
}
