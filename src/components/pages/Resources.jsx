import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Download, Video, FileText, Shield, Heart, ChevronDown, ChevronUp, Search, Star, Sparkles, Users, Clock, Award, Zap, Globe, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';

const Resources = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const resourceCategories = [
    {
      title: "Menstrual Health",
      icon: Heart,
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30",
      iconBg: "bg-gradient-to-r from-pink-500 to-rose-500",
      description: "Comprehensive menstrual health education and cycle management",
      totalResources: 3,
      resources: [
        {
          title: "Understanding Your Menstrual Cycle",
          type: "PDF Guide",
          description: "Comprehensive guide to menstrual health and cycle tracking",
          language: "English/Kinyarwanda",
          size: "2.5 MB",
          popularity: "Most Downloaded",
          featured: true
        },
        {
          title: "Menstrual Hygiene Best Practices",
          type: "Video Series",
          description: "Step-by-step videos on proper menstrual hygiene",
          language: "Kinyarwanda",
          duration: "15 minutes",
          popularity: "Trending"
        },
        {
          title: "Myth-Busting: Menstruation Facts",
          type: "Infographic",
          description: "Visual guide debunking common menstruation myths",
          language: "English/Kinyarwanda",
          size: "1.2 MB",
          popularity: "Community Favorite"
        }
      ]
    },
    {
      title: "Pregnancy Care",
      icon: Heart,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
      iconBg: "bg-gradient-to-r from-green-500 to-emerald-500",
      description: "Essential pregnancy support and maternal health guidance",
      totalResources: 3,
      resources: [
        {
          title: "Nutrition During Pregnancy",
          type: "PDF Guide",
          description: "Essential nutrition information for healthy pregnancy",
          language: "English/Kinyarwanda",
          size: "3.1 MB",
          popularity: "Essential Resource",
          featured: true
        },
        {
          title: "Vaccination Schedule",
          type: "Chart",
          description: "Complete vaccination timeline for pregnant women",
          language: "Kinyarwanda",
          size: "800 KB",
          popularity: "Quick Reference"
        },
        {
          title: "Warning Signs During Pregnancy",
          type: "Quick Reference",
          description: "When to seek immediate medical attention",
          language: "English/Kinyarwanda",
          size: "1.5 MB",
          popularity: "Life-Saving"
        }
      ]
    },
    {
      title: "Violence Prevention",
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30",
      iconBg: "bg-gradient-to-r from-red-500 to-orange-500",
      description: "Safety resources and violence prevention education",
      totalResources: 3,
      resources: [
        {
          title: "Recognizing Gender-Based Violence",
          type: "Educational Material",
          description: "Understanding different forms of GBV and warning signs",
          language: "English/Kinyarwanda",
          size: "2.8 MB",
          popularity: "Critical Resource"
        },
        {
          title: "Support Resources Directory",
          type: "Contact List",
          description: "Emergency contacts and support organizations",
          language: "Kinyarwanda",
          size: "500 KB",
          popularity: "Emergency Access",
          featured: true
        },
        {
          title: "Safety Planning Guide",
          type: "Interactive Tool",
          description: "Step-by-step safety planning for at-risk individuals",
          language: "English/Kinyarwanda",
          size: "1.8 MB",
          popularity: "Protective Resource"
        }
      ]
    },
    {
      title: "Community Health",
      icon: BookOpen,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
      iconBg: "bg-gradient-to-r from-blue-500 to-cyan-500",
      description: "Community engagement and health worker training materials",
      totalResources: 3,
      resources: [
        {
          title: "Community Health Worker Training",
          type: "Training Manual",
          description: "Comprehensive training materials for CHWs",
          language: "English/Kinyarwanda",
          size: "5.2 MB",
          popularity: "Professional Standard"
        },
        {
          title: "Health Education Toolkit",
          type: "Resource Pack",
          description: "Materials for conducting community health sessions",
          language: "Kinyarwanda",
          size: "4.1 MB",
          popularity: "Workshop Essential",
          featured: true
        },
        {
          title: "Cultural Sensitivity Guidelines",
          type: "Best Practices",
          description: "Guidelines for culturally appropriate health education",
          language: "English/Kinyarwanda",
          size: "1.9 MB",
          popularity: "Best Practice"
        }
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I access the USSD service?",
      answer: "Simply dial *384*70975# from any mobile phone in Rwanda. The service works on all networks and doesn't require internet connection. Follow the menu prompts to access health information and resources."
    },
    {
      question: "Is the service free to use?",
      answer: "Our educational content and basic services are free. Standard USSD charges from your mobile network operator may apply. We're working with partners to make the service completely free in the future."
    },
    {
      question: "What languages are available?",
      answer: "Our services are available in English and Kinyarwanda. We're working to add more local languages based on community needs and feedback."
    },
    {
      question: "How can I get physical supplies like sanitary pads?",
      answer: "Contact your local community health worker or visit one of our partner health centers. You can also reach out to us directly at ladysessence1@gmail.com to find the nearest distribution point."
    },
    {
      question: "Is my personal information kept private?",
      answer: "Yes, we take privacy very seriously. All personal health information is encrypted and stored securely. We never share individual data without explicit consent."
    },
    {
      question: "Can men and boys access these resources?",
      answer: "Absolutely! We encourage men and boys to learn about women's health to become better supporters and advocates. Many of our educational materials are designed for the whole family."
    },
    {
      question: "How do I become a community health worker?",
      answer: "Contact us through our website or phone number to learn about CHW training opportunities in your area. We provide comprehensive training and ongoing support."
    },
    {
      question: "What should I do in a health emergency?",
      answer: "For immediate medical emergencies, contact your nearest health center or call emergency services. Our platform includes emergency contact information for each district."
    },
    {
      question: "How can my school partner with Lady's Essence?",
      answer: "We'd love to partner with your school! Contact us at ladysessence1@gmail.com to discuss how we can integrate health education into your curriculum and support your students."
    },
    {
      question: "Are there resources for parents and guardians?",
      answer: "Yes, we have specific resources to help parents and guardians support their daughters through puberty and beyond. These include conversation guides and educational materials."
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCategories = selectedCategory === 'all' 
    ? resourceCategories 
    : resourceCategories.filter(cat => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const getResourceIcon = (type) => {
    if (type.includes('Video')) return Video;
    if (type.includes('Chart') || type.includes('Infographic')) return FileText;
    return FileText;
  };

  const getPopularityColor = (popularity) => {
    const colors = {
      'Most Downloaded': 'text-blue-600 bg-blue-100 dark:bg-blue-900/30',
      'Trending': 'text-orange-600 bg-orange-100 dark:bg-orange-900/30',
      'Community Favorite': 'text-purple-600 bg-purple-100 dark:bg-purple-900/30',
      'Essential Resource': 'text-green-600 bg-green-100 dark:bg-green-900/30',
      'Life-Saving': 'text-red-600 bg-red-100 dark:bg-red-900/30',
      'Critical Resource': 'text-red-600 bg-red-100 dark:bg-red-900/30',
      'Emergency Access': 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30',
      'Professional Standard': 'text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30',
      'Workshop Essential': 'text-teal-600 bg-teal-100 dark:bg-teal-900/30',
      'Best Practice': 'text-cyan-600 bg-cyan-100 dark:bg-cyan-900/30',
      'Quick Reference': 'text-gray-600 bg-gray-100 dark:bg-gray-900/30',
      'Protective Resource': 'text-pink-600 bg-pink-100 dark:bg-pink-900/30'
    };
    return colors[popularity] || 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      {/* Revolutionary Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-purple-700 to-pink-700 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                scale: 0 
              }}
              animate={{ 
                y: -100,
                scale: [0, 1, 0],
                opacity: [0, 0.7, 0]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-semibold">Premium Educational Resources</span>
              <BookOpen className="h-5 w-5 text-blue-300" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
            >
              Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-pink-200">Resources</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-xl md:text-2xl lg:text-3xl mb-10 opacity-95 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Access comprehensive, culturally sensitive educational materials on women's health, 
              pregnancy care, and violence prevention.
            </motion.p>

            {/* Stats preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 mb-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 mb-1">50+</div>
                <div className="text-sm opacity-90">Resources Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-300 mb-1">12</div>
                <div className="text-sm opacity-90">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-1">95%</div>
                <div className="text-sm opacity-90">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300 mb-1">24/7</div>
                <div className="text-sm opacity-90">Access Available</div>
              </div>
            </motion.div>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="max-w-2xl mx-auto relative"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search resources, topics, or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg bg-white/95 backdrop-blur-sm border-white/30 rounded-2xl shadow-lg focus:shadow-xl transition-all duration-300 text-gray-800"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Resource Categories */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/30">
        <div className="container mx-auto px-4">
          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="mb-6">
              <motion.span 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-primary/10 to-purple-600/10 text-primary px-6 py-3 rounded-full text-sm font-bold backdrop-blur-sm border border-primary/30"
              >
                📚 Comprehensive Resource Library
              </motion.span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground">
              Resource <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-pink-600">Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our comprehensive collection of educational materials organized by topic
            </p>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button
                onClick={() => setSelectedCategory('all')}
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  selectedCategory === 'all' 
                    ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg' 
                    : 'hover:bg-primary/10'
                }`}
              >
                All Categories
              </Button>
              {resourceCategories.map((category) => (
                <Button
                  key={category.title}
                  onClick={() => setSelectedCategory(category.title.toLowerCase())}
                  variant={selectedCategory === category.title.toLowerCase() ? 'default' : 'outline'}
                  className={`rounded-full px-6 py-2 transition-all duration-300 ${
                    selectedCategory === category.title.toLowerCase()
                      ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                      : 'hover:bg-primary/10'
                  }`}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.title}
                </Button>
              ))}
            </div>
          </motion.div>

          <div className="space-y-16">
            <AnimatePresence>
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${category.bgGradient} rounded-3xl p-8 border border-primary/10 shadow-xl`}
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-6">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`${category.iconBg} p-4 rounded-2xl shadow-lg`}
                      >
                        <category.icon className="h-10 w-10 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-black text-foreground mb-2">{category.title}</h3>
                        <p className="text-lg text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{category.totalResources}</div>
                      <div className="text-sm text-muted-foreground">Resources</div>
                    </div>
                  </div>

                  {/* Resources Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.resources.map((resource, resourceIndex) => {
                      const ResourceIcon = getResourceIcon(resource.type);
                      return (
                        <motion.div
                          key={resourceIndex}
                          initial={{ opacity: 0, y: 30, scale: 0.95 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.5, delay: resourceIndex * 0.1 }}
                          whileHover={{ y: -5, scale: 1.02 }}
                          viewport={{ once: true }}
                        >
                          <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm relative overflow-hidden group">
                            {/* Featured badge */}
                            {resource.featured && (
                              <div className="absolute top-4 right-4 z-10">
                                <motion.div
                                  animate={{ rotate: [0, 10, -10, 0] }}
                                  transition={{ repeat: Infinity, duration: 2 }}
                                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                                >
                                  <Star className="h-3 w-3" />
                                  Featured
                                </motion.div>
                              </div>
                            )}

                            <CardHeader className="pb-4">
                              <div className="flex items-center justify-between mb-3">
                                <Badge 
                                  variant="secondary" 
                                  className={`${getPopularityColor(resource.popularity)} font-semibold px-3 py-1 rounded-full`}
                                >
                                  {resource.popularity}
                                </Badge>
                                <div className="flex items-center gap-2">
                                  <ResourceIcon className="h-5 w-5 text-muted-foreground" />
                                  <Badge variant="outline" className="text-xs">
                                    {resource.type}
                                  </Badge>
                                </div>
                              </div>
                              <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                                {resource.title}
                              </CardTitle>
                              <CardDescription className="text-base leading-relaxed">
                                {resource.description}
                              </CardDescription>
                            </CardHeader>

                            <CardContent className="pt-0">
                              <div className="space-y-3 mb-6">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                                    <Globe className="h-4 w-4" />
                                    Language:
                                  </span>
                                  <span className="font-semibold text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {resource.language}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    {resource.size ? 'Size:' : 'Duration:'}
                                  </span>
                                  <span className="font-semibold text-sm">
                                    {resource.size || resource.duration}
                                  </span>
                                </div>
                              </div>

                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Button 
                                  className={`w-full bg-gradient-to-r ${category.gradient} hover:shadow-lg text-white border-0 font-semibold rounded-xl transition-all duration-300`}
                                >
                                  <Download className="mr-2 h-4 w-4" />
                                  Download Resource
                                </Button>
                              </motion.div>
                            </CardContent>

                            {/* Hover effect overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Revolutionary Quick Access Tools */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="mb-6">
              <motion.span 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-primary px-6 py-3 rounded-full text-sm font-bold backdrop-blur-sm border border-blue-500/30"
              >
                ⚡ Quick Access
              </motion.span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground">
              Essential <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Tools</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Essential tools and resources for immediate access to health information
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Emergency Contacts",
                description: "Quick access to emergency health services and support hotlines",
                gradient: "from-red-500 to-pink-500",
                bgGradient: "from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30",
                action: "View Contacts",
                urgent: true
              },
              {
                icon: BookOpen,
                title: "Health Calculator",
                description: "Calculate due dates, track cycles, and monitor health metrics",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
                action: "Use Calculator",
                popular: true
              },
              {
                icon: Shield,
                title: "Support Directory",
                description: "Find local support services and community health workers",
                gradient: "from-purple-500 to-indigo-500",
                bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30",
                action: "Find Support",
                featured: true
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${tool.bgGradient} relative overflow-hidden h-full`}>
                  {/* Special badges */}
                  {tool.urgent && (
                    <div className="absolute top-4 right-4">
                      <motion.div
                        animate={{ pulse: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                      >
                        🚨 URGENT
                      </motion.div>
                    </div>
                  )}
                  {tool.popular && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        POPULAR
                      </div>
                    </div>
                  )}
                  {tool.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        FEATURED
                      </div>
                    </div>
                  )}

                  <CardContent className="p-10">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`bg-gradient-to-r ${tool.gradient} p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <tool.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {tool.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {tool.description}
                    </p>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className={`w-full bg-gradient-to-r ${tool.gradient} hover:shadow-lg text-white border-0 font-semibold py-3 rounded-xl transition-all duration-300`}
                      >
                        <Zap className="mr-2 h-5 w-5" />
                        {tool.action}
                      </Button>
                    </motion.div>
                  </CardContent>

                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to action for tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-white/80 to-purple-50/80 dark:from-gray-800/80 dark:to-purple-900/80 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Need Immediate Assistance?</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our emergency hotline is available 24/7 for urgent health concerns and support needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  📞 Call Emergency Line
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10 rounded-xl font-semibold">
                  💬 Live Chat Support
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="mb-6">
              <motion.span 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-green-500/10 to-blue-600/10 text-primary px-6 py-3 rounded-full text-sm font-bold backdrop-blur-sm border border-green-500/30"
              >
                ❓ Frequently Asked Questions
              </motion.span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">Questions</span> & Answers
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Find answers to common questions about our services and women's health
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-2xl mx-auto relative"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search FAQs, topics, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border-2 border-primary/20 rounded-2xl shadow-lg focus:shadow-xl focus:border-primary/40 transition-all duration-300"
                />
                {searchTerm && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </motion.button>
                )}
              </div>
              {searchTerm && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-muted-foreground"
                >
                  Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for "{searchTerm}"
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            <AnimatePresence>
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  layout
                >
                  <Card 
                    className="cursor-pointer border-2 border-transparent hover:border-primary/20 transition-all duration-300 shadow-md hover:shadow-xl bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-700/50" 
                    onClick={() => toggleFaq(index)}
                  >
                    <CardContent className="p-6">
                      <motion.div 
                        className="flex items-center justify-between"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="font-bold text-lg text-foreground pr-4 group-hover:text-primary transition-colors">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          {expandedFaq === index ? (
                            <ChevronUp className="h-6 w-6 text-primary" />
                          ) : (
                            <ChevronDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                          )}
                        </motion.div>
                      </motion.div>
                      
                      <AnimatePresence>
                        {expandedFaq === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 pt-6 border-t border-primary/10">
                              <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-muted-foreground text-lg leading-relaxed bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-4 rounded-xl"
                              >
                                {faq.answer}
                              </motion.p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-3xl p-8 border border-orange-200/50 dark:border-orange-800/50">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">No Results Found</h3>
                <p className="text-muted-foreground mb-4">
                  No FAQs found matching "{searchTerm}". Try different keywords or browse our categories.
                </p>
                <Button 
                  onClick={() => setSearchTerm('')}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl"
                >
                  Clear Search
                </Button>
              </div>
            </motion.div>
          )}

          {/* Additional FAQ actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 via-purple-50 to-pink-50 dark:from-primary/5 dark:via-purple-950/50 dark:to-pink-950/50 rounded-3xl p-8 border border-primary/20 shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Still Have Questions?</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our expert team is here to help with personalized support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  💬 Ask Our Experts
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10 rounded-xl font-semibold">
                  📞 Schedule Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact for More Resources */}
      <section className="py-20 bg-gradient-to-br from-primary via-purple-700 to-pink-700 text-white relative overflow-hidden">
        {/* Dynamic background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-full"
          />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                scale: 0 
              }}
              animate={{ 
                y: -100,
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-semibold">Comprehensive Support Available</span>
              <Heart className="h-5 w-5 text-pink-300" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
            >
              Need More <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-pink-200">Information</span>?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Can't find what you're looking for? Our team is here to help you access 
              the resources and information you need.
            </motion.p>

            {/* Support options grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-10 border border-white/20"
            >
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Resource Library</h3>
                <p className="text-sm opacity-90">1000+ educational materials</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Expert Support</h3>
                <p className="text-sm opacity-90">24/7 professional guidance</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Multilingual</h3>
                <p className="text-sm opacity-90">Available in 12+ languages</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 shadow-2xl text-xl px-10 py-6 rounded-2xl font-bold transform transition-all duration-300 hover:shadow-3xl"
                >
                  📧 Contact Our Team
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10 rounded-2xl text-xl px-10 py-6 font-bold transform transition-all duration-300"
                >
                  📚 Request Resources
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact methods */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Heart className="h-5 w-5" />
                <span className="text-sm font-medium">ladysessence1@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">Available Worldwide</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">Community Support</span>
              </div>
            </motion.div>

            {/* Response time indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 inline-block"
            >
              <div className="bg-green-500/20 border border-green-400/50 rounded-full px-6 py-2 backdrop-blur-sm">
                <span className="text-sm font-semibold text-green-200">⚡ Average response time: 2 hours</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;

