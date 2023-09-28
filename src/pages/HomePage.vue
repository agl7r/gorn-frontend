<template>
  <h1>Home page</h1>
  <p>
    <router-link to="/moduleA/first">Module A</router-link>
    <br>
    <router-link :to="{ name: 'contacts' }">Contacts</router-link>
  </p>
</template>
