
import { Sparkles, Palette } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 floating">
        <Sparkles className="text-vibrant-pink w-8 h-8" />
      </div>
      <div className="absolute top-32 right-16 floating" style={{ animationDelay: '2s' }}>
        <Palette className="text-vibrant-purple w-6 h-6" />
      </div> 

      <div className="container mx-auto px-4 text-center fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Xin chào! Tôi là{' '}
            <span className="gradient-text">
              Ng Khac Thinh
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Tôi tạo ra những trải nghiệm số đầy màu sắc và sáng tạo. 
            Từ thiết kế UI/UX đến branding, tôi biến ý tưởng thành hiện thực.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="gradient-bg text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Xem Portfolio
            </button>
            <button className="border-2 border-purple-500 text-purple-500 px-8 py-4 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Liên hệ với tôi
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-gray-600">Dự án</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">5+</div>
              <div className="text-gray-600">Năm kinh nghiệm</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">30+</div>
              <div className="text-gray-600">Khách hàng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-gray-600">Hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
