<script setup lang="ts">
import { Player } from '@/Classes';

import { ref } from 'vue';
import { formWarning } from '../lib/helpers';

const props = defineProps<{
  playerList: Player[];
  showStart: boolean;
}>();

const warning = ref('');

const emit = defineEmits<{
  (event: 'newPlayer', player: Player): void;
  (event: 'deletePlayer', playername: string): void;
  (event: 'start'): void;
  (event: 'reset'): void;
}>();

const handleSubmit = (e: Event) => {
  warning.value = '';
  const target = e.target as HTMLFormElement;
  const playerName = target.playername.value;
  if (props.playerList.length >= 6) {
    formWarning('Max playercount ist 6', warning);
  } else if (playerName === '') {
    formWarning('Please input a valid name', warning);
  } else if (
    props.playerList.map((player) => player.name.toLowerCase()).includes(playerName.toLowerCase())
  ) {
    formWarning('Name is already taken', warning);
  } else {
    emit('newPlayer', new Player(playerName));
  }
  target.reset();
};
</script>

<template>
  <h2 class="mb-5">Add Players</h2>

  <form @submit.prevent="handleSubmit" autocomplete="off" class="flex gap-3 relative">
    <p class="warning">{{ warning }}</p>
    <label for="playername">New Player:</label>
    <input class="text-black" id="playername" type="text" />
    <button>Okay</button>
  </form>

  <ul class="player-cards">
    <li v-for="(player, index) in props.playerList" :key="index" class="fade-in">
      <p>{{ player.name }}</p>
      <p class="text-2xl">{{ player.score }}</p>
      <button
       @click="$emit('deletePlayer', player.name)" style="font-weight: bold">X</button>
    </li>
  </ul>
  <button v-if="showStart" @click="$emit('start')"><span>Let's begin!</span></button>
  <button @click="$emit('reset')"><span>Reset</span></button>
</template>

<style scoped>
.warning {
  position: absolute;
  transition: all;
  color: #bfa55f;
  bottom: 40px;
  left: 60px;
}
</style>
