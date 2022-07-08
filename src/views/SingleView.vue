<template>
  <h6>Articles</h6>
  <div class="wrap">
    <div v-for="con in carder" :key="con" class="orange">
      <a :href="con.url" target="_blank">
        <div class="mango">
          <img :src="con.urlToImage" alt="" />
        </div>
        <div class="egg">
          <p id="title">{{ con.title }}</p>
          <p id="time">
            {{ con.publishedAt.slice(0, 10) }} . <span> 7 mins. read</span>
          </p>
          <p class="author">Author: {{ con.author }}</p>
        </div>
      </a>
    </div>
  </div>
</template>
