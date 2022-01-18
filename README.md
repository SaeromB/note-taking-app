# Note taking app

## Node.js runtine environment

v16.13.2

```
nvm install
nvm use
```

## Installation & running dev server

```
npm install --global yarn

yarn install

yarn run dev
```

## Component template

```
// Component
import React, { FC } from 'react'

interface ComponentNameProps {}

const ComponentName: FC<ComponentNameProps> = () => {
  return <div></div>
}

export default ComponentName

```

```
// Story
import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import ComponentName from './ComponentName'

export default {
  title: 'ComponentName',
  component: ComponentName,
} as ComponentMeta<typeof ComponentName>

const Template: ComponentStory<typeof ComponentName> = (args) => <ComponentName {...args} />

export const Default = Template.bind({})
Default.args = {}
```
