# Netlify 環境變數設定指南

## 📋 需要在 Netlify 設定的環境變數

為了讓 Google OAuth 認證在 Netlify 上正常運作，您需要在 Netlify 控制台設定以下環境變數。

---

## 🔧 步驟 1：進入 Netlify 環境變數設定

1. 登入 [Netlify](https://app.netlify.com)
2. 選擇您的網站專案（`wool-felt-workshop`）
3. 點擊左側選單的 **Site configuration**（網站設定）
4. 點擊 **Environment variables**（環境變數）

---

## 🔑 步驟 2：新增環境變數

在環境變數頁面，點擊 **Add a variable**（新增變數），然後逐一新增以下變數：

### 1. GOOGLE_CLIENT_ID
- **Key**: `GOOGLE_CLIENT_ID`
- **Value**: 您的 Google OAuth Client ID（從 Google Cloud Console 取得）
- **Scopes**: 選擇 **All scopes**（所有環境）

### 2. GOOGLE_CLIENT_SECRET
- **Key**: `GOOGLE_CLIENT_SECRET`
- **Value**: 您的 Google OAuth Client Secret（從 Google Cloud Console 取得）
- **Scopes**: 選擇 **All scopes**（所有環境）

### 3. NEXTAUTH_SECRET
- **Key**: `NEXTAUTH_SECRET`
- **Value**: `re3W/7mv/YTgaZyduHmsVCg5eEYxwLAJ01o7vTrk9vk=`（或您自己生成的密鑰）
- **Scopes**: 選擇 **All scopes**（所有環境）

### 4. NEXTAUTH_URL
- **Key**: `NEXTAUTH_URL`
- **Value**: 您的 Netlify 網站網址（例如：`https://your-site-name.netlify.app`）
  - ⚠️ **重要**：請將 `your-site-name` 替換為您實際的 Netlify 網站名稱
  - 如果使用自訂網域，請使用自訂網域（例如：`https://woolfelt.com`）
- **Scopes**: 選擇 **All scopes**（所有環境）

---

## 🔄 步驟 3：更新 Google OAuth 設定

在設定完 Netlify 環境變數後，您還需要更新 Google Cloud Console 中的 OAuth 設定：

### 更新授權的重新導向 URI

1. 前往 [Google Cloud Console](https://console.cloud.google.com/)
2. 選擇您的專案
3. 前往 **APIs & Services** > **Credentials**
4. 點擊您建立的 OAuth 2.0 Client ID
5. 在 **Authorized redirect URIs**（授權的重新導向 URI）中，新增：
   ```
   https://your-site-name.netlify.app/api/auth/callback/google
   ```
   - ⚠️ **請將 `your-site-name` 替換為您實際的 Netlify 網站名稱**
   - 如果使用自訂網域，請使用：
     ```
     https://your-custom-domain.com/api/auth/callback/google
     ```

6. 點擊 **Save**（儲存）

---

## ✅ 步驟 4：重新部署網站

設定完環境變數後，需要觸發一次重新部署：

### 方法 1：透過 Netlify 控制台
1. 在 Netlify 網站管理頁面
2. 點擊 **Deploys**（部署）標籤
3. 點擊右上角的 **Trigger deploy**（觸發部署）
4. 選擇 **Deploy site**（部署網站）

### 方法 2：推送一個小變更到 GitHub
```bash
# 在專案根目錄執行
git commit --allow-empty -m "觸發 Netlify 重新部署以載入環境變數"
git push
```

---

## 🧪 步驟 5：測試後台登入

1. 前往您的 Netlify 網站首頁
2. 點擊 Header 中的 **"V"** 字
3. 應該會導向登入頁面
4. 點擊「使用 Google 登入」
5. 使用 `lesterskimo@gmail.com` 登入
6. 確認可以成功進入後台

---

## 🔍 檢查清單

在完成設定後，請確認：

- [ ] 已在 Netlify 設定所有 4 個環境變數
- [ ] `NEXTAUTH_URL` 設定為正確的 Netlify 網址
- [ ] 已在 Google Cloud Console 新增 Netlify 的 redirect URI
- [ ] 已觸發重新部署
- [ ] 可以成功登入後台

---

## ⚠️ 常見問題

### 問題 1：登入後出現錯誤
- **原因**：`NEXTAUTH_URL` 設定錯誤或 Google OAuth redirect URI 未設定
- **解決**：檢查 `NEXTAUTH_URL` 是否與實際網站網址一致，並確認 Google Cloud Console 中的 redirect URI 已正確設定

### 問題 2：環境變數沒有生效
- **原因**：環境變數是在部署後才設定的
- **解決**：觸發一次重新部署（見步驟 4）

### 問題 3：找不到環境變數設定頁面
- **解決**：在 Netlify 網站管理頁面，點擊 **Site configuration** > **Environment variables**

---

## 📝 環境變數總覽

| 變數名稱 | 說明 | 範例值 |
|---------|------|--------|
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | `123456789-abc.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | `GOCSPX-xxxxxxxxxxxxx` |
| `NEXTAUTH_SECRET` | NextAuth 加密密鑰 | `re3W/7mv/YTgaZyduHmsVCg5eEYxwLAJ01o7vTrk9vk=` |
| `NEXTAUTH_URL` | 網站網址 | `https://your-site.netlify.app` |

---

**完成以上步驟後，您的後台登入功能就可以在 Netlify 上正常運作了！🎉**
