<template>
  <div>
    <ArticleCard
      v-for="post in posts"
      :key="post.id"
      :post="post.attributes" />
  </div>
</template>

<script setup>
    import ArticleCard from "./ArticleCard.vue";
    //const { data : posts } = await useFetch('https://jsonplaceholder.typicode.com/posts')
    const { data: { value : {data: posts } } } = await useFetch('http://localhost:1337/api/articles')
    //const  { data : {value: { data: posts } } } = await useFetch('http://localhost:8055/items/Articles')
    console.log(posts);
</script>
