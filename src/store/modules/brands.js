import axios from "axios";

const brands = {
    namespaced: true,
    state: {
        dataBrands: [],
    },
    getters: {
        getBrands: (state) => state.dataBrands,
    },
    actions: {
        async fetchBrands({ commit }) {
            try{
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/all-brands"
                );
                commit("SET_BRANDS", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_BRANDS(state, brands) {
            state.dataBrands = brands;
        }
    }
}

export default brands;