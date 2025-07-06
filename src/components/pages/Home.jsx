import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Heart, Shield, Smartphone, Globe, ChevronLeft, ChevronRight, Star, Award, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

// Import images
import heroImage from '/dist/assets/women-empowerment-B2IyKXie.jpg';
import educationImage from '/dist/assets/girls-education-BoYZ1rIF.jpg';
import healthImage from '../../assets/women-health-africa.jpg';
import schoolImage from '../../assets/rwanda-school.jpg';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [stats, setStats] = useState({
    girls: 0,
    women: 0,
    workshops: 0,
    waitingList: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  // Hero images carousel
  const heroImages = [
    { src: heroImage, alt: "Women empowerment in Africa" },
    { src: educationImage, alt: "Girls education in rural Rwanda" },
    { src: healthImage, alt: "Women's health support in Africa" },
    { src: schoolImage, alt: "Education transformation in Rwanda" }
  ];

  // Auto-rotate hero images
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroImages.length]);

  // Animate statistics on mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.1 }
    );
    
    const statsElement = document.getElementById('impact-stats');
    if (statsElement) {
      observer.observe(statsElement);
    }
    
    return () => {
      if (statsElement) observer.unobserve(statsElement);
    };
  }, []);

  const animateStats = () => {
    const targets = { girls: 1200, women: 800, workshops: 15, waitingList: 600 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setStats({
        girls: Math.floor(targets.girls * progress),
        women: Math.floor(targets.women * progress),
        workshops: Math.floor(targets.workshops * progress),
        waitingList: Math.floor(targets.waitingList * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats(targets);
      }
    }, stepTime);
  };

  const testimonials = [
    {
      text: "Before Lady's Essence came to our village, I missed school every month. Now I have the knowledge and supplies I need, and I haven't missed a single class. My grades have improved, and I can focus on my dream of becoming a doctor.",
      author: "Claudine, 15",
      location: "Student from Nyamagabe District"
    },
    {
      text: "The pregnancy care guidance helped me understand proper nutrition and vaccination schedules. My baby was born healthy, and I felt supported throughout the entire journey.",
      author: "Marie, 28",
      location: "Mother from Huye District"
    },
    {
      text: "The community workshops opened our eyes to important health topics we never discussed before. Now our daughters are better prepared and more confident.",
      author: "Agnes, 45",
      location: "Community Leader from Ruhango District"
    }
  ];

  const services = [
    {
      icon: Globe,
      title: "Web Platform",
      description: "Comprehensive digital platform with health tracking and educational resources",
      link: "https://ladys-essenced.vercel.app",
      external: true,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "USSD Service",
      description: "Accessible health information for basic phones via USSD codes",
      link: "/ussd-simulator",
      external: false,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Culturally sensitive materials on menstrual health and pregnancy care",
      link: "/resources",
      external: false,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "GBV Prevention",
      description: "Violence recognition, reporting, and support pathways",
      link: "/resources",
      external: false,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      {/* Revolutionary Hero Section with Full Image Display */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background Images */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-full h-full object-cover object-center"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            />
          </AnimatePresence>
        </div>
        
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-purple-900/70 to-indigo-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                scale: 0 
              }}
              animate={{ 
                y: -100,
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
            >
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium">Transforming Lives Since 2023</span>
              <Star className="h-4 w-4 text-yellow-300" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-pink-100 drop-shadow-2xl">
                Lady's Essence
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="relative mb-8"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl mb-4 font-light max-w-3xl mx-auto bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                Empowering women, enhancing lives
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-400 mx-auto rounded-full"></div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-lg md:text-xl lg:text-2xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-black/10 rounded-2xl p-6 border border-white/10"
            >
              Transforming lives through comprehensive health education, tangible support, 
              and accessible technology for women and girls in rural Rwanda.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-white to-gray-100 text-primary hover:from-gray-100 hover:to-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-2xl font-semibold"
              >
                <Link to="/get-involved">
                  Support Our Mission <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/80 text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10 rounded-2xl text-lg px-8 py-4 font-semibold transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80"
            >
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span className="text-sm">UN Recognized</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm">2,600+ Lives Impacted</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">30 Districts Reached</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentImageIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 3000);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center">
            <span className="text-white/90 text-sm mb-3 font-medium">Discover Our Impact</span>
            <div className="w-8 h-14 border-2 border-white/80 rounded-full flex justify-center relative backdrop-blur-sm bg-white/10">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-2 h-2 bg-white rounded-full mt-3 shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Amina's Story Section */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="mb-6">
                <motion.span 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-primary/10 to-purple-600/10 text-primary px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-primary/20"
                >
                  Our Inspiration ✨
                </motion.span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-foreground leading-tight">
                The Story of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-pink-600">Amina</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-purple-600"
                >
                  Amina, a bright young girl in rural Rwanda, dreams of becoming a doctor. 
                  Every month, she misses school for days. Without knowledge about her body 
                  or access to sanitary pads, she falls behind in class.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-r before:from-purple-600 before:to-pink-600"
                >
                  Her mother, pregnant again, relies on fragmented advice passed through 
                  generations. Their shared family phone makes private health information 
                  inaccessible.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="font-bold text-xl text-primary bg-gradient-to-r from-primary/10 to-purple-600/10 p-6 rounded-2xl border-l-4 border-primary"
                >
                  Amina represents millions caught in a cycle of silence, stigma, and missed opportunities.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-xl font-semibold text-foreground bg-gradient-to-r from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 p-6 rounded-2xl shadow-lg border border-purple-200/50 dark:border-purple-800/50"
                >
                  This isn't just about periods or pregnancy; it's about dignity, education, 
                  and futures we are allowing to slip away.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={educationImage} 
                  alt="Girls education in Africa" 
                  className="w-full h-auto object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent group-hover:from-primary/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="backdrop-blur-sm bg-black/20 rounded-2xl p-6 border border-white/20"
                  >
                    <p className="text-lg font-medium mb-2">💫 Education is the most powerful weapon to change the world</p>
                    <p className="text-sm opacity-90">- Nelson Mandela</p>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Star className="h-8 w-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Heart className="h-6 w-6 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Revolutionary Impact Statistics */}
      <section id="impact-stats" className="py-20 bg-gradient-to-br from-primary/10 via-purple-50 to-pink-50 dark:from-primary/5 dark:via-purple-950/50 dark:to-pink-950/50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
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
                className="bg-gradient-to-r from-primary/20 to-purple-600/20 text-primary px-6 py-3 rounded-full text-sm font-bold backdrop-blur-sm border border-primary/30 shadow-lg"
              >
                🌟 Making a Real Difference
              </motion.span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-pink-600">Impact</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming lives across <span className="font-bold text-primary">30 districts</span> in Rwanda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Users, 
                value: stats.girls, 
                label: "Girls received menstrual health education",
                color: "text-blue-600",
                bg: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-500/30"
              },
              { 
                icon: Heart, 
                value: stats.women, 
                label: "Women supported during pregnancy",
                color: "text-purple-600",
                bg: "from-purple-500/20 to-pink-500/20",
                border: "border-purple-500/30"
              },
              { 
                icon: BookOpen, 
                value: stats.workshops, 
                label: "Community workshops on violence prevention",
                color: "text-green-600",
                bg: "from-green-500/20 to-emerald-500/20",
                border: "border-green-500/30"
              },
              { 
                icon: Users, 
                value: stats.waitingList, 
                label: "Individuals on our waiting list",
                color: "text-orange-500",
                bg: "from-orange-500/20 to-red-500/20",
                border: "border-orange-500/30"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <Card className={`h-full border-2 ${stat.border} shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${stat.bg} backdrop-blur-sm relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/10 dark:to-transparent"></div>
                  <CardContent className="p-8 relative z-10">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`bg-gradient-to-r ${stat.bg} p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <stat.icon className={`h-10 w-10 ${stat.color}`} />
                    </motion.div>
                    <motion.div 
                      className={`text-4xl md:text-5xl font-black ${stat.color} mb-4`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                    >
                      {stat.value.toLocaleString()}{stat.value === 15 ? '' : '+'}
                    </motion.div>
                    <p className="text-muted-foreground font-medium text-lg leading-tight">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Impact Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-white/80 to-purple-50/80 dark:from-gray-800/80 dark:to-purple-900/80 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Beyond the Numbers</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each statistic represents a life transformed, a future secured, and hope restored in communities across Rwanda.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/30">
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
                🚀 Our Offerings
              </motion.span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Supporting women through <span className="font-bold text-primary">education</span>, <span className="font-bold text-purple-600">technology</span>, and <span className="font-bold text-pink-600">resources</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
                className="group perspective-1000"
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden backdrop-blur-sm">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="text-center relative z-10 pb-4">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`bg-gradient-to-r ${service.gradient} p-5 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <service.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center relative z-10 pt-0">
                    <CardDescription className="mb-6 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    {service.external ? (
                      <Button 
                        asChild 
                        className={`bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white border-0 font-semibold transform hover:scale-105 transition-all duration-300 rounded-xl`}
                        size="sm"
                      >
                        <a href={service.link} target="_blank" rel="noopener noreferrer">
                          Access Platform <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button 
                        asChild 
                        className={`bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white border-0 font-semibold transform hover:scale-105 transition-all duration-300 rounded-xl`}
                        size="sm"
                      >
                        <Link to={service.link}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                  
                  {/* Floating decoration */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3 + index * 0.5,
                      ease: "easeInOut"
                    }}
                    className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full opacity-60`}
                  />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action for Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 via-purple-50 to-pink-50 dark:from-primary/5 dark:via-purple-950/50 dark:to-pink-950/50 rounded-3xl p-8 border border-primary/20 shadow-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore our comprehensive suite of services designed to empower and support women at every stage of their journey.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Link to="/services">
                  Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Immersive Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-orange-950/30 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-30"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                scale: 0 
              }}
              animate={{ 
                y: -100,
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0]
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

        <div className="container mx-auto px-4 relative">
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
                className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-primary px-6 py-3 rounded-full text-sm font-bold backdrop-blur-sm border border-purple-500/30"
              >
                💬 Real Stories
              </motion.span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">Voices</span> of Change
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stories from the women and girls whose lives have been <span className="font-bold text-primary">transformed</span>
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Card className="relative border-0 shadow-2xl bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 dark:from-gray-900 dark:via-purple-950/50 dark:to-pink-950/50 backdrop-blur-lg overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>
              
              <CardContent className="p-10 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(147, 51, 234, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevTestimonial}
                    className="p-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-primary hover:shadow-lg transition-all duration-300 border border-purple-500/20"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </motion.button>
                  
                  <div className="flex gap-3">
                    {testimonials.map((_, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          index === currentTestimonial 
                            ? 'bg-gradient-to-r from-primary to-purple-600 scale-125 shadow-lg' 
                            : 'bg-primary/30 hover:bg-primary/50'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(147, 51, 234, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextTestimonial}
                    className="p-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-primary hover:shadow-lg transition-all duration-300 border border-purple-500/20"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </motion.button>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-center"
                  >
                    {/* Quote marks */}
                    <div className="text-6xl text-primary/20 font-serif mb-4">"</div>
                    
                    <blockquote className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 italic leading-relaxed font-light">
                      {testimonials[currentTestimonial].text}
                    </blockquote>
                    
                    <div className="bg-gradient-to-r from-white/80 to-purple-50/80 dark:from-gray-800/80 dark:to-purple-900/80 rounded-2xl p-6 backdrop-blur-sm border border-primary/10 inline-block shadow-lg">
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-bold text-xl text-primary mb-2"
                      >
                        — {testimonials[currentTestimonial].author}
                      </motion.p>
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-muted-foreground font-medium"
                      >
                        📍 {testimonials[currentTestimonial].location}
                      </motion.p>
                    </div>
                    
                    <div className="text-6xl text-primary/20 font-serif mt-4 rotate-180">"</div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>

          {/* Additional testimonial preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-muted-foreground mb-4">
              Want to share your story or read more testimonials?
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link to="/impact">
                View More Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Call to Action */}
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
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full"
          />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
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
              <span className="text-sm font-semibold">Join the Movement</span>
              <Heart className="h-5 w-5 text-pink-300" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
            >
              Join Us in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-pink-200">Empowering Her Future</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Every donation, partnership, and shared story brings us closer to a world 
              where no woman or girl is held back by her biology.
            </motion.p>
            
            {/* Impact preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 mb-10 border border-white/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black text-yellow-300 mb-2">$25</div>
                  <div className="text-sm opacity-90">Provides menstrual supplies for 1 girl for 6 months</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-pink-300 mb-2">$100</div>
                  <div className="text-sm opacity-90">Funds a complete pregnancy care package</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-2">$500</div>
                  <div className="text-sm opacity-90">Sponsors a community workshop for 50 women</div>
                </div>
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
                  asChild 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 shadow-2xl text-xl px-10 py-6 rounded-2xl font-bold transform transition-all duration-300 hover:shadow-3xl"
                >
                  <Link to="/get-involved">
                    Donate Now <Heart className="ml-3 h-6 w-6 text-red-500" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10 rounded-2xl text-xl px-10 py-6 font-bold transform transition-all duration-300"
                >
                  <Link to="/contact">Become a Partner</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">Secure Donations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="h-5 w-5" />
                <span className="text-sm font-medium">100% Transparency</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm font-medium">Direct Impact</span>
              </div>
            </motion.div>

            {/* Urgency indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 inline-block"
            >
              <div className="bg-red-500/20 border border-red-400/50 rounded-full px-6 py-2 backdrop-blur-sm">
                <span className="text-sm font-semibold text-red-200">🚨 600+ women on our waiting list need immediate support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;