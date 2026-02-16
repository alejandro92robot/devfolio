import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { profile } from '../src/data/profile.js';
import { projects, skills } from '../src/data/projects.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to escape LaTeX special characters
const escapeLatex = (str) => {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&/g, '\\&')
        .replace(/%/g, '\\%')
        .replace(/\$/g, '\\$')
        .replace(/#/g, '\\#')
        .replace(/_/g, '\\_')
        .replace(/\{/g, '\\{')
        .replace(/\}/g, '\\}')
        .replace(/~/g, '\\textasciitilde{}')
        .replace(/\^/g, '\\textasciicircum{}');
};

const generateCV = () => {
    const templatePath = path.join(__dirname, '../cv/template.tex');
    let template = fs.readFileSync(templatePath, 'utf8');

    // 1. Replace Profile Info
    template = template
        .replace('<<NAME>>', escapeLatex(profile.name))
        .replace('<<ROLE>>', escapeLatex(profile.role))
        .replace(/<<EMAIL>>/g, escapeLatex(profile.email))
        .replace('<<PHONE>>', escapeLatex(profile.phone))
        .replace('<<LOCATION>>', escapeLatex(profile.location))
        .replace('<<LINKEDIN>>', profile.linkedin) // URLs shouldn't be escaped in href
        .replace('<<GITHUB>>', profile.github)
        .replace('<<WEBSITE>>', profile.website)
        .replace('<<SUMMARY>>', escapeLatex(profile.summary));

    // 2. Format Experience
    const experienceLatex = profile.experience
        .map(
            (job) =>
                `\\entry{${escapeLatex(job.role)}}{${escapeLatex(job.period)}}{${escapeLatex(job.company)}}{${escapeLatex(job.description)}}`
        )
        .join('\n');
    template = template.replace('<<EXPERIENCE_CONTENT>>', experienceLatex);

    // 3. Format Education
    const educationLatex = profile.education
        .map(
            (edu) =>
                `\\entry{${escapeLatex(edu.degree)}}{${escapeLatex(edu.period)}}{${escapeLatex(edu.institution)}}{${escapeLatex(edu.description)}}`
        )
        .join('\n');
    template = template.replace('<<EDUCATION_CONTENT>>', educationLatex);

    // 4. Format Skills
    const skillsLatex = skills
        .map((skillGroup) => {
            const items = skillGroup.items.map((i) => escapeLatex(i.name)).join(', ');
            return `\\item \\textbf{${escapeLatex(skillGroup.category)}}: ${items}`;
        })
        .join('\n');
    template = template.replace('<<SKILLS_CONTENT>>', skillsLatex);

    // 5. Format Projects (Featured only or top 5)
    const featuresProjects = projects
        .filter((p) => p.featured)
        .slice(0, 5) // Limit to 5 to fit one page usually
        .map(
            (p) =>
                `\\project{${escapeLatex(p.title)}}{${p.demo}}{${escapeLatex(p.technologies.join(', '))}}{${escapeLatex(p.description)}}`
        )
        .join('\n');
    template = template.replace('<<PROJECTS_CONTENT>>', featuresProjects);

    // 6. Format Languages
    const languagesLatex = profile.languages
        .map((lang) => `\\item ${escapeLatex(lang)}`)
        .join('\n');
    template = template.replace('<<LANGUAGES_CONTENT>>', languagesLatex);

    // Write Output
    const outputPath = path.join(__dirname, '../cv/cv.tex');
    fs.writeFileSync(outputPath, template);
    console.log(`CV generated at: ${outputPath}`);
};

generateCV();
