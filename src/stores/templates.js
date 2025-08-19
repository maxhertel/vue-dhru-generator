import { defineStore } from "pinia";

export const useTemplateStore = defineStore("templates", {
  state: () => ({
    templates: JSON.parse(localStorage.getItem("templates") || "[]")
  }),
  actions: {
    addTemplate(template) {
      this.templates.push(template);
      this.save();
    },
    removeTemplate(index) {
      this.templates.splice(index, 1);
      this.save();
    },
    save() {
      localStorage.setItem("templates", JSON.stringify(this.templates));
    }
  }
});
