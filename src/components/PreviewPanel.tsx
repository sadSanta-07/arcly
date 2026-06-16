"use client";

import React from 'react';
import { useResumeStore } from '../store/useResumeStore';

export default function PreviewPanel() {
  const { data } = useResumeStore();
  const { personalInfo, experience, projects, education, skills } = data;

  return (
    <section className="hidden lg:flex lg:w-[55%] h-full overflow-y-auto bg-gray-200 justify-center py-8 preview-panel print:w-full print:py-0">
      
      <div className="a4-paper bg-white w-[210mm] min-h-[297mm] shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-[20mm] text-slate-800 flex flex-col font-sans shrink-0">
        
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2 text-slate-900">
            {personalInfo.fullName || "Your Name"}
          </h1>
          <p className="text-lg text-slate-600 mb-2">
            {personalInfo.title || "Your Professional Title"}
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm text-slate-500">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>• {personalInfo.phone}</span>}
            {personalInfo.location && <span>• {personalInfo.location}</span>}
            {personalInfo.website && <span>• {personalInfo.website}</span>}
            {personalInfo.github && <span>• {personalInfo.github}</span>}
            {personalInfo.linkedin && <span>• {personalInfo.linkedin}</span>}
          </div>
        </header>

        <hr className="border-t-[1.5px] border-slate-300 mb-6" />

        {experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">
              Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-800">{exp.role}</h3>
                  <span className="text-sm font-medium text-slate-500">
                    {exp.startDate} {exp.startDate || exp.endDate ? '-' : ''} {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <p className="text-sm font-semibold text-slate-600">{exp.company}</p>
                  <p className="text-sm text-slate-500">{exp.location}</p>
                </div>
                
                <div className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {exp.description}
                </div>
              </div>
            ))}
          </div>
        )}

        {projects.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">
              Projects & Open Source
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-800">
                    {proj.name} {proj.role && <span className="font-normal text-slate-500">| {proj.role}</span>}
                  </h3>
                  <span className="text-sm font-medium text-slate-500">{proj.date}</span>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <p className="text-sm italic text-slate-600">{proj.technologies}</p>
                  <p className="text-sm text-slate-500">{proj.link}</p>
                </div>
                <div className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {proj.description}
                </div>
              </div>
            ))}
          </div>
        )}

        {education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-800">{edu.degree}</h3>
                  <span className="text-sm font-medium text-slate-500">
                    {edu.startDate} {edu.startDate || edu.endDate ? '-' : ''} {edu.endDate}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <p className="text-sm font-semibold text-slate-600">{edu.institution}</p>
                  <p className="text-sm text-slate-500">{edu.location} {edu.gpa && `| ${edu.gpa}`}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3 border-b border-slate-200 pb-1">
              Technical Skills
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {skills.join(" • ")}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}