/* eslint-disable */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  // darkMode: false, // or 'media' or 'class' -> 用户的操作系统控制深色模式， 'class' -> 手动控制切换深色模式
  theme: {
    colors: {
      gray: colors.gray,
      blue: colors.sky,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald,
      white: colors.white,
      black: colors.black,
      pink: colors.fuchsia,
      primary: colors.indigo,
      secondary: colors.yellow,
      success: colors.green,
      warnning: colors.orange,
      danger: colors.red,
      primaryColor: 'var(--color-primary)',
      secondaryColor: 'var(--color-secondary)',
    },
    fontFamily: {
      sans: ['Grapik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 禁止tāilwindcss 默认属性base, 防治和ant design vue 的样式冲突
  },
}

