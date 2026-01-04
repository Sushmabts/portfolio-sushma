import { Linkedin, Github, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProfileSidebar() {
    return (
        <aside className="w-80">
            <div className="flex flex-col items-center text-center space-y-4">
                {/* Profile Avatar */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-5xl font-bold">
                    SR
                </div>

                {/* Name and Role */}
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold text-gray-900">Sushma Ravichandran</h1>
                    <p className="text-base text-gray-600">Full Stack Software Engineer</p>
                    <div className="flex items-center justify-center text-sm text-gray-500 gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Milwaukee, WI</span>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 items-center justify-center">
                    <a
                        href="https://www.linkedin.com/in/sushma-ravichandran"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="https://github.com/Sushmabts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:ravichandransushma@gmail.com"
                        className="text-gray-600 hover:text-primary transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                {/* Resume Button */}
                <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium"
                >
                    <a href="/Sushma_Ravichandran_Software_Developer.pdf" download>
                        Resume
                    </a>
                </Button>
            </div>
        </aside>
    )
}
