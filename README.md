# note-taking-app

설치

```
yarn install
yarn run dev
yarn run storybook
```

노드 버전 변환하기

nvm 설치: https://github.com/nvm-sh/nvm#install--update-script

```
nvm install 16.13.2
nvm use
```

## 템플릿

Component template
// Component

```
import React, { FC } from 'react'

interface ComponentNameProps {}

const ComponentName: FC<ComponentNameProps> = () => {
return <div></div>
}

export default ComponentName
```

// Story

```
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
