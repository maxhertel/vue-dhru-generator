<template>
  <div class="mt-6">
    <h2 class="text-xl font-bold mb-3">Preview</h2>
    <button class="mb-4 px-4 py-2 bg-blue-500 text-white rounded" @click="addSection">Adicionar Seção</button>
    <div v-for="(section, idx) in sections" :key="idx" class="mb-4">
      <input v-model="section.title" placeholder="Título" class="border p-1 mr-2" />
      <input v-model="section.background" placeholder="Cor de fundo" class="border p-1 mr-2" />
      <textarea v-model="section.text" placeholder="Texto" class="border p-1 mr-2"></textarea>
      <button @click="removeSection(idx)" class="text-red-500">Remover</button>
    </div>
    <div class="border p-4 bg-white rounded shadow" v-html="generateHtml()"></div>
    <ExportButton :html="generateHtml()" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ExportButton from "./ExportButton.vue";

const sections = ref([
  {
    title: "Título da Seção",
    background: "#f5f7fa",
    text: "Texto da seção...",
  },
]);

function addSection() {
  sections.value.push({
    title: "",
    background: "#ffffff",
    text: "",
  });
}

function removeSection(idx) {
  sections.value.splice(idx, 1);
}

function generateHtml() {
  return sections.value
    .map(
      (section) => `
      <div style="background: ${section.background}; padding: 30px; border-radius: 15px; margin-bottom: 20px;">
        <h2 style="color: #2c3e50; text-align: center; font-size: 28px; margin-bottom: 20px; font-weight: 600;">
          ${section.title}
        </h2>
        <div style="background: #ffffff; padding: 20px; border-radius: 10px;">
          ${section.text}
        </div>
      </div>
    `
    )
    .join("");
}
</script>
