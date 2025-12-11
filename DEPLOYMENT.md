# 🚀 上架指南：GitHub + Netlify

這份文件將一步步指導您如何將「薇薇V的羊毛氈手作坊」網站上架到 GitHub 和 Netlify。

---

## 📋 前置準備

1. **GitHub 帳號**：如果還沒有，請到 [github.com](https://github.com) 註冊
2. **Netlify 帳號**：如果還沒有，請到 [netlify.com](https://netlify.com) 註冊（可以用 GitHub 帳號直接登入）

---

## 第一步：上傳到 GitHub

### 1.1 在 GitHub 建立新倉庫

1. 登入 GitHub
2. 點擊右上角的 **+** 號，選擇 **New repository**
3. 填寫倉庫資訊：
   - **Repository name**: `wool-felt-workshop`（或您喜歡的名稱）
   - **Description**: `薇薇V的羊毛氈手作坊官方網站`
   - **Visibility**: 選擇 **Public**（公開）或 **Private**（私人）
   - ⚠️ **不要**勾選 "Initialize this repository with a README"（我們已經有代碼了）
4. 點擊 **Create repository**

### 1.2 將代碼推送到 GitHub

在終端機執行以下指令（請將 `YOUR_USERNAME` 替換成您的 GitHub 用戶名）：

```bash
cd /Users/cfh00518704/Cursor/wool-felt-workshop

# 添加遠端倉庫（請替換 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/wool-felt-workshop.git

# 推送代碼到 GitHub
git branch -M main
git push -u origin main
```

**如果遇到認證問題**：
- GitHub 現在需要使用 Personal Access Token 而不是密碼
- 到 GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
- 點擊 "Generate new token"，選擇 `repo` 權限
- 複製 token，在輸入密碼時使用這個 token

---

## 第二步：部署到 Netlify

### 2.1 透過 GitHub 連接部署（推薦）

1. 登入 [Netlify](https://app.netlify.com)
2. 點擊 **Add new site** > **Import an existing project**
3. 選擇 **Deploy with GitHub**
4. 授權 Netlify 存取您的 GitHub 帳號
5. 選擇您的倉庫 `wool-felt-workshop`
6. 設定建置選項：
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - ⚠️ **重要**：點擊 **Show advanced**，然後：
     - 新增環境變數 `NODE_VERSION` = `20`
7. 點擊 **Deploy site**

### 2.2 等待部署完成

- Netlify 會自動開始建置和部署
- 通常需要 2-5 分鐘
- 部署完成後，您會看到一個隨機的網址，例如：`https://random-name-123.netlify.app`

### 2.3 自訂網域名稱（選填）

1. 在 Netlify 網站管理頁面，點擊 **Domain settings**
2. 點擊 **Add custom domain**
3. 輸入您的網域名稱（例如：`woolfelt.com`）
4. 按照指示設定 DNS 記錄

---

## 第三步：後續更新

每次更新網站後，只需要：

```bash
# 1. 提交變更
git add .
git commit -m "更新內容描述"

# 2. 推送到 GitHub
git push

# 3. Netlify 會自動偵測變更並重新部署
```

---

## 🔧 疑難排解

### 建置失敗

如果 Netlify 建置失敗，檢查：
1. **Build command** 是否正確：`npm run build`
2. **Publish directory** 是否正確：`.next`
3. **Node 版本**：確保設定 `NODE_VERSION = 20`

### 網站顯示 404

- 確認 `netlify.toml` 檔案已存在
- 檢查 Next.js 路由是否正確

### 樣式沒有載入

- 確認 Tailwind CSS 配置正確
- 檢查 `globals.css` 是否正確引入

---

## 📞 需要幫助？

如果遇到任何問題，可以：
1. 檢查 Netlify 的建置日誌（Deploy log）
2. 查看 GitHub 的 Issues
3. 參考 [Netlify 文件](https://docs.netlify.com/)

---

**祝您部署順利！🎉**

