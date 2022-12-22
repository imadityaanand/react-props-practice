import { Component } from "react";
import "./App.css"


export default class AppClass extends Component{

  render() {
    return(
      <>
        <h2>Kalvium Gallery</h2>
        <div className='images'>
          {this.props.data.map(element => {
            console.log(element);
            return(<img src={element['img']} id={element.id} />)
          })}
        </div>
      </>
    )
  }
}
