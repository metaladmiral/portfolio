import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Prakhar Sinha",
  title: "Hi all, I'm Prakhar",
  description:
    "Backend-heavy engineer with expertise in building scalable and complex systems and deploying applications. Proven ability to lead projects and deliver client-focused solutions leveraging diverse technologies (Python, Django, PHP, Laravel, JavaScript, Express.js, TypeScript).",
  resumeLink: "https://drive.google.com/file/d/1XzEkZIWh9UKexwk0X5ZJTaSJ_8VrbXyu/view?usp=sharing",
};

export const openSource = {
  githubUserName: "metaladmiral",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:prakhars.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/prakharsinha96/",
  github: "https://github.com/metaladmiral",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  twitter: "https://twitter.com/metaladmiral96",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE ENGINEER WHO LIKES TO BUILD SOFTWARES THAT DO BUSINESS",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Experience in full-stack development using various languages and frameworks like Python (Django), PHP (Laravel), JavaScript, Express.js, and TypeScript."
        ),
        emoji(
          "⚡ Developed APIs to handle online print orders, showcasing expertise in building communication interfaces between applications."
        ),
        emoji("⚡ Experience deploying applications on AWS, a leading cloud platform."),
        emoji(
          "⚡ Led the solo development of Accadify, a university management system, demonstrating project leadership skills."
        ),
        emoji(
          "⚡ Proven ability to collaborate with clients, gather requirements, and deliver solutions that improve operational efficiency and client satisfaction."
        ),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "40", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "95",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Punjab Technical University",
    subHeader: "Bachelor of Technology in Computer Science",
    duration: "August 2022 - 2026",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Development Engineer",
    company: "Makes360",
    companyLogo:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAPEA8PDhYQDw8WEg4QEhcQDxATGRkYGBkWFxYZHjYhGRwyHhcWIzIiKCouLy8vGiA1OkEtOSkuLywBCgoKDg0OHBAQHC8mISYuMC4uLC4uLi4sLi4uLi8uLi4uLC4uLi4xLi4uLi4wLiwuLi4uLi4uLi4uLi4uLi4uLv/AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYHAv/EAEUQAAEDAgMDBQ0FBwMFAAAAAAEAAgMEEQUSIQYTMSJBUXGBFBUyNVJUYXORkpOx0QeUsrPCFiM0VXShwaTS4TNCU2Si/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAMhEAAgIBAQUFBgYDAAAAAAAAAAECEQMhBBIxUZETQWFx0SIygaGxwTNCUoKSwhRy8P/aAAwDAQACEQMRAD8A9xREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREARFHqqgRtvYuJIDWDwnOPAC6AkIqXBMejqvB5/BcM2U8lr7ctoObK9juFiDcE62ukAREQBERAEREAREQBERAEREBhU+L4jMySGCBkb3zCQ3lcWsa1lr3sL84VwqPEPGFH6mq/QtMSTlryfyVlJt1oM+KeRQ+/L9FjNinkUPvy/RasNgdUGd75525aqaNrY35GhrHWGgCnd5x5zV/GK0bitHXRlKb4X1I2bFPIoffl+iZsU8ih9+X6KT3nHnNX8YrPececVfxio3oeHRjdl49SLmxTyKH35fombFPIoffl+ik95h5zV/GKd5x5zV/GKb0PDoxuy8epGzYp5FD78v0TNinkUPvS/RSe8w85q/jFO83/s1fxim9Dw6MbsvHqRs2KeRQ+/L9F8UVTLM+WCZscUtOYntkjJfHyg7mNiRbMCOg8yyYn09VTMbNNI2bfh7ZX5xyW5gRfgbr7w/wAYVnqqT5PVt1ODdLhar/agrTXn9jXs9s82jAa2zWMILImnMBII2xGQuIGpa3hbi5x1vp0KIuY2CIiAIiIAiIgCIiAIiIAiIgMKjr/GNH6mq/Qr1UVf4wo/U1X6Fth95+UvoysuB97M+DU/11X+NXSpdmfBqf66r/GrpVy++xFUjC56fa2na97GsqJcji0uiiLmZhxF10JXKbI4hBFDIySaKNwqZ+S97Wu8LoJV8UIuMpNXVfMNu6NMGJVOIVErKad1HHCxl80AdK5zukO4cFurqDEIYpJhiRfumOfkNOwB2UE2JvpwXzhmIwNxCueZ4g17aXK4yNDXWZrY31VjjWLUxpqgCogJMEoAEjSSS0gAAHVdE3KOSMYR0qP5U+KV6talUrVtk/B6sz08MxFjJExxA4Aka2U5VWzLSKOmBFv3EenYFaLiyJKTS5l0U+KfxlB11X5a14f4xrfU0nyetmKfxlB11X5a14d4wrfVUvyeuhfh/s/uUrX4/YvURFymgREQBERAEREAREQBERAEREAVFX+MaP1NV+hXqoq/xjR+pqv0LXD7z8pfRg+9mfBqv6+r/GrpUuy/g1X9fV/jV0oy++yWYK5LZfCaeaKWSWGOVxqZ7ve3M48pdaqF2zLMznR1FXAHuLjHFLlYHHU2FtFbFkUYuN1da+RWrK3DcGpnV1ZG6CItY2myMLRlbdtzYL6rsIp2V9IxsETWuZOXNyjK4htxcKa3ZVgJcKqsa53hyCblv5hc21spVDgTIZBMZZ53NaQ0zyZ8gPG2mi6JbQt7eUn7tVr+mhuotwsoi4SSmxT+MoOuq/LWrD/GNb6ml+T1sxT+MoOup/LWvD/GNb6ql+T11L8P9n9xRfIiLlAREQBERAEREAREQBERAEREBgqixDxjR+pqf0K9XP4+ySOemq2RulbCJGyRxi8mR4HKa3nII4elaYfe+D+jJXEkHCHse90E74BK8vfHla9mc2u5txcE86++4arz0/BYo/7Uxeb1v3d6x+1EXm9b92f9Foo5eXyX3Rep8iT3DVeen4LE7hqvPT8Fij/tTF5vW/dn/RRhtrSl+7DKgvvbd7k578fB4qyhmfCPyj6DdnyLHuGq89PwWLPcNV56fgsUX9qIvN637s9Rmba0rn7trKhzwSCwQkvBHHTjzIoZnwj8o+g3Z8iNtJWVlH3PlqQ/fTBhvEwWvzqxxKOrhhllFXm3cUj8u5YL5QTb+yoNrMR7q7m3VPV/up2vfmp3jkhWmK7QMlp5om09ZmfDI1t6d4Fy0gcy2cJbkKir1vSPPQtuulp8j72Ua+qjhrZ5HSPtKGNs1scfKLSQANSQ0alSsO8Y1vqaT5PVPspjApaSKCSnrMzN5fLTvI1e5w16iFbYBHJJNU1b43QibdNjjeLSZWA8pw5rk8PQqZk4yyXouC4fqXArNNNnQIiLiMwiIgCIiAIiIAiIgCIiAIiIAiIgMIii4jWNgifK69mNJIHE+gIk26CVukSl5lR+Pz66X8Dl2TcTqiLigfY8P3sYPzXMQ4NWtxDu7uYkZ3O3e8ZfVpbxv6V6Wxx3Fk3mlcWlquPU6McXG7a4c0egleZ7OeO5fXVnzcuz75VnmD/jR/VcthmDVsNc+t7mLg58zt3vGAjPc8b+lRskdyORSa1i61XqRCNJ21w5o9DRUj8VqgCTQPAGpO9jOnVdWVBVNmjZK29ntDhfQi64ZY5RVv6p/QycGuJJWURUKhERAEREAREQBERAEREAREQBERAEREBGrI3uYWxybpxtZ+UPy9h4qmq8FqpmOjkrczXCxG4aL9oK6FFfHklDh9F90WjNx4FK3Dqwad3/AOnjTvdWfzA/d41dor9tLkv4r0J7SXh0XoUne+s/mB+7xp3vrP5gfu8au0Tt5cl/FehPaS8Oi9CidhdYQQa/iP8AwMXxSYLVRMbGyts1gs0bhpsO0q/RR286rT+MfQjtHw06I00zHNY0PdvHAC77BuY9NhwW9EWTKBERAEREAREQBERAEREBhVeM45BRhhncW5yQ2zS69uPDrVouF29jE1VQQHg5+vU9zB/grfZsUcmRRlw1v4Jkxq9TqsIxaGrYZIXFzWuLSSC05gAefrC04xj9PSFgncWl4JaA0u0FujrXKfZtOYpaikfofCA6HNOV3+PYoe1Q7sqqtw1bSU5APNmDgD23c73V1rYof5Lg/dWt+DqvqWqN+B6BheIx1UYmiJc0kgEgtOmh0KnLlPs3deit5Msg+R/ytFTjOKkuMVAwNBNs98xF+jMFzT2Z9rKEGqT72kRWuh2K5aj2pdJXuotwGhr5G7zPcnKCb2tz26U2W2mdVSPgmiEUjATpexsbEZTq0i6p8ObbHJT6ZT/8LbFs1dpHItVG19mTGtbPQUXKwbUSVFWaelhbKxpGacuIaBzu0HDjbpUzabaBtGxtm7ySS+SMG3afRr2rmezZFJQrV93/AHD4laL5Fw8+0mJ0wbNU0cQicRfLo8X4XOY5e0K7xXaOOGkZVtBkEmXdt4EuIJsTzWsfYplsuRNVrbpU09fgKL1FxUGNYs8NkFFEWPsRxzZTz+Hfh6FebQ01bIIxSTMhsXbwv4kaWA5J9KiWBxklJrXxuulii5ReeSYtiVDURR1MjZ2yEaAAgi9jlIAN9VfbeYm6npbMJa6Z2QEcWtsS4j2W7VpLZJqcIpp73BoUfeJ7YUdO4sLzK4GxbE3NY9F+F+1XlLOJGMkF7Pa1wvxsRdcTs3U4dRMYHyMMzgDI/I5+Qn/tDgLADgu0FSwx70OaWZS7ODduXje6jacUcbSin5vv8lRMqXAkIvP6WvxHE3yPp5W00UZs0HS55gSASTbjzaqZslj9Q6d9FVnM9ubK+wBu3i02Gumt1aexTjFu1a4q9UN07VERchUIiIAiIgMLhsdOfGKVvkCL23c9d0qKTZ5rqwVpkdcEER2GXRuX/ldGzZIwk3Lk0vN6FZX3HLY8DQYm2paOTIC/0EkFrh7de1SMGw8twusmdq6oZK4k8S1t7X7cx7V0m0GBMrQwOcWGMus5oBOvEa9QUt+Ht7mNMCQ3cmO9tQMuW/WuiW1p4ox/NpflHgR7Vs5r7N5Q2mnBNgyUuPoGUf7VjD8UrsQfIYJI6SJhsCWB8hvwvfn9iusBwBlG2Roe6QSWuHAC1r9HWqxmxm7e4w1c0DXHVjLg26MwcL+xTLLglkyS58G02vHQi5UtCp2Whc3FZg9+8c0TZn2y5jca2HBQ66hkqMTqY43mNzt4AenkDkm3AHgutwrZdlNPv2yvdo4ZXak3Gt3dYut1Ps81lWazeOJcXHIQLai3FaPbIKcpRf5KWnf5cB7RQ7CYi2FzqGWMRPzOs61i5w4td0noULboOFfC4uyDJFlktmDLONzbnsdbdS6bGNmI6iYTiR0LxluWAakcHa8/0Cm4vg0dXG1ktyW+DI3RzTz+3oVI7TiWZZV3p7y5N8h7VNFLU7PVVTHkkxASMeGmwhbY8COB6lLfswx9EyifITuyS2UC1nXcb2vw5RCgs2Je3ktrpGt8gNI/WrWswDPTw07J3xbkgiQC7ibEa2I6SqZMq9lRyd96RqvHRBOXI5eSavwksD3ieEmzQTdthrYE6sNr+hdhiVRUOgZJSMY9z8htJoAwi9+I14KnZsZmc01FXNUBvBhuP7lxXQT1kMAAfJHEANA5wbpw0CrtGTHNxcacu+lSfwEW9bPP5K6aGsZNiMDnkW3eoDIxfwmhujrdatPtIbnhpnt1bmdqOBzNBHyK0bR1nfGWKnpWmQMJJltZuttbngAuuqMJjlpxTPGZrWNaDwcC0WDgeYronmWOeLK1TXFLuXdS7iIycrSKqrwukfQFwiiaO587XtaA5py3BvxVRsuXuwutbqQBOGdsYJA9v91NGxsmXdd2ybq991lNurwrf2XSUNBHBE2FjQGtFrHW9+JPSSsZ5oQxuKlvXK/LqWTk3qqOb+zV47nlZziYuI9Ba0D8JUCBufHHOZqGudmI5rRZTftVhLsZle59NVSU4dxaL3A6LhwNlZ7PbPR0eZwcZZHjlSHTToA5tVpPaMKlkyQlbmmq8+N9CFv8GXqIi8w0CIiAIiIAiIgCIiAIiIAiIgCIiAIiIDCra/BKeoeJJY87mtyg5nAWuTwB14lWSKYycXcXRDSejNFLSRwtyxsbGOhoAW9FlRr3kmFCngc8g8ghrjZpBsRYcfTxU1Fnkxqapkp0VZw4m9y3UnW2r+UHcrqtbtW2mocjg4WH/UvYW0c4EDssp6LGOx4oveS1LvJJqjKIi6jMIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA//9k=",
    date: "Nov 2022 - April 2024",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "PrintEase",
    desc: "Printease is a SaaS application that streamlines online print ordering for students and print shops near universities, eliminating wait times and queues. I worked on the backend part.",
    link: "https://print-ease.netlify.app/",
    github: "https://github.com/metaladmiral/printease-backend",
  },
  {
    name: "Foodee (In Progress)",
    desc: "Have you ever been in dilemma of what to have as your next meal? Foodee is a food recommendation system and a PWA to help you with your problem.",
    github: "https://github.com/metaladmiral/Foodee",
  },
  {
    name: "Accadify ERP & Attendance Management System",
    desc: "Accadify was a project made for my college to manage the attendance of students and faculty. I was awarded 3 Lakh INR for the project",
    link: "https://cgccms.in/",
  },
  {
    name: "Lebailmobilite",
    desc: "A multi-lingual apartment listing and contracts website made for a french client.",
    link: "https://lebailmobilite.com/",
  },
  {
    name: "Greenhat (In Progress)",
    desc: "Greenhat is a general backdoor. Has some added functionalities that can be used to prank the victims too.",
    github: "https://github.com/metaladmiral/Greenhat",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Luca Malandrino",
    role: "Full-Stack Developer (Upwork Client)",
    feedback:
      "Prakhar carefully listens to requirements and he is open to changes. Very flexible and knowledgeable about technical topics. Contract successfully ended, very good experience!",
  },
  {
    name: "Anish Kumar",
    role: "Full-Stack Developer at Makes360",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Prakhar Sinha",
  description: greetings.description,
  author: "Prakhar",
  image: "https://avatars.githubusercontent.com/u/107746968?v=4",
  url: "https://prakharsinha.xyz",
  keywords: [
    "Prakhar",
    "Prakhar Sinha",
    "@metaladmiral96",
    "metaladmiral",
    "Portfolio",
    "Prakhar Portfolio ",
    "Prakhar Sinha Portfolio",
  ],
};
