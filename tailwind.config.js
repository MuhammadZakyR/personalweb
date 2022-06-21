/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#193948',
        sekunder: '#4265d6',
        hprimary: '#293855',
        hsekunder: '#77acb7',
        teks: '#0f172a',
        teksh: '#64748B',
        hteks: '#CBD5E1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

