<script setup>
import { onMounted, onBeforeUnmount } from "vue";
const { $socket } = useNuxtApp();

function onMessage(data) {
  console.log("Получено от сервера:", data);
}

onMounted(() => {
  if ($socket) {
    $socket.on("message", onMessage);
    // Отправка сообщения при монтировании компонента
    $socket.emit("client-message", { text: "йцу" });
  }
});

onBeforeUnmount(() => {
  if ($socket) {
    $socket.off("message", onMessage);
  }
});
</script>

<template>
  <div>Слушаю сообщения от сервера...</div>
</template>
