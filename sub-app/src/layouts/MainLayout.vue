<template>
  <div id="q-app" style="color: aliceblue">
    <q-layout view="hHh lpR fFf" class="bg-secondary">
      <q-header>
        <q-toolbar class="bg-grey-9 text-white shadow-6">
          <q-btn flat icon="menu" @click="toggleDrawer" class="q-mr-sm" />
          <q-toolbar-title>Submit-app</q-toolbar-title>
          <q-btn flat label="Главная" @click="goTo('/')" />
          <q-space />
          <q-btn-dropdown label="Меню">
            <q-list>
              <q-item
                v-for="link in links"
                :key="link.text"
                clickable
                v-ripple
                @click="goTo(link.route)"
                class="bg-grey-9 text-white"
              >
                <q-item-section>
                  <q-item-label>{{ link.text }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" side="left" bordered>
        <q-list>
          <q-item
            v-for="link in links"
            :key="link.text"
            clickable
            v-ripple
            @click="goTo(link.route)"
            class="bg-grey-9"
          >
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
      <q-footer reveal elevated class="bg-grey-9 text-white q-mt-xl">
        <q-toolbar>
          <q-toolbar-title style="text-align: center"
            >🥒 Подвальчик с огурцами 🥒©
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
      <q-page-container
        style="
          display: flex;
          padding-top: 50px;
          padding-bottom: 50px;
          justify-content: center;
          color: aliceblue;
        "
      >
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { text: "Главная", route: "/" },
        { text: "Форма", route: "/page1" },
        { text: "Описание", route: "/page2" },
      ],
    };
  },
  methods: {
    goTo(page) {
      this.$router.push(page);
      this.drawer = false; // Закрыть меню после перехода
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
