import React from 'react';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    isStart: false,
    copyGoods: [...goodsFromServer],
    option: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  start = () => {
    this.setState(
      { isStart: true }
    );
  }

  sort = () => {
    this.setState(state => (
      { copyGoods: [...state.copyGoods].sort((a, b) => a.length - b.length) }
    ));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      copyGoods: [...state.copyGoods]
        .sort((a, b) => a.localeCompare(b)),
    }));
  }

  reverse = () => {
    this.setState(state => ({ copyGoods: [...state.copyGoods].reverse() }));
  };

  reset = () => {
    this.setState(state => ({ copyGoods: [...goodsFromServer] }));
  };

  opTion = () => this.state.option.map(i => <option value={i}>{i}</option>)

  filter = (event) => {
    const value = +event.target.value;

    this.setState({
      copyGoods: [...goodsFromServer]
        .filter(item => item.length >= value),
    });
  };

  render() {
    const { copyGoods } = this.state;

    return (
      <div className="App">
        <h1 className="h1">Goods</h1>
        <div className="buttons">
          {this.state.isStart ? (
            <section>
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sort}
              >
                Sort
              </button>
              <button
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort-abc
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <select
                onChange={this.filter}
                className="select"
              >
                {this.opTion()}
              </select>
              <ul className="ul">
                {copyGoods.map(item => <li className="li">{item}</li>)}
              </ul>
            </section>
          )
            : (
              <button
                className="start"
                type="button"
                onClick={this.start}
              >
                Start
              </button>
            )}
        </div>
      </div>
    );
  }
}

export default App;