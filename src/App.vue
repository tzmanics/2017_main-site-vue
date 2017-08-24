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
    font-family: 'Abel', Helvetica, sans-serif;
  }
  p, a {
    display: inline;
    line-height: 1.1em;
    padding: 0;
    margin: 0;
    color: black;
  }
</style>
