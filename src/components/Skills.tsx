import { motion } from 'framer-motion'
import { Code, Database, Brain, Globe, Wrench, BarChart, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Language",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Java", level: 45 },
        { name: "C++", level: 45 }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "Flask", level: 90 },
        { name: "Django", level: 70 },
        { name: "HTML/CSS", level: 80 },
        { name: "REST APIs", level: 70 }
      ]
    },
    {
      title: "AI & ML",
      icon: Brain,
      skills: [
        { name: "Supervised & Unsupervised Learning, NLP", level: 75 },
        { name: "Regression, Classification, Clustering", level: 75 },
        { name: "Neural Network, CNNs", level: 70 },
        { name: "Tensorflow, PyTorch, Keras", level: 60 }
      ]
    },
    {
      title: "Database & Analytics",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "ORMs", level: 80 },
        { name: "PowerBi", level: 91 },
        { name: "Excel", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git", level: 80 },
        { name: "Agile Methodologies", level: 85 },
        { name: "VSCode", level: 95 },
        { name: "TKinter", level: 70 }
      ]
    },
    {
      title: "AI Tools",
      icon: Sparkles,
      skills: [
        { name: "ChatGPT", level: 95 },
        { name: "Bito", level: 85 },
        { name: "GitHub Copilot", level: 90 },
        { name: "CodeGPT", level: 85 }
      ]
    },
    {
      title: "Soft Skills",
      icon: BarChart,
      skills: [
        { name: "Communication", level: 95 },
        { name: "Problem Solving", level: 85 },
        { name: "Team Work", level: 85 },
        { name: "Project Management", level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-formal-script text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-skill-gradient mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies across various domains of software development and AI/ML.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="portfolio-card h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-foreground">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={0} 
                          className="h-2 bg-muted"
                        />
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="absolute top-0 left-0 h-2 bg-skill-gradient rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="portfolio-card bg-hero-glow border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-formal-script text-2xl font-semibold text-foreground mb-6">
                Continuous Learning & Growth
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-muted-foreground">Programming Languages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Technologies Mastered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Major Projects Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills