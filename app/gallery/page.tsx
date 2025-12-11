import Link from 'next/link';
import { works } from '@/data/works';

export default function Gallery() {
  // 使用 works 數據，如果沒有則使用 products
  const galleryItems = works.length > 0 ? works : [];

  return (
    <div className="min-h-screen bg-bg-cloud">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/30 via-cream-yellow/20 to-primary/20 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="text-6xl">🎨</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              作品展示
            </h1>
            <p className="text-xl text-text-secondary">
              每一件作品都承載著故事與情感
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {galleryItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 bg-gradient-to-br from-primary/20 to-cream-yellow/20 flex items-center justify-center">
                    <span className="text-6xl">🧶</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-accent bg-primary/10 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-text-secondary">
                        {new Date(item.createdAt).toLocaleDateString('zh-TW')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-heading-card mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    {item.story && (
                      <div className="pt-4 border-t border-peach-pink/20">
                        <p className="text-sm text-text-secondary italic line-clamp-2">
                          "{item.story}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-6xl mb-4 block">🧶</span>
              <p className="text-xl text-text-secondary mb-8">
                作品正在準備中，敬請期待！
              </p>
              <Link
                href="/shop"
                className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                查看商品
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}


