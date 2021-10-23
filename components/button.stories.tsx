import React from 'react';
import { Meta } from '@storybook/react';
import Button from './button';

export default {
  title: 'component/Button',
  component: Button,
} as Meta;

export const Default: React.VFC<{}> = () => <Button></Button>;
