import React, { Component } from "react";

class ErrorScreen extends Component { 
  render() {
    return (
        <div
            style={{
                fontFamily: 'Candara',
                fontSize: 20,
                color: '#3d528f',
                marginTop: '120px',
                display: 'inline-block',
                border: '1px dashed #3d528f',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '20px',
                paddingRight: '20px',
                background: 'white'
            }}>
            <img
                src="../images/connection-error.png"
                style={{
                    width: 440,
                    height: 205,
                    paddingLeft: '30px'
                }}
            />
            <div>
                Oops... Something went wrong.
            </div>
            <div
                style={{
                    float : 'left'
                }}
            >
                Please check your connection to the server and
            </div>
            <button
                onClick={() => { this.props.refresh() }}
                style={{
                    float : 'left',
                    paddingLeft : '6px',
                    background : 'none',
                    border : 'none',
                    fontFamily: 'Candara',
                    fontWeight: 'bold',
                    fontSize: 22,
                    textDecoration : 'underline',
                    color : '#9a64b4',
                    cursor : 'pointer'
                }}
            >
                try again
            </button>
        </div>
    )
  }
}

export default ErrorScreen;
