
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce App Design',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      description: 'Thiết kế ứng dụng mua sắm trực tuyến với trải nghiệm người dùng tối ưu',
      tags: ['Figma', 'UI Design', 'Mobile'],
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Brand Identity System',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      description: 'Hệ thống nhận diện thương hiệu hoàn chỉnh cho startup công nghệ',
      tags: ['Branding', 'Logo', 'Identity'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      description: 'Giao diện dashboard phân tích dữ liệu với data visualization',
      tags: ['Web Design', 'Dashboard', 'Analytics'],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      description: 'Ứng dụng ngân hàng di động với bảo mật cao và UX thân thiện',
      tags: ['Mobile', 'Fintech', 'Security'],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      title: 'Social Media Campaign',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      description: 'Chiến dịch truyền thông xã hội cho thương hiệu thời trang',
      tags: ['Social Media', 'Campaign', 'Fashion'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 6,
      title: 'Restaurant Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      description: 'Website nhà hàng với thiết kế hiện đại và tính năng đặt bàn',
      tags: ['Web', 'Restaurant', 'Booking'],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Portfolio</span> của tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá những dự án mà tôi đã thực hiện với tình yêu và sự tận tâm. 
              Mỗi dự án đều có câu chuyện riêng và giá trị độc đáo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Github className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-purple-600 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="gradient-bg text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Xem thêm dự án
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
