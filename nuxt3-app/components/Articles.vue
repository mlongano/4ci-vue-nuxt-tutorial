<template>
  <div>
    <article class="m-4 md:w-1/2 lg:w-1/3" v-for="post in posts" :key="post.id">

        <h2 class="mb-2 capitalize text-2xl font-semibold">{{ post.title }}</h2>
      <p>{{ post.body }}...</p>
    </article>
  </div>
</template>

<script setup>
    const { data : posts } = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>
