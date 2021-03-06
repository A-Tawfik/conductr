import React, { Component } from 'react';
import './Block.css';
import "./block-img-ok-1.jpg";

class Block extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      pStyle: {fontSize: "16px"}
    }
  }

  componentDidMount(){
    this.setState({id: this.props.id})
  }

  componentDidUpdate(){
    if (this.props.selected.toLowerCase() === this.state.id.toLowerCase()) {
      this.props.actions.fontBigger ? this.fontChange("bigger") : null
      this.props.actions.fontSmaller ? this.fontChange("smaller") : null
      }
  }

  fontChange(direction) {

    var pStyle = this.state.pStyle
    var font = parseInt(pStyle.fontSize)

    if (direction === "bigger") {
      font = font + 4
    } else {
      font = font - 4
    }
    pStyle.fontSize = font + "px"
    this.setState({pStyle})
    this.props.resetActions()

  }

  render() {
    let className = "Block"
    if (this.state.id.toUpperCase() === this.props.selected.toUpperCase()) {className = className +" selected"}

    return (
      <div className={className}>
        {
          this.props.type === "image"
          ?
          <img src='https://s-media-cache-ak0.pinimg.com/736x/3f/03/2a/3f032ae4a4c865b458e207c0f154098a.jpg' alt="image" className="b-img img-fluid"/>
          :
          <div>
            <h1 className="b-title">Title</h1>
            <p className="b-paragraph" style={this.state.pStyle}>{this.props.value}</p>
          </div>
        }
      </div>
    );
  }
}

export default Block;
