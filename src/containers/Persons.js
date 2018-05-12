import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionTypes from "../reducers/actions";

class Persons extends Component {
  
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddedPerson} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletedPerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedPerson: () => dispatch({ type: actionTypes.ADD }),
    onDeletedPerson: (id) => dispatch({ type: actionTypes.DELETE, personId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);

