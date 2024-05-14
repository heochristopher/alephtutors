<template>
  <div id="past-score-container" class="flex flex-col space-y-4 items-center">
    <h3 id="past-score" :class="bold ? 'font-bold' : ''">{{total}}</h3>
    <div id="subscores-container" class="flex flex-row space-x-10">
      <div id="subscore-container" class="flex flex-col items-center">
        <h6 id="subject" class="">English</h6>
        <h5 id="score" class="">{{english}}</h5>
      </div>
      <div id="subscore-container" class="flex flex-col items-center">
        <h6 id="subject" class="">Math</h6>
        <h5 id="score" class="">{{math}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      bold: Boolean,
        total: Number,
        english: Number,
        math: Number
    }
}

</script>

<style>

</style>