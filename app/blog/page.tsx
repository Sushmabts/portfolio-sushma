"use client"

import { motion } from "framer-motion"
import { ProfileSidebar } from "@/components/layout/ProfileSidebar"
import { TableOfContents } from "@/components/layout/TableOfContents"
import { BottomNav } from "@/components/layout/BottomNav"
import { Blog } from "@/components/sections/Blog"

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white dot-grid">
            <div className="max-w-[1400px] mx-auto px-8 py-16">
                <div className="flex gap-8">
                    {/* Left Sidebar */}
                    <div className="sticky top-8 bg-white rounded-xl border border-gray-200 shadow-md p-6 self-start min-h-[calc(100vh-8rem)]">
                        <ProfileSidebar />
                    </div>

                    {/* Main Content */}
                    <main className="flex-1 max-w-[850px] bg-white rounded-xl border border-gray-200 shadow-md p-8">
                        <motion.div {...fadeInUp}>
                            <Blog />
                        </motion.div>
                    </main>

                    {/* Right Table of Contents */}
                    <div className="sticky top-8 bg-white rounded-xl border border-gray-200 shadow-md p-6 self-start min-h-[calc(100vh-8rem)]">
                        <TableOfContents />
                    </div>
                </div>
            </div>

            {/* Floating Bottom Navigation */}
            <BottomNav />
        </div>
    )
}
