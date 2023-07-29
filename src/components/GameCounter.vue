<script setup lang="ts">
import { Player } from '@/Classes'

defineProps<{
  playerList: Player[]
}>()
</script>

<template>
  <h2>Count</h2>
  <table>
    <tr v-for="(player, index) in playerList" :key="index">
      <td>{{ player.name }}</td>
      <td>{{ player.score }}</td>
      <td><button>+</button></td>
      <td><button>-</button></td>
    </tr>
  </table>
</template>
