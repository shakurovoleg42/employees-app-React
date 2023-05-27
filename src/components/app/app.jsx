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
                {name: 'Walter W.', salary: 500, increase: false, like: false, id: 1},
                {name: 'Soul G.', salary: 800, increase: false, like: false, id: 2},
                {name: 'Skyler W.', salary: 1500, increase: false, like: false, id: 3},
                {name: 'Gustavo F.', salary: 2000, increase: false, like: false, id: 4},
                {name: 'Oleg S.', salary: 3500, increase: false, like: false, id: 5}
            ],
            term: '',
            filtered: ''
        }
        this.maxId = 25;
    }

    deletItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return{...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length  === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterEmp = (items, filtered) => {
        if (filtered.length === 0) {
            return items
        }
    }

    render() {
        const {data, term} = this.state;
        const employers = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo employers={employers} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter/>
                </div>  
    
                <EmployersList
                    data={visibleData}
                    onDelete={this.deletItem}
                    onToggleProp={this.onToggleProp}/>  
                <EmployersAddForm onAdd={this.addItem}/>     
            </div>
        );
    }
}

export default App;