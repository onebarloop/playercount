<script setup lang="ts">
import { Player } from '@/Classes';
import { ref } from 'vue';

const props = defineProps<{
  playerList: Player[];
  sorted: boolean;
}>();

const emit = defineEmits<{
  (event: 'stop'): void;
  (event: 'sort'): void;
}>();

const sortedList = !props.sorted
  ? ref([...props.playerList])
  : ref(
      [...props.playerList].sort((a, b) => {
        return b.score - a.score;
      })
    );

function sortList() {
  emit('sort');
  return [...props.playerList].sort((a, b) => {
    return b.score - a.score;
  });
}
</script>

<template>
  <h2 class="mb-5">Count</h2>
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
  <button @click="sortedList = sortList()">Sort by score</button>
</template>

