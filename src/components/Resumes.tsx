import { motion } from 'framer-motion'
import { FileText, Download, Briefcase, Brain, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const resumes = [
  {
    title: 'Software/AI Engineer',
    description: 'Full-stack development, machine learning, and AI solutions',
    icon: Brain,
    color: 'from-purple-500 to-cyan-500',
    link: 'https://drive.google.com/file/d/1qDaPAUbbFEimit2rnMnm2UaSrrtcRYbb/view?usp=drivesdk'
  },
  {
    title: 'Data Analyst',
    description: 'Data visualization and business intelligence',
    icon: BarChart3,
    color: 'from-green-500 to-emerald-500',
    link: 'https://drive.google.com/file/d/1zxJUEJwGO9ysT7Z_m3QRXLYlcoQDSarx/view?usp=drivesdk'
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
            Download role-specific resumes tailored to different career paths
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {resumes.map((resume, index) => (
            <motion.div
              key={resume.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${resume.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardContent className="p-8 text-center relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${resume.color} p-0.5`}>
                    <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <resume.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {resume.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6">
                    {resume.description}
                  </p>

                  <Button
                    onClick={() => window.open(resume.link, '_blank')}
                    className={`w-full bg-gradient-to-r ${resume.color} hover:opacity-90 text-white border-0 transition-all duration-300`}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <FileText className="h-4 w-4" />
            Each resume is tailored for specific roles and opportunities
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Resumes
