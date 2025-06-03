
import React from 'react';
import { Code, Database, Cloud, Brain, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={40} />,
      title: "Frontend Development",
      skills: ["TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "HTML5/CSS3"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database size={40} />,
      title: "Backend Development",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Microservices"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Brain size={40} />,
      title: "AI & Machine Learning",
      skills: ["OpenAI API", "LangChain", "TensorFlow", "Python", "Natural Language Processing", "Computer Vision"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps", "Cross-platform"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Globe size={40} />,
      title: "Full-Stack Integration",
      skills: ["RESTful APIs", "WebSockets", "Authentication", "Payment Systems", "Real-time Apps", "Scalable Architecture"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build scalable, intelligent solutions 
            that solve real-world problems and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-gray-300 text-sm bg-white/5 rounded-lg px-3 py-2 border border-white/10"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-300">
              Continuously expanding my expertise in emerging technologies, AI advancements, 
              and industry best practices to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
