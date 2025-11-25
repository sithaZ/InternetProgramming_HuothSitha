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
  border: ;
  display: flex;
  border-radius: 1;
  align-items: center;
  padding-left: 60px;
  margin-bottom: 40px;
  margin-top: 20px;
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

/* Subscribe Form Styling */
.subscribe-box {
  background: white;
  padding: 10px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  width: 450px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.mail-icon {
  padding-left: 20px;
  font-size: 18px;
  color: #7e7e7e;
}

input {
  border: none;
  outline: none;
  flex: 1;
  padding-left: 15px;
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
</style>
