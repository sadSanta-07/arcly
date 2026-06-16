"use client";

import React from 'react';
import { useResumeStore } from '../store/useResumeStore';
import { sampleResumeData } from '../lib/sampleData';

export default function BuilderPanel() {
  const {
    data,
    updatePersonalInfo,
    addExperience, updateExperience, deleteExperience,
    addProject, updateProject, deleteProject,
    addEducation, updateEducation, deleteEducation,
    updateSkills,
    loadSampleData, resetResume
  } = useResumeStore();

  return (
    <section className="w-full lg:w-[45%] h-full overflow-y-auto bg-neo-bg border-r-[3px] border-black p-4 md:p-8 print-hide pb-24 no-scrollbar">
      <div className="flex flex-wrap gap-4 mb-8">
        <button 
          onClick={() => loadSampleData(sampleResumeData)}
          className="neo-btn bg-neo-primary text-black px-6 py-3 font-bold text-sm uppercase flex-1"
        >
          ↻ Load Sample Data
        </button>
        <button 
          onClick={resetResume}
          className="neo-btn bg-white text-black px-6 py-3 font-bold text-sm uppercase flex-1"
        >
          ✕ Clear Form
        </button>
        <button 
          onClick={() => window.print()}
          className="neo-btn bg-neo-tertiary text-black px-6 py-3 font-bold text-sm uppercase w-full"
        >
          ↓ Download PDF
        </button>
      </div>

      <div className="space-y-8 font-sans">
      
        <div className="neo-card p-6 relative bg-[#f6edda]">
          <div className="absolute -top-4 -right-4 bg-neo-secondary border-[3px] border-black px-3 py-1 font-bold rotate-6 z-10 uppercase text-sm">
            Basics
          </div>
          <h2 className="text-2xl font-black mb-6 border-b-[3px] border-black pb-2 font-[var(--font-lexend)] uppercase">Personal Info</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="fullName" className="font-bold text-sm">Full Name</label>
              <input id="fullName" type="text" className="neo-input" placeholder="John Doe" value={data.personalInfo.fullName} onChange={(e) => updatePersonalInfo({ fullName: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label htmlFor="jobTitle" className="font-bold text-sm">Job Title</label>
              <input id="jobTitle" type="text" className="neo-input" placeholder="Software Engineer" value={data.personalInfo.title} onChange={(e) => updatePersonalInfo({ title: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="font-bold text-sm">Email</label>
              <input id="email" type="email" className="neo-input" placeholder="john@example.com" value={data.personalInfo.email} onChange={(e) => updatePersonalInfo({ email: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="font-bold text-sm">Phone</label>
              <input id="phone" type="text" className="neo-input" placeholder="+1 (555) 000-0000" value={data.personalInfo.phone} onChange={(e) => updatePersonalInfo({ phone: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label htmlFor="location" className="font-bold text-sm">Location</label>
              <input id="location" type="text" className="neo-input" placeholder="San Francisco, CA" value={data.personalInfo.location} onChange={(e) => updatePersonalInfo({ location: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label htmlFor="website" className="font-bold text-sm">Website URL</label>
              <input id="website" type="text" className="neo-input" placeholder="https://example.com" value={data.personalInfo.website} onChange={(e) => updatePersonalInfo({ website: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label htmlFor="github" className="font-bold text-sm">GitHub</label>
              <input id="github" type="text" className="neo-input" placeholder="https://github.com/username" value={data.personalInfo.github} onChange={(e) => updatePersonalInfo({ github: e.target.value })} />
            </div>
            <div className="space-y-2">
              <label htmlFor="linkedin" className="font-bold text-sm">LinkedIn</label>
              <input id="linkedin" type="text" className="neo-input" placeholder="https://linkedin.com/in/username" value={data.personalInfo.linkedin} onChange={(e) => updatePersonalInfo({ linkedin: e.target.value })} />
            </div>
          </div>
        </div>
        <div className="neo-card p-6 bg-[#fcf3e0]">
          <div className="flex justify-between items-center mb-6 border-b-[3px] border-black pb-2">
            <h2 className="text-2xl font-black font-[var(--font-lexend)] uppercase">Experience</h2>
            <button onClick={addExperience} className="neo-btn bg-neo-primary px-3 py-1 font-bold text-xl">+</button>
          </div>
          
          <div className="space-y-6">
            {data.experience.map((exp) => (
              <div key={exp.id} className="border-[3px] border-black p-4 bg-white relative group">
                <button 
                  onClick={() => deleteExperience(exp.id)}
                  className="absolute -right-3 -top-3 bg-red-500 text-white border-[3px] border-black rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-red-600 transition-colors z-10"
                >
                  ✕
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor={`company-${exp.id}`} className="font-bold text-sm">Company</label>
                    <input id={`company-${exp.id}`} placeholder="Company name" type="text" className="neo-input" value={exp.company} onChange={(e) => updateExperience(exp.id, { company: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor={`role-${exp.id}`} className="font-bold text-sm">Role</label>
                    <input id={`role-${exp.id}`} type="text" className="neo-input" value={exp.role} onChange={(e) => updateExperience(exp.id, { role: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor={`loc-${exp.id}`} className="font-bold text-sm">Location</label>
                    <input id={`loc-${exp.id}`} type="text" className="neo-input" value={exp.location} onChange={(e) => updateExperience(exp.id, { location: e.target.value })} />
                  </div>
                  <div className="space-y-2 flex gap-2">
                    <div className="flex-1">
                      <label htmlFor={`start-${exp.id}`} className="font-bold text-sm">Start Date</label>
                      <input id={`start-${exp.id}`} type="text" className="neo-input" placeholder="Jan 2023" value={exp.startDate} onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })} />
                    </div>
                    <div className="flex-1">
                      <label htmlFor={`end-${exp.id}`} className="font-bold text-sm">End Date</label>
                      <input id={`end-${exp.id}`} type="text" className="neo-input" placeholder="Present" value={exp.endDate} onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })} disabled={exp.current} />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor={`exp-desc-${exp.id}`} className="font-bold text-sm">Description (Use bullets • for best results)</label>
                  <textarea id={`exp-desc-${exp.id}`} placeholder="• Delivered feature X&#10;• Improved Y by Z%" className="neo-input h-32 resize-none" value={exp.description} onChange={(e) => updateExperience(exp.id, { description: e.target.value })} />
                </div>
              </div>
            ))}
            {data.experience.length === 0 && <p className="text-sm font-bold text-gray-500 italic">No experience added. Click + to add.</p>}
          </div>
        </div>
        <div className="neo-card p-6 bg-[#fcf3e0]">
          <div className="flex justify-between items-center mb-6 border-b-[3px] border-black pb-2">
            <h2 className="text-2xl font-black font-[var(--font-lexend)] uppercase">Projects</h2>
            <button onClick={addProject} className="neo-btn bg-neo-primary px-3 py-1 font-bold text-xl">+</button>
          </div>
          
          <div className="space-y-6">
            {data.projects.map((proj) => (
              <div key={proj.id} className="border-[3px] border-black p-4 bg-white relative">
                <button onClick={() => deleteProject(proj.id)} className="absolute -right-3 -top-3 bg-red-500 text-white border-[3px] border-black rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-red-600 transition-colors z-10">✕</button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor={`proj-name-${proj.id}`} className="font-bold text-sm">Project Name</label>
                    <input id={`proj-name-${proj.id}`} type="text" className="neo-input" value={proj.name} onChange={(e) => updateProject(proj.id, { name: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor={`proj-role-${proj.id}`} className="font-bold text-sm">Role / Type</label>
                    <input id={`proj-role-${proj.id}`} type="text" className="neo-input" value={proj.role} onChange={(e) => updateProject(proj.id, { role: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor={`proj-tech-${proj.id}`} className="font-bold text-sm">Technologies Used</label>
                    <input id={`proj-tech-${proj.id}`} type="text" className="neo-input" value={proj.technologies} onChange={(e) => updateProject(proj.id, { technologies: e.target.value })} />
                  </div>
                  <div className="space-y-2 flex gap-2">
                    <div className="flex-1">
                      <label htmlFor={`proj-date-${proj.id}`} className="font-bold text-sm">Date</label>
                      <input id={`proj-date-${proj.id}`} type="text" className="neo-input" value={proj.date} onChange={(e) => updateProject(proj.id, { date: e.target.value })} />
                    </div>
                    <div className="flex-1">
                      <label htmlFor={`proj-link-${proj.id}`} className="font-bold text-sm">Link</label>
                      <input id={`proj-link-${proj.id}`} type="text" className="neo-input" value={proj.link} onChange={(e) => updateProject(proj.id, { link: e.target.value })} />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor={`proj-desc-${proj.id}`} className="font-bold text-sm">Description</label>
                  <textarea id={`proj-desc-${proj.id}`} className="neo-input h-24 resize-none" value={proj.description} onChange={(e) => updateProject(proj.id, { description: e.target.value })} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="neo-card p-6 bg-[#fcf3e0]">
          <div className="flex justify-between items-center mb-6 border-b-[3px] border-black pb-2">
            <h2 className="text-2xl font-black font-[var(--font-lexend)] uppercase">Education</h2>
            <button onClick={addEducation} className="neo-btn bg-neo-primary px-3 py-1 font-bold text-xl">+</button>
          </div>
          
          <div className="space-y-6">
            {data.education.map((edu) => (
              <div key={edu.id} className="border-[3px] border-black p-4 bg-white relative">
                <button onClick={() => deleteEducation(edu.id)} className="absolute -right-3 -top-3 bg-red-500 text-white border-[3px] border-black rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-red-600 transition-colors z-10">✕</button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor={`edu-inst-${edu.id}`} className="font-bold text-sm">Institution</label>
                    <input id={`edu-inst-${edu.id}`} type="text" className="neo-input" value={edu.institution} onChange={(e) => updateEducation(edu.id, { institution: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor={`edu-deg-${edu.id}`} className="font-bold text-sm">Degree</label>
                    <input id={`edu-deg-${edu.id}`} type="text" className="neo-input" value={edu.degree} onChange={(e) => updateEducation(edu.id, { degree: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor={`edu-start-${edu.id}`} className="font-bold text-sm">Start Date</label>
                    <input id={`edu-start-${edu.id}`} type="text" className="neo-input" value={edu.startDate} onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor={`edu-end-${edu.id}`} className="font-bold text-sm">End Date</label>
                    <input id={`edu-end-${edu.id}`} type="text" className="neo-input" value={edu.endDate} onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor={`edu-loc-${edu.id}`} className="font-bold text-sm">Location</label>
                    <input id={`edu-loc-${edu.id}`} type="text" className="neo-input" value={edu.location} onChange={(e) => updateEducation(edu.id, { location: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor={`edu-gpa-${edu.id}`} className="font-bold text-sm">GPA / Score (Optional)</label>
                    <input id={`edu-gpa-${edu.id}`} type="text" className="neo-input" value={edu.gpa} onChange={(e) => updateEducation(edu.id, { gpa: e.target.value })} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="neo-card p-6 bg-[#fcf3e0]">
          <h2 className="text-2xl font-black mb-6 border-b-[3px] border-black pb-2 font-[var(--font-lexend)] uppercase">Skills</h2>
          <div className="space-y-2">
            <label htmlFor="skills-input" className="font-bold text-sm">List skills separated by commas</label>
            <textarea 
              id="skills-input"
              className="neo-input h-24 resize-none" 
              placeholder="Next.js, TypeScript, Tailwind CSS, Google Cloud..."
              value={data.skills.join(", ")} 
              onChange={(e) => {
                const skillsArray = e.target.value.split(',').map(s => s.trimStart());
                updateSkills(skillsArray);
              }} 
            />
          </div>
        </div>

      </div>
    </section>
  );
}