<template>
  <div>
    <section>
      <div class="container">
        <div class="row InfoSection">
          <div class="col-12  col-lg-7 col-xl-8 bg-light d-flex align-items-center justify-content-center">
            <h1>Map</h1>
          </div>
          <div class="col-12  col-lg-5 col-xl-4 ">
           <div class="contact-info-container">
                  <div class="contact-icon">
                     <span>
                           
                            <i class="ri-phone-fill"></i>
                        </span>
                        <h6>Contact Us</h6>
                  </div>
                  <div class="media-body">
                    <p>+91 123 - 456 - 7890</p>
                    <p>+91 123 - 456 - 7890</p>
                  </div>
                </div>
           <div class="contact-info-container">
                  <div class="contact-icon">
                     <span>
                           
                           <i class="ri-map-pin-2-fill"></i>
                        </span>
                        <h6>Address</h6>
                  </div>
                  <div class="media-body">
                    <p>ABC Complex, Amli</p>
                    <p>Silvassa - 396230</p>
                  </div>
                </div>
           <div class="contact-info-container">
                  <div class="contact-icon">
                     <span>
                           
                            <i class="ri-mail-fill"></i>
                        </span>
                        <h6>Email</h6>
                  </div>
                  <div class="media-body">
                    <p>test@gmail.com</p>
                    <p>test@gmail.com</p>
                  </div>
                </div>
          
          </div>
        </div>

        <!-- Contact Message Section -->
        <div class="row MessageSection">
          <div class="col-12">
            <div class="row">
              <div class="col-12 col-md-6">
                 <div class="form__group">
                  <label for="fname">First Name</label>
                      <input type="text" id="fname" placeholder="First Name">
                    </div>
              </div>
              <div class="col-12 col-md-6">
                 <div class="form__group">
                  <label for="lname">Last Name</label>
                      <input type="text" id="lname" placeholder="Last Name">
                    </div>
              </div>
              <div class="col-12 col-md-6">
                 <div class="form__group">
                  <label for="phone">Phone Number</label>
                      <input type="number" id="phone" placeholder="Enter your number">
                    </div>
              </div>
              <div class="col-12 col-md-6">
                 <div class="form__group">
                  <label for="email">Email</label>
                      <input type="email" id="email" placeholder="Email">
                    </div>
              </div>
              <div class="col-12 ">
                 <div class="form__group">
                  <label for="message">Write Your Message</label>
                       <textarea rows="4" type="text" id="message" placeholder="Write Your Message" />
                    </div>
              </div>
              <div class="col-12">
                <button type="submit" class="buy__btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.InfoSection{
  padding-bottom: 70px;
}
.contact-info-container{
 
  display: flex;
  padding:10px 5px;
}
.contact-icon{
  border-right: 1px solid #ddd;
    text-align: center;
    width: 130px;
}
.contact-icon span{
  font-size:1.1rem;
  vertical-align: middle;
}
.contact-icon h6{
     color: var(--primary-color);
    font-weight: 600;
    padding-top: 5px;
    text-transform: uppercase;
}
.media-body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.media-body p{
  color: var(--primary-color);
  font-weight: 600;
  padding-top: 5px;
}
.form__group label{
      color: var(--primary-color);
    font-size: 13px;
    font-weight: 600;
    text-transform: capitalize;
}

.form__group input , .form__group textarea{
  width: 100%;
  border:1px solid var(--primary-color);
  border-radius: 5px;
  padding:8px 20px;
}
.form__group input:focus, .form__group textarea:focus{
outline: none;
}
.form__group {
margin-bottom: 30px;
}

.form__group span{
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: coral;
  font-weight: 600;
  cursor: pointer;
}

@media only screen and (max-width:991px) {
  .InfoSection{
    padding-bottom:50px ;
  }
  .contact-info-container{
     display: block;
        border-bottom: 1px solid #ddd;
    margin-top: 15px;
    padding-bottom: 10px;
    padding-left: 0;
    text-align: center;
  }
  .contact-icon{
    border-right: 0;
    margin: 0 auto 10px;
    width:100%;
  }
  .contact-icon span{
  font-size:1.5rem;
}
  .media-body p{
  color: var(--primary-color);
  font-weight: 600;
  padding-top: 5px;
  margin-bottom: 10px;
}
}
</style>