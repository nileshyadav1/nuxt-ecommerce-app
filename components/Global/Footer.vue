<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-6 col-lg-4 mb-4" >
          <div class="logo">
           
            <div>
              <h1 class="m-0 text-white">HandyCart</h1>
            </div>
          </div>
          <p class="footer__text mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            reiciendis nisi odit architecto rem autem cum voluptatibus, sint,
            eum esse voluptas earum!
          </p>
        </div>
        <div class="col-6 col-md-6 col-lg-3 mb-4">
          <div class="footer__quick-links">
            <h4 class="quick__links-title">Top Categories</h4>
            <ul>
              <li>
                <nuxt-link to="#" >Clothes</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Footwear</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Accessories</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-6 col-md-6 col-lg-2 mb-4">
          <div class="footer__quick-links">
            <h4 class="quick__links-title">Useful Links</h4>
            <ul>
              <li>
                <nuxt-link to="#">About</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Contact</nuxt-link>
              </li>
              <li>
                <nuxt-link to="#">Privacy Policy</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-6 col-md-6 col-lg-3 mb-4">
          <div class="footer__quick-links">
            <h4 class="quick__links-title">Contact</h4>
            <ul class="footer__contact">
              <li class="d-flex align-items-center gap-2">
                <span><i class="ri-map-pin-line"></i></span>
                <p >123, Amli , Silvassa -396230</p>
              </li>
              <li class="d-flex align-items-center gap-2">
                <span><i class="ri-phone-line"></i></span>
                <p>+9000000000</p>
              </li>
              <li class="d-flex align-items-center gap-2">
                <span><i class="ri-mail-line"></i></span>
                <p>mail@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12">
          <p class="footer__copyright">
            Copyright {{ getCopyrightYear }} HandyCart. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    getCopyrightYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  padding-top: 60px;
  padding-bottom: 30px;
  background: var(--primary-color);
}

.footer__text{
  line-height: 30px;
  color:rgb(255,255,255,0.735);
}

.footer__quick-links .quick__links-title{
 margin-bottom: 20px;
 font-size: 1.1rem;
 color:#fff;
}
.footer__quick-links ul li a{
  color:rgb(255,255,255,0.735);
   padding: 10px 0;
}
.footer__quick-links ul li {
  padding: 5px 0;
}

.footer__contact li {
  gap: 10px;
}
.footer__contact li span , .footer__contact li p{
  color:rgb(255,255,255,0.735);
  

}
.footer__contact li span{
  font-size:1.2rem

}
.footer__contact li p{
  font-size:0.9rem;
}

.footer__copyright{

  color:rgb(255,255,255,0.735);
  font-size: 0.9rem;
  margin-top: 40px;
  text-align: center;
}
</style>
