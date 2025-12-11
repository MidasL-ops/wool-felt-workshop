export default function About() {
  return (
    <div className="min-h-screen bg-cloud-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mint-green/30 via-cream-yellow/20 to-peach-pink/20 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="text-6xl">🌿</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About 薇薇V的羊毛氈手作坊
            </h1>
            <p className="text-xl text-forest-green font-medium">
              把柔軟，捧在手心；把喜悅，分享給世界。
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  在忙碌的生活中，我們常常忘記停下來，好好感受身邊那些微小卻溫暖的片刻。
                  而羊毛氈，正是一種能讓心靜下來的創作方式。
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-12 bg-white rounded-2xl p-8 md:p-12 shadow-md">
                <div className="flex items-start space-x-4 mb-6">
                  <span className="text-4xl">🎨</span>
                  <h2 className="text-3xl font-bold text-foreground">創作，是一種重回平靜的儀式</h2>
                </div>
                <p className="text-lg text-text-secondary leading-relaxed">
                  當投入到羊毛氈的製作中，那種專注與沉浸的感覺，會讓人暫時忘卻煩惱。
                  看著纖維一點一點凝聚、成形，就像看著心裡的複雜逐漸被梳理開，最後化為一份療癒與平靜。
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-12 bg-gradient-to-br from-cream-yellow/10 to-peach-pink/10 rounded-2xl p-8 md:p-12">
                <div className="flex items-start space-x-4 mb-6">
                  <span className="text-4xl">🧸</span>
                  <h2 className="text-3xl font-bold text-foreground">一件可愛的作品，能讓人重新笑起來</h2>
                </div>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  當一個作品完成時，不只創作者會心一笑，旁人看到時也會被這份可愛感染——
                  表情會變柔軟、心情會變輕盈。
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  這份喜悅並不只來自外型的可愛，
                  更來自作品中那份 <span className="font-semibold text-forest-green">溫暖、善意與正向能量</span>。
                </p>
              </div>

              {/* Section 3 */}
              <div className="mb-12 bg-white rounded-2xl p-8 md:p-12 shadow-md">
                <div className="flex items-start space-x-4 mb-6">
                  <span className="text-4xl">💛</span>
                  <h2 className="text-3xl font-bold text-foreground">想把這份力量，分享給更多人</h2>
                </div>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  「薇薇V的羊毛氈手作坊」希望透過每一件作品，
                  把這股柔軟的力量傳遞出去——
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  讓收到作品的你，
                  不論是拿在手裡、帶在身上，
                  都能感受到同樣的溫暖、陪伴與真正的喜悅。
                </p>
              </div>

              {/* Closing */}
              <div className="text-center bg-gradient-to-br from-mint-green/20 to-forest-green/10 rounded-2xl p-8 md:p-12">
                <p className="text-2xl md:text-3xl font-bold text-forest-green mb-4">
                  🌈 因為可愛，是能療癒世界的語言。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
