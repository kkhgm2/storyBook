import React from 'react';
import { Square } from "../Square";
import { action } from '@storybook/addon-actions'

export default {
    title: "square component",
    component: Square
}

const Template = (args) => <Square {...args}/>;

export const FirstStory = Template.bind({});

FirstStory.args = {
    value: "a",
    onClick: action("square") 
}

