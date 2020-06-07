<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App logined"/> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  computed: {
    cookies() {
      return JSON.stringify(window.cookies)
    }
  },
  data :()=>({
    items : [],
    run : false,
  }),
  watch: {
    run : {
      handler: async function(){
        const res = await this.$axios.get(`${process.env.VUE_APP_API}/item`
        )
        console.log(res)
        this.items = res.data 
      },
      deep: true,
      immediate: true
    },
  },
  created() {
    console.log('qerqer')
  }
}
</script>
