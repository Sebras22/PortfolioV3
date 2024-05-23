import {
    IconCode,
    IconFrame,
    IconListCheck,
    IconPalette,
    IconReportSearch,
    IconSettings,
    IconTools,
    IconUser,
} from "@tabler/icons-react";

export const Card = [
    {
        src: IconPalette,
        name: "Creative",
        text: "Creation and design are very important to me, the first impression of a project is all about the style, so it needs to look perfect. ",
        id: "test1",
    },
    {
        src: IconReportSearch,
        name: "Organization",
        text: "In my projects, organization is a main point. For an understable code I have to make it simple and clear for everyone, even for someone who never saw a line of code.",
        id: "test2",
    },
    {
        src: IconSettings,
        name: "Hardworking",
        text: "Because I'm a very stubborn person, I hate to not understand an error or a function. So even if I have to take more time, I need to understand and learn everything.",
        id: "test3",
    },
];

export const Pres = [
    {
        src: IconUser,
        title: "Who am I ?",
        text: "Hey there, I'm Seb, a student based in Paris, currently diving deep into the world of full-stack development at Efrei. My focus? Web development and design. I'm all about pushing boundaries, constantly embarking on projects that introduce me to new frameworks, methods, and technologies. For me, it's not just about the development process; I'm equally passionate about the conception, design, and architecture construction of each project. And hey, my curiosity doesn't stop at web development—I'm also keen on exploring AI and the world of video games. There's always something new to learn, and I'm here for it all!",
    },
    {
        src: IconListCheck,
        title: "What can I do ?",
        text: "My range of soft & hard skills is always evolving with every experiences and projects. I'm someone very patient and calm, curious, and maybe a little bit stubborn, working alone or in groupe isn't an issue for me, I have a good adaptation to my environment. My hardskills are various, for example with UI and UX, I took the habit to look on different platforms the styles, the new ways to make a website or an app more liekable; also when I do my designs for my projects I always think about the way I will do it, and I make a simple design but efficient. In devlopement I'm used to work with Visual Studio Code, using frameworks like ReactJS principaly. For various projects I used softwares like Pocketbase as an online database, easier to implement and to use.",
    },
];

export const Skills = [
    {
        Title: "Languages",
        Icone: IconCode,
        truc: [
            {
                src: "/assets/JS.png",
                text: "JavaScript",
            },
            {
                src: "/assets/HTML5.png",
                text: "HTML5",
            },
            {
                src: "/assets/CSS3.png",
                text: "CSS3",
            },
            {
                src: "/assets/Node.png",
                text: "NodeJS",
            },
            {
                src: "/assets/PHP.png",
                text: "PHP",
            },
        ],
    },
    {
        Title: "Tools",
        Icone: IconTools,
        truc: [
            {
                src: "/assets/VSCode.png",
                text: "VSCode",
            },
            {
                src: "/assets/Github.png",
                text: "Github",
            },
            {
                src: "/assets/Canva.png",
                text: "Canva",
            },
            {
                src: "/assets/figma.png",
                text: "Figma",
            },
            {
                src: "/assets/Wordpress.png",
                text: "Wordpress",
            },
        ],
    },
    {
        Title: "Frameworks",
        Icone: IconFrame,
        truc: [
            {
                src: "/assets/React.png",
                text: "React",
            },
            {
                src: "/assets/TS.png",
                text: "TypeScript",
            },
            {
                src: "/assets/VueJS.png",
                text: "VueJS",
            },
            {
                src: "/assets/SCSS.png",
                text: "SCSS",
            },
            {
                src: "/assets/Symfony.png",
                text: "Symfony",
            },
        ],
    },
];

export const Projects = [
    {
        img: "/assets/Meteo.PNG",
        titre: "Site Méteo",
        text: "Meteorological site allowing you to know the weather by entering the desired location in the search bar.",
        tools: [
            {
                src: "/assets/React.png",
                text: "React",
            },
            {
                src: "/assets/CSS3.png",
                text: "CSS3",
            },
        ],
        modal: {
            titreModal: "Weather Site",
            textModal: "This weather site is a recent project created using the Openmeteo API, free and open to all. Certain points remain to be reviewed on this site, such as another design perhaps a little less dark or additions of features.",
            imgModal: [
                "/assets/meteo2.PNG",
                "/assets/meteo3.PNG",
                "/assets/meteo4.PNG",
            ],
            technoModal:"/assets/React.png"
        },
    },
    {
        img: "/assets/SitePerso.PNG",
        titre: "Personal Website",
        text: " My website allowing me to introduce myself and show what I can do and my various knowledge. ",
        tools: [
            {
                src: "/assets/React.png",
                text: "React",
            },
            {
                src: "/assets/CSS3.png",
                text: "CSS3",
            },
        ],
        modal: {
            titreModal: "Personal Website",
            textModal: "This website is the most recent project I have created. From conception to development to design, everything was done by me. Creating a site in my image presenting what I like and what I know how to do was really exciting.",
            imgModal: [
                "/assets/SitePerso.PNG",
    
            ],
            technoModal:"/assets/React.png"
        },
    },    {
        img: "/assets/designavocat.PNG",
        titre: "Website Design",
        text: "A simple multi-page design for a mock legal consultancy business.",
        tools: [
            {
                src: "/assets/figma.png",
                text: "figma",
            },
        ],
        modal: {
            titreModal: "Website Design",
            textModal: "This design is really simple, with some nice features too. It has a lot of different categories and pages so I needed to make it clear for any user in terms of navigation and comprehension of the website. ",
            imgModal: [
                "/assets/avo.PNG",
                "/assets/avoc.PNG",
                "/assets/avoca.PNG",
            ],
            technoModal: "/assets/figma.png"
        },
    },    {
        img: "/assets/designelec.PNG",
        titre: "Website Design",
        text: "A simple multi-page design for a fake sound system and electronics company in general.",
        tools: [
            {
                src: "/assets/figma.png",
                text: "figma",
            },
        ],
        modal: {
            titreModal: "Website Design",
            textModal: "When I created this design I tried to make it special. With this unusual background and style we can easily say that it's not an ordinary design. I also wanted to add some nice features and ideas of designs that I saw on other designs/websites.  ",
            imgModal: [
                "/assets/elec.PNG",
                "/assets/elece.PNG",
                "/assets/elecee.PNG",
            
            ],
            technoModal: "/assets/figma.png"
        },
    },
    

];
