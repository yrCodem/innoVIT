import React from 'react'
import { Link } from 'react-router-dom'
import {
  Users,
  BookOpen,
  Shield,
  Heart,
  MessageSquare,
  Trophy,
  Star,
  GraduationCap,
  Lightbulb,
  Globe,
  ArrowRight,
  CheckCircle,
  Award,
  Clock,
  Users2,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { Button } from '../ui/Button'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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

// Animated Card Component
const AnimatedCard = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

// Animated Stat Component
const AnimatedStat = ({ stat, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={scaleUp}
      transition={{ delay: index * 0.1 }}
    >
      <Card className='text-center hover:shadow-lg transition-all duration-300 hover:scale-105'>
        <CardContent className='pt-6'>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <stat.icon className='w-8 h-8 mx-auto text-white mb-2' />
          </motion.div>
          <motion.p
            className='text-2xl font-black text-textColor'
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
          >
            {stat.number}
          </motion.p>
          <p className='text-sm text-muted-foreground'>{stat.label}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const AboutCommunity = () => {
  const communityStats = [
    { icon: Users, number: '10', label: 'Active Students' },
    { icon: MessageSquare, number: '50+', label: 'Posts Created' },
    { icon: Trophy, number: '5+', label: 'Challenges Hosted' },
    { icon: GraduationCap, number: '1', label: 'Universities' },
  ]

  const coreValues = [
    {
      icon: Heart,
      title: 'Collaboration Over Competition',
      description:
        'We believe in working together to achieve academic excellence and personal growth.',
    },
    {
      icon: Shield,
      title: 'Safe & Inclusive Space',
      description:
        'Every student deserves a respectful environment to learn, share, and grow.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Creativity',
      description:
        'Encouraging innovative thinking and creative problem-solving approaches.',
    },
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description:
        'Collective growth through sharing insights, resources, and experiences.',
    },
  ]

  const communityGuidelines = [
    'Be respectful and inclusive to all members',
    'Share knowledge and help others learn',
    'Maintain academic integrity in all discussions',
    'Protect privacy and personal information',
    'Give credit for shared resources and ideas',
    'Report any inappropriate content or behavior',
  ]

  const features = [
    {
      icon: MessageSquare,
      title: 'Discussion Forums',
      description: 'Engage in meaningful academic discussions and Q&A sessions',
    },
    {
      icon: Trophy,
      title: 'Learning Challenges',
      description: 'Participate in weekly coding and academic challenges',
    },
    {
      icon: Users2,
      title: 'Study Groups',
      description: 'Form virtual study groups for collaborative learning',
    },
    {
      icon: Award,
      title: 'Skill Badges',
      description: 'Earn recognition for your contributions and expertise',
    },
    {
      icon: Clock,
      title: 'Real-time Help',
      description: 'Get immediate assistance from peers and mentors',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with students from universities worldwide',
    },
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
              <Users className='w-10 h-10 text-primary-foreground' />
            </motion.div>
            <motion.h1
              className='text-4xl md:text-5xl font-black text-textColor mb-4'
              variants={fadeInUp}
            >
              About UniCollab Community
            </motion.h1>
            <motion.p
              className='text-xl text-muted-foreground mb-8 leading-relaxed'
              variants={fadeInUp}
            >
              A platform where students collaborate, learn, and grow
              together. Join thousands of students across all campus of Vellore Institute of Technology (VIT) in shaping the
              future of education through collaboration.
            </motion.p>
            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center'
              variants={fadeInUp}
            >
              <Button asChild size='lg' className='gap-2'>
                <Link to='/unicollab'>
                  Join Community
                  <ArrowRight className='w-4 h-4' />
                </Link>
              </Button>
              <Button asChild variant='outline' size='lg'>
                <Link to='/code-of-conduct'>Community Guidelines</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='container mx-auto px-6 py-12'>
        <motion.div
          className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {communityStats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Mission & Vision Section */}
      <div className='bg-muted/30 py-16'>
        <div className='container mx-auto px-6'>
          <motion.div
            className='max-w-4xl mx-auto'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className='grid md:grid-cols-2 gap-8'>
              <motion.div variants={slideInLeft}>
                <Card className='hover:shadow-lg transition-all duration-300'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <Star className='w-5 h-5 text-white' />
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground leading-relaxed'>
                      To create a collaborative ecosystem where students can
                      freely exchange knowledge, work together on projects, and
                      support each other's academic journey. We're committed to
                      breaking down educational barriers and fostering a culture
                      of mutual growth.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={slideInRight}>
                <Card className='hover:shadow-lg transition-all duration-300'>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <Globe className='w-5 h-5 text-white' />
                      Our Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground leading-relaxed'>
                      To become the VIT's most trusted student collaboration
                      platform, transforming how students learn and interact. We envision a future where every student has
                      access to a supportive community that enhances their
                      educational experience.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Values Section */}
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
              Our Core Values
            </h2>
            <p className='text-muted-foreground text-lg'>
              The principles that guide our community and shape our culture
            </p>
          </motion.div>
          <motion.div
            className='grid md:grid-cols-2 gap-6'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {coreValues.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className='hover:shadow-lg transition-all duration-300 hover:scale-105'>
                  <CardContent className='p-6'>
                    <div className='flex items-start gap-4'>
                      <motion.div
                        className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <value.icon className='w-6 h-6 text-white' />
                      </motion.div>
                      <div>
                        <h3 className='font-semibold text-lg mb-2'>
                          {value.title}
                        </h3>
                        <p className='text-muted-foreground'>
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
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
                Community Features
              </h2>
              <p className='text-muted-foreground text-lg'>
                Everything you need to enhance your academic journey
              </p>
            </motion.div>
            <motion.div
              className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className='hover:shadow-lg transition-all duration-300'>
                    <CardContent className='p-6'>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <feature.icon className='w-10 h-10 text-white mb-4' />
                      </motion.div>
                      <h3 className='font-semibold text-lg mb-2'>
                        {feature.title}
                      </h3>
                      <p className='text-muted-foreground text-sm'>
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Guidelines Section */}
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
              Community Guidelines
            </h2>
            <p className='text-muted-foreground text-lg'>
              Help us maintain a positive and productive environment for
              everyone
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
                  {communityGuidelines.map((guideline, index) => (
                    <motion.div
                      key={index}
                      className='flex items-start gap-3'
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>{guideline}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Join CTA Section */}
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
              Ready to Join Our Community?
            </motion.h2>
            <motion.p
              className='text-muted-foreground text-lg mb-8'
              variants={fadeInUp}
            >
              Become part of a growing network of students helping each other
              succeed. Your next collaboration partner is waiting!
            </motion.p>
            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center'
              variants={fadeInUp}
            >
              <Button asChild size='lg' className='gap-2'>
                <Link to='/unicollab'>
                  Get Started
                  <ArrowRight className='w-4 h-4' />
                </Link>
              </Button>
              <Button asChild variant='outline' size='lg'>
                <Link to='/code-of-conduct'>Read Code of Conduct</Link>
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
              UniCollab Community is built with ❤️ for students, by students.
              We're committed to creating a better educational experience for
              everyone.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutCommunity
