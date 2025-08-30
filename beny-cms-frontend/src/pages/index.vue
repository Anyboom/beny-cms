<script setup lang="ts">
  import { AppHeader } from "~/widgets/header";
  import { WhyTrustUs } from "~/widgets/why-trust-us";
  import { ClickBait } from "~/widgets/click-bait";
  import { OftenAsk } from "~/widgets/ofter-ask";
  import { AboutUs } from "~/widgets/about-us";
  import { HalfStats } from "~/widgets/half-stats";
  import { MainBanner } from "~/widgets/main-banner";
  import { PersonalForecast } from "~/widgets/personal-forecast";
  import { AppFooter } from "~/widgets/footer";
</script>

<template>
  <AppHeader />
  <MainBanner />
  <AboutUs />
  <WhyTrustUs />
  <HalfStats />
  <ClickBait />
  <OftenAsk />
  <PersonalForecast />
  <AppFooter />
</template>

<style scoped></style>
