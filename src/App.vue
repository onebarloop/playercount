<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'

class Player {
  name: string
  score: number = 0
  constructor(name: string) {
    this.name = name
  }
}
const playerList: Ref<Player[]> = ref([])

function handleSubmit(e: Event) {
  const target = e.target as HTMLFormElement
  playerList.value.push(new Player(target.playername.value))
  target.reset()
}

const showStart = computed(() => {
  if (playerList.value.length > 1) {
    return true
  } else {
    return false
  }
})
</script>

<template>
  <header>
    <h1>Player Counter</h1>
  </header>

  <main>
    <h2>Add Players</h2>

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
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

form {
  display: flex;
  gap: 15px;
}
</style>
