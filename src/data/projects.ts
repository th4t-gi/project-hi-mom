export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    title: 'Project Alpha',
    description: 'A full-stack web application for managing team workflows with real-time collaboration features.',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Project Beta',
    description: 'A data visualization dashboard that turns complex datasets into interactive, explorable charts.',
    technologies: ['D3.js', 'Python', 'Flask', 'AWS'],
  },
  {
    title: 'Project Gamma',
    description: 'A mobile-first progressive web app for tracking personal fitness goals and workout routines.',
    technologies: ['React Native', 'Firebase', 'GraphQL'],
  },
  {
    title: 'Project Delta',
    description: 'An open-source CLI tool for automating deployment pipelines across multiple cloud providers.',
    technologies: ['Go', 'Docker', 'Terraform'],
  },
];
