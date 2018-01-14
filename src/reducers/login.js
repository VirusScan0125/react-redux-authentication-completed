export function loginHasErrored(state = false, action) {
  switch (action.type) {
    case 'LOGIN_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function loginIsLoading(state = false, action) {
  switch (action.type) {
    case 'LOGIN_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function user(state = [], action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.user;
    default:
      return state;
  }
}
