<template>
  <div class="main">
    <router-link class="home" to="/">
      <icon name="home"></icon>
    </router-link>
    <div class="background-box">
      <div class="message">
        <p>
          <a href="https://github.com/tzmanics/2017_weblog-ui-preact">
            In the process 
          </a>
          of making this awesome...or at least a list of my blog posts</br>
          (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
        </p>
        <p> In the meantime, check these out: </p>    
        <ul>
          <li>
            <a href="https://github.com/tzmanics/U-Go-Hue-Go-Tutorial">
              U Go Hue Go: Philips Hue API Project
            </a>
          </li>
          <li>
            <a href="https://developer.telerik.com/products/kendo-ui/touring-us-kendo-ui-camper/">
              Kendo Camper Tour
            </a>
          </li>
          <li>
            <a href="https://developer.telerik.com/topics/web-development/javascripts-journey-2016/">
              JavaScript's Journey through 2016
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .home-button {
    position: fixed;
  }
  .fa-icon {
    width: auto;
    height: 2em;
    padding: .25em;
  }
  .background-box{
    width: 460px;
  }
  .message {
    font-size: 1.5em;
    margin: 0 auto;
    text-align: left;
    width: 65%;
  }
  li {
    text-align: left;
  }
  li a {
    text-decoration: none;
  }
  ul {
    padding-bottom: 1em;
  }
</style>
