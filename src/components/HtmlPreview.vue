<template>
  <div v-if="template" class="mt-6">
    <h2 class="text-xl font-bold mb-3">Preview</h2>
    <div class="border p-4 bg-white rounded shadow" v-html="generateHtml()"></div>
    <ExportButton :html="generateHtml()" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ExportButton from "./ExportButton.vue";

const template = ref(null);

onMounted(() => {
  window.addEventListener("select-template", e => {
    template.value = e.detail;
  });
});

function generateHtml() {
  if (!template.value) return "";
  return `
    <div style="background: linear-gradient(135deg, #f5f7fa, #c3cfe2); padding: 30px; border-radius: 15px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); font-family: 'Segoe UI', sans-serif; max-width: 800px; margin: 20px auto;">
      <h2 style="color: #2c3e50; text-align: center; font-size: 28px; margin-bottom: 20px; font-weight: 600;">
        ${template.value.title}
      </h2>
      <div style="background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        ${template.value.description}
      </div>
    </div>
  `;
}
</script>
