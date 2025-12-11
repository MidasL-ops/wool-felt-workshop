# 📸 如何上傳新商品照片

這份指南將一步步教您如何將新商品照片上傳到網站。

---

## 📁 步驟 1：準備圖片

### 圖片要求
- **格式**：JPG、PNG 或 WebP
- **建議大小**：寬度 800-1200px
- **檔案名稱**：使用英文和數字，例如：`rabbit-1.jpg`、`cat-charm.png`
- **檔案大小**：建議每張圖片不超過 500KB（可提升載入速度）

### 圖片優化建議
- 使用圖片壓縮工具（如 TinyPNG、Squoosh）減少檔案大小
- 確保圖片清晰且光線充足
- 背景建議使用白色或透明背景

---

## 📂 步驟 2：放置圖片檔案

1. **找到專案目錄**：
   ```
   /Users/cfh00518704/Cursor/wool-felt-workshop/public/images/
   ```

2. **將圖片複製到 `public/images/` 目錄**
   - 可以直接拖放圖片到這個資料夾
   - 或使用終端機複製：
     ```bash
     cp /path/to/your/image.jpg /Users/cfh00518704/Cursor/wool-felt-workshop/public/images/
     ```

3. **確認圖片已放入**：
   ```bash
   ls -la public/images/
   ```

---

## ✏️ 步驟 3：更新商品資料

編輯 `data/products.ts` 檔案，更新商品的圖片路徑。

### 範例：更新現有商品圖片

```typescript
{
  id: '1',
  name: '小兔子吊飾',
  category: '吊飾',
  price: 380,
  description: '可愛的小兔子吊飾，可以掛在包包或鑰匙上，陪伴你的每一天。',
  images: ['/images/rabbit-1.jpg', '/images/rabbit-2.jpg'], // 👈 更新這裡
  size: '約 5cm',
  customizable: true,
  inStock: true,
  featured: true,
  story: '這隻小兔子是我在一個安靜的午後完成的...',
  tags: ['可愛', '療癒', '日常']
}
```

### 範例：新增新商品

在 `data/products.ts` 的 `products` 陣列中新增：

```typescript
{
  id: '9', // 使用新的 ID（不要重複）
  name: '雲朵邊小貓吊飾',
  category: '吊飾',
  price: 420,
  description: '柔軟的線條與可愛表情，為生活帶來一點微笑。',
  images: ['/images/cloud-cat-1.jpg', '/images/cloud-cat-2.jpg'], // 👈 圖片路徑
  size: '約 6cm',
  customizable: true,
  inStock: true,
  featured: true, // 設為 true 會在首頁顯示
  story: '作品故事...',
  tags: ['可愛', 'Hana系列']
}
```

---

## 🔍 圖片路徑說明

- **路徑格式**：`/images/檔案名稱.jpg`
- **重要**：路徑必須以 `/images/` 開頭（不是 `images/`）
- **多張圖片**：可以放入多張圖片，第一張會作為主要顯示圖片

---

## 🚀 步驟 4：查看效果

1. **儲存檔案**後，開發伺服器會自動重新載入
2. **在瀏覽器開啟**：http://localhost:3001
3. **檢查商品頁面**：前往 `/shop` 或 `/shop/商品ID`

---

## 📤 步驟 5：推送到 GitHub 和 Netlify

完成後，將變更推送到 GitHub：

```bash
cd /Users/cfh00518704/Cursor/wool-felt-workshop

# 1. 查看變更
git status

# 2. 加入所有變更（包括圖片和程式碼）
git add .

# 3. 提交變更
git commit -m "新增商品圖片：小兔子吊飾等"

# 4. 推送到 GitHub
git push origin main
```

Netlify 會自動偵測變更並重新部署，幾分鐘後網站就會更新！

---

## 💡 快速範例

假設您要新增「雲朵邊小貓吊飾」的照片：

1. **準備圖片**：`cloud-cat-main.jpg`、`cloud-cat-detail.jpg`

2. **複製到專案**：
   ```bash
   cp ~/Downloads/cloud-cat-main.jpg /Users/cfh00518704/Cursor/wool-felt-workshop/public/images/
   cp ~/Downloads/cloud-cat-detail.jpg /Users/cfh00518704/Cursor/wool-felt-workshop/public/images/
   ```

3. **編輯 `data/products.ts`**，找到或新增商品：
   ```typescript
   {
     id: '9',
     name: '雲朵邊小貓吊飾',
     // ... 其他欄位
     images: ['/images/cloud-cat-main.jpg', '/images/cloud-cat-detail.jpg'],
   }
   ```

4. **儲存並查看**：瀏覽器會自動更新

5. **推送變更**：
   ```bash
   git add .
   git commit -m "新增雲朵邊小貓吊飾圖片"
   git push
   ```

---

## ❓ 常見問題

### Q: 圖片沒有顯示？
- 確認圖片路徑是否正確（必須是 `/images/檔案名稱.jpg`）
- 確認圖片檔案是否在 `public/images/` 目錄中
- 檢查檔案名稱是否有特殊字元或空格

### Q: 圖片太大，載入很慢？
- 使用圖片壓縮工具減少檔案大小
- 建議每張圖片不超過 500KB
- 可以使用 WebP 格式（更小的檔案大小）

### Q: 如何一次上傳多張圖片？
- 可以一次複製多張圖片到 `public/images/` 目錄
- 在 `images` 陣列中放入多個路徑即可

### Q: 圖片需要透明背景嗎？
- 不一定，但透明背景（PNG）通常效果更好
- 如果使用白色背景，確保背景是純白色

---

## 📝 圖片命名建議

建議使用有意義的檔案名稱：
- ✅ `rabbit-charm-1.jpg`（清楚、有意義）
- ✅ `hana-cat-cloud.jpg`（包含系列資訊）
- ❌ `IMG_1234.jpg`（不清楚）
- ❌ `照片.jpg`（中文可能造成問題）

---

**需要幫助？** 如果遇到任何問題，隨時告訴我！

