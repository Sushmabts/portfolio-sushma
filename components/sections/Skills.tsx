
import { Code2, Palette, Server, Cloud, TestTube, Wrench } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
    {
        category: "Languages",
        icon: Code2,
        skills: ["JavaScript", "Python", "Java", "SQL", "REST API", "TestNG"]
    },
    {
        category: "Frontend",
        icon: Palette,
        skills: ["React", "Angular", "HTML", "CSS", "Figma", "Interactive UI/UX"]
    },
    {
        category: "Backend",
        icon: Server,
        skills: ["Java", "Spring Boot", "Node.js", "Hibernate", "JWT", "RBAC", "Secure API Design"]
    },
    {
        category: "Testing",
        icon: TestTube,
        skills: ["Functional Testing", "Regression Testing", "API Testing", "Negative Testing", "Data Validation"]
    },
    {
        category: "Tools & Platforms",
        icon: Wrench,
        skills: ["Eclipse", "IntelliJ IDEA", "VS Code", "Spring Tool Suite", "Postman", "JIRA", "Apache Kafka"]
    },
    {
        category: "Cloud & DevOps",
        icon: Cloud,
        skills: ["AWS Lambda", "EC2", "S3", "CloudWatch", "RedShift", "Docker", "Git"]
    }
]

export function Skills() {
    return (
        <section id="skills" className="scroll-mt-8">
            <div className="flex items-center gap-2 mb-6">
                <Code2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
            </div>

            <div className="space-y-6">
                {skillCategories.map((category, idx) => {
                    const Icon = category.icon
                    return (
                        <div key={idx} className="flex gap-6">
                            <div className="flex items-center gap-2 w-40 flex-shrink-0">
                                <Icon className="w-5 h-5 text-gray-600" />
                                <h3 className="font-semibold text-gray-900">{category.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIdx) => (
                                    <Badge
                                        key={skillIdx}
                                        variant="secondary"
                                        className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
