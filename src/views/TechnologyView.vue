<template>
  <div v-for="con in techNews.articles" :key="con">
    <img :src="con.urlToImage" alt="" />
    <p>{{ con.description }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TechnologyView",
  // components: {
  //   HelloWorld
  // }
  async created() {
    await this.getAllTechNews();
  },
  computed: {
    ...mapGetters({
      techNews: "getTechNews",
    }),
  },
  methods: {
    ...mapActions({
      getAllTechNews: "getAllTechNews",
    }),
  },
};
</script>
<style>
img {
  width: 400px;
}
</style>
