const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {name: action.name}
      ]
    default:
      return state
  }
}


export default users