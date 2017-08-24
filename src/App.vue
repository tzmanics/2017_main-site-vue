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
    background-image: url('http://bit.ly/2w6ivIO');
    background-position: center center;
		background-repeat:  no-repeat;
		background-attachment: fixed;
		background-size:  cover;
		background-color: #999;
    font-family: 'Abel', Helvetica, sans-serif;
  }
  p, a {
    margin: 0;
    line-height: .8em;
    color: black;
  }
</style>
