<template>
  <div class="main">
    <div class="background-box">
      <div class="menu">
        <a class="name" href="https://youtu.be/tQI1ddTciwM?t=3m24s"> TARA ZVEZDA MANICSIC </a>
        <a class="contact" href="mailto:tzmanics@gmail.com"> CONTACT </a>
        <a class="resume" href="./static/small-resume.pdf"> RESUME </a>
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
      <a href="https://www.ng-conf.org/"> ng-conf </a>
      5/1-3 IN SLC!
    </div>  
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .name {
    font-size: 1.97em;
  }
  .weblog, .resume {
    font-size: 5.5em;
  }
  .contact {
    font-size: 5.1em;
  }
  .videos {
    font-size: 6.4em;
    padding-left: .05em;
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
    color: darkslategray;
  }
  .name:hover {
    color: black;
    cursor: text;
  }
  a:active {
    text-decoration: none;
  }
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
</style>
