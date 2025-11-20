import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Shield,
  Lock,
  Eye,
  Database,
  Users,
  Mail,
  Cookie,
  Server,
  Globe,
  FileText,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card'
import { Button } from '../../ui/Button'
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

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  const dataCollectionPoints = [
    {
      icon: Users,
      title: 'Account Information',
      data: ['Username', 'Email address', 'Profile preferences', 'University affiliation']
    },
    {
      icon: FileText,
      title: 'Academic Content',
      data: ['Posts and discussions', 'Comments and replies', 'Study materials', 'Project collaborations']
    },
    {
      icon: Globe,
      title: 'Usage Data',
      data: ['Browser type and version', 'IP address', 'Access times and dates', 'Pages visited']
    },
    {
      icon: Cookie,
      title: 'Technical Information',
      data: ['Cookies and session data', 'Device information', 'Location data (approximate)', 'Preferences and settings']
    }
  ]

  const dataUsage = [
    {
      purpose: 'Platform Operation',
      description: 'To provide and maintain the UniCollab service'
    },
    {
      purpose: 'Community Features',
      description: 'To enable collaboration and communication between students'
    },
    {
      purpose: 'Personalization',
      description: 'To customize your learning and collaboration experience'
    },
    {
      purpose: 'Security & Safety',
      description: 'To protect our community and prevent misuse'
    },
    {
      purpose: 'Improvements',
      description: 'To analyze usage patterns and enhance our platform'
    },
    {
      purpose: 'Communications',
      description: 'To send important updates and community announcements'
    }
  ]

  const userRights = [
    {
      right: 'Access Your Data',
      description: 'Request a copy of all personal information we hold about you'
    },
    {
      right: 'Data Correction',
      description: 'Update or correct inaccurate personal information'
    },
    {
      right: 'Data Deletion',
      description: 'Request deletion of your personal data under certain conditions'
    },
    {
      right: 'Account Deactivation',
      description: 'Temporarily or permanently deactivate your account'
    },
    {
      right: 'Data Portability',
      description: 'Receive your data in a structured, machine-readable format'
    },
    {
      right: 'Consent Withdrawal',
      description: 'Withdraw consent for data processing where applicable'
    }
  ]

  const securityMeasures = [
    'End-to-end encryption for sensitive data',
    'Regular security audits and vulnerability assessments',
    'Secure server infrastructure with firewalls',
    'Access controls and authentication protocols',
    'Data anonymization where possible',
    'Regular backup and disaster recovery procedures'
  ]

  const thirdPartyServices = [
    {
      service: 'Authentication Services',
      purpose: 'Secure user login and account management'
    },
    {
      service: 'Cloud Storage',
      purpose: 'Safe storage of user data and content'
    },
    {
      service: 'Analytics Tools',
      purpose: 'Platform improvement and usage analysis'
    },
    {
      service: 'Communication Tools',
      purpose: 'Email notifications and community updates'
    }
  ]

  return (
    <div className='relative top-[13vh] min-h-[87vh] bg-background'>
      {/* Back Button */}
      <motion.div
        className="absolute top-4 left-4 z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={handleGoBack}
          className="flex items-center gap-2 text-textColor hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <ArrowLeft className="w-6 h-4" />
          {/* Back */}
        </Button>
      </motion.div>

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
              <Lock className='w-10 h-10 text-primary-foreground' />
            </motion.div>
            <motion.h1
              className='text-4xl md:text-5xl font-black text-textColor mb-4'
              variants={fadeInUp}
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              className='text-xl text-muted-foreground mb-8 leading-relaxed'
              variants={fadeInUp}
            >
              Your privacy is our priority. Learn how UniCollab protects your data
              and respects your rights while providing the best collaborative learning experience.
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
                <Link to='/code-of-conduct'>Code of Conduct</Link>
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

      {/* Introduction */}
      <div className='container mx-auto px-6 py-16'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
          >
            <Card className='hover:shadow-lg transition-all duration-300'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Shield className='w-5 h-5' />
                  Our Commitment to Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4 text-muted-foreground'>
                  <p>
                    At UniCollab, we are committed to protecting your privacy and ensuring
                    the security of your personal information. This Privacy Policy explains
                    how we collect, use, disclose, and safeguard your information when you
                    use our platform.
                  </p>
                  <p>
                    By using UniCollab, you consent to the data practices described in this
                    policy. We encourage you to read this Privacy Policy carefully to
                    understand our views and practices regarding your personal data.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Data Collection */}
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
                Information We Collect
              </h2>
              <p className='text-muted-foreground text-lg'>
                We collect information necessary to provide and improve our collaborative learning platform
              </p>
            </motion.div>
            <motion.div
              className='grid md:grid-cols-2 gap-6'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {dataCollectionPoints.map((collection, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className='hover:shadow-lg transition-all duration-300 h-full'>
                    <CardContent className='p-6'>
                      <div className='flex items-start gap-4'>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <collection.icon className='w-8 h-8 text-white mt-1' />
                        </motion.div>
                        <div className='flex-1'>
                          <h3 className='font-semibold text-lg mb-3'>{collection.title}</h3>
                          <ul className='space-y-2'>
                            {collection.data.map((item, itemIndex) => (
                              <motion.li
                                key={itemIndex}
                                className='flex items-center gap-2 text-sm text-muted-foreground'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                transition={{ delay: itemIndex * 0.1 }}
                              >
                                <CheckCircle className='w-4 h-4 text-green-500 flex-shrink-0' />
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Data Usage */}
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
              How We Use Your Information
            </h2>
            <p className='text-muted-foreground text-lg'>
              Your data helps us create a better learning experience while maintaining your privacy
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
                  className='grid md:grid-cols-2 gap-6'
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {dataUsage.map((usage, index) => (
                    <motion.div
                      key={index}
                      className='flex items-start gap-3 p-4 bg-muted/50 rounded-lg'
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Database className='w-5 h-5 text-white mt-0.5 flex-shrink-0' />
                      <div>
                        <h4 className='font-semibold text-textColor'>{usage.purpose}</h4>
                        <p className='text-muted-foreground text-sm'>{usage.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* User Rights */}
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
                Your Data Rights
              </h2>
              <p className='text-muted-foreground text-lg'>
                You have control over your personal information
              </p>
            </motion.div>
            <motion.div
              className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              {userRights.map((right, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className='hover:shadow-lg transition-all duration-300 h-full'>
                    <CardContent className='p-6 text-center'>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Eye className='w-10 h-10 text-white mx-auto mb-4' />
                      </motion.div>
                      <h3 className='font-semibold text-lg mb-2'>{right.right}</h3>
                      <p className='text-muted-foreground text-sm'>{right.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Security Measures */}
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
              Security Measures
            </h2>
            <p className='text-muted-foreground text-lg'>
              How we protect your data from unauthorized access and breaches
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
                  {securityMeasures.map((measure, index) => (
                    <motion.div
                      key={index}
                      className='flex items-start gap-3'
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Shield className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>{measure}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Third-Party Services */}
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
                Third-Party Services
              </h2>
              <p className='text-muted-foreground text-lg'>
                Trusted services we use to enhance your experience
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
                    className='space-y-4'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {thirdPartyServices.map((service, index) => (
                      <motion.div
                        key={index}
                        className='flex items-start gap-4 p-4 bg-background rounded-lg'
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Server className='w-5 h-5 text-white mt-0.5 flex-shrink-0' />
                        <div className='flex-1'>
                          <h4 className='font-semibold text-textColor'>{service.service}</h4>
                          <p className='text-muted-foreground text-sm'>{service.purpose}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className='container mx-auto px-6 py-16'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
          >
            <Card className='hover:shadow-lg transition-all duration-300 border-blue-200'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Mail className='w-5 h-5' />
                  Contact Our Privacy Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4 text-muted-foreground'>
                  <p>
                    If you have any questions about this Privacy Policy, your personal data,
                    or wish to exercise your rights, please contact our Privacy Team:
                  </p>
                  <div className='bg-muted/50 p-4 rounded-lg'>
                    <p className='font-semibold text-textColor'>Email: privacy@unicollab.edu</p>
                    <p className='text-sm'>We typically respond within 48 hours.</p>
                  </div>
                  <p className='text-sm'>
                    For data deletion requests or account-related inquiries, please include
                    your username and university affiliation for faster processing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Policy Updates */}
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
              Policy Updates
            </motion.h2>
            <motion.p
              className='text-muted-foreground text-lg mb-8'
              variants={fadeInUp}
            >
              We may update this Privacy Policy to reflect changes in our practices or legal requirements.
            </motion.p>
            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center'
              variants={fadeInUp}
            >
              <Button asChild size='lg' className='gap-2'>
                <Link to='/code-of-conduct'>
                  Read Code of Conduct
                </Link>
              </Button>
              <Button asChild variant='outline' size='lg'>
                <Link to='/about'>About Our Community</Link>
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
              Thank you for trusting innoVIT with your educational journey.
              We are committed to protecting your privacy while providing an exceptional collaborative learning experience.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
