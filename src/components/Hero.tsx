import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import kiranPortrait from '@/assets/kiran-profile.png'
import { useState, useEffect } from 'react'

const Hero = () => {
  const roles = ['WEB DEVELOPER', 'AI ENGINEER', 'DATA ANALYST', 'PYTHON DEVELOPER', 'ML ENGINEER']
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-purple-600 font-medium"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              Kiran Vishnu
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">
                Kamble
              </span>
            </motion.h1>

            {/* Dynamic Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-12"
            >
              <motion.h2
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wider text-purple-600"
              >
                {roles[currentRoleIndex]}
              </motion.h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about crafting intelligent, scalable solutions that merge cutting-edge 
              machine learning with robust software development. Building the future, one line of code at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#portfolio')}
                className="bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700 font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-105"
              >
                Hire Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start pt-6"
            >
              <a 
                href="https://linkedin.com/in/kiran-kamble07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/kirankamble1523" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/_.er.kiran03._?igsh=NzdqZ3h0MmE0amEw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:kirankamble.co.in03@gmail.com"
                className="w-12 h-12 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-4 rounded-full border-2 border-purple-300/30 animate-pulse" />
              <div className="absolute inset-0 -m-8 rounded-full border border-purple-200/20" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/40 to-violet-300/40 rounded-3xl blur-2xl scale-110" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-purple-200 shadow-2xl">
                <img 
                  src={kiranPortrait} 
                  alt="Kiran Vishnu Kamble - AI & ML Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg shadow-lg"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
