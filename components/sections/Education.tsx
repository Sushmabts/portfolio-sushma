"use client"

import { GraduationCap } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const education = [
    {
        id: "edu-1",
        institution: "University of Wisconsin-Milwaukee",
        degree: "Master of Science in Computer Science",
        period: "Expected May 2026",
        logo: "🎓",
        details: [
            "GPA: 3.5/4.0",
            "Focus: Software Engineering, Web Development, and Data-driven Systems",
            "Currently pursuing advanced coursework in secure application development and accessibility-aware UI design"
        ]
    },
    {
        id: "edu-2",
        institution: "Sri Eshwar College of Engineering, Anna University",
        degree: "Bachelor of Engineering in Computer Science",
        period: "Aug 2018 - April 2022",
        logo: "🎓",
        details: [
            "GPA: 8.7/10.0",
            "Relevant Coursework: Data Structures, Algorithms, Database Management, Software Engineering",
            "Student Representative (2018-2022)",
            "Vice President of Media Max Club, President of Cloud Club"
        ]
    }
]

export function Education() {
    return (
        <section id="education" className="scroll-mt-8">
            <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
                {education.map((edu) => (
                    <AccordionItem key={edu.id} value={edu.id} className="border rounded-lg px-4">
                        <AccordionTrigger className="hover:no-underline">
                            <div className="flex items-center gap-4 w-full">
                                <div className="text-3xl">{edu.logo}</div>
                                <div className="flex-1 text-left">
                                    <div className="font-semibold text-gray-900">{edu.degree}</div>
                                    <div className="text-sm text-gray-600">{edu.institution}</div>
                                </div>
                                <div className="text-sm text-gray-500">{edu.period}</div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-2 ml-16 mt-4 list-disc list-inside">
                                {edu.details.map((detail, idx) => (
                                    <li key={idx} className="text-gray-700">{detail}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
