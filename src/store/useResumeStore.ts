import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ResumeData, PersonalInfo, Experience, Project, Education } from '../types';

const initialResumeState: ResumeData = {
    personalInfo: {
        fullName: '',
        title: '',
        email: '',
        phone: '',
        location: '',
        website: '',
        github: '',
        linkedin: '',
    },
    experience: [],
    projects: [],
    education: [],
    skills: [],
};

interface ResumeState {
    data: ResumeData;
    updatePersonalInfo: (info: Partial<PersonalInfo>) => void;

    addExperience: () => void;
    updateExperience: (id: string, updated: Partial<Experience>) => void;
    deleteExperience: (id: string) => void;

    addProject: () => void;
    updateProject: (id: string, updated: Partial<Project>) => void;
    deleteProject: (id: string) => void;

    addEducation: () => void;
    updateEducation: (id: string, updated: Partial<Education>) => void;
    deleteEducation: (id: string) => void;

    updateSkills: (skills: string[]) => void;
    loadSampleData: (sampleData: ResumeData) => void;
    resetResume: () => void;
}

export const useResumeStore = create<ResumeState>()(
    persist(
        (set) => ({
            data: initialResumeState,

            updatePersonalInfo: (info) =>
                set((state) => ({
                    data: {
                        ...state.data,
                        personalInfo: { ...state.data.personalInfo, ...info },
                    },
                })),

            addExperience: () =>
                set((state) => ({
                    data: {
                        ...state.data,
                        experience: [
                            ...state.data.experience,
                            {
                                id: crypto.randomUUID(),
                                company: '',
                                role: '',
                                location: '',
                                startDate: '',
                                endDate: '',
                                current: false,
                                description: '',
                            },
                        ],
                    },
                })),

            updateExperience: (id, updated) =>
                set((state) => ({
                    data: {
                        ...state.data,
                        experience: state.data.experience.map((exp) =>
                            exp.id === id ? { ...exp, ...updated } : exp
                        ),
                    },
                })),

            deleteExperience: (id) =>
                set((state) => ({
                    data: {
                        ...state.data,
                        experience: state.data.experience.filter((exp) => exp.id !== id),
                    },
                })),

            addProject: () =>
                set((state) => ({
                    data: {
                        ...state.data,
                        projects: [
                            ...state.data.projects,
                            {
                                id: crypto.randomUUID(),
                                name: '',
                                role: '',
                                technologies: '',
                                date: '',
                                link: '',
                                description: '',
                            },
                        ],
                    },
                })),

            updateProject: (id, updated) =>
                set((state) => ({
                    data: {
                        ...state.data,
                        projects: state.data.projects.map((proj) =>
                            proj.id === id ? { ...proj, ...updated } : proj
                        ),
                    },
                })),

            deleteProject: (id) =>
                set((state) => ({
                    data: {
                        ...state.data,
                        projects: state.data.projects.filter((proj) => proj.id !== id),
                    },
                })),

            addEducation: () =>
                set((state) => ({
                    data: {
                        ...state.data,
                        education: [
                            ...state.data.education,
                            {
                                id: crypto.randomUUID(),
                                institution: '',
                                degree: '',
                                location: '',
                                startDate: '',
                                endDate: '',
                                gpa: '',
                            },
                        ],
                    },
                })),

            updateEducation: (id, updated) =>
                set((state) => ({
                    data: {
                        ...state.data,
                        education: state.data.education.map((edu) =>
                            edu.id === id ? { ...edu, ...updated } : edu
                        ),
                    },
                })),

            deleteEducation: (id) =>
                set((state) => ({
                    data: {
                        ...state.data,
                        education: state.data.education.filter((edu) => edu.id !== id),
                    },
                })),


            updateSkills: (skills) =>
                set((state) => ({
                    data: { ...state.data, skills },
                })),

            loadSampleData: (sampleData) =>
                set(() => ({
                    data: sampleData,
                })),

            resetResume: () =>
                set(() => ({
                    data: initialResumeState,
                })),
        }),
        {
            name: 'arcly-resume-storage',
        }
    )
);