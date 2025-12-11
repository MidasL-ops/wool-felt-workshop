import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);
  const ipProducts = products.filter(p => p.category === 'IP系列').slice(0, 4);
  const allProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section - 頂級UI設計 */}
      <section className="relative py-16 md:py-24 lg:py-32 min-h-[85vh] flex items-center overflow-hidden">
        {/* 背景裝飾 - 極其柔和的鹿元素 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div 
            className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[60%] max-w-4xl h-[120%]"
            style={{
              backgroundImage: 'url(/images/deer-wool-texture.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              opacity: 0.04,
              filter: 'blur(2px)',
            }}
          ></div>
          {/* 多層次漸層，創造深度感 */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg-cloud via-bg-cream/99 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-cream/20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-transparent via-bg-cream/30 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* 左側：文字內容 - 優雅的排版 */}
            <div className="text-left space-y-6 lg:space-y-8">
              {/* H1 主標語 - 優雅的層次 */}
              <div className="space-y-3">
                <h1 className="text-[42px] sm:text-[48px] md:text-[52px] lg:text-[56px] xl:text-[60px] font-bold text-foreground leading-[1.15] tracking-tight">
                  把柔軟，捧在手心
                </h1>
                <h1 className="text-[42px] sm:text-[48px] md:text-[52px] lg:text-[56px] xl:text-[60px] font-bold text-accent leading-[1.15] tracking-tight">
                  把溫暖，分享給世界
                </h1>
              </div>
              
              {/* 副標語 - 優雅的間距 */}
              <div className="space-y-4 pt-2">
                <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-medium text-text-secondary leading-[1.6] max-w-xl">
                  每一件羊毛氈作品，都藏著一份<span className="whitespace-nowrap">療癒的力量。</span>
                </p>
                <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-medium text-text-secondary leading-[1.6] max-w-xl">
                  願這份柔軟與喜悅，也在你的日常裡<span className="whitespace-nowrap">靜靜綻放。</span>
                </p>
              </div>
              
              {/* 品牌標語 - 優雅的強調 */}
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-accent italic pt-2 max-w-xl">
                可愛，是能療癒世界的語言。
              </p>
              
              {/* CTA 按鈕 - 優雅的間距 */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/shop"
                  className="btn-primary inline-block text-center w-full sm:w-auto"
                >
                  探索作品
                </Link>
                <Link
                  href="/about"
                  className="btn-secondary inline-block text-center w-full sm:w-auto"
                >
                  走進我們的故事
                </Link>
              </div>
            </div>
            
            {/* 右側：鹿的圖片 - 無違和融入 */}
            <div className="flex items-center justify-center lg:justify-start relative z-20 lg:pl-8">
              <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
                {/* 優雅的橢圓形容器 */}
                <div 
                  className="relative w-full mx-auto"
                  style={{
                    aspectRatio: '0.75',
                    maxHeight: '650px',
                  }}
                >
                  {/* 柔和的橢圓形漸層淡出 */}
                  <div 
                    className="relative w-full h-full"
                    style={{
                      background: `
                        radial-gradient(
                          ellipse 65% 85% at 50% 50%,
                          rgba(251, 247, 242, 0.98) 0%,
                          rgba(246, 237, 226, 0.85) 35%,
                          rgba(235, 221, 203, 0.5) 65%,
                          rgba(235, 221, 203, 0.1) 85%,
                          transparent 100%
                        )
                      `,
                      borderRadius: '50%',
                      padding: '6%',
                      filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.08))',
                    }}
                  >
                    <div 
                      className="relative w-full h-full rounded-full overflow-hidden"
                      style={{
                        maskImage: 'radial-gradient(ellipse 70% 90% at center, black 40%, transparent 90%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 70% 90% at center, black 40%, transparent 90%)',
                      }}
                    >
                      <Image
                        src="/images/deer-wool-texture.png"
                        alt="羊毛氈小鹿"
                        width={900}
                        height={1200}
                        className="w-full h-full object-contain"
                        style={{
                          filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.12))',
                        }}
                        priority
                        quality={100}
                      />
                    </div>
                  </div>
                  
                  {/* 額外的柔和光暈效果 */}
                  <div 
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse 70% 90% at center, transparent 60%, rgba(235, 221, 203, 0.15) 100%)',
                      mixBlendMode: 'multiply',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-12 md:py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-[640px] mx-auto">
            {/* Section Title - 28px, 130% line-height, 600 */}
            <h2 className="text-[28px] font-semibold text-foreground mb-4 leading-[1.3]">
              🌿 最新作品｜New Arrivals
            </h2>
            <h3 className="text-[28px] font-semibold text-foreground mb-4 leading-[1.3]">
              最新上架作品
            </h3>
            {/* Paragraph - 16-18px, 160% line-height, 400 Regular */}
            <p className="text-[16px] md:text-[18px] text-text-secondary leading-[1.6]">
              最新完成的羊毛氈作品，帶著手作的溫度，準備陪伴你的日常。
            </p>
          </div>
          {/* 商品卡間距：24px-32px */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="group bg-white rounded-card overflow-hidden shadow-soft hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-[2px]"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-cream-yellow/20 flex items-center justify-center overflow-hidden">
                  {product.images && product.images.length > 0 ? (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-image"
                    />
                  ) : (
                    <span className="text-6xl">🧶</span>
                  )}
                  {product.originalPrice && (
                    <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      特價
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-accent bg-primary/10 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    {product.customizable && (
                      <span className="text-xs text-text-secondary">可訂製</span>
                    )}
                  </div>
                  {/* 作品名稱 Title - 20px, 130% line-height, 600 */}
                  <h3 className="text-[20px] font-semibold text-heading-card mb-2 leading-[1.3] group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  {/* Paragraph - 16-18px, 160% line-height, 400 Regular */}
                  <p className="text-[16px] text-text-secondary mb-3 line-clamp-2 leading-[1.6]">
                    {product.description}
                  </p>
                  <p className="text-[16px] text-text-secondary mb-4 italic leading-[1.6]">
                    柔軟的線條與可愛表情，為生活帶來一點微笑。
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      {product.originalPrice && (
                        <span className="text-sm text-text-secondary line-through mr-2">
                          NT$ {product.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-accent">
                        NT$ {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IP Series / Categories Section */}
      <section className="py-12 md:py-20 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-[640px] mx-auto">
            {/* Section Title - 28px, 130% line-height, 600 */}
            <h2 className="text-[28px] font-semibold text-foreground mb-4 leading-[1.3]">
              🧸 找到屬於你的療癒小夥伴
            </h2>
            {/* Paragraph - 16-18px, 160% line-height, 400 Regular */}
            <p className="text-[16px] md:text-[18px] text-text-secondary leading-[1.6]">
              每個系列都有不同的個性與故事，
              <br />
              看看哪一個最能陪伴你。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Hana 系列 */}
            <div className="bg-white rounded-card p-6 shadow-soft hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-[2px]">
              <div className="text-5xl mb-4 text-center">🌸</div>
              {/* 作品名稱 Title - 20px, 130% line-height, 600 */}
              <h3 className="text-[20px] font-semibold text-heading-card mb-3 text-center leading-[1.3]">
                Hana 系列
              </h3>
              {/* Paragraph - 16-18px, 160% line-height, 400 Regular */}
              <p className="text-[16px] text-text-secondary text-center leading-[1.6]">
                柔軟、療癒、帶著可愛的表情，是最能代表品牌的經典系列。
              </p>
            </div>

            {/* 皺眉小動物們系列 */}
            <div className="bg-white rounded-card p-6 shadow-soft hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-[2px]">
              <div className="text-5xl mb-4 text-center">😊</div>
              <h3 className="text-[20px] font-semibold text-heading-card mb-3 text-center leading-[1.3]">
                皺眉小動物們系列
              </h3>
              <p className="text-[16px] text-text-secondary text-center leading-[1.6]">
                把小小情緒放進羊毛氈裡，成為最懂你的療癒陪伴者。
              </p>
            </div>

            {/* 森林小動物系列 */}
            <div className="bg-white rounded-card p-6 shadow-soft hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-[2px]">
              <div className="text-5xl mb-4 text-center">🌲</div>
              <h3 className="text-[20px] font-semibold text-heading-card mb-3 text-center leading-[1.3]">
                森林小動物系列
              </h3>
              <p className="text-[16px] text-text-secondary text-center leading-[1.6]">
                靈感來自自然與綠意，溫柔又可愛的動物角色陪伴你的生活。
              </p>
            </div>

            {/* 濕氈作品系列 */}
            <div className="bg-white rounded-card p-6 shadow-soft hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-[2px]">
              <div className="text-5xl mb-4 text-center">🧣</div>
              <h3 className="text-[20px] font-semibold text-heading-card mb-3 text-center leading-[1.3]">
                濕氈作品系列
              </h3>
              <p className="text-[16px] text-text-secondary text-center leading-[1.6]">
                從圍巾到平面作品，每一件都帶著細膩的手作質地。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products Section */}
      <section className="py-16 md:py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🎁 你可能會喜歡
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              從人氣作品到特別款，選一件最能代表你的柔軟日常。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.slice(0, 6).map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="group bg-white rounded-card overflow-hidden shadow-soft hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-[2px]"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-cream-yellow/20 flex items-center justify-center overflow-hidden">
                  {product.images && product.images.length > 0 ? (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-image"
                    />
                  ) : (
                    <span className="text-6xl">🧶</span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-accent bg-primary/10 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  {/* 作品名稱 Title - 20px, 130% line-height, 600 */}
                  <h3 className="text-[20px] font-semibold text-heading-card mb-2 leading-[1.3] group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  {/* Paragraph - 16-18px, 160% line-height, 400 Regular */}
                  <p className="text-[16px] text-text-secondary mb-3 italic leading-[1.6]">
                    溫暖的色調與細緻的細節，充滿柔軟的陪伴感。
                  </p>
                  <p className="text-[16px] text-text-secondary mb-4 leading-[1.6]">
                    一眼就會愛上的幸福小物。適合送禮，也適合留給自己。
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">
                      NT$ {product.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-12 md:py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[640px] mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-cream-yellow/10 rounded-card p-8 md:p-12">
              {/* Section Title - 28px, 130% line-height, 600 */}
              <h2 className="text-[28px] font-semibold text-foreground mb-6 text-center leading-[1.3]">
                🌸 創作，是一份回到內心平靜的力量
              </h2>
              {/* Paragraph - 16-18px, 160% line-height, 400 Regular */}
              <div className="text-[16px] md:text-[18px] text-text-secondary leading-[1.6] mb-8 space-y-4 text-center">
                <p>
                  在羊毛氈的創作過程中，我們找回了專注與平靜。
                </p>
                <p>
                  看著柔軟的纖維慢慢凝聚、成形，那份可愛與喜悅也悄悄誕生。
                </p>
                <p>
                  薇薇V的羊毛氈手作坊，希望把這份療癒與溫暖，分享給更多人。
                </p>
              </div>
              <div className="text-center">
                <Link
                  href="/about"
                  className="btn-primary inline-block"
                >
                  了解品牌故事
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Custom Order Section */}
      <section className="py-12 md:py-20 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[640px] mx-auto text-center">
            {/* Section Title - 28px, 130% line-height, 600 */}
            <h2 className="text-[28px] font-semibold text-foreground mb-4 leading-[1.3]">
              ✉️ 想訂製專屬你的柔軟小物嗎？
            </h2>
            {/* Paragraph - 16-18px, 160% line-height, 400 Regular */}
            <p className="text-[16px] md:text-[18px] text-text-secondary mb-8 leading-[1.6]">
              無論是禮物、收藏，或心裡有想陪伴的人，
              <br />
              我們都能一起完成一份獨特的療癒作品。
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-block"
            >
              前往訂製
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
