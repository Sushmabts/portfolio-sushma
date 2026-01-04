import { FileText, Calendar } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { blogPosts } from "@/lib/data"

interface BlogProps {
    limit?: number
}

export function Blog({ limit }: BlogProps) {
    const displayPosts = limit ? blogPosts.slice(0, limit) : blogPosts

    return (
        <section id="blog" className="scroll-mt-8">
            <div className="flex items-center gap-2 mb-6">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">Blog</h2>
            </div>

            <div className="space-y-4">
                {displayPosts.map((post) => (
                    <Card key={post.id} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <CardTitle className="text-xl">{post.title}</CardTitle>
                            <CardDescription className="text-base">{post.excerpt}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </section>
    )
}
