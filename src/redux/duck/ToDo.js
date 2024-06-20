const SET_TASK = 'setTask';
const SET_DESCRIPTION = 'setDescription';
const SET_LISTS = 'setLists';
const DELETE_TODO = 'deleteTodos';
const UPDATE_LIST = 'updateList';

export { SET_TASK, SET_DESCRIPTION, SET_LISTS, DELETE_TODO, UPDATE_LIST};

export const setTask = (data) => {
    return {
        type: SET_TASK,
        payload: data
    }
}

export const setDescription = (data) => {
    return {
        type: SET_DESCRIPTION,
        payload: data
    }
}

export const setLists = () => {
    return {
        type: SET_LISTS,
    }
}

export const deleteTodo = (data) => {
    return {
        type: DELETE_TODO,
        payload: data
    }
}

export const updateList = (data1, data2, data3) => {
    return {
        type: UPDATE_LIST,
        payload: {
            data1,
            data2,
            data3,
        }
    }
}

const loadTasksFromLocalStorage = () => {
    try {
      const storedTasks = localStorage.getItem('tasks');
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error('Error loading tasks from localStorage:', error);
      return [];
    }
  };

const initialState = {
    task: '',
    description: '',
    list: loadTasksFromLocalStorage()
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK:
          return {
            ...state,
            task: action.payload,
          };
        case SET_DESCRIPTION:
          return {
            ...state,
            description: action.payload,
          };
        case SET_LISTS:
          const newList = [...state.list, { task: state.task, description: state.description }];
          localStorage.setItem('tasks', JSON.stringify(newList)); // Save to localStorage
          return {
            ...state,
            list: newList,
            task: '', // Reset task
            description: '', // Reset description
          };
        case UPDATE_LIST:
          const updatedList = state.list.map((tk) => {
            if (tk.task === action.payload.data1) {
              return { task: action.payload.data2, description: action.payload.data3};
            }
            return tk;
          });
          localStorage.setItem('tasks', JSON.stringify(updatedList)); // Save to localStorage
          return {
            ...state,
            list: updatedList,
          };
        case DELETE_TODO:
          const filteredList = state.list.filter((tk) => tk.task !== action.payload);
          localStorage.setItem('tasks', JSON.stringify(filteredList)); // Save to localStorage
          return {
            ...state,
            list: filteredList,
          };
        default:
          return state;
      }
    };
    

    export default reducer;