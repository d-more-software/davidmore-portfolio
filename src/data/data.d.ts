export const frontSkills: { name: string; image: string }[];
export const backSkills: { name: string; image: string }[];
export const toolSkills: { name: string; image: string }[];


export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string;
    demoLink: string;
    repoLink: string;
    image: string;
}

export const projects: Project[];
