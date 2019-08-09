export const setUser = (user) => {
  window.localStorage.setItem('user', JSON.stringify(user))
}
export const getUser = () => {
  return JSON.parse(window.sessionStorage.getItem('user'))
}

export const removeUser = () => {
  return window.sessionStorage.removeItem('user')
}
