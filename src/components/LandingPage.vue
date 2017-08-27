<template>
  <div class="faux-nav">
    <div class="menu">
      <a class="name" href="https://youtu.be/tQI1ddTciwM?t=3m24s"> TARA ZVEZDA MANICSIC </a>
      <router-link class="weblog" to="/weblog"> WEBLOG </router-link>
      <a class="resume" href="./static/small-resume.pdf"> RESUME </a>
      <a class="contact" href="mailto:tzmanics@gmail.com"> CONTACT </a>
      <!-- <router-link class="creations" to="/creations"> CREATIONS </router-link> -->
    </div>
    <div class="social-icons">
      <a class="twitter" href="https://twitter.com/tzmanics">
        <icon name="twitter-square"></icon>
      </a>
      <a class="mdi github-box" href="https://github.com/tzmanics">
        <icon name="github-square"></icon>
      </a>
      <a class="mdi instagram" href="https://instagram.com/tzmanics">
        <icon name="instagram"></icon>
      </a>
      <a class="mdi linekdin-box" href="https://www.linkedin.com/in/tzmanicsic/">
        <icon name="linkedin-square"></icon>
      </a>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .faux-nav {
    width: 350px;
    margin: 0 auto;
    padding-top: 2em;
    text-align: center;
  }
  .name {
    font-size: 1.97em;
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
  .fa-icon {
    width: auto;
    height: 1.5em;
    padding: .25em;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    color: lightgray;
  }
  .name:hover {
    color: black;
    cursor: text;
  }
  a:active {
    text-decoration: none;
  }
</style>
