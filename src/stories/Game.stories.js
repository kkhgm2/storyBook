import React from 'react';
// import { Game } from "../index";
import { Game } from "../Game";
import { action } from '@storybook/addon-actions'


export default {
    title: "Game component",
    component: Game,
}

const Template = (args) => 
<Game {...args}/>;

export const FirstStory = Template.bind({});

FirstStory.args = {
    "state" : {
        "history": [{
          "squares": Array(9).fill("△")
        }],
        "stepNumber": 0,
        "xIsNext":false
      },
      test:123
}