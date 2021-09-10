import React, { Component } from "react";

class ErrorScreen extends Component { 
  render() {
    return (
        <div
            style={{
                fontFamily: 'Candara',
                fontWeight: 'bold',
                fontSize: 22,
                marginTop: '120px',
                display: 'inline-block',
                border: '2px dashed black',
                paddingTop: '20px',
                paddingBottom: '20px',
                paddingLeft: '20px',
                paddingRight: '20px',
            }}>
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
                    color : 'red',
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
