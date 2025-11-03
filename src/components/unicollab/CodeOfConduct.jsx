import React from 'react'
import { Link } from 'react-router-dom'
import {
  Shield,
  Users,
  Heart,
  Flag,
  AlertTriangle,
  CheckCircle,
  BookOpen,
  Scale,
  Eye,
  MessageCircle,
  Lock,
  Globe
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { Button } from '../ui/Button'
import { motion } from 'framer-motion'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
}

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const CodeOfConduct = () => {
  const principles = [
    {
      icon: Users,
      title: 'Respect for All',
      description: 'Treat every community member with dignity and respect, regardless of background, experience, or perspective.'
    },
    {
      icon: Heart,
      title: 'Inclusive Environment',
      description: 'Create a welcoming space where everyone feels safe to participate and share their ideas.'
    },
    {
      icon: BookOpen,
      title: 'Academic Integrity',
      description: 'Maintain honesty in all academic discussions and give proper credit for shared work.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Embrace diversity and learn from the different cultural and educational backgrounds of our members.'
    }
  ]

  const expectedBehavior = [
    'Use welcoming and inclusive language in all interactions',
    'Be respectful of differing viewpoints and experiences',
    'Provide constructive feedback with empathy and kindness',
    'Respect privacy and personal boundaries',
    'Give proper credit for shared resources and ideas',
    'Help maintain a positive and supportive learning environment',
    'Use appropriate pronouns and respect gender identity',
    'Cite sources and avoid plagiarism in all content'
  ]

  const unacceptableBehavior = [
    'Harassment, bullying, or intimidation of any kind',
    'Hate speech, discrimination, or prejudiced comments',
    'Sharing others\' personal information without consent',
    'Plagiarism or academic dishonesty',
    'Spamming, trolling, or disruptive behavior',
    'Sexualized language, imagery, or attention',
    'Personal attacks or derogatory comments',
    'Misinformation or intentionally misleading content'
  ]

  const reportingProcess = [
    {
      step: 1,
      title: 'Identify the Issue',
      description: 'Recognize behavior that violates our code of conduct'
    },
    {
      step: 2,
      title: 'Gather Evidence',
      description: 'Take screenshots or note relevant details and context'
    },
    {
      step: 3,
      title: 'Submit Report',
      description: 'Use the reporting feature or contact community moderators'
    },
    {
      step: 4,
      title: 'Review Process',
      description: 'Our team will investigate and take appropriate action'
    }
  ]

  const consequences = [
    {
      level: 'Warning',
      description: 'Formal warning and education about community standards'
    },
    {
      level: 'Temporary Suspension',
      description: 'Temporary loss of posting and interaction privileges'
    },
    {
      level: 'Permanent Ban',
      description: 'Permanent removal from the community for severe violations'
    },
    {
      level: 'Content Removal',
      description: 'Removal of violating content and related posts'
    }
  ]

  return (
    <div className='relative top-[13vh] min-h-[87vh] bg-background'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border'>
        <div className='container mx-auto px-6 py-16'>
          <motion.div
            className='max-w-4xl mx-auto text-center'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className='w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center'
              variants={scaleUp}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Shield className='w-10 h-10 text-primary-foreground' />
            </motion.div>
            <motion.h1
              className='text-4xl md:text-5xl font-black text-textColor mb-4'
              variants={fadeInUp}
            >
              Community Code of Conduct
            </motion.h1>
            <motion.p
              className='text-xl text-muted-foreground mb-8 leading-relaxed'
              variants={fadeInUp}
            >
              Our commitment to maintaining a safe, respectful, and inclusive environment
              for all UniCollab community members. These guidelines help us create the
              best possible experience for everyone.
            </motion.p>
            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center'
              variants={fadeInUp}
            >
              <Button asChild size='lg' className='gap-2'>
                <Link to='/unicollab'>
                  Join Community
                  <Users className='w-4 h-4' />
                </Link>
              </Button>
              <Button asChild variant='outline' size='lg'>
                <Link to='/about'>About Our Community</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Last Updated */}
      <div className='container mx-auto px-6 py-4'>
        <motion.div
          className='max-w-4xl mx-auto text-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className='text-sm text-muted-foreground'>
            Last updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </motion.div>
      </div>

      {/* Core Principles */}
      <div className='container mx-auto px-6 py-16'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='text-center mb-12'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className='text-3xl font-black text-textColor mb-4'>
              Our Core Principles
            </h2>
            <p className='text-muted-foreground text-lg'>
              The foundation of our community values and expectations
            </p>
          </motion.div>
          <motion.div
            className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className='hover:shadow-lg transition-all duration-300 h-full'>
                  <CardContent className='p-6 text-center'>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <principle.icon className='w-12 h-12 text-white mx-auto mb-4' />
                    </motion.div>
                    <h3 className='font-semibold text-lg mb-2'>{principle.title}</h3>
                    <p className='text-muted-foreground text-sm'>{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Expected Behavior */}
      <div className='bg-muted/30 py-16'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl mx-auto'>
            <motion.div
              className='text-center mb-12'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className='text-3xl font-black text-textColor mb-4'>
                Expected Behavior
              </h2>
              <p className='text-muted-foreground text-lg'>
                How we expect community members to interact and contribute
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
            >
              <Card className='hover:shadow-lg transition-all duration-300'>
                <CardContent className='p-6'>
                  <motion.div
                    className='grid gap-4'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {expectedBehavior.map((behavior, index) => (
                      <motion.div
                        key={index}
                        className='flex items-start gap-3'
                        variants={itemVariants}
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                        <span className='text-muted-foreground'>{behavior}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Unacceptable Behavior */}
      <div className='container mx-auto px-6 py-16'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            className='text-center mb-12'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className='text-3xl font-black text-textColor mb-4'>
              Unacceptable Behavior
            </h2>
            <p className='text-muted-foreground text-lg'>
              Actions that violate our community standards and will not be tolerated
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
          >
            <Card className='hover:shadow-lg transition-all duration-300 border-red-200'>
              <CardContent className='p-6'>
                <motion.div
                  className='grid gap-4'
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {unacceptableBehavior.map((behavior, index) => (
                    <motion.div
                      key={index}
                      className='flex items-start gap-3'
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <AlertTriangle className='w-5 h-5 text-red-500 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>{behavior}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Reporting Process */}
      <div className='bg-muted/30 py-16'>
        <div className='container mx-auto px-6'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              className='text-center mb-12'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className='text-3xl font-black text-textColor mb-4'>
                Reporting Process
              </h2>
              <p className='text-muted-foreground text-lg'>
                How to report violations and what happens next
              </p>
            </motion.div>
            <motion.div
              className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {reportingProcess.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className='hover:shadow-lg transition-all duration-300 h-full'>
                    <CardContent className='p-6 text-center'>
                      <div className='w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg'>
                        {step.step}
                      </div>
                      <h3 className='font-semibold text-lg mb-2'>{step.title}</h3>
                      <p className='text-muted-foreground text-sm'>{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Consequences */}
      <div className='container mx-auto px-6 py-16'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            className='text-center mb-12'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className='text-3xl font-black text-textColor mb-4'>
              Enforcement & Consequences
            </h2>
            <p className='text-muted-foreground text-lg'>
              How we handle violations to maintain community safety
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
          >
            <Card className='hover:shadow-lg transition-all duration-300'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Scale className='w-5 h-5' />
                  Enforcement Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  className='space-y-4'
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {consequences.map((consequence, index) => (
                    <motion.div
                      key={index}
                      className='flex items-start gap-4 p-4 bg-muted/50 rounded-lg'
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Lock className='w-5 h-5 text-white mt-0.5 flex-shrink-0' />
                      <div>
                        <h4 className='font-semibold text-textColor'>{consequence.level}</h4>
                        <p className='text-muted-foreground text-sm'>{consequence.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Contact & Support */}
      <div className='bg-gradient-to-r from-primary/10 to-primary/5 border-t border-border'>
        <div className='container mx-auto px-6 py-16'>
          <motion.div
            className='max-w-4xl mx-auto text-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              className='text-3xl font-black text-textColor mb-4'
              variants={fadeInUp}
            >
              Need Help or Have Questions?
            </motion.h2>
            <motion.p
              className='text-muted-foreground text-lg mb-8'
              variants={fadeInUp}
            >
              Our moderation team is here to help maintain a safe and positive environment for everyone.
            </motion.p>
            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center'
              variants={fadeInUp}
            >
              <Button asChild size='lg' className='gap-2'>
                <Link to='/help'>
                  <MessageCircle className='w-4 h-4' />
                  Contact Support
                </Link>
              </Button>
              <Button asChild variant='outline' size='lg'>
                <Link to='/about'>Learn More About Community</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer Note */}
      <div className='border-t border-border'>
        <div className='container mx-auto px-6 py-8'>
          <motion.div
            className='max-w-4xl mx-auto text-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className='text-muted-foreground text-sm'>
              By participating in UniCollab Community, you agree to abide by this Code of Conduct.
              We're committed to creating the best possible learning environment for all students.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CodeOfConduct
