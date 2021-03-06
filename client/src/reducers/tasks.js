import ACTION from '../constants';

export default (state=[], action) => {
  switch(action.type) {
    case ACTION.GET_ALL_TASKS:
      return [ ...action.payload.tasks ];

    case ACTION.ADD_TASK:
      return [...state, action.payload.newTask];

    case ACTION.SET_CURRENT_TASK: 
      if (action.payload.success) {
        return [...action.tasks];
      }
      return state;

    case ACTION.ADD_STATS:
      if (action.payload[0].success) {
        return [...state.slice(0, -1), action.payload[0].currentTask ];
      }
      return state;

    case ACTION.LOGOUT:
      return [];

    default:
      return state;
  }
}