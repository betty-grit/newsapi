<template>
  <div class="navbar">
    <img class="logo" src="@/assets/Group10103.svg" />
    <nav>
      <router-link to="/"></router-link>
      <router-link to="/Global">Global</router-link>
      <router-link to="/Business">Business</router-link>
      <router-link to="/Health">Health</router-link>
      <router-link to="/Technology">Technology</router-link>
      <!-- <router-link to="/Headline">Headline</router-link> -->
    </nav>
    <div class="mainmenu">
      <img class="fontss" src="@/assets/Group(8).svg" alt="" />
      <a class="menu" href="">Menu</a>
    </div>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.mainmenu {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.logo {
  width: 30px;
  height: 30px;
  margin-left: 20px;
}
.menu {
  text-decoration: none;
  color: black;
}
.fontss {
  width: 30px;
  height: 30px;
  margin-right: 20px;
}
nav {
  padding: 0px;

  background-color: white;
}

nav a {
  font-weight: bold;
  color: black;
  padding: 30px;
  text-decoration: none;
}

/* .router-link {
  justify-content: space-between;
} */

/* nav a.router-link-exact-active {
  color: #42b983;
} */
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Public Sans", sans-serif;
}
</style>
