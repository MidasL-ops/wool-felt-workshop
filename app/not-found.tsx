import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-cloud flex items-center justify-center">
      <div className="text-center">
        <span className="text-9xl mb-4 block">🧶</span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          404 - 找不到頁面
        </h1>
        <p className="text-xl text-text-secondary mb-8">
          抱歉，您要找的頁面不存在
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          返回首頁
        </Link>
      </div>
    </div>
  );
}


