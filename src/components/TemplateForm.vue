<template>
  <div class="p-4 bg-gray-100 rounded-xl shadow-md mb-4">
    <h2 class="text-xl font-bold mb-3">Criar Novo Template</h2>
    <input v-model="title" placeholder="Título" class="p-2 border rounded w-full mb-2" />
    <textarea v-model="description" placeholder="Descrição (HTML permitido)"
      class="p-2 border rounded w-full mb-2 h-32"></textarea>
    <button @click="saveTemplate" class="bg-blue-500 text-white px-4 py-2 rounded">
      Salvar Template
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTemplateStore } from "../stores/templates"

const store = useTemplateStore();
const title = ref("");
const description = ref("");

function saveTemplate() {
  if (!title.value) return alert("Título obrigatório!");
  store.addTemplate({
    title: title.value,
    description: description.value,
    createdAt: new Date().toISOString()
  });
  title.value = "";
  description.value = "";
}
</script>
