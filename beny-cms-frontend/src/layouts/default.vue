<script setup lang="ts"></script>

<template>
  <div class="default-layout">
    <div class="default-layout__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "@/assets/styles/variables" as *;

  .default-layout {
    height: 100%;
    padding: $spacing-3;
    background: $color-accent;

    &__wrapper {
      background: $color-whisper;
      border-radius: $spacing-3;
      padding: 0 $spacing-3;
      overflow: auto;
    }
  }
</style>
