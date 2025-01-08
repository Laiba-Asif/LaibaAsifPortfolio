import { toNamespacedPath } from "path";



export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 hidden md:block",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/globe.png",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 hidden md:block",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,

    title: "Currently building a chat web app and video calling via webRTC.",



    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];




export const myProjects = [
  {
    id: 1,
    category: "Full Stack",
    projects: [
     {
        name: "Zoom Clone",
        des: "A video conferencing web application to do video calling alongside screen sharing. I developed this using Next 14 and used clerk for authentication and Stream React video SDK for video calling.",
        img: "/zoom.png",
        github: "https://github.com/Laiba-Asif/Next.Js_zoom-clone",
        tags: [
          { name: "goLive", color: "blue-text-gradient" ,link:"https://zoom-by-laiba.vercel.app/"},
          { name: "github", color: "green-text-gradient",link:"https://github.com/Laiba-Asif/Next.Js_zoom-clone" },
        ],
      },
     {
        name: "Netflix Clone",
        des: "you can easily watch the trailers of your favourite TV show, movie and get to know about your fav protagonist. Utilized JWT for authentication via Nodejs, Express and Mongodb and TMDB movie api to fetch movies at backend and used React and tailwind css for frontend and axios as well!",
        img: "/1.png",
        github: "https://github.com/Laiba-Asif/mern-netflix-clone",
        tags: [
          { name: "goLive", color: "pink-text-gradient" ,link:"https://laiba-netflix-clone.vercel.app/"},
          { name: "github", color: "blue-text-gradient",link:"https://github.com/Laiba-Asif/mern-netflix-clone" },
        ],
      },
      {
        name: "Real Estate App",
        des: "Easily find the best place to live. Developed a dynamic real estate frontend application using React, Node.js, and SCSS, enhancing user experience with responsive design and efficient component architecture.",
        img: "/project-1.png",
        github:"https://github.com/Laiba-Asif/Real-Estate-Frontend",
        tags: [
          { name: "goLive", color: "green-text-gradient" ,link:"https://real-estate-laiba.vercel.app/"},
          { name: "github", color: "pink-text-gradient",link:"https://github.com/Laiba-Asif/Real-Estate-Frontend" },,
        ],
        
      },
    ],
  },
  {
    id: 2,
    category: "Frontend",
    projects: [
     
      {
        name: "Student Management System",
        des: "School management system for organizing classes, managing students and faculty, tracking attendance, assessing performance, and facilitating communication.",
        img: "/project-2.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
        link: "https://student-management-system-laibae.vercel.app/",
        github: "https://github.com/Laiba-Asif/Student-Management-System",
        tags: [
          { name: "goLive", color: "blue-text-gradient" ,link:"https://student-management-system-laibae.vercel.app/"},
          { name: "github", color: "green-text-gradient",link:"https://github.com/Laiba-Asif/Student-Management-System" },
        ],
      },
      {
        name: "NextLevelFood Community",
        des: "An app to get and share recipes of your favorite food. Features community interaction and image sharing. Developed using Next.js and Node.js.",
        img: "/project-3.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
        link: "https://nextlevelfoodies.vercel.app/",
        github: "https://github.com/Laiba-Asif/Nextlevel-foodies-community",
        tags: [
          { name: "goLive", color: "pink-text-gradient",link:"https://nextlevelfoodies.vercel.app/" },
          { name: "github", color:"blue-text-gradient" ,link:"https://github.com/Laiba-Asif/Nextlevel-foodies-community" },
        ],
      },
       {
        name: "Weather Forecasting",
        des: "Get weather updates for any city worldwide. Developed using OpenWeather API, HTML, CSS, JavaScript, React, and Fetch API.",
        img: "/project-5.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://weather-forcasting-app-six.vercel.app/",
        github: "https://github.com/Laiba-Asif/Weather-Forcasting-App",
        tags: [
          { name: "goLive", color: "pink-text-gradient",link:"https://weather-forcasting-app-six.vercel.app/" },
          { name: "github", color: "green-text-gradient",link:"https://github.com/Laiba-Asif/Weather-Forcasting-App" },
        ],
      },
      {
        name: "Typing Speed Testing",
        des: "Test your typing speed with score tracking. Developed using HTML, CSS, JavaScript, and React.",
        img: "/project-6.png",
        link: "https://typing-speed-test-psi-one.vercel.app/",
        github: "https://github.com/Laiba-Asif/Typing-speed-test",
        tags: [
          { name: "golive", color: "green-text-gradient",link:"https://typing-speed-test-psi-one.vercel.app/"},
          { name: "github", color: "blue-text-gradient" ,link:"https://github.com/Laiba-Asif/Typing-speed-test" },
        ],
      },
      {
        name: "Piano Game",
        des: "Play a piano game with keyboard controls. Keys are demonstrated on the piano. Developed using HTML, CSS, JavaScript, and React.",
        img: "/project-7.png",
        link: "https://pianoplay.vercel.app/",
        github: "https://github.com/Laiba-Asif/Piano-Game",
        tags: [
          { name: "goLive", color: "pink-text-gradient" ,link:"https://pianoplay.vercel.app/" },
          { name: "github", color: "green-text-gradient" ,link:"https://github.com/Laiba-Asif/Piano-Game" },
          
        ],
      },
      {
        name: "Tic Tac Toe",
        des: "A simple Tic Tac Toe game developed using React Hooks and CSS.",
        img: "/project-8.png",
        github: "https://github.com/Laiba-Asif/tic-tac-toe-Game",
        tags: [
          { name: "goLive", color: "blue-text-gradient",link:"https://tic-tac-toe-laiba.netlify.app/" },
          { name: "github", color: "green-text-gradient",link:"https://github.com/Laiba-Asif/tic-tac-toe-Game" },
          
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Vanilla Js",
    projects: [
      {
        name: "3D Images Slider",
        des: "A 3D infinite image slider developed with HTML, CSS animations, and maths coordinates.",
        img: "/project-4.png",
        github: "https://github.com/Laiba-Asif/CSS-3D-Slider-",
        tags: [
          { name: "goLive", color: "green-text-gradient",link:"https://github.com/Laiba-Asif/CSS-3D-Slider-" },
          { name: "github", color: "blue-text-gradient",link:"https://github.com/Laiba-Asif/CSS-3D-Slider-" },
        ],
      },
      {
        name: "Starbucks Animated Slider",
        des: "A Starbucks-themed animated slider built using HTML, CSS, and JavaScript.",
        img: "/project-9.png",
        github: "https://github.com/Laiba-Asif/Starbucks-animated-slider",
        tags: [
          { name: "goLive", color: "pink-text-gradient" ,link:"https://starbucks-animated-slider.vercel.app/"},
          { name: "github", color: "green-text-gradient",link:"https://github.com/Laiba-Asif/Starbucks-animated-slider" },
        ],
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    title: "React.js Developer",
    company_name: "2nd Place",
    icon: '/company/2ndplace(2).png',
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Elif Technologies",
    icon: '/company/elif.png',
    
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/Laiba-Asif",
  },
  
  {
    id: 2,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/laibae-awan/",
  },
  {
    id: 3,
    img: "/whatsapp.png",
    link:"https://wa.me/+923296263929",
  },
];

export const certification = [
  {
    id: 1,
    title: "React Basics",
    desc: "React, SPA, Hooks, ContextApi, Redux, HOC, UI, Git, Github, Debugging, Responsive Web Application ",
    thumbnail: "/company/meta.png",
    link:"https://www.coursera.org/account/accomplishments/verify/28FX7ZD3M233"
  },
  {
    id: 2,
    title: "Progrmming with javascript",
    desc: "Javascript, Asynchronous code, Js Modules, Array Destructuring, Spread Operator, Data Structure",
    thumbnail: "/company/meta.png",
    link:"https://www.coursera.org/account/accomplishments/verify/AYTASXQVRLVK"
  },
];
