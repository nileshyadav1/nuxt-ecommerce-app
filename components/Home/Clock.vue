<template>
  <div>
    <div class="clock__wrapper d-flex align-items-center gap-5">
        <div class="clock__data d-flex align-items-center gap-5 ">
            <div>
                <h1 class="text-white fs-1">{{days}}</h1>
                <h5 class="text-white fs-5">Days</h5>
            </div>
            <span class="text-white fs-1 mx-5">:</span>
        </div>
        <div class="clock__data d-flex align-items-center gap-5">
            <div>
                <h1 class="text-white fs-1">{{hours}}</h1>
                <h5 class="text-white fs-5">Hours</h5>
            </div>
            <span class="text-white fs-1 mx-5">:</span>
        </div>
        <div class="clock__data d-flex align-items-center gap-5">
            <div>
                <h1 class="text-white fs-1">{{minutes}}</h1>
                <h5 class="text-white fs-5">minutes</h5>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
let interval
export default {
data(){
    return {
        days:'',
        hours:'',
        minutes:''
    }
},
methods:{
    countDown(){
        let destination = this.destinationDate
        interval  = setInterval(()=>{
            const now = new Date().getTime()
            const different = destination - now
           

           if(destination < 0) clearInterval(interval)
           else{
             this.days = Math.floor(different / (1000 * 60 * 60 *24))
           this.hours = Math.floor(different % (1000 * 60 * 60 *24) / (1000 *60*60))
           this.minutes = Math.floor(different % (1000 * 60 * 60) / (1000 *60))
           }
        })
    }
},

computed:{
    destinationDate(){
        return new Date('June 15, 2023').getTime()
    }
},
created(){
    this.countDown()
}
}
</script>

<style scoped>
.fs-1{
    font-size:2.3rem;
}
.fs-5{
    font-size:1.1rem;
}

@media only screen and (max-width:992px){
   .clock__data h1{
    font-size: 1.1rem !important;
   }
   .clock__data h5{
    font-size: 0.9rem !important;
   }
    
}
</style>