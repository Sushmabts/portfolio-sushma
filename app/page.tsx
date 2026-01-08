"use client"

import { motion } from "framer-motion"
import { ProfileSidebar } from "@/components/layout/ProfileSidebar"
import { TableOfContents } from "@/components/layout/TableOfContents"
import { BottomNav } from "@/components/layout/BottomNav"
import { WorkExperience } from "@/components/sections/WorkExperience"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Education } from "@/components/sections/Education"
import { Blog } from "@/components/sections/Blog"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white dot-grid">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
          {/* Left Sidebar - Hidden on mobile, sticky on desktop */}
          <div className="hidden lg:block lg:sticky lg:top-8 bg-white rounded-xl border border-gray-200 shadow-md p-6 self-start lg:min-h-[calc(100vh-8rem)]">
            <ProfileSidebar />
          </div>

          {/* Main Content */}
          <main className="flex-1 w-full lg:max-w-[850px] bg-white rounded-xl border border-gray-200 shadow-md p-4 md:p-6 lg:p-8">
            {/* Header with Summary */}
            <div className="mb-8 md:mb-12 lg:mb-16">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                👋 Hi, I'm Sushma Ravichandran, Full Stack Software Engineer
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                Full Stack Software Engineer with hands-on experience building secure, scalable web applications
                and RESTful APIs. Strong background in React-based user interfaces, relational database design (MySQL),
                and backend development with Node.js and Java-based services. Experienced in working with sensitive data,
                applying security-first principles, and designing accessibility-aware user interfaces. Passionate about
                EdTech and mission-driven platforms that improve student outcomes, safety, and early intervention through
                technology.
              </p>
            </div>

            <div className="space-y-16">
              <motion.div {...fadeInUp}>
                <WorkExperience />
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Skills />
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Projects limit={4} />
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Education />
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Blog limit={2} />
              </motion.div>
            </div>
          </main>

          {/* Right Table of Contents - Hidden on mobile and tablet */}
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
