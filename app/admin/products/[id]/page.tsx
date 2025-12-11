'use client';

import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import type { Product, ProductCategory } from '@/types';

export default function EditProduct() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const productId = params?.id as string;
  
  const [formData, setFormData] = useState<Partial<Product> & { imagesString?: string; tagsString?: string }>({
    name: '',
    category: '吊飾',
    price: 0,
    originalPrice: undefined,
    description: '',
    images: [],
    imagesString: '',
    size: '',
    customizable: false,
    inStock: true,
    featured: false,
    story: '',
    tags: [],
    tagsString: '',
  });
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (productId) {
      const product = products.find(p => p.id === productId);
      if (product) {
        const imagePaths = product.images.join(', ');
        setFormData({
          ...product,
          imagesString: imagePaths,
          tagsString: product.tags?.join(', ') || '',
        });
        setUploadedImages(product.images);
      }
    }
  }, [productId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 轉換字串為陣列
    const submitData = {
      ...formData,
      images: formData.imagesString?.split(',').map(img => img.trim()).filter(Boolean) || [],
      tags: formData.tagsString?.split(',').map(tag => tag.trim()).filter(Boolean) || [],
    };
    // 這裡可以整合後端 API 來更新商品
    console.log('更新商品:', submitData);
    router.push('/admin');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? Number(value) : value,
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setUploadProgress('正在上傳圖片...');

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          let errorMessage = '上傳失敗';
          try {
            const error = await response.json();
            errorMessage = error.error || errorMessage;
          } catch (e) {
            errorMessage = `伺服器錯誤 (${response.status})`;
          }
          throw new Error(errorMessage);
        }

        const data = await response.json();
        if (!data.path) {
          throw new Error('伺服器未返回圖片路徑');
        }
        return data.path;
      });

      const uploadedPaths = await Promise.all(uploadPromises);
      const newImages = [...uploadedImages, ...uploadedPaths];
      setUploadedImages(newImages);
      setFormData({
        ...formData,
        imagesString: newImages.join(', '),
      });
      setUploadProgress('上傳成功！');
      
      // 清除上傳進度訊息
      setTimeout(() => setUploadProgress(''), 2000);
    } catch (error) {
      console.error('上傳錯誤:', error);
      setUploadProgress(`上傳失敗: ${error instanceof Error ? error.message : '未知錯誤'}`);
    } finally {
      setUploading(false);
      // 重置 input
      e.target.value = '';
    }
  };

  const removeImage = (index: number) => {
    const newImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(newImages);
    setFormData({
      ...formData,
      imagesString: newImages.join(', '),
    });
  };

  if (status === 'loading' || status === 'unauthenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-cloud to-bg-cream">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">載入中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-cloud to-bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href="/admin"
            className="text-primary hover:text-accent transition-colors"
          >
            ← 返回商品列表
          </Link>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-foreground mb-6">編輯商品</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                商品名稱 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  分類 <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="吊飾">吊飾</option>
                  <option value="擺飾">擺飾</option>
                  <option value="圍巾">圍巾</option>
                  <option value="IP系列">IP系列</option>
                  <option value="其他">其他</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  價格 <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                原價（選填）
              </label>
              <input
                type="number"
                name="originalPrice"
                value={formData.originalPrice || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                商品描述 <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                商品圖片 <span className="text-red-500">*</span>
              </label>
              
              {/* 圖片上傳區域 */}
              <div className="mb-4">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary/30 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-10 h-10 mb-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="mb-2 text-sm text-text-secondary">
                      <span className="font-semibold">點擊選擇圖片</span> 或拖放圖片到這裡
                    </p>
                    <p className="text-xs text-text-secondary">PNG, JPG, GIF 最大 10MB（可選擇多張）</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    disabled={uploading}
                  />
                </label>
                
                {uploadProgress && (
                  <p className={`mt-2 text-sm ${uploadProgress.includes('成功') ? 'text-green-600' : uploadProgress.includes('失敗') ? 'text-red-600' : 'text-primary'}`}>
                    {uploadProgress}
                  </p>
                )}
              </div>

              {/* 已上傳的圖片預覽 */}
              {uploadedImages.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
                  {uploadedImages.map((imagePath, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={imagePath}
                        alt={`預覽 ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border border-primary/20"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                        title="移除圖片"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* 圖片路徑輸入（備用，可手動輸入） */}
              <div className="mt-4">
                <label className="block text-xs text-text-secondary mb-1">
                  或手動輸入圖片路徑（多個用逗號分隔）
                </label>
                <input
                  type="text"
                  name="imagesString"
                  value={formData.imagesString || ''}
                  onChange={handleChange}
                  placeholder="/images/product-1.jpg, /images/product-2.jpg"
                  className="w-full px-4 py-2 text-sm border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  尺寸
                </label>
                <input
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  標籤（用逗號分隔）
                </label>
              <input
                type="text"
                name="tagsString"
                value={formData.tagsString || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                作品故事
              </label>
              <textarea
                name="story"
                value={formData.story}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="customizable"
                  checked={formData.customizable}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary border-primary/30 rounded focus:ring-primary"
                />
                <span className="text-sm text-foreground">可訂製</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={formData.inStock}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary border-primary/30 rounded focus:ring-primary"
                />
                <span className="text-sm text-foreground">有現貨</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary border-primary/30 rounded focus:ring-primary"
                />
                <span className="text-sm text-foreground">精選商品</span>
              </label>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                儲存變更
              </button>
              <Link
                href="/admin"
                className="px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                取消
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
