<template>
    <article class="m-4 md:w-1/2 lg:w-1/3">

        <h2 class="mb-2 capitalize text-2xl font-semibold">{{ post.title }}</h2>
      <p>{{ post.body }}...</p>
    </article>
</template>


<script>
    export default {
        props : {
            post: {}
        }
    }
</script>