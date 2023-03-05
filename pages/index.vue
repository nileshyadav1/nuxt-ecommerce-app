<template>
 <div>
    <h1>Handycart main</h1>

     <LazyImage 
 :src="`https://images5.alphacoders.com/532/532559.jpg`"
 :key="'test-image'"
            style="width:500px;height:500px;"
            :alt="'test-image'"
            :title="'test-image'"
            class="rounded"
 />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
