import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const Certifications = () => {
  const certifications = [
    {
      name: "Python Course Completion",
      issuer: "IBM",
      icon: "🐍"
    },
    {
      name: "Machine Learning",
      issuer: "Stanford (Coursera)",
      icon: "🤖"
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: "☁️"
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-formal-script text-4xl md:text-5xl font-bold text-gradient mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-skill-gradient mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="portfolio-card h-full text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">{cert.icon}</div>
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {cert.issuer}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
