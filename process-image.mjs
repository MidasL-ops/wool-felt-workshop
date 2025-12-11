import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

async function removeWhiteBackground() {
  try {
    const inputPath = './public/logo-header.png';
    const outputPath = './public/logo-header-transparent.png';
    
    // 讀取圖片
    const image = sharp(inputPath);
    const { data, info } = await image
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    // 處理每個像素，將白色轉為透明
    const threshold = 240; // 白色閾值（0-255）
    const newData = Buffer.alloc(data.length);
    
    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = info.channels === 4 ? data[i + 3] : 255;
      
      // 檢查是否為白色（RGB 值都接近 255）
      if (r > threshold && g > threshold && b > threshold) {
        // 設為透明
        newData[i] = r;
        newData[i + 1] = g;
        newData[i + 2] = b;
        newData[i + 3] = 0; // 透明
      } else {
        // 保持原樣
        newData[i] = r;
        newData[i + 1] = g;
        newData[i + 2] = b;
        newData[i + 3] = a;
      }
    }
    
    // 儲存處理後的圖片
    await sharp(newData, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile(outputPath);
    
    console.log('✅ 成功將白色背景轉為透明！');
    console.log(`輸出檔案：${outputPath}`);
  } catch (error) {
    console.error('❌ 處理圖片時發生錯誤：', error);
  }
}

removeWhiteBackground();
