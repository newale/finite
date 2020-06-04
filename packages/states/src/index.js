import {createMachine} from 'xstate';

// Stateless machine definition
// machine.transition(...) is a pure function used by the interpreter.
const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {on: {TOGGLE: 'active'}},
    active: {on: {TOGGLE: 'inactive'}}
  }
});

export default toggleMachine;
