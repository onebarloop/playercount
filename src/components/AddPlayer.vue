<script setup lang="ts">
import { Player } from '@/Classes'
import { computed, ref } from 'vue'

const props = defineProps<{
  playerList: Player[]
}>()

const warning = ref('')

const emit = defineEmits(['newPlayer'])

const handleSubmit = (e: Event) => {
  warning.value = ''
  const target = e.target as HTMLFormElement
  const playerName = target.playername.value
  if (playerName === '') {
    warning.value = 'Please input a valid name'
    setTimeout(() => {
      warning.value = ''
    }, 2000)
  } else if (props.playerList.map((player) => player.name).includes(playerName)) {
    warning.value = 'Name is already taken'
    setTimeout(() => {
      warning.value = ''
    }, 2000)
  } else {
    emit('newPlayer', new Player(playerName))
  }

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
  <p>{{ warning }}</p>
  <ul>
    <li v-for="(player, index) in props.playerList" :key="index">
      <p v-if="true">{{ player.name }}</p>
    </li>
  </ul>
</template>
<style scoped>
form {
  display: flex;
  gap: 15px;
  margin-top: 25px;
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
