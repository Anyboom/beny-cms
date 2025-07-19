<script setup lang="ts">
  import { AppLogo } from "~/shared/ui/AppLogo";

  const items = [
    {
      link: "/",
      value: "О нас",
    },
    {
      link: "/",
      value: "Почему нам доверяют",
    },
    {
      link: "/",
      value: "Статистика",
    },
    {
      link: "/",
      value: "Часто спрашивают",
    },
    {
      link: "/",
      value: "Индивидуальный прогноз",
    },
  ];
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <a href="/">
          <AppLogo />
        </a>
        <nav class="header__nav">
          <a class="header__nav-item" :href="item.link" v-for="item in items" :key="item.value">
            {{ item.value }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/variables" as *;
  @use "@/assets/styles/mixins" as *;

  .header {
    margin-bottom: $spacing-8;
    &__wrapper {
      padding: $spacing-3 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__nav {
      display: flex;
      gap: $spacing-2;
    }
    &__nav-item {
      color: $color-text;
      transition: $transition-default;

      @include hover {
        color: $color-text-hover;
      }
    }
  }
</style>
