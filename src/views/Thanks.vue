<template>
    <br>
    <div class="flex h-screen items-center justify-center bg-gray-100 py-10">
  <div class="mx-auto max-w-md overflow-hidden rounded-3xl text-gray-700 shadow-md">
    <div class="h-40 bg-500 pt-10 sm:h-56">
      <img class="h-full w-full object-contain" src="https://i.pinimg.com/originals/9f/f7/ec/9ff7ec29f67194338d3aa178b24b72f3.gif" alt="" />
    </div>
    <div class="flex flex-col items-center bg-white px-4 py-10">
      <h2 class="mb-2 text-3xl font-bold text-black-500 sm:text-4xl">Order Success!</h2>
      <router-link to="/success" >
      <button class="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500 mb-8 font-medium text-gray-500">See Order</button>
    </router-link>
      <div class="flex items-center rounded-xl bg-gray-500 p-4">
        <img class="h-12 w-12 rounded-full border-4 border-white object-cover" src="../assets/img/pp.jpg" />
        <div class="ml-4 w-56">
          <p class="text-xs font-medium text-gray-100">From</p>
          <p class="font-medium text-white">{{ getUser.name }}</p>
        </div>
      </div>
    </div>
    <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>
  </div>
</div>


</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ... mapGetters('user', ['getUser']),
    },
    methods: {
        ...mapActions('user', ["fetchUser"]),
    },
    created() {
        this.fetchUser();
    },
}
</script>