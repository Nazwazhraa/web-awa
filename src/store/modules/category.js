import axios from "axios";

const category = {
    namespaced: true,
    state: {
        dataCategory: [],
    },
    getters: {
        getCategory: (state) => state.dataCategory,
    },
    actions: {
        async fetchCategory({ commit }) {
            try{
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/all-categories"
                );
                commit("SET_CATEGORIES", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_CATEGORIES(state, category) {
            state.dataCategory = category;
        }
    }
}

export default category;