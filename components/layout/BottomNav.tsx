import { Home, Folder, FileText } from "lucide-react"
import Link from "next/link"

export function BottomNav() {
    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex items-center gap-6 px-8 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200">
                <Link
                    href="/"
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label="Home"
                >
                    <Home className="w-5 h-5" />
                </Link>
                <Link
                    href="/projects"
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label="Projects"
                >
                    <Folder className="w-5 h-5" />
                </Link>
                <Link
                    href="/blog"
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label="Blog"
                >
                    <FileText className="w-5 h-5" />
                </Link>
            </div>
        </div>
    )
}
