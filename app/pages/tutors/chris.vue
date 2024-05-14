<template>
  <div id="page">
    <NavBar />
    <section id="hero" class="flex flex-row justify-center items-center space-x-32 mt-16">
            <img id="headshot" src="../../public/profiles/chris.jpg" alt="Christopher Heo's headshot" class="w-72 h-72 object-cover rounded-full">
            <div id="about" class="flex flex-col ">
              <h2 id="name" class="font-bold">Christopher Heo</h2>
              <h4 id="subjects" class="italic">Digital SAT, Programming</h4>
            </div>
    </section>
    <section id="info" class="flex flex-row space-x-4 mt-24 px-8 justify-center items-center h-[80vh]">
      <div id="spotlight" :class="active == '' ? 'flex bg-gray-100 items-center justify-center' : ''" class=" w-1/2 overflow-scroll h-full px-2">
        <h6 id="placeholder" class="" v-if="active == ''">Click buttons for more info!</h6>
        <ChrisSat v-if="active == 'digital sat'"/>
        <ChrisAbout v-if="active == 'credentials'"/>
        <ChrisProgramming v-if="active == 'programming'"/>
        <ChrisContact v-if="active == 'contact'"/>
      </div>
      <div id="buttons" class="w-1/2 flex flex-col divide-y px-8">
        <button @click="setActive('digital sat')" id="digital sat" :class="active == 'digital sat' ? 'text-[#546553]' : ''" class="w-full text-left py-6 px-4 ease-in duration-150 hover:text-[#546553]">
          <h4 class="font-bold leading-snug">digital SAT</h4>
          <h6 class="">stats & past students</h6>
        </button>
        <button @click="setActive('programming')" id="programming" :class="active == 'programming' ? 'text-[#546553]' : ''" class="w-full text-left py-6 px-4 ease-in duration-150 hover:text-[#546553]">
          <h4 class="font-bold leading-snug">programming</h4>
          <h6 class="">recent projects</h6>
        </button>
        <button @click="setActive('credentials')" id="credentials" :class="active == 'credentials' ? 'text-[#546553]' : ''"  class="w-full text-left py-6 px-4 ease-in duration-150 hover:text-[#546553]">
          <h4 class="font-bold leading-snug">about</h4>
          <h6 class="">my education & stats</h6>
        </button>
        <button @click="setActive('contact')" id="contact" :class="active == 'contact' ? 'text-[#546553]' : ''" class="w-full text-left py-6 px-4 ease-in duration-150 hover:text-[#546553]">
          <h4 class="font-bold leading-snug">contact</h4>
          <h6 class="">my socials & how to get in touch</h6>
        </button>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
export default {
      methods: {
      setActive(section) {
        this.active = section
      }
    },
  data() {
    return {
      active: ''
    }
  }
}
</script>

<style scoped>

</style>