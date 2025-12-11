'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import { products } from '@/data/products';
import type { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [productList, setProductList] = useState<Product[]>(products);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-cloud to-bg-cream">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">載入中...</p>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return null;
  }

  const handleDelete = (id: string) => {
    if (confirm('確定要刪除這個商品嗎？')) {
      setProductList(productList.filter(p => p.id !== id));
      // 這裡可以整合後端 API 來刪除商品
      console.log('刪除商品:', id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-cloud to-bg-cream">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-primary/20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">商品管理後台</h1>
              <p className="text-sm text-text-secondary">歡迎，{session?.user?.email}</p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="px-4 py-2 text-sm text-text-secondary hover:text-foreground transition-colors"
              >
                返回首頁
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                登出
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">商品列表</h2>
          <Link
            href="/admin/products/new"
            className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            + 新增商品
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">圖片</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">商品名稱</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">分類</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">價格</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">庫存</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {productList.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      {product.images && product.images.length > 0 ? (
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={60}
                          height={60}
                          className="rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-15 h-15 bg-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">🧶</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-foreground">{product.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-text-secondary">{product.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-accent">NT$ {product.price}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                        {product.inStock ? '有現貨' : '缺貨中'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/products/${product.id}`}
                          className="px-3 py-1 text-sm text-primary hover:bg-primary/10 rounded transition-colors"
                        >
                          編輯
                        </Link>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded transition-colors"
                        >
                          刪除
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
