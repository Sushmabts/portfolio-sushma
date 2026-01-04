
import { Folder, ExternalLink } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import { projects } from "@/lib/data"

interface ProjectsProps {
    limit?: number
}

export function Projects({ limit }: ProjectsProps) {
    const displayProjects = limit ? projects.slice(0, limit) : projects

    return (
        <section id="projects" className="scroll-mt-8">
            <div className="flex items-center gap-2 mb-6">
                <Folder className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayProjects.map((project) => (
                    <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                        <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span>{project.title}</span>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-primary transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </section>
    )
}
