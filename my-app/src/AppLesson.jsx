/*------------------------------------*/

// /*Lesson*/
// import React from 'react';
// import Header from './components/exampleComponents/myComponents.jsx';
// import {Footer} from './components/exampleComponents/myComponents.jsx';

// class App extends React.Component {
//   titleText = "Hello world!";
//   helpText = 'Help text.';

//   render() {
//     return (
//       <div>
//         {/* <Header title="Header Text" /> */}
//         <header className="header">Header</header>
//         <h1>{this.titleText}</h1>
//         <input placeholder={this.helpText} onClick={this.inputClick} onMouseEnter={this.mouseOver}></input>
//         <Footer />
//       </div>);

//   }

//   inputClick = () => console.log('Clicked!');
//   mouseOver = () => console.log('Mouse over!');
// }

// export default App;

// /*------------------------------------*/

// /*Module CSS Lesson*/
// import React from 'react';
// import {Footer} from './components/exampleComponents/myComponents.jsx';
// import ModuleHeader from "./components/exampleComponents/ModuleHeader.jsx";
// class App extends React.Component {
//   titleText = "Hello world!";
//   helpText = "Help text.";

//   render() {
//     return (
//       <div>
//         <ModuleHeader title="Module Header Text" />
//         <h1>{this.titleText}</h1>
//         <input
//           placeholder={this.helpText}
//           onClick={this.inputClick}
//           onMouseEnter={this.mouseOver}
//         ></input>
//         <Footer />
//       </div>
//     );
//   }

//   inputClick = () => console.log("Clicked!");
//   mouseOver = () => console.log("Mouse over!");
// }

// export default App;

// /*------------------------------------*/
// /*Inline Styles Lesson*/
import React from "react";

function App() {
  return (
    <div>
      <StyledButton>Regular button</StyledButton>
      <StyledButton onClick={() => alert("The main button has been pressed!")}>
        Home button
      </StyledButton>
      <StyledButtonSecond onClick={() => alert("The second button has been pressed!")}>
        Second button
      </StyledButtonSecond>
    </div>
  );
}

export default App;

function StyledButton(props) {
  const buttonStyles = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <button style={buttonStyles} onClick={props.onClick}>
      {props.children}
    </button>
  );

}
/*------------------------------------*/