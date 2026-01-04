"use client"

import { Briefcase } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const experiences = [
    {
        id: "exp-1",
        company: "Virtusa Corporation",
        role: "Associate Engineer - Full Stack Developer",
        period: "May 2022 - Aug 2024",
        logo: "🏢",
        details: [
            "Designed, developed, and maintained RESTful APIs supporting core banking workflows and internal systems",
            "Built and enhanced backend services handling authentication, authorization, and role-based access logic",
            "Collaborated with frontend teams to support user-facing workflows and data-driven UI features",
            "Optimized MySQL and SQL queries, improving performance and ensuring transactional integrity",
            "Implemented event-driven processing using Apache Kafka for reliable system communication",
            "Worked in an Agile environment using Git/GitHub and JIRA, participating in code reviews and sprint planning",
            "Applied secure coding practices and defensive error handling in production systems handling sensitive financial data"
        ]
    }
]

export function WorkExperience() {
    return (
        <section id="work" className="scroll-mt-8">
            <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
                {experiences.map((exp) => (
                    <AccordionItem key={exp.id} value={exp.id} className="border rounded-lg px-4">
                        <AccordionTrigger className="hover:no-underline">
                            <div className="flex items-center gap-4 w-full">
                                <div className="text-3xl">{exp.logo}</div>
                                <div className="flex-1 text-left">
                                    <div className="font-semibold text-gray-900">{exp.role}</div>
                                    <div className="text-sm text-gray-600">{exp.company}</div>
                                </div>
                                <div className="text-sm text-gray-500">{exp.period}</div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-2 ml-16 mt-4 list-disc list-inside">
                                {exp.details.map((detail, idx) => (
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
