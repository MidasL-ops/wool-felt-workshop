import { Work } from '@/types';

export const works: Work[] = [
  {
    id: '1',
    title: '春日花園系列',
    description: '以春天為靈感，創作了一系列充滿生機的花朵作品。',
    images: ['/images/work-spring-1.jpg', '/images/work-spring-2.jpg'],
    story: '春天來臨時，我走進花園，被那些綻放的花朵深深吸引。我想用羊毛氈捕捉這份美好，於是創作了這個系列。每一朵花都代表著不同的心情與故事。',
    category: '擺飾',
    createdAt: '2024-03-15'
  },
  {
    id: '2',
    title: '森林動物家族',
    description: '可愛的森林動物們，每個都有自己獨特的個性。',
    images: ['/images/work-forest-1.jpg'],
    story: '這個系列是我對大自然的一份致敬。森林中的動物們各有特色，我想用羊毛氈展現它們的可愛與純真。',
    category: '擺飾',
    createdAt: '2024-02-20'
  },
  {
    id: '3',
    title: 'IP角色設計 - 第一季',
    description: '原創IP角色的首次亮相，每個角色都有豐富的背景故事。',
    images: ['/images/work-ip-1.jpg', '/images/work-ip-2.jpg'],
    story: '經過長時間的構思與設計，終於完成了第一季的IP角色。這些角色不僅僅是作品，更是我內心世界的投射。',
    category: 'IP系列',
    createdAt: '2024-01-10'
  },
  {
    id: '4',
    title: '療癒小物系列',
    description: '專為日常療癒設計的小物，讓生活多一點溫暖。',
    images: ['/images/work-healing-1.jpg'],
    story: '在忙碌的生活中，我們都需要一些能帶來平靜的小物。這個系列就是為了這個目的而誕生的。',
    category: '吊飾',
    createdAt: '2023-12-05'
  }
];


