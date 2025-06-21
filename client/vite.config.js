import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  server:{
    port: 3000,
    host:'0.0.0.0',
    proxy:{
      '/api':{
        target: ' http://localhost:5000',
        changeOrigin:true,

      },
    },
  },
  resolve:{
    alias:{
      '@components':'/src/components',
      '@data':'/src/data',
      '@screens':'/src/screens',
      '@slices':'/src/slices',
      '@utils':'/src/utils'


  
    },

  },

});
