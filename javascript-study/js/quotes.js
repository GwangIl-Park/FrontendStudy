const quotes = [
  {
    quote: '나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.',
    author: '랄프 왈도 에머슨',
  },
  {
    quote:
      '항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.',
    author: '스페인 속담',
  },
  {
    quote:
      '인생에서 가장 슬픈 세 가지. 할 수 있었는데, 해야 했는데, 해야만 했는데.',
    author: '루이스 E. 분',
  },
  {
    quote:
      '같은 실수를 두려워하되 새로운 실수를 두려워하지 마라. 실수는 곧 경험이다.',
    author: '도서 ‘어떤 하루’ 中',
  },
  {
    quote: '오늘은 당신의 남은 인생 중, 첫 번째 날이다.',
    author: '영화 ‘아메리칸 뷰티’ 中',
  },
];
const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
