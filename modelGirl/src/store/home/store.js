const reducer = (state = {
  list: [],
  banner: [],
  pageCode: 3
}, action) => {
  const {type, data} =action;
  switch (type) {
    case 'CHANGE_BANNER_DATA':
    return {
      list: state.list,
      banner: data
    }
    case 'CHANGE_LIST_DATA':
    return {
      list: data,
      banner: state.banner
    }
    default:
    return state
  }
}
export default reducer