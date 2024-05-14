<template>
  <div id="sat" class="flex flex-col space-y-8">
          <div id="intro" class="flex flex-col ">
            <h4 id="header" class="font-bold">my approach</h4>
            <p id="description">Lyrically perform armed robbery, flee with the lottery, possibly they spotted me. Armed and geared cause I just broke out the prison charged by the system - for murdering the rhythm! Cache rules everything around me, dollar dollar bill, ya'll. One who just represent the Wu-Tang click with the game and soul, of an old school flick.</p>
          </div>
          <div class="flex flex-col py-4">
            <h6 id="header" class="font-bold">Student 1</h6>
            <div id="scores-container" class="flex flex-row space-x-10 justify-center px-8">
              <SatScore :total="1360" :english="760" :math="600"/>
              <h4 id="arrow" class="">--></h4>
              <SatScore :bold="true" :total="1510" :english="760" :math="750"/>
            </div>
          </div>
          <div class="flex flex-col py-4">
            <h6 id="header" class="font-bold">Student 1</h6>
            <div id="scores-container" class="flex flex-row space-x-10 justify-center">
              <SatScore :total="1360" :english="760" :math="600"/>
              <h4 id="arrow" class="">--></h4>
              <SatScore :bold="true" :total="1510" :english="760" :math="750"/>
            </div>
          </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>