import React, { Component } from "react";


class Image extends Component {

    render(){
        return (
          
            <div className="container">
                <img src={this.props.url}/>
                <h2>Error 409</h2>
                <p>Conflict</p>
            </div>
        )
    }

}

export default Image;