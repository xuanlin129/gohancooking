/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '../styles/settings.scss'

// Composables
import { createVuetify } from 'vuetify'

// Components
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { VStepper } from 'vuetify/labs/VStepper'
import zhHant from '@/locale/zh-Hant.js'
import { Icon } from '@iconify/vue'

import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VDataTableServer,
    VStepper,
    Swiper,
    SwiperSlide,
    Icon
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6'
        }
      }
    }
  },
  locale: {
    locale: 'zhHant',
    messages: { zhHant }
  },
  display: {
    mobileBreakpoint: 'md'
  }
})
