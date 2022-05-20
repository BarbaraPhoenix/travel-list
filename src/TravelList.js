import { Component } from 'react';
import baggage from './baggage.jpg';

export class TravelList extends Component {
    state = {
    userInput: '',
    travelList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input) {
        if (input === '') {
            alert ("Please enter an item")
        } else {
        let listArray = this.state.travelList;
        listArray.push(input);
        this.setState({travelList: listArray, userInput: ''})
    }
    }

    deleteItem() {
        let listArray = this.state.travelList;
        listArray = [];
        this.setState({travelList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }
    
    onFormSubmit(e) {
    e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input type="text"
                 placeholder="Things to Take On a Trip"
                 onChange={(e) => {this.onChangeEvent(e.target.value)}}
                 value={this.state.userInput}/>
            </div>
            <div className='container'>
            <button onClick={() => this.addItem(this.state.userInput)} className='btn add'>Add</button>
            </div>
            <ul>
                {this.state.travelList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={baggage} width="25px" alt="bagg"/>
                        {item}</li>
                ))}
            </ul>
            <div className='container'>
            <button onClick={() => this.deleteItem()} className='btn delete'>Delete</button>
            </div>
            </form>
            </div>
        )
    }

}