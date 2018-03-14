<template>
  <div id="app">
    <router-view 
      @submitgiphy="postGiphysToBackend" 
      @upvotegiphy="upvoteSubmissions" 
      @usernameentered="storeUsername" 
      :status="status" 
      :username="username"/>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      status: [],
      username: localStorage.getItem('username')
    }
  },
  // watch: {
  //   status: function () {
  //     if (this.status.phase !== 'game') {
  //       this.$router.push('/winner')
  //     }
  //   }
  // },
  methods: {
    getStatusUpdate: function () {
      axios.get(`http://circuslabs.net:6432/status`)
        .then(response => {
          this.status = response.data
          console.log(this.status)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    storeUsername: function (username) {
        this.username = username
        localStorage.setItem('username', this.username)
    },
    upvoteSubmissions: function (index) {
      axios.post(`http://circuslabs.net:6432/upvote/${index}`, {
        username: this.username
      })
      .then(response => {
        console.log('You upvoted the giphy')
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    postGiphysToBackend: function (giphyURL) {
      console.log('app.js postGiphysToBackend()')
      console.log('send data', giphyURL, this.username)
      axios.post(`http://circuslabs.net:6432/submission`, {
        giphyURL: giphyURL,
        username: this.username
      })
      .then(response => {
        console.log('You posted to the backend')
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
  },
  created: function () {
    // this.getStatusUpdate()
    let refreshStatus = setInterval(this.getStatusUpdate, 1000)
  },
}
</script>

<style>

body {
  margin: 0;
  /*overflow: hidden;*/
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  margin: 0;
}
</style>
