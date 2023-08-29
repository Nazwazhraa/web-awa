import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    // user: JSON.parse(localStorage.getItem("user")) || null,
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          'https://ecommerce.olipiskandar.com/api/v1/auth/login',
          credentials
        );
        const token = response.data.access_token;
        const user = response.data.user;

        // Save token to localStorage
        localStorage.setItem('token', token);
        localStorage.setItem("user", JSON.stringify(user));

        commit('SET_TOKEN', token);
        console.log("token saved:", token);
        alert("Successfully Logged In!")

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async signup({ commit }, credentials) {
      try {
        const response = await axios.post(
          'https://ecommerce.olipiskandar.com/api/v1/auth/signup',
          credentials
        );
        const token = response.data.access_token;
        const user = response.data.user;

        
        localStorage.setItem('token', token);
        localStorage.setItem("user", JSON.stringify(user));

        commit('SET_TOKEN', token);
        console.log("token saved:", token);
        alert("Registered Successfully!")

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem('token');
      localStorage.removeItem('token');
      commit('SET_TOKEN', '');
      commit('SET_TOKEN', null);
      //   Log Token removed
      console.log('Token Removed:', token);
      window.location.href = "/login";
    },
    

    
    
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user){
      state.user = user;
    },
  },
};

export default auth;