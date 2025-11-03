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

const AboutCommunity = () => {
  const communityStats = [
    { icon: Users, number: '10,000+', label: 'Active Students' },
    { icon: MessageSquare, number: '50,000+', label: 'Posts Created' },
    { icon: Trophy, number: '500+', label: 'Challenges Hosted' },
    { icon: GraduationCap, number: '100+', label: 'Universities' },
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
          <div className='max-w-4xl mx-auto text-center'>
            <div className='w-20 h-20 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center'>
              <Users className='w-10 h-10 text-primary-foreground' />
            </div>
            <h1 className='text-4xl md:text-5xl font-black text-textColor mb-4'>
              About UniCollab Community
            </h1>
            <p className='text-xl text-muted-foreground mb-8 leading-relaxed'>
              A vibrant platform where students collaborate, learn, and grow
              together. Join thousands of students worldwide in shaping the
              future of education through collaboration.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button asChild size='lg' className='gap-2'>
                <Link to='/unicollab'>
                  Join Community
                  <ArrowRight className='w-4 h-4' />
                </Link>
              </Button>
              <Button asChild variant='outline' size='lg'>
                <Link to='/code-of-conduct'>Community Guidelines</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'>
          {communityStats.map((stat, index) => (
            <Card key={index} className='text-center'>
              <CardContent className='pt-6'>
                <stat.icon className='w-8 h-8 mx-auto text-primary mb-2' />
                <p className='text-2xl font-black text-textColor'>
                  {stat.number}
                </p>
                <p className='text-sm text-muted-foreground'>{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className='bg-muted/30 py-16'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl mx-auto'>
            <div className='grid md:grid-cols-2 gap-8'>
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Star className='w-5 h-5 text-primary' />
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
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Globe className='w-5 h-5 text-primary' />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground leading-relaxed'>
                    To become the world's most trusted student collaboration
                    platform, transforming how students learn and interact
                    globally. We envision a future where every student has
                    access to a supportive community that enhances their
                    educational experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className='container mx-auto px-6 py-16'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-black text-textColor mb-4'>
              Our Core Values
            </h2>
            <p className='text-muted-foreground text-lg'>
              The principles that guide our community and shape our culture
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-6'>
            {coreValues.map((value, index) => (
              <Card key={index} className='hover:shadow-lg transition-shadow'>
                <CardContent className='p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
                      <value.icon className='w-6 h-6 text-primary' />
                    </div>
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
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='bg-muted/30 py-16'>
        <div className='container mx-auto px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-black text-textColor mb-4'>
                Community Features
              </h2>
              <p className='text-muted-foreground text-lg'>
                Everything you need to enhance your academic journey
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {features.map((feature, index) => (
                <Card key={index} className='hover:shadow-lg transition-shadow'>
                  <CardContent className='p-6'>
                    <feature.icon className='w-10 h-10 text-primary mb-4' />
                    <h3 className='font-semibold text-lg mb-2'>
                      {feature.title}
                    </h3>
                    <p className='text-muted-foreground text-sm'>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Guidelines Section */}
      <div className='container mx-auto px-6 py-16'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-black text-textColor mb-4'>
              Community Guidelines
            </h2>
            <p className='text-muted-foreground text-lg'>
              Help us maintain a positive and productive environment for
              everyone
            </p>
          </div>
          <Card>
            <CardContent className='p-6'>
              <div className='grid gap-4'>
                {communityGuidelines.map((guideline, index) => (
                  <div key={index} className='flex items-start gap-3'>
                    <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                    <span className='text-muted-foreground'>{guideline}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Join CTA Section */}
      <div className='bg-gradient-to-r from-primary/10 to-primary/5 border-t border-border'>
        <div className='container mx-auto px-6 py-16'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-black text-textColor mb-4'>
              Ready to Join Our Community?
            </h2>
            <p className='text-muted-foreground text-lg mb-8'>
              Become part of a growing network of students helping each other
              succeed. Your next collaboration partner is waiting!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button asChild size='lg' className='gap-2'>
                <Link to='/unicollab'>
                  Get Started
                  <ArrowRight className='w-4 h-4' />
                </Link>
              </Button>
              <Button asChild variant='outline' size='lg'>
                <Link to='/code-of-conduct'>Read Code of Conduct</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className='border-t border-border'>
        <div className='container mx-auto px-6 py-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <p className='text-muted-foreground text-sm'>
              UniCollab Community is built with ❤️ for students, by students.
              We're committed to creating a better educational experience for
              everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCommunity
