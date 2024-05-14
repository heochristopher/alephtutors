<template>
    <div id="home">
      <NavBar />
          <section id="home" class="-mt-24 text-left min-h-screen w-full flex justify-around flex-row overflow-hidden">
            <div id="left" class="ml-12 sm:ml-0 flex flex-col justify-center text-left -mt-16">
              <h1 id="header" class="font-bold truncate">Aleph Tutors</h1>

              <h5 id="subheader" class="max-w-[32rem] leading-snug">Personalized learning, brought to you by <span class="text-[#4E2A84]">Northwestern University</span> students</h5>
              <div id="buttons" class="flex flex-row space-x-16 mt-6 items-end">
                <nuxt-link to="/tutors" id="tutor" class="py-2 bg-[#4E2A84] w-40 rounded-full flex align-center justify-center"><p class="text-white font-medium">Find a Tutor --></p></nuxt-link>
                <nuxt-link to="/about" id="about" class="underline text-lg hover:text-[#4E2A84]">Learn More</nuxt-link>
              </div>
            </div>

            <div id="circles" class="hidden md:block overflow-visible h-auto">
              <div id="med-1" class="w-[8vw] h-[8vw] rounded-full bg-[#4E2A84] relative top-[16vw] right-[15vw]"></div>
              <div id="small" class="w-[5vw] h-[5vw] rounded-full bg-[#D7BCFF] relative top-[6vw] right-[5vw]"></div>
              <div id="large-1" class="w-[24vw] h-[24vw] rounded-full bg-[#4E2A84] relative z-10"></div>
              <div id="large-2" class="w-[24vw] h-[24vw]  rounded-full bg-[#D7BCFF] relative bottom-[12vw] right-[12vw]"></div>
              <div id="med-2" class="w-[7vw] h-[7vw] rounded-full bg-[#4E2A84] relative bottom-[22vw] left-[14vw]"></div>
            </div>
          </section>
      <Footer/>
    </div>
</template>

<script setup>
  const { $anime } = useNuxtApp()

onMounted(() => {

  $anime({
    targets: '#large-1',
    keyframes: [
      { translateX: '-12vw', delay: 500 },
      { translateY: '12vw', delay: 500   },
      { translateX: '0vw', delay: 500   },
      { translateY: '0vw', delay: 500   }
  ],
     duration: 4000,
    easing: 'easeInOutExpo',
    loop: true
  })
   $anime({
    targets: '#large-2',
    keyframes: [
      { translateX: '12vw',  delay: 500  },
      { translateY: '-12vw', delay: 500   },
      { translateX: '0vw',  delay: 500  },
      { translateY: '0vw',  delay: 500  }
  ],
     duration: 4000,
    easing: 'easeInOutExpo',
    loop: true
  })
     $anime({
    targets: '#med-1',
    keyframes: [
      { translateY: '23vw', translateX: '7vw', delay: 500   },
      { translateX: '33vw', translateY: '19vw',  delay: 500  },
      { translateY: '-2vw', translateX: '28vw',   delay: 500 },
      { translateX: '0vw', translateY: '0vw',  delay: 500  }
  ],
     duration: 4000,
    easing: 'easeInOutExpo',
    loop: true
  })
     $anime({
    targets: '#small',
    keyframes: [
      { translateY: '22vw', translateX: '-8vw',  delay: 500  },
      { translateX: '19vw', translateY: '28vw',  delay: 500  },
      { translateY: '8vw', translateX: '24vw', delay: 500   },
      { translateX: '0vw', translateY: '0vw',  delay: 500  }
  ],
     duration: 4000,
    easing: 'easeInOutExpo',
    loop: true
     })
       $anime({
    targets: '#med-2',
    keyframes: [
      { translateY: '-22vw',   delay: 500 },
      { translateX: '-24vw', delay: 500   },
      { translateY: '0vw', delay: 500   },
      { translateX: '0vw', delay: 500   }
  ],
     duration: 4000,
    easing: 'easeInOutExpo',
    loop: true
  })
    
  })
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


</style>