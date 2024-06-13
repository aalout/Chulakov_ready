import { defineConfig } from 'vite';
import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';
import handlebars from 'vite-plugin-handlebars'; 

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: 'src/partials', 
    }),
  ],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%'))
    }
  },
  build: {
    cssMinify: 'lightningcss'
  }
});
