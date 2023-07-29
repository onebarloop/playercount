<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="playername">New Player:</label>
      <input id="playername" type="text" />
      <button type="submit">Okay</button>
    </form>
  </div>
  <li v-for="(player, index) in playerList" :key="index">
    {{ player.name }}
  </li>
  <button v-if="showStart">Let's begin!</button>
</template>
