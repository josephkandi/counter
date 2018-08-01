import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../Actions/CounterActionTypes';


class Counter extends Component {
  handleIncrement = () => {
    this.props.increment();
  }

  handleDecrement = () => {
    this.props.decrement();
  }

  render() {
    return (
      <div style={{ width: '400px' }} className="mx-auto rounded border p-5">
        <h4 className="text-center">
          Counter Demo
        </h4>
        <div className="text-center">
          <button onClick={this.handleIncrement} type="button" className="btn btn-light btn mr-5">
            +
          </button>
          <h1 className="d-inline">
            {this.props.count}
          </h1>
          <button onClick={this.handleDecrement} type="button" className="btn btn-light btn ml-5">
            -
          </button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = ({ count }) => ({ count });

function mapDispatchToProps(dispatch) {
  return {
    increment: () => {
      dispatch(actions.increment());
    },
    decrement: () => {
      dispatch(actions.decrement());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
