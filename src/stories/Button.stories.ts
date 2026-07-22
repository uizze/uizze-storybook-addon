import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';
import { fn } from 'storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    onClick: fn(),
  },
  tags: ['autodocs'],
  parameters: {
    uizze: {
      screenJob: 'Let a reviewer approve or reject a release candidate without losing context.',
      primaryAction: 'Approve release',
      references: [
        {
          label: 'UIZZE release workflow reference',
          url: 'https://uizze.com',
          note: 'Used for hierarchy and state coverage, never copied as an asset.',
        },
      ],
      requiredStates: ['ready', 'loading', 'empty', 'error', 'permission denied'],
      forbiddenPatterns: ['Filler metrics', 'Equal-weight card grid', 'Inert secondary actions'],
      acceptanceCriteria: [
        'Keyboard focus reaches the primary action before secondary metadata.',
        'Loading, empty, error, and permission states preserve the review context.',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
