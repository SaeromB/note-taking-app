import React from 'react'

import { Meta } from '@storybook/react'

import CreateNote from './index'

export default {
  component: CreateNote,
  title: 'Components/CreateNote',
} as Meta

export const Primary: React.VFC<{}> = () => <CreateNote />
