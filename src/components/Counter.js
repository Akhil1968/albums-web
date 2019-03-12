import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from './CounterControl';
import CounterOutput from './CounterOutput';
import {incrementCounterAction, decrementCounterAction} from '../actions/CounterActions';

class Counter extends Component {
    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl 
                    label="+" 
                    clicked={this.props.incrementCounterAction} />
                <CounterControl 
                    label="-" 
                    clicked={this.props.decrementCounterAction}  />
            </div>
        );
    }
}


const mapSTP = state => {
    return {
        ctr: state.ctr.counter
    }
}

const mapDTP =  {
    incrementCounterAction: incrementCounterAction,
    decrementCounterAction: decrementCounterAction
}

export default connect(mapSTP, mapDTP)(Counter);