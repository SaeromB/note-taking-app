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
  title: '불고기 만드는 법',
  content: '소고기에 양념을 재 놓는다. 양파도 넣는다. 배도 넣는다.',
}
