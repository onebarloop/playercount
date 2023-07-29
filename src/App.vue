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
    <Transition>
      <div v-if="view === 'home'" class="home">
        <AddPlayer :playerList="playerList" @newPlayer="(player) => playerList.push(player)" />
        <button v-if="showStart" @click="begin"><span>Let's begin!</span></button>
        <button @click="() => (playerList = [])"><span>Reset</span></button>
      </div>

      <div v-else-if="view === 'count'" class="count">
        <GameCounter :playerList="playerList" />
        <button @click="stop"><span>Back</span></button>
      </div>
    </Transition>
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
  align-items: center;
  gap: 10px;
}

.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-from {
  opacity: 0;
}
</style>
