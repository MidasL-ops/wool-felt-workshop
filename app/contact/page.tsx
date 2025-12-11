'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';

function ContactForm() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('product');
  const typeParam = searchParams.get('type');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productId: productId || '',
    message: '',
    type: (typeParam as '訂製詢問' | '一般詢問' | '課程詢問') || '一般詢問',
  });

  const [submitted, setSubmitted] = useState(false);

  const selectedProduct = productId ? products.find(p => p.id === productId) : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 這裡可以整合後端 API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // 重置表單
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        productId: '',
        message: '',
        type: '一般詢問',
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-cloud-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mint-green/30 via-cream-yellow/20 to-peach-pink/20 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="text-6xl">💌</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              聯絡我們
            </h1>
            <p className="text-xl text-text-secondary">
              有任何問題或想要訂製專屬作品，歡迎與我們聯繫
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              {selectedProduct && (
                <div className="mb-8 p-6 bg-mint-green/10 rounded-lg">
                  <p className="text-sm text-text-secondary mb-2">詢問商品：</p>
                  <p className="text-lg font-semibold text-foreground">{selectedProduct.name}</p>
                  <p className="text-cta-primary">NT$ {selectedProduct.price}</p>
                </div>
              )}

              {submitted ? (
                <div className="text-center py-12">
                  <span className="text-6xl mb-4 block">✅</span>
                  <h2 className="text-2xl font-bold text-foreground mb-2">感謝您的詢問！</h2>
                  <p className="text-text-secondary">
                    我們已收到您的訊息，會盡快回覆您。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-foreground mb-2">
                      詢問類型 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-mint-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                    >
                      <option value="訂製詢問">訂製詢問</option>
                      <option value="一般詢問">一般詢問</option>
                      <option value="課程詢問">課程詢問</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-mint-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                      placeholder="請輸入您的姓名"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      電子信箱 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-mint-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      聯絡電話
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-mint-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                      placeholder="0912-345-678"
                    />
                  </div>

                  {formData.type === '訂製詢問' && (
                    <div>
                      <label htmlFor="productId" className="block text-sm font-medium text-foreground mb-2">
                        參考商品（選填）
                      </label>
                      <select
                        id="productId"
                        name="productId"
                        value={formData.productId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-mint-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                      >
                        <option value="">請選擇參考商品（選填）</option>
                        {products.map((product) => (
                          <option key={product.id} value={product.id}>
                            {product.name} - NT$ {product.price}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      訊息內容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-mint-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent resize-none"
                      placeholder="請詳細描述您的需求或問題..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-cta-primary text-white rounded-full font-medium hover:bg-cta-primary/90 transition-colors shadow-lg hover:shadow-xl"
                  >
                    送出詢問
                  </button>
                </form>
              )}

              {/* Contact Info */}
              <div className="mt-12 pt-12 border-t border-mint-green/20">
                <h3 className="text-xl font-semibold text-foreground mb-6">其他聯絡方式</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-mint-green/10 rounded-lg">
                    <span className="text-3xl mb-2 block">📧</span>
                    <p className="text-sm text-text-secondary mb-1">電子信箱</p>
                    <a href="mailto:contact@woolfelt.com" className="text-foreground hover:text-cta-primary transition-colors">
                      contact@woolfelt.com
                    </a>
                  </div>
                  <div className="text-center p-4 bg-cream-yellow/10 rounded-lg">
                    <span className="text-3xl mb-2 block">📷</span>
                    <p className="text-sm text-text-secondary mb-1">Instagram</p>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-cta-primary transition-colors">
                      @woolfelt_workshop
                    </a>
                  </div>
                  <div className="text-center p-4 bg-peach-pink/10 rounded-lg">
                    <span className="text-3xl mb-2 block">💬</span>
                    <p className="text-sm text-text-secondary mb-1">LINE</p>
                    <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-cta-primary transition-colors">
                      加入好友
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cloud-white flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl mb-4 block">💌</span>
          <p className="text-xl text-text-secondary">載入中...</p>
        </div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}

