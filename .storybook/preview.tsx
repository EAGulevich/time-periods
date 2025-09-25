import type { Preview } from '@storybook/react-webpack5';
import { GlobalStyle } from '../src/styles/global';

const preview: Preview = {
  decorators: Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
