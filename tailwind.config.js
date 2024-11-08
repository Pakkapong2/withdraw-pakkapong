// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'], // ตั้งชื่อฟอนต์ใหม่ว่า prompt
      },
    },
  },
  plugins: [],
}
