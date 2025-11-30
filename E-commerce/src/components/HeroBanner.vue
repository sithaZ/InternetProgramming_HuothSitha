<template>
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-title">
        Don't miss amazing<br />
        grocery deals
      </h1>
      <p class="hero-subtitle">Sign up for the daily newsletter</p>

      <div class="subscribe-box">
        <span class="mail-icon"></span>
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>

    <div class="hero-image-wrapper">
      <img src="@/components/Hero/mainhero.png" alt="Grocery Basket" class="hero-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner',
}
</script>

<style scoped>
.hero-container {
  width: 100%;
  height: 400px;
  background-image: url('@/components/Background/herobg.png');
  background-color: #fdf0d5;
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 0 60px; 
  margin-bottom: 40px;
  margin-top: 20px;
  position: relative;
  overflow: hidden; 
}

.hero-content {
  max-width: 50%;
  z-index: 2;
}

.hero-title {
  font-size: 48px;
  font-weight: 800;
  color: #253d4e;
  line-height: 1.2;
  margin-bottom: 15px;
}

.hero-subtitle {
  color: #7e7e7e;
  font-size: 20px;
  margin-bottom: 35px;
  font-weight: 500;
}


.subscribe-box {
  background: white;
  padding: 10px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.mail-icon {
  padding-left: 20px;
  padding-right: 10px;
  font-size: 18px;
  color: #7e7e7e;
}

input {
  border: none;
  outline: none;
  flex: 1;
  padding: 10px 5px;
  font-size: 16px;
  color: #7e7e7e;
}

button {
  background-color: #3bb77e;
  color: white;
  border: none;
  padding: 14px 35px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #29a56a;
  transform: translateY(-2px);
}


.hero-image-wrapper {
  height: 100%;
  display: flex;
  align-items: flex-end; 
  z-index: 1;
}

.hero-img {
  max-height: 90%; 
  width: auto;
  object-fit: contain;
}


@media (max-width: 992px) {
  .hero-container {
    padding: 0 30px;
    height: auto;
    min-height: 350px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  
  .hero-content {
    max-width: 100%;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .subscribe-box {
    margin: 0 auto;
  }

  .hero-image-wrapper {
    display: none; 
  }
}
</style>