<script setup lang="ts">
  import { AppHeader } from "~/widgets/header";
  import { WhyTrustUs } from "~/widgets/why-trust-us";
  import { ClickBait } from "~/widgets/click-bait";
  import { OftenAsk } from "~/widgets/ofter-ask";
  import { AboutUs } from "../widgets/about-us";
  import { HalfStats } from "~/widgets/half-stats";
  import { MainBanner } from "~/widgets/main-banner";
  import { PersonalForecast } from "~/widgets/personal-forecast";
</script>

<template>
  <AppHeader />
  <MainBanner />
  <PersonalForecast />
  <WhyTrustUs />
  <ClickBait />
  <OftenAsk />
  <AboutUs />
  <HalfStats />
</template>

<style scoped></style>
