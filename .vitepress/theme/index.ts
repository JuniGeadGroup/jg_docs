// .vitepress/theme/index.js
import { h, watchEffect } from 'vue'
import DefaultTheme from 'vitepress/theme'
import NotFound from "./NotFound.vue"

watchEffect(
  () => {
    try {
        document.getElementsByTagName("html").item(0)?.classList.add("dark");	
    } catch {}
  }
)
export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'not-found': () => h(NotFound)
    }
    )
  }
}

