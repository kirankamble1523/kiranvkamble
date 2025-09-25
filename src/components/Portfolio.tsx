import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const Portfolio = () => {
  const projects = [
    {
      title: "AI Task Manager Web App",
      description: "A comprehensive task management system built with Flask and SQL that leverages AI for intelligent task prioritization and scheduling. Features CRUD operations, user authentication, and analytics dashboard, resulting in 35% improvement in task completion efficiency.",
      technologies: ["Flask", "Python", "SQL", "HTML/CSS", "AI/ML", "CRUD Operations"],
      github: "https://github.com/kirankamble1523",
      demo: "#",
      category: "Full-Stack Development",
      highlights: [
        "AI-powered task prioritization",
        "35% improvement in efficiency",
        "Complete user authentication system",
        "Real-time analytics dashboard"
      ]
    },
    {
      title: "Voice-Enabled AI Assistant",
      description: "An intelligent desktop assistant built with Python that combines speech recognition, natural language processing, and text-to-speech capabilities. Designed specifically for academic assistance with voice commands and automated responses.",
      technologies: ["Python", "SpeechRecognition", "Tkinter", "pyttsx3", "NLP", "Voice Processing"],
      github: "https://github.com/kirankamble1523",
      demo: "#",
      category: "AI/ML Application",
      highlights: [
        "Real-time speech recognition",
        "Natural language processing",
        "Cross-platform desktop GUI",
        "Academic query assistance"
      ]
    },
    {
      title: "Car Price Prediction Web App",
      description: "A machine learning web application that predicts car prices based on various features using Random Forest algorithm. Built with Streamlit for an intuitive user interface and deployed for real-time predictions.",
      technologies: ["Python", "Random Forest", "Streamlit", "Machine Learning", "Data Science", "Pandas"],
      github: "https://github.com/kirankamble1523",
      demo: "#",
      category: "Machine Learning",
      highlights: [
        "Random Forest ML model",
        "Interactive Streamlit interface",
        "Real-time price predictions",
        "Feature importance analysis"
      ]
    },
    {
      title: "COVID-19 Global Dashboard",
      description: "A comprehensive data visualization dashboard analyzing global COVID-19 pandemic trends using SQL for data management and Power BI for interactive visualizations. Provides insights into infection rates, recovery patterns, and geographical spread.",
      technologies: ["SQL", "Power BI", "Data Analysis", "Data Visualization", "ETL", "Dashboard Design"],
      github: "https://github.com/kirankamble1523",
      demo: "#",
      category: "Data Analytics",
      highlights: [
        "Global pandemic data analysis",
        "Interactive Power BI dashboard",
        "Real-time data updates",
        "Geographical trend mapping"
      ]
    },
    {
      title: "Titanic Survival Analysis",
      description: "A comprehensive data analysis dashboard created with SQL and Power BI to analyze survival patterns of Titanic passengers. Features data cleaning in MySQL Workbench, interactive visualizations, and insights based on age, gender, class, fare, and embarkation points with dynamic decomposition trees and calculated measures.",
      technologies: ["SQL", "Power BI", "MySQL", "Data Analysis", "Data Visualization", "DAX", "Data Cleaning", "ETL"],
      github: "https://lnkd.in/d4AKydkH",
      demo: "https://lnkd.in/d4AKydkH",
      category: "Data Analytics",
      highlights: [
        "Interactive Power BI dashboard with multiple visualizations",
        "Advanced data cleaning and preprocessing in MySQL",
        "Dynamic decomposition tree for class-wise analysis",
        "Key insights: 1st class females had highest survival rate"
      ]
    },
    {
      title: "Prime Video Insights",
      description: "A dynamic dashboard analyzing Prime Video's content library to uncover streaming trends, genre patterns, and ratings distribution. Explores content evolution from the 1960s to today, revealing insights into what makes Prime Video a global entertainment leader through comprehensive data visualization.",
      technologies: ["Power BI", "Data Analysis", "Data Visualization", "Entertainment Analytics", "Trend Analysis", "Dashboard Design"],
      github: "https://github.com/kirankamble1523",
      demo: "#",
      category: "Data Analytics", 
      highlights: [
        "Genre trends analysis across Comedy, Animation, Documentary",
        "Content evolution tracking from 1960s to present",
        "Movies vs TV Shows distribution analysis",
        "Ratings breakdown for different age demographics"
      ]
    }
  ]

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-formal-script text-4xl md:text-5xl font-bold text-gradient mb-6">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-skill-gradient mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects showcasing expertise in AI/ML, full-stack development, and data analytics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="portfolio-card h-full flex flex-col border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => window.open(project.github, '_blank')}
                        className="p-2"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => window.open(project.demo, '_blank')}
                        className="p-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground mb-3">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Tag className="h-4 w-4 text-primary mr-2" />
                      Key Highlights
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {project.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: i * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs bg-primary/5 border-primary/20 text-primary"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button
                      onClick={() => window.open(project.github, '_blank')}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button
                      onClick={() => window.open(project.demo, '_blank')}
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="portfolio-card bg-hero-glow border-primary/20 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-formal-script text-2xl font-semibold text-foreground mb-4">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new projects and exploring emerging technologies. 
                Check back regularly for updates or connect with me to discuss potential collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open('https://github.com/kirankamble1523', '_blank')}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects
                </Button>
                <Button
                  variant="outline"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Collaborate
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio