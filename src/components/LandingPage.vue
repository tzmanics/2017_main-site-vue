<template>
  <div class="main">
    <div class="background-box">
      <div class="menu">
        <a class="name" href="https://youtu.be/tQI1ddTciwM?t=3m24s"> TARA ZVEZDA MANICSIC </a>
        <a class="contact" href="mailto:tzmanics@gmail.com"> CONTACT </a>
        <router-link class="resume" to="/resume"> RESUME </router-link>
        <router-link class="weblog" to="/weblog"> WEBLOG </router-link>
        <router-link class="videos" to="/videos"> VIDEOS </router-link>
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
    <div class="announcements">
      COME SEE ME AT
      <a href="https://2019.jsconf.eu/"> JSConfEU </a>
      6/1-2 IN BERLIN!
    </div>  
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .announcements {
    background-color: rgba(22, 22, 22, 0.75);
    color: lightblue;
    font-size: 2em;
    position: fixed;
    bottom: 0;
    text-align: center;
    width: 100%;
  }
  .announcements a {
    color: white;
  }
  .background-box {
    height: 100%;
    padding: 20px 20px 40px 20px;
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
  .main {
    height: 100%;
  }
  .menu {
    text-align: center;
  }
  .name {
    font-size: 2em;
  }
  .name:hover {
    color: black;
    cursor: text;
  }
  .resume {
    font-size: 5.7em;
  }
  .social-icons {
    text-align: center;
  }
  .videos {
    font-size: 6.4em;
    padding-left: .05em;
  }
  .weblog {
    font-size: 5.5em;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    color: darkslategray;
  }
  a:active {
    text-decoration: none;
  }
</style>
