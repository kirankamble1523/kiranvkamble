import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Github, Linkedin, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import kiranPortrait from '@/assets/kiran-profile.png'
import techBg from '@/assets/tech-bg.jpg'
import { useState, useEffect } from 'react'

const Hero = () => {
  const roles = ['AI & ML Engineer', 'Software Developer', 'Web Developer', 'Python Developer', 'Data Analyst']
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${techBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Hero Background Animation */}
      <div className="hero-bg absolute inset-0 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={kiranPortrait} 
                  alt="Kiran Vishnu Kamble" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="font-formal-script text-5xl md:text-7xl font-bold text-gradient">
              Kiran Vishnu Kamble
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              <span>I am </span>
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-primary font-semibold"
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            Recent AI & ML Engineering graduate with a passion for crafting intelligent, scalable solutions that merge cutting-edge machine learning with robust software development. I thrive at the intersection of data, design, and development—building web applications, analyzing complex datasets, and engineering smart systems using Python, AI tools and modern frameworks. Whether it's deploying full-stack web platforms, optimizing backend logic, or extracting insights through data analytics, I bring a proactive mindset and a deep curiosity to every project.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              <Button 
                size="sm" 
                onClick={() => scrollToSection('#portfolio')}
                className="bg-hero-gradient hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Explore Projects
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => scrollToSection('#contact')}
                className="border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="mr-1 h-3.5 w-3.5" />
                Contact Me
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center flex-wrap">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://drive.google.com/file/d/1LXMBXOIgsFfY-m1yysl0Say0DKNBjX9T/view?usp=drivesdk', '_blank')}
                className="border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <FileText className="mr-1 h-3.5 w-3.5" />
                AI Engineer
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://drive.google.com/file/d/18HdOEuF31RaOoDpikcO1eeWYJ6mV_ZTj/view?usp=drivesdk', '_blank')}
                className="border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <FileText className="mr-1 h-3.5 w-3.5" />
                Python Developer
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://drive.google.com/file/d/1V02x28uetBLXoM_iHBj8ZBwtjR1DsbpR/view?usp=drivesdk', '_blank')}
                className="border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <FileText className="mr-1 h-3.5 w-3.5" />
                Software Developer
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://drive.google.com/file/d/1UwRlidvXoFqyGpKu6xJqX61Hzf5TS3pO/view?usp=drivesdk', '_blank')}
                className="border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <FileText className="mr-1 h-3.5 w-3.5" />
                Data Analyst
              </Button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex justify-center space-x-6"
          >
            <a 
              href="https://github.com/kirankamble1523" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/kiran-kamble07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:kirankamble.co.in03@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero