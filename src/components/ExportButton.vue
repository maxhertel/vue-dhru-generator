<template>
  <div class="mt-4">
    <button @click="copyHtml" class="bg-green-500 text-white px-4 py-2 rounded">Copiar HTML</button>
    <button @click="downloadHtml" class="bg-gray-500 text-white px-4 py-2 rounded ml-2">Baixar HTML</button>
  </div>
</template>

<script setup>
import { toRaw } from "vue";

const props = defineProps({ html: String });

function copyHtml() {
  navigator.clipboard.writeText(props.html);
  alert("HTML copiado!");
}

function downloadHtml() {
  const blob = new Blob([props.html], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "template.html";
  link.click();
}
</script>
