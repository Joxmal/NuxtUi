import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'red-violet': {
            '50': '#fff4fe',
            '100': '#ffe7fd',
            '200': '#ffcefc',
            '300': '#ffa8f6',
            '400': '#fe74ed',
            '500': '#f63fe0',
            '600': '#da1fbf',
            '700': '#ba179f',
            '800': '#94147d',
            '900': '#791666',
            '950': '#510141',
        },        
      }
    }
  },
  content: [
    'docs/content/**/*.md'
  ]
}
