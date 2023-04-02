<template>
  <div>
    <section class="common__section">
        <div class="container">
            <h1>{{title}}</h1>
        </div>
    </section>
  </div>
</template>

<script>
export default {
props:['title']
}
</script>

<style scoped>
.common__section{
    background: linear-gradient(rgba(0,0,0,0.562) , rgba(0,0,0,0.562)) , url("https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") no-repeat center center;
    background-size: cover;
    padding: 100px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.common__section h1 {
    color: #fff;
    text-align: center;
    font-weight: 600;
}
</style>