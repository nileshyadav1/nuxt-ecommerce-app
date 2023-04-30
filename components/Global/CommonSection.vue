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
    background: linear-gradient(rgba(0,0,0,0.562) , rgba(0,0,0,0.562)) , url("https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") no-repeat 50% 30%;
    background-size: cover;
    padding: 150px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.common__section h1 {
    color: #fff;
    text-align: center;
    font-weight: 600;
}

@media only screen and (max-width:768px){
.common__section{
  padding:70px 0;
}
.common__section h1 {
   font-size: 1.4rem;
}

}
</style>