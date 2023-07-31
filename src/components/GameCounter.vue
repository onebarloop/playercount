<script setup lang="ts">
import { Player } from '@/Classes'
import { ref } from 'vue'

const props = defineProps<{
  playerList: Player[]
  sorted: boolean
}>()

const emit = defineEmits<{
  (event: 'stop'): void
  (event: 'sort'): void
}>()

const sortedList = !props.sorted
  ? ref([...props.playerList])
  : ref(
      [...props.playerList].sort((a, b) => {
        return b.score - a.score
      })
    )

function sortList() {
  emit('sort')
  return [...props.playerList].sort((a, b) => {
    return b.score - a.score
  })
}
</script>

<template>
  <h2>Count</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Points</th>
        <th><img width="20" src="@/assets/arrowUp.svg" /></th>
        <th><img width="20" src="@/assets/arrowUp.svg" style="transform: rotate(180deg)" /></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(player, index) in sortedList" :key="index">
        <td>{{ player.name }}</td>
        <td>{{ player.score }}</td>
        <td><button @click="player.increaseScore()" style="font-weight: bold">+</button></td>
        <td><button @click="player.decreaseScore()" style="font-weight: bold">-</button></td>
      </tr>
    </tbody>
  </table>
  <button @click="$emit('stop')"><span>Back</span></button>
  <button @click="sortedList = sortList()">Click</button>
</template>

<style scoped>
table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

table th,
td {
  padding: 12px 15px;
}

table tbody tr {
  border-bottom: 1px solid #535855;
}

table tbody tr:nth-of-type(even) {
  background-color: #3c423f;
}

table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
</style>
