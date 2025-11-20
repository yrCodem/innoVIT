import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  FileText,
  Scale,
  UserCheck,
  BookOpen,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Users,
  Globe,
  Lock,
  Mail,
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

const TermsOfService = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  const userResponsibilities = [
    {
      icon: UserCheck,
      title: 'Account Security',
      description: 'Maintain the confidentiality of your login credentials and promptly report any unauthorized access'
    },
    {
      icon: BookOpen,
      title: 'Academic Integrity',
      description: 'Ensure all shared content respects academic honesty and properly cites sources'
    },
    {
      icon: Users,
      title: 'Respectful Conduct',
      description: 'Interact with all community members in a respectful and professional manner'
    },
    {
      icon: Shield,
      title: 'Content Responsibility',
      description: 'Take responsibility for the content you post and ensure it complies with our guidelines'
    }
  ]

  const allowedActivities = [
    'Sharing educational resources and study materials',
    'Collaborating on academic projects and assignments',
    'Asking and answering academic questions',
    'Forming study groups and discussion forums',
    'Participating in community challenges and events',
    'Providing constructive feedback on peer work',
    'Sharing learning experiences and insights',
  ]

  const prohibitedActivities = [
    'Harassment, bullying, or hate speech',
    'Sharing malicious software or harmful links',
    'Commercial advertising or spam',
    'Impersonation or false identity',
    'Sharing others personal information without consent',
    'Copyright infringement or unauthorized sharing',
    'Any illegal activities or content'
  ]

  const intellectualProperty = [
    {
      aspect: 'User Content',
      rights: 'You retain ownership of content you create, but grant UniCollab license to display and distribute it'
    },
    {
      aspect: 'Platform Content',
      rights: 'UniCollab owns all platform code, design, and proprietary content'
    },
    {
      aspect: 'Third-Party Content',
      rights: 'Respect copyright and attribute third-party materials properly'
    },
    {
      aspect: 'Collaborative Work',
      rights: 'Joint projects should have clear attribution and usage agreements'
    }
  ]

  const accountTerms = [
    {
      term: 'Eligibility',
      description: 'Must be currently enrolled student or faculty member at Vellore Institute of Technology (VIT)'
    },
    {
      term: 'Verification',
      description: 'May require educational email verification or institutional confirmation'
    },
    {
      term: 'Termination',
      description: 'Accounts may be suspended for violations of Terms Of Services (TOS) or Code Of Conduct (COC)'
    },
    {
      term: 'Data Retention',
      description: 'Account data retained according to our privacy policy after deactivation'
    }
  ]

  const limitations = [
    {
      limitation: 'Service Availability',
      description: 'We strive for 24/7 availability but cannot guarantee uninterrupted service'
    },
    {
      limitation: 'Content Accuracy',
      description: 'We are not responsible for accuracy of user-generated educational content'
    },
    {
      limitation: 'Academic Outcomes',
      description: 'Success in academic pursuits remains the responsibility of the student'
    },
    {
      limitation: 'Third-Party Links',
      description: 'We are not responsible for content on external websites linked from our platform'
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
              <Scale className='w-10 h-10 text-primary-foreground' />
            </motion.div>
            <motion.h1
              className='text-4xl md:text-5xl font-black text-textColor mb-4'
              variants={fadeInUp}
            >
              Terms of Service
            </motion.h1>
            <motion.p
              className='text-xl text-muted-foreground mb-8 leading-relaxed'
              variants={fadeInUp}
            >
              Welcome to UniCollab! These Terms govern your use of our collaborative
              learning platform. Please read them carefully before joining our community.
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
                <Link to='/privacy'>Privacy Policy</Link>
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
          <p className='text-xs text-muted-foreground mt-2'>
            By using UniCollab, you agree to these Terms and our Code of Conduct
          </p>
        </motion.div>
      </div>

      {/* Agreement Section */}
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
                  <FileText className='w-5 h-5' />
                  Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4 text-muted-foreground'>
                  <p>
                    By accessing or using UniCollab, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms of Service and our
                    Privacy Policy. If you do not agree with these terms, please do not
                    use our platform.
                  </p>
                  <p>
                    These terms constitute a legal agreement between you and UniCollab
                    governing your use of our learning platform and services.
                  </p>
                  <div className='bg-muted/50 p-4 rounded-lg'>
                    <p className='font-semibold text-red-400'>
                      Important: These terms include limitations of liability and dispute resolution provisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* User Responsibilities */}
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
                User Responsibilities
              </h2>
              <p className='text-muted-foreground text-lg'>
                Your obligations as a member of our academic community
              </p>
            </motion.div>
            <motion.div
              className='grid md:grid-cols-2 gap-6'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {userResponsibilities.map((responsibility, index) => (
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
                          <responsibility.icon className='w-8 h-8 text-white mt-1' />
                        </motion.div>
                        <div className='flex-1'>
                          <h3 className='font-semibold text-lg mb-2'>{responsibility.title}</h3>
                          <p className='text-muted-foreground text-sm'>{responsibility.description}</p>
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

      {/* Allowed Activities */}
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
              Permitted Activities
            </h2>
            <p className='text-muted-foreground text-lg'>
              How you can use UniCollab to enhance your learning experience
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
          >
            <Card className='hover:shadow-lg transition-all duration-300 border-green-200'>
              <CardContent className='p-6'>
                <motion.div
                  className='grid gap-4'
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {allowedActivities.map((activity, index) => (
                    <motion.div
                      key={index}
                      className='flex items-start gap-3'
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                      <span className='text-muted-foreground'>{activity}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Prohibited Activities */}
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
                Prohibited Activities
              </h2>
              <p className='text-muted-foreground text-lg'>
                Actions that violate our terms and may result in account suspension
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
                    {prohibitedActivities.map((activity, index) => (
                      <motion.div
                        key={index}
                        className='flex items-start gap-3'
                        variants={itemVariants}
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <XCircle className='w-5 h-5 text-red-500 mt-0.5 flex-shrink-0' />
                        <span className='text-muted-foreground'>{activity}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Intellectual Property */}
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
              Intellectual Property Rights
            </h2>
            <p className='text-muted-foreground text-lg'>
              Understanding ownership and usage rights for content on our platform
            </p>
          </motion.div>
          <motion.div
            className='grid md:grid-cols-2 gap-6'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {intellectualProperty.map((property, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className='hover:shadow-lg transition-all duration-300 h-full'>
                  <CardContent className='p-6'>
                    <h3 className='font-semibold text-lg mb-3 text-textColor'>{property.aspect}</h3>
                    <p className='text-muted-foreground text-sm'>{property.rights}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Account Terms */}
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
                Account Terms
              </h2>
              <p className='text-muted-foreground text-lg'>
                Requirements and conditions for maintaining your UniCollab account
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
                    className='space-y-6'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {accountTerms.map((term, index) => (
                      <motion.div
                        key={index}
                        className='flex items-start gap-4 p-4 bg-background rounded-lg'
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Lock className='w-5 h-5 text-white mt-0.5 flex-shrink-0' />
                        <div>
                          <h4 className='font-semibold text-textColor'>{term.term}</h4>
                          <p className='text-muted-foreground text-sm'>{term.description}</p>
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

      {/* Limitations */}
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
              Limitations & Disclaimers
            </h2>
            <p className='text-muted-foreground text-lg'>
              Important information about service limitations and responsibilities
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
          >
            <Card className='hover:shadow-lg transition-all duration-300 border-orange-200'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <AlertTriangle className='w-5 h-5 text-orange-500' />
                  Important Limitations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  className='space-y-6'
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {limitations.map((limit, index) => (
                    <motion.div
                      key={index}
                      className='flex items-start gap-4 p-4 bg-muted/50 rounded-lg'
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <AlertTriangle className='w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0' />
                      <div>
                        <h4 className='font-semibold text-textColor'>{limit.limitation}</h4>
                        <p className='text-muted-foreground text-sm'>{limit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Contact & Modifications */}
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
              Questions & Modifications
            </motion.h2>
            <motion.p
              className='text-muted-foreground text-lg mb-8'
              variants={fadeInUp}
            >
              We may update these terms to reflect changes in our services or legal requirements
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
              <Button asChild variant='outline' size='lg' className='gap-2'>
                <Link to='/privacy'>
                  <Mail className='w-4 h-4' />
                  Contact Legal Team
                </Link>
              </Button>
            </motion.div>
            <motion.div
              className='mt-8 p-4 bg-background rounded-lg max-w-2xl mx-auto'
              variants={fadeInUp}
            >
              <p className='text-sm text-muted-foreground'>
                <strong>Notice of Changes:</strong> We will notify users of significant changes to these terms
                via platform notifications or email. Continued use after changes constitutes acceptance.
              </p>
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
              Thank you for choosing innoVIT for your collaborative learning journey.
              We're committed to providing a safe, effective platform for academic collaboration.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
