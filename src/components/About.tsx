
import { Heart, Coffee, Music, Camera } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: Heart, label: 'Thiết kế', color: 'text-red-500' },
    { icon: Coffee, label: 'Cà phê', color: 'text-amber-600' },
    { icon: Music, label: 'Âm nhạc', color: 'text-purple-500' },
    { icon: Camera, label: 'Nhiếp ảnh', color: 'text-blue-500' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Về <span className="gradient-text">tôi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Với niềm đam mê bất tận đối với thiết kế và sáng tạo, 
              tôi luôn tìm cách biến những ý tưởng thành những sản phẩm tuyệt vời.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left column - Image */}
            <div className="relative">
              <div className="gradient-border rounded-2xl">
                <div className="bg-white p-2 rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
                    alt="Workspace"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 gradient-card p-6 rounded-xl shadow-2xl">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Câu chuyện của tôi</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bắt đầu từ niềm đam mê với màu sắc và hình khối, tôi đã dành hơn 5 năm 
                  để học hỏi và phát triển kỹ năng thiết kế. Từ những sketch đầu tiên 
                  đến những dự án phức tạp ngày nay.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Tôi tin rằng thiết kế tốt không chỉ đẹp mắt mà còn phải giải quyết được 
                  vấn đề thực tế. Mỗi dự án đều là một hành trình khám phá mới.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4">Sở thích của tôi</h4>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover-lift">
                      <interest.icon className={`w-6 h-6 ${interest.color}`} />
                      <span className="font-medium">{interest.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Tải CV
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300">
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
