<script setup>
import catPicture from '../../images/cat.png'
</script>

<template>
  <h1>The first page</h1>
  <p><router-link to="/moduleA/second">go to the second page</router-link></p>
  <p>
    <img :src="catPicture" alt="">
  </p>
</template>
