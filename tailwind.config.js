/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["pretendard", "Arial", "sans-serif"], 
        // sans가 제일 기본 상속 폰트이므로 전체 폰트바꾸려면 sans재지정후 맨앞에 원하는 폰트 넣기
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'blue': '#4C5FD5',
        'lilac': '#dadbf1',
      }
    },
  },
  plugins: [],
}