<template>
  <div id="app">
    <div class="container">
      <div align="center">
        <b-jumbotron>
          <template v-slot:header>ถอนวิชานี้ดีหรือเปล่าน้าาา?</template>

          <template v-slot:lead>
            หวังว่าระบบนี้จะช่วยทำให้คุณตัดสินใจถอนวิชาที่เรียนอยู่ได้ง่ายขึ้นไม่มากก็น้อย<br>
            เพียงแค่กรอกคะแนนมิดเทอมเราก็จะให้คำแนะนำกับคุณเอง
          </template>

          <hr class="my-4">

          <p>
            ระบบการตัดสินใจนี้สร้างจากฐานความรู้เดิมที่มีเท่านั้น โปรดใช้วิจารณญานในการใช้ระบบนี้
          </p>
          <div align="center">
            <b-button 
              variant="warning" 
              href="#" 
              size="lg" 
              v-b-modal.modal-form 
              id="adviceBtn"
              >ขอคำแนะนำ</b-button>

              <b-popover target="adviceBtn" triggers="hover">
                มีคนขอคำแนะนำแล้วกว่า <b>{{this.numberOfAdvised}}</b> ครั้ง
              </b-popover>
          </div>
        </b-jumbotron>
      </div>
    </div>

    <formPage/>
    <success/>
  </div>
</template>

<script>

import formPage from './components/FormPage.vue'
import success from './components/Success.vue'
import KnowledgeProvider from './components/provider/KnowledgeProvider'

export default {
  name: 'App',
  components: {
    formPage,
    success
  },
  data(){
    return{
      numberOfAdvised : null,
    }
  },
  async mounted(){
    let temp = await KnowledgeProvider()
    this.numberOfAdvised = temp.count
  }
}
</script>

<style >
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* background-color: #2c3e50; */
  font-family: "Anantason-Regular";
  src: url("assets/fonts/Anantason-Regular.woff2") format("woff2"); /* Modern Browsers */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@font-face {
  font-family: "Anantason-Regular";
  src: url("assets/fonts/Anantason-Regular.woff2") format("woff2"); /* Modern Browsers */
  font-weight: normal;
  font-style: normal;
}

html , body {
  /* background-color: #2c3e50; */
  font-family: "Anantason-Regular";
  src: url("./../src/assets/fonts/Anantason-Regular.woff2") format("woff2"); /* Modern Browsers */
  font-weight: normal;
  font-style: normal;
}
</style>
