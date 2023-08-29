<template>

<div class="my-10 mx-auto flex w-screen max-w-screen-lg flex-col rounded-3xl px-4">
  <p class="mt-20 text-center sm:text-lg font-semibold text-500"></p>
  <h1 class="mx-auto mt-2 max-w-4xl text-center text-2xl font-semibold leading-tight sm:text-4xl md:text-4xl">Thank You for Your Order</h1>
  <p class="mx-auto hidden sm:block mt-4 max-w-5xl text-center ">Order Code : 20230828-08545194</p>
  <i class="mx-auto hidden sm:block mt-1 max-w-5xl text-center ">A copy of your order summary has been sent to {{ getUser.email }}</i>
</div>

<section class="py-0 bg-blueGray-70">
<div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-2 mx-auto mt-24">
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-gray-700">ORDER SUMMARY</h3>
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <table class="items-center bg-transparent w-full border-collapse ">
        <tbody>
          <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              Order Code 
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
              : 20230828-08545194
            </td>
            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-semibold">
              Total Order Amount 
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
              : {{ totalHarga() }}
            </td>
          </tr>
          <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              Name 
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              : {{ getUser.name }}
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-semibold">
              Payment Method 
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i class="fas fa-arrow-down text-orange-500 mr-4"></i>
              : Cash on Delivery
            </td>
          </tr>
          <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
              Email 
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              : {{ getUser.email }}
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-semibold">
              Delivery Type
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i class="fas fa-arrow-down text-orange-500 mr-4"></i>
              : Express
            </td>
          </tr>
          <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
              Shipping Address
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              : Bandung, Permata Kopo
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-semibold">
              Billing Address 
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
              : Bandung, Permata Kopo
            </td>
          </tr>
          <!-- <tr>
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
              /argon/profile.html
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              1,795
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              190
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i class="fas fa-arrow-down text-red-500 mr-4"></i>
              46,53%
            </td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</div>
<br><br><br>
</section>
<section class="py-0 bg-blueGray-70">
    <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  <div class="flex items-center justify-between pb-6">
    
    <div class="flex items-center justify-between">
      <div class="ml-10 space-x-8 lg:ml-40">
      </div>
    </div>
  </div>
  <div class="overflow-y-hidden rounded-lg border">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="bg-white-600 text-left text-xs font-semibold uppercase tracking-widest text-black">
            <th class="px-5 py-3">#</th>
            <th class="px-5 py-3">Product</th>
            <th class="px-5 py-3">Quantity</th>
            <th class="px-5 py-3">Unit Price</th>
          </tr>
        </thead>
        <tbody class="text-gray-500" v-for="cart in getCart" key="cart.id">
          <tr>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{{ cart.cart_id }}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <div class="flex items-center">
                <div class="h-10 w-10 flex-shrink-0">
                  <img class="h-full w-full rounded-full" src="https://ecommerce.olipiskandar.com/public/uploads/all/UpUx213sXC5XBW07vbXn1vkWMWxTu95CDDbMzwkF.jpg" alt="" />
                </div>
                <div class="ml-3">
                  <p class="whitespace-no-wrap">{{ cart.name }}</p>
                </div>
              </div>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm ">
              <p class="whitespace-no-wrap">{{ cart.qty }}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{{ cart.regular_price }}</p>
            </td>

            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">{{ cart.regular_price* cart.qty }}</span>
            </td>
          </tr>

        </tbody>
        <tr>
           <td colspan="3" rowspan="3"><center><img src="https://png.pngtree.com/png-clipart/20210523/original/pngtree-cash-on-delivery-stamp-black-red-png-image_6328327.png" style="width: 100px; height: 100px; margin-left: -100px;" alt=""></center></td>
           <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
             <p class="whitespace-no-wrap"><b>Sub Total :</b></p>
           </td>

           <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
             <span class="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Rp. {{ subtotal()}} </span>
           </td>
         </tr>
         <tr>
          
          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <p class="whitespace-no-wrap"><b>Shipping Charge :</b></p>
          </td>

          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <span class="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Rp. {{ shipping() }} </span>
          </td>
        </tr>
         <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
           <th class="px-5 py-3">Total</th>
           <th class="px-5 py-3">Rp. {{ totalHarga() }}</th>
           
         </tr>
      </table>
    </div>
    <!-- <div class="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
      <span class="text-xs text-gray-600 sm:text-sm"> <div class="h-10 w-10 flex-shrink-0">
        <img class="h-full w-full rounded-full" src="">
      </div></span>
    </div> -->
  </div>
</div>
</section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ... mapGetters('user', ['getUser']),
        ...mapGetters("product", ["getProduk"]),
        ...mapGetters('cart', ['getCart']),
    },
    data() {
        return {
            qty: 1,
            filter :[]
        };
    },
    methods: {
        ...mapActions('user', ["fetchUser"]),
        ...mapActions("product", ["fetchProduk"]),
        ...mapActions('cart', ['fetchCart']),

      subtotal() {
        this.total = this.getCart.reduce((acc, product) => {
              return acc + parseFloat(product.regular_price * product.qty) ;
          }, 0);

          return this.total.toFixed(2);
      },
      totalHarga() {
          this.total = this.getCart.reduce((acc, product) => {
              return acc + parseFloat(product.regular_price * product.qty + 12000) ;
          }, 0);

          return this.total.toFixed(2);

      },
      shipping() {
          this.total = this.getCart.reduce((acc, product) => {
              return acc + parseFloat(product.min_qty * 12000);
          }, 0);

          return this.total.toFixed(2);

      },
    },
    created() {
        this.fetchUser();
        this.fetchProduk();
        this.fetchCart();
    },
}
</script>
<style>
  :root {
    font-family: 'Poppins'
  }
</style>