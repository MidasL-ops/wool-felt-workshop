import sharp from 'sharp';

async function removeWhiteBackground() {
  try {
    const inputPath = './public/hero-sheep.png';
    const outputPath = './public/hero-sheep-transparent.png';
    
    const image = sharp(inputPath);
    const { data, info } = await image
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    const threshold = 250;
    const newData = Buffer.alloc(data.length);
    
    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = info.channels === 4 ? data[i + 3] : 255;
      
      if (r > threshold && g > threshold && b > threshold) {
        newData[i] = r;
        newData[i + 1] = g;
        newData[i + 2] = b;
        newData[i + 3] = 0;
      } else {
        newData[i] = r;
        newData[i + 1] = g;
        newData[i + 2] = b;
        newData[i + 3] = a;
      }
    }
    
    await sharp(newData, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile(outputPath);
    
    console.log('✅ 成功將首頁 Hero 圖片白色背景轉為透明！');
  } catch (error) {
    console.error('❌ 錯誤：', error);
  }
}

removeWhiteBackground();
