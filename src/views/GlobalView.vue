<template>
  <div class="glob" v-for="con in globalNews.articles" :key="con">
    <img :src="con.urlToImage" alt="" />
    <p>{{ con.description }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapGetters } from "vuex";

export default {
  name: "GlobalView",
  // components: {
  //   HelloWorld
  // }
  async mounted() {
    await this.getAllGlobalNews();
  },
  computed: {
    ...mapGetters({
      globalNews: "getGlobalNews",
    }),
  },
  methods: {
    ...mapActions({
      getAllGlobalNews: "getAllGlobalNews",
    }),
  },
};
</script>
<style>
img {
  width: 200px;
}
/* p {
  width: 100px;
} */
.glob {
  display: inline-block;
  flex-wrap: wrap;
  gap: 20px;
  text-align: center;
  width: 300px;
  align-items: center;
}
</style>
