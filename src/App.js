import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";

function App() {
  // Render Element in reactjs
  // const name = "Sơn";
  // const age = 20;
  // const isMale = true;
  // const student = {
  //   name: "DVS - MMI",
  // };
  // const colorList = ["red", "blue", "green"];

  return (
    <div className="App">
      {/* Render Element in reactjs */}
      <div className="renderInReactJs">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Son Doan</p>
          <p>
            String - Number: Đoàn Văn {name} - {age}
          </p>

          <p>True - False{isMale ? "Male" : "Female"}</p>
          {isMale ? <p>Male</p> : <p>Female</p>}

          {isMale && <p>Male</p>}
          {!isMale && <p>FeMale</p>}

          {isMale && (
            <div>
              <p>Male 1</p>
              <p>Male 2</p>
              <p>Male 3</p>
            </div>
          )}

          {isMale && (
            <React.Fragment>
              <p>Male 4</p>
              <p>Male 5</p>
              <p>Male 6</p>
            </React.Fragment>
          )}

          {isMale && (
            <>
              <p>Male 7</p>
              <p>Male 8</p>
              <p>Male 9</p>
            </>
          )}

          <p>Object: {student.name}</p>

          <ul>
            {colorList.map((color) => (
              <li key={color} style={{ color }}>
                {color}
              </li>
            ))}
          </ul>
        </header> */}
      </div>

      {/* <TodoFeature /> */}
      <AlbumFeature />
    </div>
  );
}

export default App;
