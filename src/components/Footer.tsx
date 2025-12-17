import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Resumes', href: '#resumes' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/kirankamble1523',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/kiran-kamble07',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:kirankamble.co.in03@gmail.com',
    },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="font-formal-script text-2xl font-bold text-gradient">
              Kiran Kamble
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI & ML Engineer passionate about building intelligent solutions 
              that make a difference. Always learning, always building, always growing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:kirankamble.co.in03@gmail.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  kirankamble.co.in03@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a
                  href="tel:+919049239910"
                  className="hover:text-primary transition-colors duration-200"
                >
                  +91 9049239910
                </a>
              </p>
              <p>
                <strong>Location:</strong> Pune, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Kiran Kamble | Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and Code</span>
            </div>

            {/* Back to Top */}
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              This website is built with React, TypeScript, Tailwind CSS, and Framer Motion. 
              Hosted with ❤️ for optimal performance and user experience.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer