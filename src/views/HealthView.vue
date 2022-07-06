<template>
  <div v-for="con in healthNews.articles" :key="con">
    <img :src="con.urlToImage" alt="" />
    <p>{{ con.description }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HealthView",
  // components: {
  //   HelloWorld
  // }
  async created() {
    await this.getAllHealthNews();
  },
  computed: {
    ...mapGetters({
      healthNews: "getHealthNews",
    }),
  },
  methods: {
    ...mapActions({
      getAllHealthNews: "getAllHealthNews",
    }),
  },
};
</script>
<style>
img {
  width: 400px;
}
</style>
