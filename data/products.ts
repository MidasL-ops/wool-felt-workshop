import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: '小鹿莫卡 Moka — 森林系羊毛氈好朋友',
    category: '擺飾',
    price: 380,
    description: `帶著溫柔眼神的小鹿莫卡，是來自森林深處的療癒系小旅人。
柔軟的羊毛氈質感與細緻的斑點花紋，讓牠無論放在書桌、床頭或展示架上，都能悄悄為空間增添一份溫暖與自然氣息。

莫卡的穩定站姿與可愛表情，彷彿正靜靜陪伴著你，
在忙碌的日子裡，帶來一點安心、一點微笑。`,
    images: ['/images/messageImage_1765423562020.jpg'],
    size: '約 5cm',
    customizable: true,
    inStock: true,
    featured: true,
    story: '這隻小兔子是我在一個安靜的午後完成的，當時陽光正好，我想做一個能帶來溫暖的小夥伴。',
    tags: ['可愛', '療癒', '日常']
  },
  {
    id: '2',
    name: '睡睡垂耳狗・肩背小包',
    category: '其他',
    price: 680,
    description: `這隻正在甜甜做夢的垂耳狗，是你的溫柔散步夥伴。
柔軟的羊毛氈質地帶來溫暖觸感，搭配立體的大垂耳與可愛閉眼表情，讓人一眼就心融化。

輕巧容量可放隨身小物，無論外出買咖啡、散步或逛市集，
都能讓牠陪你一起，慢慢享受生活的小確幸。`,
    images: ['/images/sleeping-dog-bag.jpg'],
    size: '約 20cm × 15cm',
    customizable: true,
    inStock: true,
    featured: true,
    story: '這隻正在甜甜做夢的垂耳狗，是你的溫柔散步夥伴。柔軟的羊毛氈質地帶來溫暖觸感，搭配立體的大垂耳與可愛閉眼表情，讓人一眼就心融化。',
    tags: ['包包', '實用', '療癒', '日常']
  },
  {
    id: '3',
    name: '溫暖圍巾',
    category: '圍巾',
    price: 1200,
    originalPrice: 1500,
    description: '柔軟舒適的羊毛氈圍巾，保暖又時尚，是秋冬必備的單品。',
    images: ['/images/scarf-1.jpg', '/images/scarf-2.jpg'],
    size: '長 150cm × 寬 25cm',
    customizable: true,
    inStock: true,
    featured: false,
    tags: ['保暖', '時尚', '實用']
  },
  {
    id: '4',
    name: '圓滾滾小狐狸犬・立體收納包',
    category: '其他',
    price: 450,
    description: `這顆圓滾滾、蓬鬆可愛的臉龐，是一隻活靈活現的小狐狸犬（博美犬）！

柔軟豐厚的羊毛氈毛髮，忠實呈現了牠們的蓬鬆感，搭配一雙炯炯有神的烏黑大眼，瞬間融化人心。

這款精巧的立體收納包，可以保護您的鑰匙、硬幣或耳機等隨身小物。不論是掛在背包上當作療癒小物，或是握在手心感受羊毛的溫暖觸感，牠都能為您的日常帶來一份會心一笑的溫柔陪伴。`,
    images: ['/images/pomeranian-storage-bag.jpg'],
    size: '約 8cm × 8cm',
    customizable: true,
    inStock: true,
    featured: true,
    story: '這顆圓滾滾、蓬鬆可愛的臉龐，是一隻活靈活現的小狐狸犬（博美犬）！柔軟豐厚的羊毛氈毛髮，忠實呈現了牠們的蓬鬆感，搭配一雙炯炯有神的烏黑大眼，瞬間融化人心。',
    tags: ['包包', '收納', '療癒', '實用']
  },
  {
    id: '5',
    name: '小鳥吊飾',
    category: '吊飾',
    price: 350,
    description: '精緻的小鳥吊飾，象徵自由與希望，適合送給重要的人。',
    images: ['/images/bird-1.jpg'],
    size: '約 4cm',
    customizable: true,
    inStock: true,
    featured: false,
    tags: ['自由', '希望', '禮物']
  },
  {
    id: '6',
    name: 'IP系列 - 小狐狸',
    category: 'IP系列',
    price: 480,
    description: '聰明可愛的小狐狸，是IP系列的新成員，充滿智慧與魅力。',
    images: ['/images/fox-ip-1.png'],
    size: '約 7cm',
    customizable: false,
    inStock: true,
    featured: true,
    story: '小狐狸代表著智慧與機智，希望能為你帶來靈感與創意。',
    tags: ['IP', '智慧', '可愛']
  },
  {
    id: '7',
    name: '花朵擺飾組',
    category: '擺飾',
    price: 850,
    description: '一組三朵不同顏色的花朵擺飾，可以自由組合擺放，為空間增添生氣。',
    images: ['/images/flowers-1.jpg'],
    size: '每朵約 6cm',
    customizable: true,
    inStock: true,
    featured: false,
    tags: ['組合', '裝飾', '療癒']
  },
  {
    id: '8',
    name: 'IP系列 - 小企鵝',
    category: 'IP系列',
    price: 460,
    description: '呆萌可愛的小企鵝，是IP系列中最受歡迎的角色之一。',
    images: ['/images/penguin-ip-1.png'],
    size: '約 6cm',
    customizable: false,
    inStock: true,
    featured: true,
    story: '小企鵝雖然看起來有點呆，但其實很溫暖，總是能帶給人歡笑。',
    tags: ['IP', '可愛', '人氣']
  },
  {
    id: '9',
    name: '聖誕許願熊・羊毛氈友伴組',
    category: '擺飾',
    price: 680,
    description: `這對羊毛氈小熊，是為您帶來溫馨祝福的最佳友伴！

右邊的小熊：頭戴迷你聖誕帽、繫著紅色緞帶圍巾，上面印有「Just for you」的字樣，洋溢著濃濃的佳節氛圍，非常適合當作聖誕交換禮物。

左邊的小熊：繫著素雅的米白色蕾絲圍巾，帶著甜美的微笑，顯得沉靜而溫柔。

兩隻小熊皆由羊毛氈細心針刺而成，有著圓潤的身體和立體的五官。無論是將牠們擺在書桌上陪伴您，或是在寒冷冬日中握在手中感受羊毛的溫暖質地，牠們都將是您生活中的一抹療癒微光。`,
    images: ['/images/christmas-bears-set.jpg'],
    size: '每隻約 8cm',
    customizable: true,
    inStock: true,
    featured: true,
    story: '這對羊毛氈小熊，是為您帶來溫馨祝福的最佳友伴！右邊的小熊洋溢著濃濃的佳節氛圍，左邊的小熊顯得沉靜而溫柔。',
    tags: ['聖誕', '禮物', '療癒', '擺飾']
  }
];

