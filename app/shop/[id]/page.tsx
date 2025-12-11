import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-cloud">
      {/* Product Detail */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-text-secondary">
              <Link href="/" className="hover:text-accent">首頁</Link>
              <span className="mx-2">/</span>
              <Link href="/shop" className="hover:text-accent">商品</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-cream-yellow/20 rounded-2xl overflow-hidden">
                  {product.images && product.images.length > 0 ? (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-9xl">🧶</span>
                    </div>
                  )}
                </div>
                {product.images && product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.slice(1, 5).map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-square bg-gradient-to-br from-primary/10 to-cream-yellow/10 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${product.name} - 圖片 ${index + 2}`}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div>
                <div className="mb-4">
                  <span className="inline-block text-sm text-accent bg-primary/10 px-3 py-1 rounded-full mb-3">
                    {product.category}
                  </span>
                  {product.customizable && (
                    <span className="inline-block ml-2 text-sm text-accent bg-primary/10 px-3 py-1 rounded-full">
                      可訂製
                    </span>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <div className="mb-6">
                  {product.originalPrice && (
                    <span className="text-xl text-text-secondary line-through mr-3">
                      NT$ {product.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-accent">
                    NT$ {product.price}
                  </span>
                </div>
                <div className="mb-6 p-4 sm:p-6 bg-primary/10 rounded-lg">
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Product Details */}
                <div className="mb-6 space-y-3">
                  {product.size && (
                    <div className="flex items-center">
                      <span className="text-text-secondary w-24">尺寸：</span>
                      <span className="text-foreground">{product.size}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <span className="text-text-secondary w-24">庫存：</span>
                    <span className={`font-medium ${product.inStock ? 'text-accent' : 'text-red-500'}`}>
                      {product.inStock ? '有現貨' : '缺貨中'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-text-secondary w-24">訂製：</span>
                    <span className="text-foreground">
                      {product.customizable ? '可接受訂製' : '僅現貨販售'}
                    </span>
                  </div>
                </div>

                {/* Story */}
                {product.story && (
                  <div className="mb-6 p-6 bg-gradient-to-br from-cream-yellow/10 to-primary/10 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">作品故事</h3>
                    <p className="text-text-secondary leading-relaxed italic">
                      "{product.story}"
                    </p>
                  </div>
                )}

                {/* Tags */}
                {product.tags && product.tags.length > 0 && (
                  <div className="mb-8 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm text-text-secondary bg-white border border-peach-pink/20 px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="space-y-4">
                  {product.inStock ? (
                    <>
                      <Link
                        href={`/contact?product=${product.id}`}
                        className="block w-full text-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                      >
                        {product.customizable ? '訂製詢問' : '立即購買'}
                      </Link>
                      {product.customizable && (
                        <Link
                          href={`/contact?product=${product.id}&type=訂製詢問`}
                          className="block w-full text-center px-8 py-4 bg-white text-accent border-2 border-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
                        >
                          一般詢問
                        </Link>
                      )}
                    </>
                  ) : (
                    <div className="text-center p-4 bg-gray-100 rounded-lg">
                      <p className="text-text-secondary mb-4">目前缺貨中</p>
                      <Link
                        href={`/contact?product=${product.id}`}
                        className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                      >
                        到貨通知
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-foreground mb-8">相關商品</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products
                  .filter(p => p.category === product.category && p.id !== product.id)
                  .slice(0, 4)
                  .map((relatedProduct) => (
                    <Link
                      key={relatedProduct.id}
                      href={`/shop/${relatedProduct.id}`}
                      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-cream-yellow/20 flex items-center justify-center">
                        <span className="text-5xl">🧶</span>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-heading-card mb-2 group-hover:text-accent transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-accent font-bold">
                          NT$ {relatedProduct.price}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


