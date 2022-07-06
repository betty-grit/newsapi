import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    globalNews: [],
    techNews: [],
    businessNews: [],
    healthNews: [],
    headlineNews: [],
  },
  getters: {
    getGlobalNews: (state) => state.globalNews,
    getTechNews: (state) => state.techNews,
    getBusinessNews: (state) => state.businessNews,
    getHealthNews: (state) => state.healthNews,
    getHeadlineNews: (state) => state.headlineNews,
  },
  mutations: {
    SET_GLOBALNEWS(state, payload) {
      state.globalNews = payload;
    },
    SET_TECHNEWS(state, payload) {
      state.techNews = payload;
    },
    SET_BUSINESSNEWS(state, payload) {
      state.businessNews = payload;
    },
    SET_HEALTHNEWS(state, payload) {
      state.healthNews = payload;
    },
    SET_HEADLINENEWS(state, payload) {
      state.headlineNews = payload;
    },
  },
  actions: {
    async getAllGlobalNews({ commit }) {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=global&from=2022-07-06&apiKey=28509d2d8bb942568a81dd838fca36ad"
        );
        commit("SET_GLOBALNEWS", response.data.articles);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllTechNews({ commit }) {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?category=technology&apiKey=28509d2d8bb942568a81dd838fca36ad"
        );
        commit("SET_TECHNEWS", response.data.articles);
        console.log(response);
        return response;
      } catch (error) {
        consol.log(error);
      }
    },
    async getAllBusinessNews({ commit }) {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?category=business&apiKey=28509d2d8bb942568a81dd838fca36ad"
        );
        commit("SET_BUSINESSNEWS", response.data.articles);
        console.log(response);
        return response;
      } catch (error) {
        consol.log(error);
      }
    },
    async getAllHealthNews({ commit }) {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?category=health&apiKey=28509d2d8bb942568a81dd838fca36ad"
        );
        commit("SET_HEALTHNEWS", response.data.articles);
        console.log(response);
        return response;
      } catch (error) {
        consol.log(error);
      }
    },
    async getAllHeadlineNews({ commit }) {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=28509d2d8bb942568a81dd838fca36ad"
        );
        commit("SET_HEADLINENEWS", response.data.articles);
        console.log(response);
        return response;
      } catch (error) {
        consol.log(error);
      }
    },
  },
});
export default store;
