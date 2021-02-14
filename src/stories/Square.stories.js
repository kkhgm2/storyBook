import React from 'react';
import { Square } from "../index";

export default {
    title: "square component",
    component: Square
}

const Template = (args) => <Square {...args}/>;

export const FirstStory = Template.bind({});

FirstStory.args = {
    value: "a"
}

