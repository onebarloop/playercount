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
  <h2>Add Players</h2>

  <form @submit.prevent="handleSubmit" autocomplete="off">
    <p class="warning">{{ warning }}</p>
    <label for="playername">New Player:</label>
    <input class="text-black" id="playername" type="text" />
    <button>Okay</button>
  </form>

  <ul>
    <li v-for="(player, index) in props.playerList" :key="index">
      <p>{{ player.name }}</p>
      <p class="score">{{ player.score }}</p>
      <button @click="$emit('deletePlayer', player.name)" style="font-weight: bold">X</button>
    </li>
  </ul>
  <button v-if="showStart" @click="$emit('start')"><span>Let's begin!</span></button>
  <button @click="$emit('reset')"><span>Reset</span></button>
</template>
<style scoped>
form {
  display: flex;
  align-items: center;
  position: relative;
  gap: 15px;
}

form input {
  height: 30px;
}

.warning {
  position: absolute;
  transition: all;
  color: #bfa55f;
  bottom: 40px;
  left: 60px;
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
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  min-width: 150px;
}

.score {
  font-size: 1.5rem;
}
</style>
