import * as actionTypes from "./actions";

const initialState = {
  persons: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      const newPerson = {
        id: Math.random(),
        name: "Tomcat",
        age: Math.floor(Math.random() * 40)
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };
    case actionTypes.DELETE:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.personId)
      };
  }
  return state;
};

export default Reducer;
