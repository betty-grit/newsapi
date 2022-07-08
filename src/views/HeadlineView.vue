<template>
  <!-- <div v-for="con in headlineNews.articles" :key="con"> -->
  <p>{{ headlineNews.articles[0].title }}</p>
  <p>{{ headlineNews.articles[0].author }}</p>
  <!-- <img :src="con.urlToImage" alt="" />
    <p>{{ con.description }}</p>
  </div> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HeadlineView",

  // components: {
  //   HelloWorld
  // }
  async created() {
    await this.getAllHeadlineNews();
  },
  computed: {
    ...mapGetters({
      headlineNews: "getHeadlineNews",
    }),
  },
  methods: {
    ...mapActions({
      getAllHeadlineNews: "getAllHeadlineNews",
    }),
  },
};
</script>
<style>
img {
  width: 400px;
}
</style>
