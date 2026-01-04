export interface Project {
    id: number
    title: string
    description: string
    image: string
    link: string
}

export interface BlogPost {
    id: number
    title: string
    date: string
    excerpt: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Medical Similar Case Search Engine",
        description: "Built a system to retrieve clinically similar cases from medical text data using TF-IDF and Weighted Locality Sensitive Hashing (LSH). Designed relational schema and optimized SQL queries for efficient retrieval.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        link: "https://github.com/Sushmabts/weighted_lsh_case_search"
    },
    {
        id: 2,
        title: "NLP-Based Resume Screening and Ranking System",
        description: "Built a file-parsing and NLP-powered system using SBERT, spaCy, and Regex for resume-to-JD matching. Integrated Explainable AI to highlight matched/missing skills, achieving 90% Precision, 85% Recall.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
        link: "https://github.com/Sushmabts/NLP-Final-Project"
    },
    {
        id: 3,
        title: "Cross-Site Scripting XSS Attack Simulation and Defense",
        description: "Simulated stored and reflected XSS attacks on the Elgg platform, including cookie theft and worms. Designed defensive mechanisms using Content Security Policy, Apache, and PHP headers.",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&q=80",
        link: "https://github.com/Sushmabts"
    },
    {
        id: 4,
        title: "Adaptive Learning Interface vs Static UI",
        description: "Designed and evaluated an adaptive learning interface using React to personalize instructional content. Conducted user studies comparing adaptive and static interfaces based on engagement and learning outcomes.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
        link: "https://github.com/Sushmabts/learning-interface-user-study-object-behavioral-data"
    }
]

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Building Scalable Web Applications with Next.js",
        date: "December 15, 2024",
        excerpt: "Learn how to build performant, SEO-friendly web applications using Next.js and modern best practices."
    },
    {
        id: 2,
        title: "Mastering TypeScript for React Development",
        date: "November 28, 2024",
        excerpt: "A comprehensive guide to leveraging TypeScript's type system for building robust React applications."
    }
]
