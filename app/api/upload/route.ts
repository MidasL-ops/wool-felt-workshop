import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

const ALLOWED_EMAILS = ['lesterskimo@gmail.com', 'eaea128@gmail.com'];

export async function POST(request: NextRequest) {
  try {
    // 檢查認證
    const session = await getServerSession(authOptions);
    if (!session?.user?.email || !ALLOWED_EMAILS.includes(session.user.email)) {
      return NextResponse.json({ error: '未授權' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: '沒有上傳檔案' }, { status: 400 });
    }

    // 檢查檔案類型
    if (!file.type || !file.type.startsWith('image/')) {
      return NextResponse.json({ error: '只允許上傳圖片檔案' }, { status: 400 });
    }

    // 檢查檔案大小（限制 10MB）
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: '檔案大小不能超過 10MB' }, { status: 400 });
    }

    // 生成唯一檔名
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 15);
    const originalName = file.name || 'image';
    const ext = path.extname(originalName) || '.jpg';
    const filename = `product-${timestamp}-${randomStr}${ext}`;

    // 確保目錄存在
    const uploadDir = path.join(process.cwd(), 'public', 'images');
    try {
      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
      }
    } catch (dirError) {
      console.error('建立目錄錯誤:', dirError);
      return NextResponse.json(
        { error: '無法建立上傳目錄' },
        { status: 500 }
      );
    }

    // 讀取檔案並寫入
    try {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filepath = path.join(uploadDir, filename);

      await writeFile(filepath, buffer);

      // 返回圖片路徑
      const imagePath = `/images/${filename}`;
      return NextResponse.json({ 
        success: true, 
        path: imagePath,
        filename: filename 
      });
    } catch (writeError) {
      console.error('寫入檔案錯誤:', writeError);
      return NextResponse.json(
        { error: '檔案寫入失敗' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('上傳錯誤:', error);
    const errorMessage = error instanceof Error ? error.message : '未知錯誤';
    return NextResponse.json(
      { error: `上傳失敗: ${errorMessage}` },
      { status: 500 }
    );
  }
}
