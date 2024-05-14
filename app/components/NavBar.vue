<template>
  <nav id="nav" class="w-full h-15 py-8 lg:h-20 relative overflow-hidden">
    <img src="../assets/logo.png" alt="" id="logo" class="h-8 absolute left-8">
      <ul id="links" class="hidden justify-center items-center space-x-10 md:flex lg:space-x-14">
        <li class="relative table-cell">
          <nuxt-link to="/" id="underline" class="relative inline-block py-1 active:w-50%"><h6>home</h6></nuxt-link>
        </li>
        <li class="relative table-cell">
          <nuxt-link to="/about" id="underline" class="relative inline-block py-1"><h6>about</h6></nuxt-link>
        </li>
        <li class="relative table-cell">
          <nuxt-link to="/tutors" id="underline" class="relative inline-block py-1 active:w-100%"><h6>tutors</h6></nuxt-link>
        </li>
        <li class="relative table-cell">
          <nuxt-link to="/contact" id="underline" class="relative inline-block py-1"><h6>contact</h6></nuxt-link>
        </li>
      </ul>
  </nav>
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