<template>
  <div>
    <h2 class="text-xl font-bold mb-3">Templates Salvos</h2>
    <ul>
      <li v-for="(tpl, index) in store.templates" :key="index" class="mb-3 p-3 bg-white rounded shadow">
        <h3 class="font-semibold">{{ tpl.title }}</h3>
        <button @click="selectTemplate(tpl)" class="text-blue-500">Visualizar</button>
        <button @click="store.removeTemplate(index)" class="text-red-500 ml-3">Excluir</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTemplateStore } from "../store/templates";

const store = useTemplateStore();

function selectTemplate(template) {
  const evt = new CustomEvent("select-template", { detail: template });
  window.dispatchEvent(evt);
}
</script>
