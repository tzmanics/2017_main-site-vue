<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    height: 100%;
  }
  main {
    height: 100%;
  }
  body, html {
    height: 100%;
    margin: 0;
  }
  body {
    background-image: url('https://tinyurl.com/ycj755vx');
    background-position: center center;
    background-repeat:  no-repeat;
    background-attachment: fixed;
    background-size:  cover;
    background-color: #999;
    font-family: 'Work Sans', Helvetica, sans-serif;
    font-weight: 100;
  }
  h1, h2, h3, h4 {
    font-weight: 200;
    text-align: left;
  }
  p, a {
    display: inline;
    line-height: 1.1em;
    padding: 0;
    margin: 0;
    color: black;
  }
  .background-box{
    background-color: rgba(255, 255, 255, 0.45);
    width: 350px;
    margin: 0 auto;
    padding-top: 2em;
    text-align: left;
  }
  .home {
    position: fixed;
  }
  @media print {
    .home {
      display: none;
    }
  }
</style>
