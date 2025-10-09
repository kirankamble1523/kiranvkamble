import { motion } from 'framer-motion'
import { GraduationCap, Award, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const About = () => {
  const education = [
    {
      degree: "2021 - 2025 | B.E. in AI & ML",
      institution: "NESGI College (SPPU University Pune)",
      year: "2025",
      gpa: "8.1/10",
      icon: GraduationCap,
    },
    {
      degree: "2021 | HSC (Science, PCMB)",
      institution: "R.P. College, Dharashiv",
      year: "Completed",
      gpa: "79.81%",
      icon: Award,
    },
    {
      degree: "2019 | SSC",
      institution: "Aryachankya Mahavidyalay, Dharashiv",
      year: "Completed",
      gpa: "82%",
      icon: Award,
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-formal-script text-4xl md:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-skill-gradient mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-formal-script text-2xl font-semibold mb-4 text-foreground">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a recent AI & ML Engineering graduate from SPPU University Pune, I'm passionate about 
                  creating intelligent solutions that bridge the gap between theoretical machine learning 
                  concepts and practical software applications.
                </p>
                <p>
                  My academic journey has equipped me with a strong foundation in Python programming, 
                  web development frameworks like Flask and Django, and comprehensive database management 
                  using SQL. I've honed my skills through hands-on projects that demonstrate real-world 
                  problem-solving capabilities.
                </p>
                <p>
                  I thrive on building end-to-end solutions that not only showcase technical proficiency 
                  but also deliver meaningful impact. From developing AI-powered task management systems 
                  to creating predictive models for real-world applications, I'm committed to pushing 
                  the boundaries of what's possible with technology.
                </p>
              </div>
            </div>

            {/* Career Goal */}
            <Card className="portfolio-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Target className="h-5 w-5" />
                  <span>Career Goal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To build intelligent, scalable solutions that combine cutting-edge AI/ML technologies 
                  with robust software development practices, contributing to meaningful projects that 
                  solve real-world challenges.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-formal-script text-2xl font-semibold mb-6 text-foreground">
              Education Timeline
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="portfolio-card border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <edu.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground text-lg">
                            {edu.degree}
                          </h4>
                          <p className="text-primary font-medium">
                            {edu.institution}
                          </p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-sm text-muted-foreground">
                              {edu.year}
                            </span>
                            <span className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                              {edu.gpa}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About