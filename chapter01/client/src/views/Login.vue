<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/ -->
    <el-row>
      <el-input placeholder="id" v-model="id"></el-input>
      <el-input placeholder="password" v-model="password" type="password"></el-input>
      <el-button @click.stop="doLogin">Login</el-button>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // components: {
  //   HelloWorld
  // }
  data () {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    async doLogin () {
      const { id, password } = this
      try {
        const res = await this.$axios.post(`${process.env.VUE_APP_API}/auth/login`, {
        // const res = await axios.post(`http://192.168.31.57:8080/api/auth/login`, {
          id, password 
        })
        console.log(res)
        this.$router.push("/main")
      } catch(err) {
        alert(err)
      }
    }
  }
}
</script>
