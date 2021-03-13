import React from 'react';
import { Board } from "../Board";

import { action } from '@storybook/addon-actions'


export default {
    title: "Board component",
    component: Board,
}

const Template = (args) => 
<Board {...args}/>;

export const FirstStory = Template.bind({});

FirstStory.args = {
    //squares[0] 等で取得し、一連の文字列としている？そのため、△連打！！！！
    squares:"△△△△△△△△△",    onClick: action("Board click check!!!!") ,
}

