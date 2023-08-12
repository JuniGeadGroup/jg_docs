// .vitepress/theme/index.js
import { h, watchEffect } from 'vue'
import DefaultTheme from 'vitepress/theme'
import NotFound from "./NotFound.vue"

watchEffect(
  () => {
    document.getElementsByTagName("html").item(0)?.classList.add("dark");
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

