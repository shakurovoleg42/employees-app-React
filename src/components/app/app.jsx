import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Walter W.', salary: 500, increase: false, id: 1},
                {name: 'Soul G.', salary: 800, increase: false, id: 2},
                {name: 'Skyler W.', salary: 1500, increase: false, id: 3},
                {name: 'Gustavo F.', salary: 2000, increase: false, id: 4},
                {name: 'Oleg S.', salary: 3500, increase: false, id: 5}
            ]  
        }
    }

    deletItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        return(
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>  
    
                <EmployersList
                    data={this.state.data}
                    onDelete={this.deletItem}/>  
                <EmployersAddForm/>     
            </div>
        );
    }
}

export default App;