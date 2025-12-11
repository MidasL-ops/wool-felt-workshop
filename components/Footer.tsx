import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white/60 backdrop-blur-sm border-t border-cta-primary/20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 品牌資訊 */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/logo-sheep-transparent.png"
                  alt="薇薇V的羊毛氈手作坊 Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-foreground">薇薇V的羊毛氈手作坊</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              把柔軟，捧在手心；<br />
              把喜悅，分享給世界。
            </p>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-text-secondary hover:text-cta-primary transition-colors text-sm">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-text-secondary hover:text-cta-primary transition-colors text-sm">
                  作品展示
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-text-secondary hover:text-cta-primary transition-colors text-sm">
                  商品列表
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-cta-primary transition-colors text-sm">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">聯絡我們</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="mailto:contact@woolfelt.com" className="hover:text-cta-primary transition-colors">
                  📧 contact@woolfelt.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cta-primary transition-colors">
                  📷 Instagram
                </a>
              </li>
              <li>
                <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="hover:text-cta-primary transition-colors">
                  💬 LINE
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mint-green/20 pt-8 text-center text-sm text-text-secondary">
          <p>© {new Date().getFullYear()} 薇薇V的羊毛氈手作坊. All rights reserved.</p>
          <p className="mt-2">因為可愛，是能療癒世界的語言。🌈</p>
        </div>
      </div>
    </footer>
  );
}

