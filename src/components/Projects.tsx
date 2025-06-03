
import React from 'react';
import { ExternalLink, Github, Heart, DollarSign, Brain, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "MedAI Diagnostic Platform",
      description: "AI-powered medical diagnostic tool that assists healthcare professionals in early disease detection. Features machine learning algorithms for medical imaging analysis and patient data processing.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["TypeScript", "React", "Node.js", "TensorFlow", "PostgreSQL", "AWS"],
      category: "Medical",
      icon: <Heart className="text-red-400" size={24} />,
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      title: "FinanceFlow Analytics",
      description: "Comprehensive financial analytics dashboard with real-time market data, AI-driven investment insights, and automated portfolio optimization for financial institutions.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["TypeScript", "Vue.js", "Express", "Redis", "Chart.js", "Docker"],
      category: "Finance",
      icon: <DollarSign className="text-green-400" size={24} />,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Neural Network Builder",
      description: "Visual neural network construction platform that allows users to build, train, and deploy custom AI models without extensive coding knowledge. Democratizing AI development.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["TypeScript", "React", "Python", "FastAPI", "TensorFlow", "Kubernetes"],
      category: "AI/ML",
      icon: <Brain className="text-purple-400" size={24} />,
      color: "from-purple-500/20 to-indigo-500/20"
    },
    {
      title: "Healthcare Management System",
      description: "Complete hospital management solution with patient records, appointment scheduling, billing integration, and telemedicine capabilities. Streamlines healthcare operations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["TypeScript", "Next.js", "MongoDB", "WebRTC", "Stripe", "AWS"],
      category: "Medical",
      icon: <Heart className="text-red-400" size={24} />,
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      title: "Smart Trading Bot",
      description: "Automated cryptocurrency trading bot with machine learning algorithms for market prediction, risk management, and portfolio optimization. Generates consistent returns.",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["TypeScript", "Node.js", "Python", "WebSockets", "MongoDB", "Docker"],
      category: "Finance",
      icon: <DollarSign className="text-green-400" size={24} />,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "AI Content Generator",
      description: "Multi-modal AI content creation platform that generates text, images, and code snippets. Integrated with multiple AI models for diverse content needs.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["TypeScript", "React", "OpenAI API", "Stable Diffusion", "Redis", "AWS"],
      category: "AI/ML",
      icon: <Zap className="text-yellow-400" size={24} />,
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions that combine cutting-edge technology with real-world impact. 
            Each project represents a step toward solving complex problems in healthcare, finance, and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80`}></div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  {project.icon}
                  <span className="text-white text-sm font-medium bg-black/30 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors text-sm">
                    <Github size={16} />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's collaborate on your next project and create solutions that make a real impact.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
