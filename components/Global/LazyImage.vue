<template>
  <img class="lazyload" :data-src="src" :alt="alt" :title="title" src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkEAEAABoAFhhTXcgAAAAASUVORK5CYII="
  />
</template>
<script>
export default {
  props: { 
    src: { type: String, required: true },
    alt: { type: String, required: false},
    title: { type: String, required: false},
  }
};
</script>

