import axios from "axios";
import { GET_SEARCH_RESULT } from "./actions.type";
import { SET_SEARCH_RESULT } from "./mutations.type";

const state = {
    searchResultData: [],
    notFoundData: null,
};

const getters = {
    getSearchResultData(state) {
        return state.searchResultData;
    },
    getNotFoundData(state) {
        return state.notFoundData
    }
}

const actions = {
    [GET_SEARCH_RESULT](context, credentials) {
        axios.get("data.json").then(_ => {
            context.commit(SET_SEARCH_RESULT, { data: _.data.data, credentials })
        })
    }
};

const mutations = {
    [SET_SEARCH_RESULT](state, item) {
        localStorage.setItem('search-query', item.credentials)
        const filterData = item.data.filter((y) => y[0].toLowerCase().includes(item.credentials.toLowerCase()))
        state.notFoundData = filterData.length > 0 ? false : true
        state.searchResultData = filterData;
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};