import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import SecondaryButton from './SecondaryButton'

export default {
  title: 'SecondaryButton',
  component: SecondaryButton,
} as ComponentMeta<typeof SecondaryButton>

const Template: ComponentStory<typeof SecondaryButton> = (args) => <SecondaryButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Secondary Button',
}
