<template>
    <article class="m-4 md:w-1/2 lg:w-1/3">
        <h2 class="mb-2 capitalize text-2xl font-semibold">{{ post.Title }}</h2>
        {{ post.Body }}
  </article>
</template>


<script>
    export default {
        props : {
            post: {}
        },
        computed : {
            page: function() {
             return `Hello ${this.$hello()}`
            }
        },
    }
</script>