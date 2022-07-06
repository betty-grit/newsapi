<template>
  <nav>
    <img class="logo" src="@/assets/Group10103.svg" />
    <router-link to="/"></router-link>
    <router-link to="/Global">Global</router-link>
    <router-link to="/Business">Business</router-link>
    <router-link to="/Health">Health</router-link>
    <router-link to="/Technology">Technology</router-link>
    <router-link to="/Headline">Headline</router-link>
    <a class="menu" href="">Menu</a>
  </nav>

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
.logo {
  width: 30px;
  height: 30px;
}
nav {
  padding: 30px;
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
}
</style>
