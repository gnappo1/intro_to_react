import logo from './logo.svg';
import './App.css';
import Greeting from "./Greeting";

function App() {
  const people = [{name: "Matteo", topic: "React"}, {name: "Laura", topic: "Redux"}, {name: "Cernan", topic: "GatsbyJS"}]
  const peopleLis = people.map((personObj, i) => <li key={i}>{personObj.name}</li>)
  const peopleComponents = people.map((personObj, i) => <li key={i}><Greeting {...personObj} /></li>)
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Greeting {...people} /> */}
          {peopleComponents}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div>This breaks everything!!!</div>
    </>
  );
}

export {App};
