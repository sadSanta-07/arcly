import { ResumeData } from '../types';

export const sampleResumeData: ResumeData = {
  personalInfo: {
    fullName: "Alex Developer",
    title: "Frontend Software Engineer",
    email: "alex.dev@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "alexdev.com",
    github: "github.com/alexdev",
    linkedin: "linkedin.com/in/alexdev",
  },
  experience: [
    {
      id: "exp-1",
      company: "TechNova Solutions",
      role: "Senior Frontend Engineer",
      location: "Remote",
      startDate: "Jan 2022",
      endDate: "Present",
      current: true,
      description: "• Spearheaded the migration of a legacy React application to Next.js, improving load times by 40%.\n• Implemented Zustand for global state management, reducing unnecessary component re-renders by 60%.\n• Mentored a team of 3 junior developers and established strict code review guidelines.",
    },
    {
      id: "exp-2",
      company: "Digital Studio",
      role: "Web Developer",
      location: "New York, NY",
      startDate: "Jun 2019",
      endDate: "Dec 2021",
      current: false,
      description: "• Developed interactive, client-side web tools using React and modern CSS frameworks.\n• Collaborated with UX designers to implement accessible, responsive layouts resulting in a 25% increase in user retention.\n• Created automated testing suites using Jest and React Testing Library.",
    }
  ],
  projects: [
    {
      id: "proj-1",
      name: "NeoResume Builder",
      role: "Sole Developer",
      technologies: "Next.js, TypeScript, Tailwind CSS",
      date: "2024",
      link: "github.com/alexdev/neoresume",
      description: "• Built a completely client-side, zero-database resume builder using modern web APIs.\n• Engineered a custom print media CSS solution to generate flawless A4 PDF documents directly from the browser.\n• Designed a striking Neo-Brutalism UI for the input dashboard to create visual contrast with the corporate resume output.",
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "State University",
      degree: "B.S. in Computer Science",
      location: "Boston, MA",
      startDate: "Sep 2015",
      endDate: "May 2019",
      gpa: "3.8/4.0",
    }
  ],
  skills: [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "Zustand", "HTML/CSS", "Git"
  ]
};