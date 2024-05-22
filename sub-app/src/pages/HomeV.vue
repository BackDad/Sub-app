<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner class="bg-grey-9 text-white">
      {{ Greeting }}
    </q-banner>
  </div>
</template>
<script>
export default {
  name: "HomeV",
  data() {
    return {
      Greeting: "Добро пожаловать в тестовый проект на Quasar",
    };
  },
};
</script>
