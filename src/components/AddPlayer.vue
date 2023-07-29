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
      <button type="submit">Okay</button>
    </form>
  </div>
  <li v-for="(player, index) in playerList" :key="index">
    {{ player.name }}
  </li>
</template>
<style scoped>
form {
  display: flex;
  gap: 15px;
}
</style>
