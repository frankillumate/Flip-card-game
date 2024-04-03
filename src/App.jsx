import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import { Component } from "react";
import Cardlist from "./component/cardlist/cardlist_component";
import SearchBox from "./component/searchbox_component/searchbox_component";

function App() {
  const [searchField, setSearchfield] = useState("");
  const [monster, setMonster] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monster);

  useEffect(() => {
    const newfilteredMonsters = monster.filter((players) => {
      return players.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);
  }, [monster, searchField]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster(users));
  }, []);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchfield(searchFieldString);
  };

  return (
    <>
      <div className="App">
        <h1 className="title">Monster Roledex</h1>

        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monster"
          className="search-box-monster"
        />

        <Cardlist filMonster={filteredMonsters} />
      </div>
    </>
  );
}

export default App;

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monster: [],
//       searchField: "", // the state of the returned lower case from the input value
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monster: users };
//         })
//       );
//   }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monster, searchField } = this.state;
//     const { onSearchChange } = this;

//

//     return (

//     );
//   }
// }

// export default App;
