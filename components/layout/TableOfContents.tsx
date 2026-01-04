"use client"

import { useScrollSpy } from "@/hooks/useScrollSpy"
import { cn } from "@/lib/utils"

const sections = [
    { id: "work", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "blog", label: "Blog" }
]

export function TableOfContents() {
    const activeId = useScrollSpy(sections.map(s => s.id))

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <aside>
            <nav className="space-y-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Table of Contents
                </h3>
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={cn(
                            "block text-sm transition-colors hover:text-gray-900 text-left w-full",
                            activeId === section.id
                                ? "font-semibold text-gray-900"
                                : "text-gray-600"
                        )}
                    >
                        {section.label}
                    </button>
                ))}
            </nav>
        </aside>
    )
}
