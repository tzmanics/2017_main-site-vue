<template>
  <div class="faux-nav">
    <div class="menu">
      <router-link class="name" to="/"> TARA ZVEZDA MANICSIC </router-link>
      <router-link class="weblog" to="/weblog"> WEBLOG </router-link>
      <router-link class="resume" to="/"> RESUME </router-link>
      <a class="contact" href="mailto:tzmanics@gmail.com"> CONTACT </a>
      <router-link class="creations" to="/creations"> CREATIONS </router-link>
    </div>
    <div class="social-icons">
      <a class="mdi twitter-box" href="https://twitter.com/tzmanics"></a>
      <a class="mdi github-box" href="https://github.com/tzmanics"></a>
      <a class="mdi instagram" href="https://instagram.com/tzmanics"></a>
      <a class="mdi linekdin-box" href="https://www.linkedin.com/in/tzmanicsic/"></a>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .faux-nav {
    width: 70%;
    margin: 0 auto;
    padding-top: 2em;
    text-align: center;
  }
  .name {
    font-size: 2em;
  }
  .weblog, .resume {
    font-size: 5.5em;
  }
  .contact {
    font-size: 5.1em;
  }
  .creations {
    font-size: 4.1em;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
</style>
