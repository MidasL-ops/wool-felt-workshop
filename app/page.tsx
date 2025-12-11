import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);
  const ipProducts = products.filter(p => p.category === 'IP系列').slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mint-green/30 via-cream-yellow/20 to-peach-pink/20 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="text-6xl">🧶</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              把柔軟，捧在手心
              <br />
              <span className="text-forest-green">把喜悅，分享給世界</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
              以可愛、生動、富含情緒療癒力量的羊毛氈作品為核心，
              <br />
              打造陪伴生活的小小幸福
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="px-8 py-3 bg-forest-green text-white rounded-full font-medium hover:bg-forest-green/90 transition-colors shadow-lg hover:shadow-xl"
              >
                探索商品
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 bg-white text-forest-green border-2 border-forest-green rounded-full font-medium hover:bg-mint-green/10 transition-colors"
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-cloud-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              精選作品
            </h2>
            <p className="text-text-secondary text-lg">
              每一件作品都承載著溫暖與用心
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
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-forest-green transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      {product.originalPrice && (
                        <span className="text-sm text-text-secondary line-through mr-2">
                          NT$ {product.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-forest-green">
                        NT$ {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block px-8 py-3 bg-mint-green text-foreground rounded-full font-medium hover:bg-mint-green/80 transition-colors"
            >
              查看更多商品
            </Link>
          </div>
        </div>
      </section>

      {/* IP Series Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cream-yellow/10 to-peach-pink/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              IP 系列
            </h2>
            <p className="text-text-secondary text-lg">
              原創角色，每個都有獨特的故事
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ipProducts.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 bg-gradient-to-br from-mint-green/20 to-cream-yellow/20 flex items-center justify-center">
                  <span className="text-5xl">🎨</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-forest-green transition-colors text-center">
                    {product.name}
                  </h3>
                  <p className="text-forest-green font-bold text-center">
                    NT$ {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-block px-8 py-3 bg-cream-yellow text-foreground rounded-full font-medium hover:bg-cream-yellow/80 transition-colors"
            >
              查看完整作品集
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="py-16 md:py-24 bg-cloud-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-mint-green/10 to-cream-yellow/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                創作，是一種重回平靜的儀式
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8 text-center">
                當投入到羊毛氈的製作中，那種專注與沉浸的感覺，會讓人暫時忘卻煩惱。
                看著纖維一點一點凝聚、成形，就像看著心裡的複雜逐漸被梳理開，最後化為一份療癒與平靜。
              </p>
              <div className="text-center">
                <Link
                  href="/about"
                  className="inline-block px-8 py-3 bg-forest-green text-white rounded-full font-medium hover:bg-forest-green/90 transition-colors"
                >
                  閱讀完整品牌故事
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
