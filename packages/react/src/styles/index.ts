import {
  colors,
  fontSizes,
  fonts,
  fontWeights,
  lineHeights,
  space,
  radii,
} from '@el-ui/tokens/src'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fonts,
    fontWeights,
    lineHeights,
    space,
    radii,
  },
})
