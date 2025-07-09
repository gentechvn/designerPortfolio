
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold gradient-text mb-4">
                Designer Portfolio
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Tạo ra những trải nghiệm số đầy màu sắc và sáng tạo. 
                Biến ý tưởng thành hiện thực với thiết kế chuyên nghiệp.
              </p>
              <div className="flex items-center text-gray-400">
                <span>GenTech</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                    Kỹ năng
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Dịch vụ</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">UI/UX Design</li>
                <li className="text-gray-400">Web Design</li>
                <li className="text-gray-400">Mobile App Design</li>
                <li className="text-gray-400">Branding</li>
                <li className="text-gray-400">Consultation</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © GenTech
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Chính sách bảo mật
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Điều khoản sử dụng
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
