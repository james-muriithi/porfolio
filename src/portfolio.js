/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
    /* Your Summary And Greeting Section */
    username: "James Muriithi",
    title: "Hi there, I'm James",
    subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
    resumeLink: "https://drive.google.com/file/d/13s87SR6sSPCCMS-aX3qkGoS7HuC72Rbt/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

    github: "https://github.com/james-muriithi",
    linkedin: "https://www.linkedin.com/in/james-muriithi/",
    gmail: "muriithijames556@gmail.com",
    twitter: "https://www.twitter.com/jam_es-muriithi"
        // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
    title: "What i do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
    ],

    /* Make Sure You include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "php",
            fontAwesomeClassname: "fab fa-php"
        },
        {
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire"
        },
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
            Stack: "Frontend", //Insert stack or technology you have experience in
            progressPercentage: "85%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "90%"
        },
        {
            Stack: "React",
            progressPercentage: "40%"
        },
        {
            Stack: "NodeJs",
            progressPercentage: "70%"
        },
        {
            Stack: "Flutter",
            progressPercentage: "30%"
        }
    ]
};


// Your top 3 work experiences

const workExperiences = {
    viewExperiences: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Attachment",
            company: "SwahiliPot Hub",
            companylogo: require('./assets/images/swahilipotlogo.jpg'),
            date: "May 2019 – Aug 2019",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            descBullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
        },
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "james-muriithi", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
    viewBigProjecst: false,
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [{
            image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
        link: "https://brancetech.com/"
        },
        {
            image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
            link: "http://nextu.se/"
        }
    ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "",

    achivementsCards: [
        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from PluralSight for PWA Web App Development",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
            footerLink: [
                { name: "Certification", url: "" },
                { name: "Final Project", url: "https://moviepalace.herokuapp.com/" }
            ]
        }
    ]
};

// Blogs Section

const blogSection = {

};

// Talks Sections

const talkSection = {

};

// Podcast Section

const podcastSection = {

};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+254746792699",
    email_address: "muriithijames556@gmail.com"
};

//Twitter Section

const twitterDetails = {

    userName: "" //Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };