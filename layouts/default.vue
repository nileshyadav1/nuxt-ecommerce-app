<template>
  <div>
    <div >
     <Navbar   />
   </div>
  
    <div >
         <Nuxt />
    </div>
    <div >
        <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Global/Navbar.vue"
import Footer from "~/components/Global/Footer.vue"
export default {
 data(){
        return{
            // User:{}
        }
    },
    components:{
        Navbar,
        Footer
    },
}
</script>

<style>

</style>