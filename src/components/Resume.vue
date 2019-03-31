<template>
  <div class="main">
    <router-link class="home" to="/">
      <icon name="home"></icon>
    </router-link>
    <div class="background-box">
      <div class="resume">
        <div class="header">
          <div class="header-text">
            <h1>TARA ZVEZDA MANICSIC</h1>
            <h2>DEVELOPER ADVOCATE</h2>
            <h4>
              <a href="mailto:tzmanics@gmail.com">tzmanics@gmail.com</a>
              | <a href="tel:513-307-5955">513-307-5955</a>
              | <a href="https://twitter.com/tzmanics">@tzmanics</a>
            </h4>
          </div>
          <div class="avatar">
            <img src="https://goo.gl/22gPYy" alt="avatar" class="pic">
          </div>
        </div>
        <div class="work">
          <ul>
            <li>
              <div class="title">
                <h3>Developer Advocate | Progress</h3>
              </div>
              <div class="info">
                <h3>NOVEMBER 2016 - PRESENT &#183;
                  REMOTE FROM CINCINNATI, OH
                </h3>
              </div>
              <div class="description">
                Producing creative and engaging demo applications, presentations and content to introduce, educate and support developers using the Progress Telerik developer tools. Cultivate tech communities to connect and work with other developers to help the team build a better product for the users. Focus on building with Node.js, Angular, microservice architecture and serverless backend.
              </div>
            </li>
            <li>
              <div class="title">
                <h3>Software Engineer II | Modulus</h3>
              </div>
              <div class="info">
                <h3>AUGUST 2014 - NOVEMBER 2016  &#183; CINCINNATI, OH</h3>
              </div>
              <div class="description">
                <p>Create public and enterprise level software to help companies and developers host their applications as well as monitor their application’s performance on AWS, Joyent and Digital Ocean servers. Write, maintain, test and deploy software using Node.js, MongoDB, Docker, React and Go.</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="school">
          <ul>
            <li>
              <div class="title">
                <h3>
                  Harvard University Extension School
                  ALB &#183; Major - Computer Science
                  &#183; Minor - Visual Arts
                </h3>
              </div>
              <div class="info">
                <h3>MAY 2014 &#183; CAMBRIDGE, MA</h3>
              </div>
              <div class="description">
                Graduating with Honors and Dean's List Academic Achievement Award
              </div>
            </li>
          </ul>
        </div>
        <div class="community">
          <ul>
            <li>
              <div class="title">
                <h3>Program Manager & Guest Host | Always Forward w dshaw</h3>
              </div>
              <div class="info">
                <h3>FEBRUARY 2018 - PRESENT</h3>
              </div>
              <div class="description">
                Plan content, coordinate guests and host live video discussions on prevalent topics on and surrounding the Node and JavaScript ecosystem and community.
              </div>
            </li>
            <li>
              <div class="title">
                <h3>Web Technologies Team | Google Developer Expert</h3>
              </div>
              <div class="info">
                <h3>DECEMBER 2017 - PRESENT</h3>
              </div>
              <div class="description">
                Work with Google's web technology teams to help them bring the latest information to more developers and connect developers throughout technical communities.
                
              </div>
            </li>
            <li>
              <div class="title">
                <h3>Founder &amp; Director | Cincy Women Who Code</h3>
              </div>
              <div class="info">
                <h3>SEPTEMBER 2015 - SEPTEMBER 2018  &#183; CINCINNATI, OH</h3>
              </div>
              <div class="description">
                Organizing, producing and leading technical workshops and events that help foster the community of women in tech in Cincinnati and surrounding areas. Fortifying relationships & continuing education to help women have both educational and moral support in our tech community. Teaching JavaScript-based, adult workshops as well as HTML/CSS core classes to STEM Girls and Girl Scout troops.
              </div>
            </li>
            <li>
              <div class="title">
                <h3>Co-Founder &amp; Organizer | Cincy NodeSchool</h3>
              </div>
              <div class="info">
                <h3>AUGUST 2014 - PRESENT &#183; CINCINNATI, OH</h3>
              </div>
              <div class="description">
                Helping support and grow the Node and JavaScript community by leading and organizing events centered around Node, JavaScript & NodeSchool workshoppers. Hosting monthly workshops and presentations as well as leading impromtu workshops when requested by community organizations.
              </div>
            </li>
          </ul>
        </div>
        <div class="content">
          <h3>Selected Presentations &amp; Publications</h3>
          <div class="talks">
            TALKS
            <ul> UPCOMING:
              <li><a href="https://2019.jsconf.eu/">JSConfEU</a></li>
              <li><a href="https://frontendconf.ch/">Front Conference</a></li>
            </ul>
            <ul> PAST:
              <li><a href="https://goo.gl/diqAii">dotJS</a></li>
              <li><a href="">OSCon</a></li>
              <li><a href="https://goo.gl/gNX8aP">Fluent</a></li>
              <li><a href="">Node Summit</a></li>
              <li><a href="">All Things Open</a></li>
            </ul>
          </div>
          <div class="posts">
            BLOG POSTS
            <ul>
              <li><a href="https://goo.gl/hbHHfU">How to JavaScript in 2018</a>
              </li>
              <li><a href="https://goo.gl/jkzzt2">Kinvey for Node Devs</a></li>
              <li><a href="https://goo.gl/HyT2yk">
                U Go Hue Go: Philips Hue API Project</a>
              </li>
              <li><a href="https://goo.gl/Ureka7">
                JavaScript's Journey Through 2016</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .avatar {
    border: 2px solid lightgray;
    border-radius: 50%;
    height: 150px;
    overflow: hidden;
    position: relative;
    width: 150px;
    -webkit-shape-outside:circle();
    shape-outside:circle();
  }
  .background-box{
    background-color: white;
    height: 100%;
    width: 90%;
  }
  .content, .school {
    background-color: lightgray;
  }
  .school h3, .school li {
    text-align: right;
  }
  .fa-icon {
    width: auto;
    height: 2em;
    padding: .25em;
  }
  .header {
    background-color: lightgray;
  }
  .header-text {
    float: left;
    width: 70%;
  }
  .home-button {
    position: fixed;
  }
  .message {
    font-size: 1.5em;
    margin: 0 auto;
    text-align: left;
    width: 65%;
  }
  .pic {
    height: 100%;
    margin: 0 auto;
    width: auto;
  }
  h1, h2, h4 {
    margin: 0;
    text-align: right;
  }
  h1 {
    margin-top: .8em;
  }
  h2 {
    padding-right: .25em;
  }
  h4 {
    margin-top: 4px;
  }
  li {
    text-align: left;
  }
  ul {
    list-style: none;
    padding: 1em;
  }
</style>
