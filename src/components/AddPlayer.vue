<script setup lang="ts">
import { Player } from '@/Classes'

defineProps<{
  playerList: Player[]
}>()

const emit = defineEmits(['newPlayer'])

const handleSubmit = (e: Event) => {
  const target = e.target as HTMLFormElement
  emit('newPlayer', new Player(target.playername.value))
  target.reset()
}
</script>

<template>
  <h2>Add Players</h2>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="playername">New Player:</label>
      <input id="playername" type="text" />
      <button type="submit"><span>Okay</span></button>
    </form>
  </div>
  <ul>
    <li v-for="(player, index) in playerList" :key="index">
      <p v-if="true">{{ player.name }}</p>
    </li>
  </ul>
</template>
<style scoped>
form {
  display: flex;
  gap: 15px;
}

ul {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

li {
  list-style-type: none;
  border: 2px solid #009879;
  padding: 10px;
  transition: all 1s ease-out;
}
</style>
