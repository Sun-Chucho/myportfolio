
import React from 'react';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target size={32} />,
      title: "Problem-Solving Expert",
      description: "Specialized in identifying complex business challenges and architecting elegant technical solutions that deliver measurable results."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "ROI-Focused Development",
      description: "Every line of code I write is designed to maximize business value, with a track record of delivering projects that generate significant returns."
    },
    {
      icon: <Users size={32} />,
      title: "Cross-Industry Experience",
      description: "Deep expertise across medical, financial, and emerging technology sectors, understanding unique industry requirements and compliance needs."
    },
    {
      icon: <Zap size={32} />,
      title: "AI Innovation Leader",
      description: "Early adopter and implementer of AI technologies, helping businesses leverage artificial intelligence for competitive advantage."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Transforming Ideas Into 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Digital Reality</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                As a seasoned full-stack developer with a passion for artificial intelligence, 
                I specialize in creating innovative solutions that bridge the gap between 
                cutting-edge technology and real-world business needs.
              </p>
              
              <p>
                My journey in software development has been defined by a relentless pursuit 
                of excellence and a deep understanding that great technology serves people. 
                I've had the privilege of working with startups and enterprises across the 
                medical and financial sectors, delivering solutions that not only meet 
                technical requirements but drive substantial business growth.
              </p>
              
              <p>
                What sets me apart is my ability to see the bigger picture while mastering 
                the smallest details. I don't just write code—I architect experiences, 
                solve problems, and create value. My expertise in TypeScript, combined with 
                my growing proficiency in AI technologies, allows me to build scalable, 
                intelligent systems that adapt and evolve with business needs.
              </p>

              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Investment in Excellence
                </h3>
                <p className="text-gray-300">
                  I approach every project as an investment opportunity—not just in technology, 
                  but in long-term business success. My solutions are designed to scale, 
                  adapt, and continue delivering value long after deployment.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg">
                    <div className="text-white">
                      {highlight.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">$100K+</div>
            <div className="text-purple-400 font-medium">Value Delivered</div>
            <div className="text-gray-400 text-sm mt-1">
              Proven track record of high-impact solutions
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-purple-400 font-medium">Global Availability</div>
            <div className="text-gray-400 text-sm mt-1">
              Remote work specialist across time zones
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">3+</div>
            <div className="text-purple-400 font-medium">Industries</div>
            <div className="text-gray-400 text-sm mt-1">
              Medical, Finance, and emerging tech sectors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
