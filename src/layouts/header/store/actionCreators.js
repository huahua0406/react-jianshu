import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable'

export const serachFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const serachBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});

export const getList = ()=>{
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            const data = res.data
            dispatch(changeList(data))
        }).catch(err => {
            console.log(err)
        })
    }
};

// 不需要暴露出去的放底部
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});