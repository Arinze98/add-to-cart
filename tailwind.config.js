/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        btnw: '179px',
        imgw: '1500px',
        imgtxtw: '647px',
        benwth: '432px',
        comwth: '1024px',
        comwth1: '293px',
        smcom1: '176px',
        smcom2: '230px',
        comwth2: '390px',
        misswth: '767px',
        memwth: '1280px',
        membox: '302px',
        ronimg:  '152px',
        formwth: '512px'
      },
      colors: {
        primary: '#ffd2a4',
        Black: '#161722',
        White: '#ffffff',
        Light_orange: '#FFF5EB',
        Grey: '#F5F2F0',
      },
      height: {
        btnh: '56px',
        imgh: '419px',
        comhig1: '384px',
        smcom1: '192px',
        smcom2: '300px',
        comhig2: '512px',
        misshig: '283px',
        benhig: '320px',
        memboxh: '366px',
        ronimg:  '152px',
      },
      borderRadius: {
        ronrad: '206px',
      },
      fontSize: {
        xxs: '10px',
      }
    },
  },
  plugins: [],
}

