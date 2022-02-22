import React, { useEffect } from 'react';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApt';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
// import "./App.css";
import TodoFeature from './features/Todo';

function App() {
  // Render Element in reactjs
  // const name = "Sơn";
  // const age = 20;
  // const isMale = true;
  // const student = {
  //   name: "DVS - MMI",
  // };
  // const colorList = ["red", "blue", "green"];

  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };

      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);

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
      Header
      <p>
        <Link to="todos">Todos</Link>
      </p>
      <p>
        <Link to="albums">Albums</Link>
      </p>
      <p>
        <NavLink to="todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="albums" activeClassName="active">
          Albums
        </NavLink>
      </p>
      <Switch>
        {/* phải nằm trong switch và có thể dùng thêm exact */}
        <Redirect from="/home/exact" to="/count" exact />
        <Redirect from="/home" to="/color" />
        <Redirect from="/post-list/:postId" to="/post/:postId" />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/color" component={ColorBox} />
        <Route path="/count" component={Counter} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
