import React from 'react'
import './App.css';
import Container from "./Components/Container"
import { DatePicker } from "@syncfusion/ej2-react-calendars"

var login = false;

function App() {

  console.log(login);

  return (
   <div>
     <Container state = {login}/>
     
   </div>
  );
}


export default App;
