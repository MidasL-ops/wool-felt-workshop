import Link from 'next/link';
import { news } from '@/data/news';

export default function News() {
  const featuredNews = news.filter(n => n.featured);
  const regularNews = news.filter(n => !n.featured);

  return (
    <div className="min-h-screen bg-cloud-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/30 via-cream-yellow/20 to-primary/20 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="text-6xl">📰</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              最新消息
            </h1>
            <p className="text-xl text-text-secondary">
              掌握最新動態與活動資訊
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">精選消息</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {item.image && (
                    <div className="relative h-64 bg-gradient-to-br from-primary/20 to-cream-yellow/20 flex items-center justify-center">
                      <span className="text-6xl">📰</span>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-text-secondary">
                        {new Date(item.createdAt).toLocaleDateString('zh-TW', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="text-xs text-accent bg-primary/10 px-3 py-1 rounded-full">
                        精選
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <Link
                      href={`/news/${item.id}`}
                      className="inline-block text-accent hover:text-accent/80 font-medium transition-colors"
                    >
                      閱讀更多 →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">所有消息</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {item.image && (
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-cream-yellow/20 flex items-center justify-center">
                    <span className="text-5xl">📰</span>
                  </div>
                )}
                <div className="p-6">
                  <span className="text-xs text-text-secondary block mb-3">
                    {new Date(item.createdAt).toLocaleDateString('zh-TW', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link
                    href={`/news/${item.id}`}
                    className="inline-block text-accent hover:text-accent/80 font-medium text-sm transition-colors"
                  >
                    閱讀更多 →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


