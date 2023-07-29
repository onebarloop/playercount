<script setup lang="ts">
import AddPlayer from './components/AddPlayer.vue'
import { computed, ref, type Ref } from 'vue'
import { Player } from '@/Classes'

const playerList: Ref<Player[]> = ref([])

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
    <AddPlayer :playerList="playerList" @newPlayer="(e) => playerList.push(e)" />
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
</style>
