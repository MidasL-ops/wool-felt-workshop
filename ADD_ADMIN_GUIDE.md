# 新增管理者指南

## 🎯 如何新增管理者

新增管理者非常簡單！只需要修改一個檔案即可。

---

## 📝 步驟

### 1. 編輯認證設定檔

打開檔案：`app/api/auth/[...nextauth]/route.ts`

找到這一行：
```typescript
const ALLOWED_EMAILS = [
  'lesterskimo@gmail.com',
  // 在這裡新增其他管理者的 email，例如：
  // 'another-admin@gmail.com',
];
```

### 2. 新增管理者的 email

在 `ALLOWED_EMAILS` 陣列中新增新的 email，例如：

```typescript
const ALLOWED_EMAILS = [
  'lesterskimo@gmail.com',
  'new-admin@gmail.com',  // 新增的管理者
  'another-admin@gmail.com',  // 再新增一個
];
```

### 3. 儲存並重新部署

- **本地開發**：重新啟動開發伺服器（`npm run dev`）
- **Netlify**：推送到 GitHub，Netlify 會自動重新部署

---

## ✅ 完成！

新增的管理者就可以使用他們的 Google 帳號登入後台了！

---

## 📌 注意事項

1. **不需要額外設定**：新增的管理者不需要在 Google Cloud Console 或 Netlify 做任何額外設定
2. **使用 Google 帳號**：所有管理者都必須使用 Google 帳號登入
3. **即時生效**：修改後重新部署即可生效，不需要重新設定 OAuth

---

## 🔒 安全提醒

- 只新增您信任的管理者 email
- 定期檢查 `ALLOWED_EMAILS` 列表
- 如果某個管理者不再需要權限，記得從列表中移除
