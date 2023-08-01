<script setup lang="ts">
import AddPlayer from './components/AddPlayer.vue';
import GameCounter from './components/GameCounter.vue';
import { computed, ref, type Ref } from 'vue';
import { Player } from '@/Classes';

type View = 'home' | 'count';

const playerList: Ref<Player[]> = ref([new Player('one'), new Player('two')]);

const view: Ref<View> = ref('home');

const sorted = ref(false);

const showStart = computed(() => {
  if (playerList.value.length > 1) {
    return true;
  } else {
    return false;
  }
});

const deletePlayer = (playername: string) => {
  playerList.value = playerList.value.filter((player) => {
    if (player.name === playername) {
      return;
    } else {
      return player;
    }
  });
};
</script>

<template>
  <header class="flex justify-center mb-5">
    <h1>Player Counter</h1>
  </header>

  <main>
    <Transition>
      <div v-if="view === 'home'" class="flex flex-col items-center gap-5">
        <AddPlayer
          :playerList="playerList"
          :showStart="showStart"
          @newPlayer="(player) => playerList.push(player)"
          @delete-player="deletePlayer"
          @start="() => (view = 'count')"
          @reset="() => (playerList = [])"
        />
      </div>
      <div v-else-if="view === 'count'" class="flex flex-col items-center gap-5">
        <GameCounter
          :playerList="playerList"
          :sorted="sorted"
          @stop="() => (view = 'home')"
          @sort="
            () => {
              sorted = true;
            }
          "
        />
      </div>
    </Transition>
  </main>
</template>

<style scoped>

.v-enter-active {
  transition: opacity 0.5s ease;
}
.v-enter-from {
  opacity: 0;
}
</style>
