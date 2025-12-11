import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);
  const ipProducts = products.filter(p => p.category === 'IP系列').slice(0, 4);
  const allProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <Image
                src="/logo-sheep-transparent.png"
                alt="薇薇V的羊毛氈手作坊 Logo"
                width={200}
                height={200}
                className="mx-auto"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              把柔軟，捧在手心
              <br />
              <span className="text-cta-primary">把溫暖，分享給世界</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-2 leading-relaxed">
              每一件羊毛氈作品，都藏著一份療癒的力量。
            </p>
            <p className="text-lg md:text-xl text-text-secondary mb-6 leading-relaxed">
              願這份柔軟與喜悅，也在你的日常裡靜靜綻放。
            </p>
            <p className="text-xl md:text-2xl font-medium text-cta-primary mb-8 italic">
              可愛，是能療癒世界的語言。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="px-8 py-3 bg-cta-primary text-white rounded-full font-medium hover:bg-cta-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                探索作品
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 bg-white text-cta-primary border-2 border-cta-primary rounded-full font-medium hover:bg-cta-primary/10 transition-colors"
              >
                走進我們的故事
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 md:py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🌿 最新作品｜New Arrivals
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              最新上架作品
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              最新完成的羊毛氈作品，帶著手作的溫度，準備陪伴你的日常。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 bg-gradient-to-br from-mint-green/20 to-cream-yellow/20 flex items-center justify-center">
                  <span className="text-6xl">🧶</span>
                  {product.originalPrice && (
                    <span className="absolute top-4 right-4 bg-peach-pink text-white px-3 py-1 rounded-full text-sm font-medium">
                      特價
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-mint-green bg-mint-green/10 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    {product.customizable && (
                      <span className="text-xs text-text-secondary">可訂製</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-cta-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-text-secondary text-sm mb-4 italic">
                    柔軟的線條與可愛表情，為生活帶來一點微笑。
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      {product.originalPrice && (
                        <span className="text-sm text-text-secondary line-through mr-2">
                          NT$ {product.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-cta-primary">
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
      <section className="py-16 md:py-24 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🧸 找到屬於你的療癒小夥伴
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              每個系列都有不同的個性與故事，
              <br />
              看看哪一個最能陪伴你。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hana 系列 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🌸</div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                Hana 系列
              </h3>
              <p className="text-sm text-text-secondary text-center leading-relaxed">
                柔軟、療癒、帶著可愛的表情，是最能代表品牌的經典系列。
              </p>
            </div>

            {/* 皺眉小動物們系列 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4 text-center">😊</div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                皺眉小動物們系列
              </h3>
              <p className="text-sm text-text-secondary text-center leading-relaxed">
                把小小情緒放進羊毛氈裡，成為最懂你的療癒陪伴者。
              </p>
            </div>

            {/* 森林小動物系列 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🌲</div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                森林小動物系列
              </h3>
              <p className="text-sm text-text-secondary text-center leading-relaxed">
                靈感來自自然與綠意，溫柔又可愛的動物角色陪伴你的生活。
              </p>
            </div>

            {/* 濕氈作品系列 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🧣</div>
              <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                濕氈作品系列
              </h3>
              <p className="text-sm text-text-secondary text-center leading-relaxed">
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
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 bg-gradient-to-br from-mint-green/20 to-cream-yellow/20 flex items-center justify-center">
                  <span className="text-6xl">🧶</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-mint-green bg-mint-green/10 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-cta-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3 italic">
                    溫暖的色調與細緻的細節，充滿柔軟的陪伴感。
                  </p>
                  <p className="text-text-secondary text-sm mb-4">
                    一眼就會愛上的幸福小物。適合送禮，也適合留給自己。
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cta-primary">
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
      <section className="py-16 md:py-24 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-mint-green/10 to-cream-yellow/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                🌸 創作，是一份回到內心平靜的力量
              </h2>
              <div className="text-lg text-text-secondary leading-relaxed mb-8 space-y-4 text-center">
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
                  className="inline-block px-8 py-3 bg-cta-primary text-white rounded-full font-medium hover:bg-cta-primary/90 transition-colors"
                >
                  了解品牌故事
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Custom Order Section */}
      <section className="py-16 md:py-24 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ✉️ 想訂製專屬你的柔軟小物嗎？
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
              無論是禮物、收藏，或心裡有想陪伴的人，
              <br />
              我們都能一起完成一份獨特的療癒作品。
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-cta-primary text-white rounded-full font-medium hover:bg-cta-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              前往訂製
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
