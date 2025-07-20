<script setup lang="ts">
  import { AppHeader } from "~/widgets/header";
  import { WhyTrustUs } from "~/widgets/why-trust-us";
  import { ClickBait } from "~/widgets/click-bait";
  import { OftenAsk } from "~/widgets/ofter-ask";
  import { AboutUs } from "~/widgets/abous-us";
  import { HalfStats } from "~/widgets/half-stats";
  import { MainBanner } from "~/widgets/main-banner";
</script>

<template>
  <AppHeader />
  <MainBanner />
  <WhyTrustUs />
  <ClickBait />
  <OftenAsk />
  <AboutUs />
  <HalfStats />
</template>

<style scoped></style>
