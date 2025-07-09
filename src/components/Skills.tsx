
import { Palette, Code, Smartphone, Globe, Camera, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Design Tools',
      icon: Palette,
      color: 'text-pink-500',
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Adobe XD', level: 90 },
        { name: 'Photoshop', level: 85 },
        { name: 'Illustrator', level: 88 }
      ]
    },
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'text-blue-500',
      skills: [
        { name: 'HTML/CSS', level: 92 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Tailwind CSS', level: 88 }
      ]
    },
    {
      title: 'Mobile Design',
      icon: Smartphone,
      color: 'text-green-500',
      skills: [
        { name: 'iOS Design', level: 90 },
        { name: 'Android Design', level: 88 },
        { name: 'Flutter', level: 75 },
        { name: 'React Native', level: 70 }
      ]
    }
  ];

  const softSkills = [
    { name: 'Creative Thinking', icon: Zap, color: 'bg-yellow-500' },
    { name: 'Problem Solving', icon: Globe, color: 'bg-blue-500' },
    { name: 'Team Collaboration', icon: Camera, color: 'bg-green-500' },
    { name: 'Project Management', icon: Palette, color: 'bg-purple-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Kỹ năng</span> của tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những công cụ và kỹ năng mà tôi sử dụng để tạo ra những sản phẩm tuyệt vời. 
              Luôn học hỏi và cập nhật xu hướng mới nhất.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gray-100 ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="skill-bar bg-gray-200 rounded-full h-2">
                        <div 
                          className="skill-fill rounded-full h-2"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.5 + skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Kỹ năng mềm</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex p-4 rounded-full ${skill.color} text-white mb-4`}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Chứng chỉ & Giải thưởng</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="gradient-card p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Google UX Design Certificate</h4>
                <p className="text-gray-600">Coursera - 2023</p>
              </div>
              <div className="gradient-card p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Adobe Certified Expert</h4>
                <p className="text-gray-600">Adobe - 2022</p>
              </div>
              <div className="gradient-card p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Design Competition Winner</h4>
                <p className="text-gray-600">Awwwards - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
