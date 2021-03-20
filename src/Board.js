import React from "react";
import {Square} from "./Square"

export class Board extends React.Component {
    renderSquare(i) {
      return (
          <Square 
            value={this.props.squares[i]} 
            onClick={() => this.props.onClick(i)}
            />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
          </div>
          <div className="board-row">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
          </div>
          <div className="board-row">
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
          </div>
        </div>
      );
    }
  }