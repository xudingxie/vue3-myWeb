import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    , AutoImport({
      resolvers: [ // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
        ElementPlusResolver()
      ],
    }),
    Components({
      resolvers: [ // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        })
        , ElementPlusResolver()
      ],

    }),
    Icons({
      autoInstall: true,
    }),
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
        // 给导入的路径最后加上 ;
        additionalData: '@import "@/assets/style/mixin.scss";'
      }
    }
  },
  server: {
    host: '0.0.0.0', // ip
    port: 8080,
    hmr: true,  // 热启动
    open: true // 自动打开浏览器
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})