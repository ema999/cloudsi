const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {name: action.name}
      ]
    case 'FETCH_USERS_REQUEST':
      return [
        ...state,
        {isFetching: true}
      ]
    default:
      return state
  }
}


export default users
