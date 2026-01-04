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
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="sticky top-8 bg-white rounded-xl border border-gray-200 shadow-md p-6 self-start min-h-[calc(100vh-8rem)]">
            <ProfileSidebar />
          </div>

          {/* Main Content */}
          <main className="flex-1 max-w-[850px] bg-white rounded-xl border border-gray-200 shadow-md p-8">
            {/* Header with Summary */}
            <div className="mb-16">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
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
