#!/usr/bin/env python3
from PIL import Image
import sys

def remove_white_background(input_path, output_path, threshold=240):
    """
    將圖片的白色背景轉為透明
    threshold: 白色閾值，值越大越寬鬆（0-255）
    """
    try:
        # 開啟圖片
        img = Image.open(input_path)
        
        # 轉換為 RGBA 模式（如果還沒有）
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # 取得圖片數據
        data = img.getdata()
        
        # 建立新的圖片數據，將白色像素設為透明
        new_data = []
        for item in data:
            # 檢查是否為白色（RGB 值都接近 255）
            # 使用閾值來判斷，允許一些容差
            if item[0] > threshold and item[1] > threshold and item[2] > threshold:
                # 設為透明
                new_data.append((255, 255, 255, 0))
            else:
                # 保持原樣
                new_data.append(item)
        
        # 更新圖片數據
        img.putdata(new_data)
        
        # 儲存為 PNG（支援透明）
        img.save(output_path, 'PNG')
        print(f"成功處理圖片：{output_path}")
        return True
    except Exception as e:
        print(f"錯誤：{e}")
        return False

if __name__ == "__main__":
    input_file = "/Users/cfh00518704/.cursor/projects/Users-cfh00518704-Cursor/assets/image-ccc94307-c7f1-4db3-9df1-28256f705484.png"
    output_file = "/Users/cfh00518704/Cursor/wool-felt-workshop/public/logo-header-transparent.png"
    
    # 嘗試不同的閾值
    for threshold in [240, 230, 220]:
        result = remove_white_background(input_file, output_file, threshold)
        if result:
            break
