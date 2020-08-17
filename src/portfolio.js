/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji"

const greeting = {
  /* Your Summary And Greeting Section */
  username: "James Muriithi",
  title: "Hi there, I'm James",
  subTitle: emoji(
    "A passionate Software Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / PHP and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/13s87SR6sSPCCMS-aX3qkGoS7HuC72Rbt/view?usp=sharing",
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
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
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
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
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
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
  ],
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%",
    },
    {
      Stack: "React",
      progressPercentage: "40%",
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
      role: "Attachment",
      company: "SwahiliPot Hub",
      companylogo: require("./assets/images/experiences/swahilipotlogo.jpg"),
      date: "May 2019 – Aug 2019",
      desc:
        "It was a worthwhile experience working at the SwahiliPot Hub. The friendly welcoming staff and the space they have created for a trainee allowed me with ample opportunities to learn and know myself as a worker. These experiences brought out my strength and also the areas I needed to improvise. It added more confidence to my professional approach, built a stronger positive attitude and taught me how to work in a team as a player.",
      descBullets: [
        "Installing Wi-Fi access points",
        "Configuring routers",
        "Holding events/meetups",
      ],
    },
    {
      role: "DSC Co-Lead",
      company: "DSC Pwani Uni.",
      companylogo: require("./assets/images/experiences/dsc.png"),
      date: "2019 – 2020",
      desc:
        "Developer Student Clubs is a Google Developers program for university students to learn mobile and web development skills, design thinking skillsand leadership skills.",
      descBullets: [
        "I was the web department leader",
        "Holding events/meetups",
        "Developed and maintains club website",
      ],
    },
    {
      role: "Head of Department",
      company: "PUCSA Club",
      companylogo: require("./assets/images/experiences/pucsa.png"),
      date: "2019 – 2020",
      desc:
        "PUCSA is an innovation club in Pwani University where by the students get a platform to learn, present their ideas and innovative thoughts and also engage in field work activities and events. The club not only offers resources like learning materials but also boosts their budding ideas by converting them into invention of something substantial. It also creates a social environment where students with various technology experiences come together and share information with one another.",
      descBullets: [
        "I was the web department leader",
        "Holding events/meetups",
        "Developed and maintains club website",
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
      title: "Movie Palace",
      subtitle:
        "A simple website (PWA) to show movies and tv shows built with nodejs, express and ejs.",
      image: require("./assets/images/projects/movie-palace.webp"),
      url: "https://moviepalace.herokuapp.com/",
    },
    {
      title: "Music App",
      subtitle:
        "A simple music player (PWA) for local audio files built with gatsabyjs, redux and react.",
      image: require("./assets/images/projects/music-app.webp"),
      url: "https://music-app123.firebaseapp.com/",
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
    {
      title: "DSC-PU",
      subtitle:
        "This is a club website (PWA) which incoporates push notifications to notify users on upcoming events.",
      image: require("./assets/images/projects/dsc-pu.webp"),
      url: "https://dsc-pwani.firebaseapp.com",
    },
    {
      title: "Weather App",
      subtitle:
        "A wetaher web app (PWA) that lets you know the weather of a place or current geolocation.",
      image: require("./assets/images/projects/weather-app.webp"),
      url: "https://reactweather-app.netlify.app",
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
      title: "PWA Web App Developer",
      subtitle:
        "Completed Certifcation from PluralSight for PWA Web App Development",
      image: require("./assets/images/achievements/pwa-logo.svg"),
      footerLink: [
        { name: "Certification", url: "" },
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
