<template>
  <div class="main">
    <router-link class="home" to="/">
      <icon name="home"></icon>
    </router-link>
      <div class="video-list">
        <ul>
          <li>
            <iframe width="560" height="315" 
              src="https://www.youtube.com/embed/Srb-dmnVbYY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;
                picture-in-picture" allowfullscreen>
            </iframe>
          </li>
          <li>
            <iframe width="560" height="315" 
              src="https://www.youtube.com/embed/QATVDJ1HvHY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;
                picture-in-picture" allowfullscreen>
            </iframe>
          </li>
          <li>
            <iframe width="560" height="315" 
              src="https://www.youtube.com/embed/KL0Ub1XZyU8"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;
                picture-in-picture" allowfullscreen>
            </iframe>
          </li>
          <li>
            <iframe width="560" height="315" 
              src="https://www.youtube.com/embed/bV-RhMB8_Bc"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;
                picture-in-picture" allowfullscreen>
            </iframe>
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
  .fa-icon {
    width: auto;
    height: 2em;
    padding: .25em;
  }
  .video-list {
    margin: 0 auto;
    width: 70%;
  }
  li {
    list-style: none;
    margin: 1em;
    text-align: left;
    text-decoration: none;
  }
</style>


