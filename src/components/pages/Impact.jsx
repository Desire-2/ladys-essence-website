import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Heart, BookOpen, MapPin, TrendingUp, Award, CheckCircle, ArrowRight, Star, Sparkles, Target, Calendar, Globe, BarChart3, PieChart, Activity, Zap, Shield, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

// Import images
import impactImage from '../../assets/rwanda-school.jpg';
import communityImage from '../../assets/women-empowerment.jpg';
import rwandaMap from '/dist/assets/rwanda_district_waiting_list_map.png';

const Impact = () => {
  const [stats, setStats] = useState({
    girls: 0,
    women: 0,
    workshops: 0,
    waitingList: 0,
    districts: 0
  });
  const [selectedStory, setSelectedStory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState('overview');

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
    const targets = { girls: 1200, women: 800, workshops: 15, waitingList: 600, districts: 30 };
    const duration = 2500;
    const steps = 80;
    const stepTime = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          
          setStats({
            girls: Math.floor(targets.girls * progress),
            women: Math.floor(targets.women * progress),
            workshops: Math.floor(targets.workshops * progress),
            waitingList: Math.floor(targets.waitingList * progress),
            districts: Math.floor(targets.districts * progress)
          });

          if (step >= steps) {
            clearInterval(timer);
            setStats(targets);
          }
        }, stepTime);
      };

  // Auto-rotate success stories
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedStory((prev) => (prev + 1) % successStories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const impactAreas = [
    {
      icon: Users,
      title: "Girls Educated",
      value: stats.girls,
      suffix: "+",
      description: "Girls received comprehensive menstrual health education",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30",
      trend: "+15% this quarter",
      category: "education"
    },
    {
      icon: Heart,
      title: "Women Supported",
      value: stats.women,
      suffix: "+", 
      description: "Women supported during pregnancy with nutrition guidance",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30",
      trend: "+22% this quarter",
      category: "health"
    },
    {
      icon: BookOpen,
      title: "Community Workshops",
      value: stats.workshops,
      suffix: "",
      description: "Educational workshops on violence prevention conducted",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
      trend: "+8% this quarter",
      category: "education"
    },
    {
      icon: MapPin,
      title: "Districts Reached",
      value: stats.districts,
      suffix: "",
      description: "Districts across Rwanda where we have active presence",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
      trend: "+3 new districts",
      category: "expansion"
    },
    {
      icon: TrendingUp,
      title: "Waiting List",
      value: stats.waitingList,
      suffix: "+",
      description: "Individuals waiting to access our services",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30",
      trend: "Growing demand",
      category: "demand"
    }
  ];

  const successStories = [
    {
      name: "Claudine",
      age: 15,
      location: "Nyamagabe District",
      role: "Student",
      story: "Before Lady's Essence came to our village, I missed school every month. Now I have the knowledge and supplies I need, and I haven't missed a single class. My grades have improved, and I can focus on my dream of becoming a doctor.",
      impact: "Perfect school attendance for 6 months",
      category: "Education",
      gradient: "from-pink-500 to-rose-500",
      achievements: ["100% Attendance", "Grade Improvement", "Future Doctor"]
    },
    {
      name: "Marie",
      age: 28,
      location: "Huye District", 
      role: "Mother",
      story: "The pregnancy care guidance helped me understand proper nutrition and vaccination schedules. My baby was born healthy, and I felt supported throughout the entire journey.",
      impact: "Healthy pregnancy and delivery",
      category: "Maternal Health",
      gradient: "from-purple-500 to-indigo-500",
      achievements: ["Healthy Baby", "Complete Nutrition", "Vaccination Schedule"]
    },
    {
      name: "Agnes",
      age: 45,
      location: "Ruhango District",
      role: "Community Leader",
      story: "The community workshops opened our eyes to important health topics we never discussed before. Now our daughters are better prepared and more confident.",
      impact: "Led 3 community health discussions",
      category: "Community Leadership",
      gradient: "from-blue-500 to-cyan-500",
      achievements: ["Community Leader", "3 Workshops Led", "50+ Women Reached"]
    }
  ];

  const achievements = [
    {
      title: "Zero School Dropouts",
      description: "In communities where we provide menstrual health education and supplies, we've achieved zero school dropouts due to menstruation.",
      icon: Award,
      gradient: "from-yellow-500 to-orange-500",
      metric: "100%",
      impact: "Retention Rate"
    },
    {
      title: "95% Satisfaction Rate",
      description: "95% of women who received our pregnancy care guidance reported feeling more confident and prepared.",
      icon: CheckCircle,
      gradient: "from-green-500 to-emerald-500",
      metric: "95%",
      impact: "Satisfaction"
    },
    {
      title: "Community Adoption",
      description: "Local leaders in 30 districts have officially endorsed and integrated our programs into community health initiatives.",
      icon: Users,
      gradient: "from-blue-500 to-purple-500",
      metric: "30",
      impact: "Districts"
    }
  ];

  const futureGoals = [
    {
      goal: "Reach 10 satisified Districts",
      timeline: "By 2025",
      description: "Expand our presence to cover all districts in Rwanda",
      progress: 60,
      gradient: "from-green-500 to-emerald-500",
      icon: MapPin
    },
    {
      goal: "Support 5,000 Girls",
      timeline: "By 2025", 
      description: "Provide menstrual health education and supplies to 5,000 girls",
      progress: 24,
      gradient: "from-pink-500 to-rose-500",
      icon: Users
    },
    {
      goal: "Train 100 CHWs",
      timeline: "By 2026",
      description: "Train 100 Community Health Workers as program ambassadors",
      progress: 35,
      gradient: "from-blue-500 to-cyan-500",
      icon: BookOpen
    },
    {
      goal: "Launch Mobile App",
      timeline: "Q2 2025",
      description: "Release our mobile application with offline capabilities",
      progress: 75,
      gradient: "from-purple-500 to-indigo-500",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      {/* Revolutionary Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-purple-700 to-pink-700 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
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
              <span className="text-sm font-semibold">Measurable Impact Across Rwanda</span>
              <BarChart3 className="h-5 w-5 text-green-300" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-pink-200">Impact</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-xl md:text-2xl lg:text-3xl mb-10 opacity-95 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Real change, real lives transformed. See how Lady's Essence is making a 
              measurable difference in communities across Rwanda.
            </motion.p>

            {/* Quick stats preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 mb-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300 mb-1">2,600+</div>
                <div className="text-sm opacity-90">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-300 mb-1">30</div>
                <div className="text-sm opacity-90">Districts Reached</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 mb-1">95%</div>
                <div className="text-sm opacity-90">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300 mb-1">0</div>
                <div className="text-sm opacity-90">School Dropouts</div>
              </div>
            </motion.div>

            {/* Call to explore */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 shadow-2xl text-lg px-8 py-4 rounded-2xl font-bold transform transition-all duration-300 hover:shadow-3xl"
              >
                <a href="#impact-stats">
                  <Activity className="mr-2 h-5 w-5" />
                  Explore Our Impact
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics - Premium Version */}
      <section id="impact-stats" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-40"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-3 mb-6 shadow-lg"
            >
              <BarChart3 className="h-5 w-5" />
              <span className="text-sm font-semibold">Live Impact Metrics</span>
              <Activity className="h-5 w-5" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-purple-200">
              Impact by the Numbers
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Quantifiable results that demonstrate the real difference we're making across Rwanda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className={`relative text-center h-full border-0 shadow-xl bg-gradient-to-br ${area.bgGradient} backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-2xl`}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Trend indicator */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-xs bg-white/80 text-gray-700">
                      {area.trend}
                    </Badge>
                  </div>

                  <CardHeader className="relative z-10 pb-2">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`bg-gradient-to-br ${area.gradient} p-4 rounded-2xl w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <area.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <motion.div 
                      className={`text-4xl lg:text-5xl font-black mb-2 bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      {isVisible ? area.value.toLocaleString() : 0}{area.suffix}
                    </motion.div>
                    <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-200">{area.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {area.description}
                    </CardDescription>
                    
                    {/* Category badge */}
                    <div className="mt-4">
                      <Badge variant="outline" className={`text-xs border-current bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent border-opacity-30`}>
                        {area.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Interactive metrics toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {['overview', 'education', 'health', 'expansion', 'demand'].map((metric) => (
              <Button
                key={metric}
                variant={activeMetric === metric ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveMetric(metric)}
                className="capitalize transition-all duration-300 hover:scale-105"
              >
                {metric}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories - Premium Version */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-rose-950/30 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-pink-300 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full px-6 py-3 mb-6 shadow-lg"
            >
              <Heart className="h-5 w-5" />
              <span className="text-sm font-semibold">Real Life Transformations</span>
              <Star className="h-5 w-5" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real stories from the women and girls whose lives have been transformed by our programs
            </p>
          </motion.div>

          {/* Featured story carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="max-w-5xl mx-auto bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedStory}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 md:p-12"
                  >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`bg-gradient-to-br ${successStories[selectedStory].gradient} text-white rounded-2xl w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg`}
                          >
                            {successStories[selectedStory].name.charAt(0)}
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {successStories[selectedStory].name}, {successStories[selectedStory].age}
                            </h3>
                            <div className="flex gap-2 mt-2">
                              <Badge className={`bg-gradient-to-r ${successStories[selectedStory].gradient} text-white border-0`}>
                                {successStories[selectedStory].role}
                              </Badge>
                              <Badge variant="outline" className="border-gray-300">
                                <MapPin className="h-3 w-3 mr-1" />
                                {successStories[selectedStory].location}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6 font-light">
                          "{successStories[selectedStory].story}"
                        </blockquote>
                        
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-2xl border border-green-200 dark:border-green-800">
                          <p className="text-green-700 dark:text-green-300 font-semibold flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Impact: {successStories[selectedStory].impact}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h4>
                        {successStories[selectedStory].achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${successStories[selectedStory].gradient}`} />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Story navigation */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {successStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedStory(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === selectedStory 
                          ? 'bg-gradient-to-r from-pink-500 to-rose-500 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* All stories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedStory(index)}
              >
                <Card className={`h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden ${
                  selectedStory === index ? 'ring-2 ring-pink-500 ring-opacity-50' : ''
                }`}>
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className={`bg-gradient-to-r ${story.gradient} text-white border-0 text-xs`}>
                      {story.category}
                    </Badge>
                  </div>

                  <CardHeader className="relative">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`bg-gradient-to-br ${story.gradient} text-white rounded-xl w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg`}
                        >
                          {story.name.charAt(0)}
                        </motion.div>
                        <div>
                          <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                            {story.name}, {story.age}
                          </CardTitle>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">{story.role}</Badge>
                            <Badge variant="outline" className="text-xs">
                              <MapPin className="h-3 w-3 mr-1" />
                              {story.location}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4 line-clamp-4 leading-relaxed">
                      "{story.story}"
                    </blockquote>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-3 rounded-xl border border-green-200 dark:border-green-800">
                      <p className="text-green-700 dark:text-green-300 font-medium text-sm flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        {story.impact}
                      </p>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements - Premium Version */}
      <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 overflow-hidden">
        {/* Premium background patterns */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent dark:via-blue-950/50 skew-y-3 transform origin-top-left" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-50/30 to-transparent dark:via-purple-950/30 -skew-y-3 transform origin-bottom-right" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full px-6 py-3 mb-6 shadow-lg"
            >
              <Award className="h-5 w-5" />
              <span className="text-sm font-semibold">Proven Excellence</span>
              <Trophy className="h-5 w-5" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-yellow-600 to-orange-600 bg-clip-text text-transparent dark:from-white dark:via-yellow-400 dark:to-orange-400">
              Key Achievements
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Milestones that showcase the effectiveness and impact of our approach across Rwanda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, rotateY: 5, scale: 1.05 }}
                className="group perspective-1000"
              >
                <Card className="relative text-center h-full border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl rounded-3xl">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-5 group-hover:opacity-15 transition-all duration-500 group-hover:scale-110`} />
                  
                  {/* Floating metric */}
                  <div className="absolute top-6 right-6">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className={`bg-gradient-to-br ${achievement.gradient} text-white rounded-2xl px-4 py-2 shadow-lg`}
                    >
                      <div className="text-2xl font-black">{achievement.metric}</div>
                      <div className="text-xs opacity-90">{achievement.impact}</div>
                    </motion.div>
                  </div>

                  <CardHeader className="relative z-10 pt-20 pb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className={`bg-gradient-to-br ${achievement.gradient} p-6 rounded-3xl w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-shadow duration-300`}
                    >
                      <achievement.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 px-6 pb-8">
                    <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                      {achievement.description}
                    </CardDescription>
                    
                    {/* Progress indicator */}
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Achievement Level</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className={`h-2 rounded-full bg-gradient-to-r ${achievement.gradient}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </CardContent>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${achievement.gradient} blur-xl`} />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Summary stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 text-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">30</div>
                <div className="text-gray-300">Districts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">2,600+</div>
                <div className="text-gray-300">Lives Changed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Geographic Impact - Premium Version with Rwanda Map */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950/30 dark:via-green-950/30 dark:to-teal-950/30 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-200 dark:bg-teal-800 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full px-6 py-3 mb-6 shadow-lg"
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-semibold">Nationwide Presence</span>
              <MapPin className="h-5 w-5" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Geographic Impact
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our programs reach across Rwanda's diverse districts, bringing hope and transformation to communities nationwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            {/* Map Section - Featured */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-2 xl:order-1"
            >
              <div className="relative">
                {/* Map container with premium styling */}
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl" />
                  
                  {/* Map header */}
                  <div className="relative z-10 mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-green-600" />
                      Rwanda District Coverage Map
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">Waiting list distribution across districts</p>
                  </div>

                  {/* Rwanda Map */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                      <img 
                        src={rwandaMap} 
                        alt="Rwanda District Waiting List Distribution Map" 
                        className="w-full h-auto max-w-lg mx-auto transform transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Map overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent rounded-2xl" />
                      
                      {/* Interactive hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-300 rounded-2xl" />
                    </div>

                    {/* Map legend */}
                    <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Legend</h4>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">High Demand (100+ waiting)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">Medium Demand (50-99 waiting)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">Active Programs</span>
                        </div>
                      </div>
                    </div>

                    {/* Data badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl px-4 py-2 shadow-lg">
                      <div className="text-lg font-bold">600+</div>
                      <div className="text-xs opacity-90">On Waiting List</div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating stats around map */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -left-4 top-1/4 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-xl border"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">30</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Districts Reached</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -right-4 bottom-1/4 bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-xl border"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">20</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Expansion whith district of low reched community Planned</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 xl:order-2"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Expanding Across Rwanda
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Our programs are strategically positioned across 30 districts in Rwanda, with a focus on 
                    underserved rural communities where the need is greatest. The map shows our current reach 
                    and the growing demand for our services.
                  </p>
                </div>
                
                {/* Impact metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200/50"
                  >
                    <div className="text-3xl font-bold text-green-600 mb-2">600+</div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium">Waiting List</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Growing demand</div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-200/50"
                  >
                    <div className="text-3xl font-bold text-emerald-600 mb-2">2,600+</div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium">Lives Impacted</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">And counting</div>
                  </motion.div>
                </div>

                {/* Coverage indicators */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Current Coverage</h4>
                  
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center gap-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-4 h-4 rounded-full shadow-lg"></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">Active Programs</span>
                          <span className="text-green-600 font-bold">30 districts</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div 
                            className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: "60%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-center gap-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-4 h-4 rounded-full shadow-lg"></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">Expansion whith district of low reched community Planned</span>
                          <span className="text-orange-600 font-bold">20 districts</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div 
                            className="h-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: "40%" }}
                            transition={{ duration: 1.5, delay: 0.7 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-center gap-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-4 h-4 rounded-full shadow-lg"></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">Community Partnerships</span>
                          <span className="text-blue-600 font-bold">50+ partners</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div 
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: "80%" }}
                            transition={{ duration: 1.5, delay: 0.9 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Priority areas */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-white to-green-50 dark:from-gray-900 dark:to-green-950/30 rounded-2xl p-6 border border-green-200 dark:border-green-800"
                >
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    Priority Focus Areas
                  </h4>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Rural communities with limited healthcare access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Schools with high female absenteeism rates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Areas with cultural barriers to health education</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Communities with active local leadership support</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Goals - Premium Version */}
      <section className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 overflow-hidden">
        {/* Premium background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent dark:via-blue-900/20 transform rotate-12 scale-150" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-100/20 to-transparent dark:via-purple-900/20 transform -rotate-12 scale-150" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-3 mb-6 shadow-lg"
            >
              <Target className="h-5 w-5" />
              <span className="text-sm font-semibold">Ambitious Vision</span>
              <Zap className="h-5 w-5" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Future Goals
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our strategic roadmap for expanding impact and reaching even more women and girls across Rwanda and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {futureGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: 5, scale: 1.03 }}
                className="group perspective-1000"
              >
                <Card className="relative h-full border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl rounded-3xl">
                  {/* Progress ring background */}
                  <div className="absolute top-6 right-6">
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          className="text-gray-200 dark:text-gray-700"
                        />
                        <motion.circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="url(#gradient)"
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 175.93" }}
                          whileInView={{ 
                            strokeDasharray: `${(goal.progress / 100) * 175.93} 175.93`
                          }}
                          transition={{ duration: 2, delay: index * 0.2 + 0.5 }}
                          viewport={{ once: true }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                          {goal.progress}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${goal.gradient} opacity-5 group-hover:opacity-15 transition-all duration-500`} />

                  <CardContent className="relative z-10 p-8 h-full flex flex-col">
                    {/* Timeline badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${goal.gradient} text-white rounded-full px-4 py-2 mb-6 self-start shadow-lg`}
                    >
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-semibold">{goal.timeline}</span>
                    </motion.div>

                    {/* Goal icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className={`bg-gradient-to-br ${goal.gradient} p-4 rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <goal.icon className="h-8 w-8 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="font-black text-xl mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {goal.goal}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-6">
                        {goal.description}
                      </p>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-auto">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Progress</span>
                        <span className="text-xs font-bold text-gray-900 dark:text-white">{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className={`h-2 rounded-full bg-gradient-to-r ${goal.gradient} shadow-sm`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${goal.progress}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </CardContent>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${goal.gradient} blur-xl`} />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Roadmap timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Our Strategic Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-400"></div>
              
              <div className="space-y-8">
                {[
                  { year: "2025 Q2", title: "Mobile App Launch", desc: "Release comprehensive mobile platform", color: "purple" },
                  { year: "2025 Q4", title: "5,000 Girls Milestone", desc: "Reach our ambitious education target", color: "pink" },
                  { year: "2025 Q4", title: "10 Districts with 90% satisifatory Coverage", desc: "Complete nationwide expansion", color: "green" },
                  { year: "2026", title: "100 CHWs Trained", desc: "Establish strong community network", color: "blue" }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative flex items-start gap-6"
                  >
                    <div className={`w-4 h-4 bg-${milestone.color}-400 rounded-full border-4 border-gray-900 relative z-10`}></div>
                    <div>
                      <div className={`text-${milestone.color}-400 font-bold text-sm mb-1`}>{milestone.year}</div>
                      <h4 className="text-white font-semibold text-lg mb-2">{milestone.title}</h4>
                      <p className="text-gray-300 text-sm">{milestone.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Premium Version */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900 text-white overflow-hidden">
        {/* Premium background effects */}
        <div className="absolute inset-0">
          {/* Animated particles */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
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
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut"
              }}
            />
          ))}
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-transparent to-pink-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          
          {/* Geometric patterns */}
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <Heart className="h-5 w-5 text-pink-300" />
              <span className="text-sm font-semibold">Join Our Mission</span>
              <Sparkles className="h-5 w-5 text-yellow-300" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
            >
              Be Part of Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-yellow-200">
                Growing Impact
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl lg:text-3xl mb-12 opacity-95 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Every name on our waiting list represents a potential ignited, a future waiting to be unlocked. 
              Help us reach more women and girls who need our support.
            </motion.p>

            {/* Impact preview stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12"
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  600+
                </motion.div>
                <div className="text-sm opacity-90">Waiting for Help</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-pink-300 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  2,600+
                </motion.div>
                <div className="text-sm opacity-90">Lives Changed</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-blue-300 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  30
                </motion.div>
                <div className="text-sm opacity-90">Districts Reached</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-green-300 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >
                  95%
                </motion.div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
            </motion.div>

            {/* Premium action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-purple-900 hover:bg-gray-100 shadow-2xl text-lg px-10 py-6 rounded-2xl font-bold transform transition-all duration-300 hover:shadow-3xl group"
                >
                  <a href="/get-involved" className="flex items-center gap-3">
                    <Heart className="h-6 w-6 group-hover:text-red-500 transition-colors duration-300" />
                    Support Our Mission
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 bg-white/10 backdrop-blur-sm text-lg px-10 py-6 rounded-2xl font-bold transition-all duration-300 group"
                >
                  <a href="/contact" className="flex items-center gap-3">
                    <Users className="h-6 w-6 group-hover:text-purple-900 transition-colors duration-300" />
                    Partner With Us
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 opacity-80"
            >
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-green-300" />
                <span className="text-sm">Trusted by Communities</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-blue-300" />
                <span className="text-sm">Verified Impact</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-yellow-300" />
                <span className="text-sm">Recognized Excellence</span>
              </div>
            </motion.div>

            {/* Urgency indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 bg-red-500/20 backdrop-blur-sm border border-red-300/30 rounded-2xl p-6 max-w-md mx-auto"
            >
              <div className="flex items-center gap-3 justify-center mb-2">
                <TrendingUp className="h-5 w-5 text-red-300" />
                <span className="font-semibold text-red-200">Growing Demand</span>
              </div>
              <p className="text-sm text-red-100 leading-relaxed">
                Our waiting list grows daily. Your support today means faster help for those who need it most.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Impact;

