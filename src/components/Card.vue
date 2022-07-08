<template>
  <div class="section">
    <p class="articled">Articles</p>
    <div class="card-container">
      <div class="main-card" v-for="news in allnews" :key="news">
        <a :href="news.url" target="_blank">
          <div class="image1"><img :src="news.urlToImage" alt="" /></div>

          <div class="details">
            <h3>{{ news.title }}</h3>
            <h4>{{ longDate(news.publishedAt) }}</h4>
            <h2>Author: {{ news.author }}</h2>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["allnews"],

  computed: {
    longDate() {
      return (newDate) => {
        let date = new Date(newDate);
        const month = date.toLocaleString("default", { month: "long" });
        const day = date.toLocaleString("default", { weekday: "long" });
        // (date.getMonth()+1)
        return month + " " + date.getDate() + ", " + date.getFullYear();
      };
    },
  },
};
</script>
<style scoped>
.articled {
  margin-bottom: 20px;
}
.section {
  padding: 96px 87px;
  text-align: left;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
}
h3 {
  width: 264px;
  margin-top: 16px;
  font-size: 12px;
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.02em;

  color: #000000;
}
a {
  text-decoration: none;
}
h4 {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #000000;
}
h2 {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: -0.02em;

  color: #000000;
}
.image1 img {
  width: 264px;
  height: 168px;
  border-radius: 8px;
  object-fit: fill;
}
</style>
