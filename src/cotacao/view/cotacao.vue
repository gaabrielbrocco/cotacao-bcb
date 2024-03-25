<template>
  <dialog-form :controller="controller"/>
</template>

<script setup>
import { cotacaoControllerImpl } from "../di/di";
import DialogForm from "../components/dialog-form.vue";

const controller = cotacaoControllerImpl();
</script>

<style>

</style>