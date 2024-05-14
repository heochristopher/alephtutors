<template>
  <div id="footer">
    <div id="container" class="w-full h-52 flex flex-col justify-between items-center pt-12 overflow-hidden md:flex-row md:h-44 md:px-16 lg:px-20">
      <a id="contact" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=team@webrising.org" target="_blank">
        <h5 class="text-xl font-medium">team@alephtutors.com</h5>
      </a>

      <ul id="nav-list" class="flex justify-center items-center text-center overflow-visible space-x-6 sm:space-x-8 lg:space-x-12 sm:text-lg md:text-base lg:text-lg">
        <li class="relative table-cell"><nuxt-link to="/" id="underline" class="relative inline-block">about</nuxt-link></li>
        <li class="relative table-cell"><nuxt-link to="/tutors" id="underline" class="relative inline-block">tutors</nuxt-link></li>
        <li class="relative table-cell"><nuxt-link to="/contact" id="underline" class="relative inline-block">contact</nuxt-link></li>
      </ul>
    </div>
    <h6 id="copyright" class="text-center text-zinc-500 text-sm font-semibold md:mx-16 mb-8 lg:mx-20 md:text-left">Copyright 2024 Aleph Tutors All Rights Reserved</h6>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#underline:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: '';
  display: block;
  height: 1.5px;
  left: 50%;
  position: absolute;
  background: #684c96;
  transition: width 0.4s ease 0s, left 0.4s ease 0s;
  width: 0;
}
#underline:hover:after {
  width: 100%;
  left: 0;
}

#underline.router-link-active:after{
    width: 100%;
    left: 0;
}

/* a.router-link-active { */
  /* color: #684c96; */
  /* width: 100%; */
  /* left: 0; */
/* } */

#nav {
  /* box-shadow: 0 0.25rem 0.5rem 0rem #684c96; */
  z-index: 100;
  /* background-color: hsla(51, 20%, 93%, 0.1); */
  background-color: #fff;
  /* mix-blend-mode: hard-light; */
}
</style>