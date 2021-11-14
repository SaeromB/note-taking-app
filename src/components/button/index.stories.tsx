import React from 'react'

import { Meta } from '@storybook/react'

import Button from './index'

export default {
  component: Button,
  title: 'Components/Button',
} as Meta

export const Secondary: React.VFC<{}> = () => <Button />
