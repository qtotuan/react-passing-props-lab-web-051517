import React from 'react';
import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    };
  }

  componentWillMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));

    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
    .then(response => response.json())
    .then(filters => this.setState({
        filters: filters
    }));
  }

  handleFilterChange = event => {
    this.setState({ currentFilter: event.target.value });
  }

  render(){
    return(
      <FruitBasket
        handleFilterChange={this.handleFilterChange}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        onChangeFilter={this.onChangeFilter}
        fruit={this.state.fruit}
      />
    )
  }
}

export default App;
