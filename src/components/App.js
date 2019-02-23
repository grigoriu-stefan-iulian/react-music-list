import React from 'react'
import Header from './Header'


class App extends React.Component {
    state = {
        searchText: ''
    }
    onTextChange = (event) => {
        this.setState({ searchText: event.target.value })
    }

    onSearchClick = () => {
        alert(this.state.searchText)
    }

    render() {
        return (
            <div className="App">
                <Header
                    state={this.state}
                    onTextChange={this.onTextChange}
                    onSearchClick={this.onSearchClick}

                />
            </div>
        )
    }

}

//Tipuri de inputuri
//1. Input necontrolat in care valoarea nu e setata din state
//2. Input controlat care isi ia valoarea din state


// 
export default App