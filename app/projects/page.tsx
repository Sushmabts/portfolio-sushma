"use client"

import { motion } from "framer-motion"
import { ProfileSidebar } from "@/components/layout/ProfileSidebar"
import { TableOfContents } from "@/components/layout/TableOfContents"
import { BottomNav } from "@/components/layout/BottomNav"
import { Projects } from "@/components/sections/Projects"

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-white dot-grid">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
                    {/* Left Sidebar - Hidden on mobile */}
                    <div className="hidden lg:block lg:sticky lg:top-8 bg-white rounded-xl border border-gray-200 shadow-md p-6 self-start lg:min-h-[calc(100vh-8rem)]">
                        <ProfileSidebar />
                    </div>

                    {/* Main Content */}
                    <main className="flex-1 w-full lg:max-w-[850px] bg-white rounded-xl border border-gray-200 shadow-md p-4 md:p-6 lg:p-8">
                        <motion.div {...fadeInUp}>
                            <Projects />
                        </motion.div>
                    </main>

                    {/* Right Table of Contents - Hidden on mobile/tablet */}
                    <div className="hidden xl:block xl:sticky xl:top-8 bg-white rounded-xl border border-gray-200 shadow-md p-6 self-start xl:min-h-[calc(100vh-8rem)]">
                        <TableOfContents />
                    </div>
                </div>
            </div>

            {/* Floating Bottom Navigation */}
            <BottomNav />
        </div>
    )
}
