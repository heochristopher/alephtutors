<template>
  <nuxt-link :to="`/tutors/${nickname}`" id="profile" class="w-full h-auto group relative ">
    <img :src="`/profiles/${image}`" :alt="`${name}'s headshot'`" id="pic" class="w-full h-full object-cover overflow-hidden ease-in duration-150 group-hover:grayscale-[80%]">
    <div id="text-container" class="flex flex-col text-white text-left absolute bottom-12 left-4 opacity-0 transition ease-in duration-150 group-hover:opacity-100">
        <h4 id="name" class="font-bold drop-shadow-2xl transition ease-in duration-150 ">{{name}}</h4>
        <p id="subjects" class="ease-in duration-150 ">{{ subjects }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: String,
    nickname: String,
    image: String,
    subjects: String,
  },
}
</script>

<style>

</style>