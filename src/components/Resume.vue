<template>
  <div class="main">
    <router-link class="home" to="/"> HOME </router-link>
    <div class="background-box">
      <div class="resume">
        <div class="header">
          <h1>Tara Zvezda Manicsic</h1>
          <h2>DEVELOPER ADVOCATE</h2>
          <h4>
            <a href="mailto:tzmanics@gmail.com">tzmanics@gmail.com</a>
            | <a href="tel:513-307-5955">513-307-5955</a>
            | <a href="https://twitter.com/tzmanics">@tzmanics</a>
            <div class="avatar">
              <img src="https://goo.gl/22gPYy" alt="avatar" class="pic">
            </div>
          </h4>
        </div>
        <hr>
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
                Producing creative and engaging demo applications, presentations and content to introduce,
                educate and support developers using the Progress Telerik developer tools. Cultivate tech
                communities to connect and work with other developers to help the team build a better product for the users. Focus on building with Node.js, Angular, microservice architecture and serverless backend.
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
                Create public and enterprise level software to help companies and developers host their applications as well as monitor their application’s performance on AWS, Joyent and Digital Ocean servers. Write, maintain, test and deploy software using Node.js, MongoDB, Docker, React and Go
              </div>
            </li>
          </ul>
        </div>
        <hr>
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
        <hr>
        <div class="community">
          <ul>
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
        <hr>
        <div class="content">
          <div class="talks">
            <ul> UPCOMING:
              <li>Progress Next</li>
              <li>JSConfEU</li>
              <li>Front Conference</li>
            </ul>
            <ul> PAST:
              <li>dotJS</li>
              <li>OSCon</li>
              <li>Fluent</li>
              <li>Node Summit</li>
              <li>All Things Open</li>
            </ul>
          </div>
          <div class="posts">
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
  .home-button {
    position: fixed;
  }
  .background-box{
    width: 90%;
  }
  .message {
    font-size: 1.5em;
    margin: 0 auto;
    text-align: left;
    width: 65%;
  }
  .avatar {
    border: 2px solid lightgray;
    border-radius: 50%;
    height: 200px;
    overflow: hidden;
    position: relative;
    width: 200px;
  }
  .pic {
    display: inline;
    height: 100%;
    margin: 0 auto;
    width: auto;
  }
  li {
    text-align: left;
  }
  ul {
    padding-bottom: 1em;
  }
</style>
