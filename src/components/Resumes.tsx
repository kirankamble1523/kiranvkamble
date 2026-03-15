import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const resumes = [
  {
    title: 'Developer',
    link: 'https://drive.google.com/file/d/1slI-tB_KINg79JYklGlq4D4iaGmYPWQW/view?usp=drivesdk'
  },
  {
    title: 'Data Analyst',
    link: 'https://drive.google.com/file/d/1fDZKm8kYa4RhxKhRRMQe0OLsyqZ6PR6c/view?usp=drivesdk'
  }
]

const Resumes = () => {
  return (
    <section id="resumes" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-formal-script text-4xl md:text-5xl font-bold text-gradient mb-4">
            My Resumes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my resumes tailored for different roles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resumes.map((resume, index) => (
            <motion.div
              key={resume.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 p-0.5">
                    <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <FileText className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {resume.title}
                  </h3>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 text-white border-0 transition-all duration-300"
                  >
                    <a href={resume.link} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resumes
