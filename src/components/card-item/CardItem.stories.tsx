import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import CardItem from './CardItem'

export default {
  title: 'CardItem',
  component: CardItem,
} as ComponentMeta<typeof CardItem>

const Template: ComponentStory<typeof CardItem> = (args) => <CardItem {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Note title 1',
  content: 'Lorem ipsum dolor sit amet',
}
