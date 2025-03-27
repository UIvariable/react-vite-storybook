import type { Preview } from '@storybook/react'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

const preview: Preview = {
  parameters: {
    controls: {
      actions: {
        argTypesRegex: "^on[A-Z].*"},
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  },
};

export default preview;