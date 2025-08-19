<template>
  <div class="templates">
    <h2>Gerenciador de Templates</h2>

    <div class="row">
      <div class="col-md-6">
        <TemplateForm />
      </div>
      <div class="col-md-6">
        <HtmlPreview />
      </div>
    </div>

    <hr />

    <TemplateList />

    <ExportButton />
  </div>
</template>

<script>
import TemplateForm from '../components/TemplateForm.vue'
import HtmlPreview from '../components/HtmlPreview.vue'
import TemplateList from '../components/TemplateList.vue'
import ExportButton from '../components/ExportButton.vue'

export default {
  name: 'Templates',
  components: {
    TemplateForm,
    HtmlPreview,
    TemplateList,
    ExportButton
  }
}
</script>
