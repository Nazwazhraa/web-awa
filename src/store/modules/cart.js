import axios from "axios";

const cart = {
    namespaced: true,
    state: {
        cart: [],
        address: []
    },
    getters: {
        getCart: (state) => state.cart,
        getAddress: (state) => state.address,
    },
    actions: {
        async fetchCart({ commit }) {
            try {
                // const token = localStorage.getItem('token');
                const dataCart = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/carts", {
                    "temp_user_id": null
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                },

                );
            
                console.log(dataCart.data.cart_items.data)
                commit("SET_CART", dataCart.data.cart_items.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        async removeFromCart({ commit, dispatch }, cartId) {
            try {
                const response = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/carts/destroy", 
                    {
                    cart_id: cartId,
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                },

                );
            
                console.log(response.data.message);
                dispatch("fetchCart");
            } catch (error) {
                alert("error removing item from cart");
                console.log(error);
            }
        },
        
        async changeQuantity({ commit, dispatch },{cartId, typeQty} ) {
            try {
                const response = await axios.post(
                    `https://ecommerce.olipiskandar.com/api/v1/carts/change-quantity`,
                    {
                        cart_id: cartId,
                        temp_user_id: null,
                        type: typeQty,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                console.log(response.data.message);
                dispatch("fetchCart");
            } catch(error) {
                alert("Error");
                console.log(error);
            }
        },
        async checkoutCart(
            { commit, dispatch },
            {
              shippingAddress,
              billingAddress,
              paymentType,
              deliveryType,
              cart_item_ids,
            }
          ) {
            try {
              const response = await axios.post(
                `https://ecommerce.olipiskandar.com/api/v1/checkout/order/store`,
                {
                  shipping_address_id: shippingAddress,
                  billing_address_id: billingAddress,
                  payment_type: paymentType,
                  delivery_type: deliveryType,
                  cart_item_ids: cart_item_ids,
                  transactionId: null,
                  receipt: null,
                },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
              console.log(response.data.message);
              dispatch("fetchCart");
            } catch (error) {
              alert("Error");
              console.log(error);
            }
          },
        async fetchAddress({ commit }) {
            try {
                const token = localStorage.getItem('token');
                const getAddress = await axios.get("https://ecommerce.olipiskandar.com/api/v1/user/addresses",
                {
                    headers: {
                        Authorization: `Bearer ${"token"}`
                    },
                })
                commit('SET_ADDRESS', getAddress.data.data)
            } catch (error) {
                console.log(error);
            }
        }
       
    },
    async checkoutCart(
        { commit, dispatch },
        { shippingAddress, billingAddress, paymentType, deliveryType, cart_item_ids }
    ) {
        try {
            const response = await axios.post(
                `https://ecommerce.olipiskandar.com/api/v1/checkout/order/store`,
                {
                    shipping_address_id: shippingAddress,
                    billing_address_id: billingAddress,
                    payment_type: paymentType,
                    delivery_type: deliveryType,
                    cart_item_ids: cart_item_ids,
                    transactionId: null,
                    receipt: null,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            console.log(response.data.message);
            dispatch("fetchCart");
        } catch (error) {
            alert("Error");
            console.log(error);
        }
    },
    mutations: {
        SET_CART(state, cart) {
            state.cart = cart;
        }
    }
};
export default cart;