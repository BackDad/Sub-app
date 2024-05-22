<template>
  <q-page padding>
    <h4 style="text-align: center;">Задание:</h4>
    <div class="q-pa-md" style="max-width: 100%; padding: 10px;">
      <q-list bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label style="display: flex; justify-content: center;">Стек</q-item-label>
            <q-item-label style="display: flex; justify-content: center; color:aliceblue" caption>
              JS, VUE.JS(2 или 3) + quasar (версия зависит от
              VUE).</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section style="text-align: left;"
            >1. Поднять проект на VUE, подключить quasar.</q-item-section
          >
          <q-item-section style="text-align: left;"
            >2. Главная страница - приветствие, в шапке ниспадающее меню
            (переход на 2 страницы + на главную)</q-item-section
          >
          <q-item-section style="text-align: left;"
            >3. Страница1 - форма из минимум 3х полей(дата, текст, select),
            данные из которой отправляются на сервер при нажатии кнопки
            сохранить (post запрос через axios, можно просто на localhost, ответ
            не нужен)</q-item-section
          >
          <q-item-section style="text-align: left;">
            4. Страница2 - Текст тестового задания.</q-item-section
          >
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageV2",
  data() {
    return {
      HeaderText:"Задание",
    };
  },
};
</script>
