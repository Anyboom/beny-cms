<script setup lang="ts">
  import { AppButton } from "~/shared/ui/AppButton";
</script>

<template>
  <div class="click-bait">
    <div class="container">
      <div class="click-bait__wrapper">
        <p class="click-bait__content">Твой успех начинается вместе с нами</p>
        <app-button href="https://vk.com" target="_blank"> Присоединиться </app-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/variables" as *;

  .click-bait {
    margin-bottom: $spacing-8;
    &__wrapper {
      background: $color-default-white;
      border-radius: $spacing-2;
      padding: $spacing-2;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__content {
      color: $color-text;
    }
  }
</style>
