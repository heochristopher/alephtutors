<template>
  <div id="page">
    <NavBar />
    <section class="flex flex-col justify-center items-center space-y-32 mt-16">
      <div id="container" class="flex flex-col items-center align-center space-y-16">
        <h1 id="title" class="font-bold ">Tutors</h1>
        <div id="tutors" class="grid ">
          <tutor class="h-auto" v-for="tutor in tutors" :key="tutor.name" :name="tutor.name" :nickname="tutor.nickname" :image="tutor.image" :subjects="tutor.subjects" />
        </div>
      </div>
      
    </section>
    <Footer/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tutors: [
        {
          name: 'Christopher Heo',
          nickname: 'chris',
          image: 'chris.jpg',
          subjects: 'Digital SAT & Coding',
        },
        {
          name: 'Dylan Choi',
          nickname: 'dylan',
          image: 'dylan.jpg',
          subjects: 'Advanced Placement (AP)',
        },
        {
          name: 'Hajo Wolfram',
          nickname: 'hajo',
          image: 'hajo.jpg',
          subjects: 'International Baccalaureate (IB) & Mathematics',
        },
        {
          name: 'Nathan Kim',
          nickname: 'nathan',
          image: 'nathan.jpg',
          subjects: 'College Essays, Creative Writing',
        },
      ],
    }
  },
}
</script>

<style scoped>
/* grid that goes from 4x1 to 2x2 */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  /* gap: 1rem; */
}

</style>