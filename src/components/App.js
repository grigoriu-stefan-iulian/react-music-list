import React from 'react'
import Header from './components/Header'

class App extends React.Component {
    state = {
        searchText: ''
    }
    onTextChange(event) {


    }
    onSearchClick() {

    }
    render() {
        return (
            <div className="App">
                <Header />
            </div>
        )
    }

}

//Tipuri de inputuri
//1. Input necontrolat in care valoarea nu e setata din state
//2. Input controlat care isi ia valoarea din state


// 
export default App