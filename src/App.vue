<script setup lang="ts">
import AddPlayer from './components/AddPlayer.vue'
import GameCounter from './components/GameCounter.vue'
import { computed, ref, type Ref } from 'vue'
import { Player } from '@/Classes'

type View = 'home' | 'count'

const playerList: Ref<Player[]> = ref([])
const view: Ref<View> = ref('home')

const showStart = computed(() => {
  if (playerList.value.length > 1) {
    return true
  } else {
    return false
  }
})

const begin = () => {
  view.value = 'count'
}

const stop = () => {
  view.value = 'home'
}
</script>

<template>
  <header>
    <h1>Player Counter</h1>
  </header>
  <main>
    <div v-if="view === 'home'" class="home">
      <AddPlayer :playerList="playerList" @newPlayer="(player) => playerList.push(player)" />
      <button v-if="showStart" @click="begin">Let's begin!</button>
    </div>
    <div v-if="view === 'count'" class="count">
      <GameCounter :playerList="playerList" />
      <button @click="stop">Back</button>
    </div>
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

.home,
.count {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
