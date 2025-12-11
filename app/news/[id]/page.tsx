import { notFound } from 'next/navigation';
import Link from 'next/link';
import { news } from '@/data/news';

interface NewsDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params;
  const newsItem = news.find(n => n.id === id);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cloud-white">
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-text-secondary">
              <Link href="/" className="hover:text-cta-primary">首頁</Link>
              <span className="mx-2">/</span>
              <Link href="/news" className="hover:text-cta-primary">最新消息</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{newsItem.title}</span>
            </nav>

            {/* News Content */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {newsItem.image && (
                <div className="relative h-96 bg-gradient-to-br from-mint-green/20 to-cream-yellow/20 flex items-center justify-center">
                  <span className="text-9xl">📰</span>
                </div>
              )}
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-text-secondary">
                    {new Date(newsItem.createdAt).toLocaleDateString('zh-TW', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  {newsItem.featured && (
                    <span className="text-sm text-peach-pink bg-peach-pink/10 px-3 py-1 rounded-full">
                      精選
                    </span>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {newsItem.title}
                </h1>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
                    {newsItem.content}
                  </p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8 text-center">
              <Link
                href="/news"
                className="inline-block px-8 py-3 bg-mint-green text-foreground rounded-full font-medium hover:bg-mint-green/80 transition-colors"
              >
                ← 返回消息列表
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}


