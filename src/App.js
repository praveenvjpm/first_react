import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  render() {
    const { monsters, searchField: x } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(x.toLowerCase())
    );

    return (
      <div className="App">
        <h1>స్వాగతం</h1> 
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}
git;

export default App;
