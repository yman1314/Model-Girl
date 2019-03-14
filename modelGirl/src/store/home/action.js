import api from '@/api/home/index.js';

const requestData = (pageCode) => (dispatch, getState) => {
  api.requestData(pageCode).then(data => {
    dispatch({type: 'CHANGE_LIST_DATA', data})
  })
}

const requestBanner = () => (dispatch, getState) => {
  api.requestBanner().then(data => {
    dispatch({type: 'CHANGE_BANNER_DATA', data})
  })
}

export default { requestBanner, requestData };