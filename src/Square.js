import React from "react";

export function Square(props) {
    console.log(props)

    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    )
  }