<template>
  <header v-for="head in heading" :key="head">
    <a :href="head.url" target="_blank">
      <div class="heroImage"><img :src="head.urlToImage" /></div>
      <div class="text">
        <h2>{{ head.title }}</h2>
        <p class="date">{{ longDate(head.publishedAt) }}</p>
        <p class="authore">{{ head.author }}</p>
      </div>
    </a>
  </header>
</template>
<script>
export default {
  name: "HeadlineNav",
  props: ["heading"],

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
.date {
  margin-top: 10px;
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  line-height: 150%;
  color: #ffffff;
}
.authore {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
}
.text {
  padding: 148px 0px 53px 237px;
  left: 0px;
  background: #6b0b5b;
  text-align: left;
  margin-top: 369px;
}
h2 {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 110%;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 537px;
  margin-left: -110px;
}
p {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
  margin-left: -110px;
}
.heroImage {
  height: 400px;
  width: 866px;
  position: absolute;
  top: 148px;
  left: 106px;
}
.heroImage img {
  width: 826px;
  height: 400px;
  object-fit: fill;
  border-radius: 8px;
}
a {
  text-decoration: none;
}
</style>
