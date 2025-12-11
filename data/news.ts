import { News } from '@/types';

export const news: News[] = [
  {
    id: '1',
    title: '🎉 新系列上市：IP角色第二季即將登場！',
    content: '經過數月的精心設計與製作，IP角色第二季終於要和大家見面了！這次我們加入了更多有趣的角色，每個角色都有獨特的故事背景。敬請期待！',
    excerpt: '經過數月的精心設計與製作，IP角色第二季終於要和大家見面了！',
    image: '/images/news-ip-season2.jpg',
    createdAt: '2024-03-20',
    featured: true
  },
  {
    id: '2',
    title: '📚 羊毛氈基礎課程開放報名',
    content: '想要學習羊毛氈手作嗎？我們即將開設基礎課程，從最基礎的技巧開始，一步步帶你進入羊毛氈的世界。課程包含材料包，完成後可以帶回自己的作品。名額有限，歡迎報名！',
    excerpt: '想要學習羊毛氈手作嗎？我們即將開設基礎課程，從最基礎的技巧開始。',
    image: '/images/news-course.jpg',
    createdAt: '2024-03-15',
    featured: true
  },
  {
    id: '3',
    title: '🌸 春日限定：訂製服務優惠',
    content: '即日起至四月底，訂製服務享有九折優惠！想要一個專屬於你的羊毛氈作品嗎？現在正是最好的時機。',
    excerpt: '即日起至四月底，訂製服務享有九折優惠！',
    createdAt: '2024-03-10',
    featured: false
  },
  {
    id: '4',
    title: '✨ 作品故事分享：小兔子的誕生',
    content: '今天想和大家分享「小兔子吊飾」的創作故事。這隻小兔子是我在一個安靜的午後完成的，當時陽光正好，我想做一個能帶來溫暖的小夥伴...',
    excerpt: '今天想和大家分享「小兔子吊飾」的創作故事。',
    image: '/images/news-story.jpg',
    createdAt: '2024-03-05',
    featured: false
  }
];
