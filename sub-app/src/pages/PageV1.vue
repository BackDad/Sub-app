<template>
  <div style="max-width: 400px">
    <q-toolbar-title class="q-mt-xl">Форма</q-toolbar-title>
    <q-form @submit="onSubmit">
      <q-input
        v-model="formData.date"
        label="Дата"
        type="date"
        hint="Укажите дату начала подписки"
        class="q-pt-xl"
      />
      <q-input
        v-model="formData.text"
        label="Текст"
        hint="Укажите тему подписки"
      />
      <q-select
        v-model="formData.select"
        :options="options"
        label="Выберите вариант подписки"
        hint="Выберите тариф"
        class="q-xs"
      />
      <q-btn
        type="submit"
        label="Сохранить"
        color="secondary"
        class="q-mt-md"
      />
    </q-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        date: "",
        text: "",
        select: "",
      },
      options: [
        { label: "Годовая подписка", value: "1" },
        { label: "Подписка на 1 месяц", value: "2" },
        { label: "Подписка на 7 дней", value: "3" },
      ],
    };
  },
  methods: {
    onSubmit() {
      // Сохранение данных формы в локальное хранилище
      localStorage.setItem("formData", JSON.stringify(this.formData));

      // Отправка данных формы на сервер
      axios
        .post("http://localhost:8081/submit", this.formData)
        .then((response) => {
          // Обработка успешного ответа от сервера, если это необходимо
          console.log(response.data);
        })
        .catch((error) => {
          // Обработка ошибки при отправке данных на сервер
          console.error("Ошибка при отправке данных на сервер:", error);
          this.$q.notify({
            type: "negative",
            message: "Есть проблемы с отправкой на сервер",
          });
        });

      // Вывод уведомления о сохранении данных в локальное хранилище
      this.$q.notify({
        type: "positive",
        message: "Данные успешно сохранены в локальное хранилище",
      });
    },
  },
};
</script>
