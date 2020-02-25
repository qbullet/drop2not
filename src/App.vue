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
            ระบบการตัดสินใจนี้สร้างจากฐานความรู้ความคิดเห็นของทีมพัฒนาเท่านั้น โปรดใช้วิจารณญานในการใช้ระบบนี้
          </p>
          <div align="center">
            
            <b-button 
              variant="warning" 
              href="#" 
              size="lg" 
              v-b-modal.modal-form 
              id="adviceBtn"
              >ขอคำแนะนำ</b-button>
          
              <b-popover target="adviceBtn" triggers="hover" placement="below">
                มีคนขอคำแนะนำแล้วกว่า <b>{{this.numberOfAdvised}}</b> ครั้ง
              </b-popover>

              <span style="margin-left:5%">
                <b-button 
                variant="primary" 
                href="#" 
                size="lg" 
                v-b-modal.modal-graph 
                id="graphBtn"
                >ดูผลสรุป</b-button>
              </span>
          </div>
        </b-jumbotron>
      </div>
    </div>

    <formPage/>
    <success/>
    
    <b-modal 
        id="modal-graph" 
        ref="modal-graph"
        size="lg" 
        title="สรุปผลลัพธ์ทั้งหมด" 
        scrollable
        hide-footer
        :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant"
        :body-bg-variant="bodyBgVariant"
        :body-text-variant="bodyTextVariant"
        :footer-bg-variant="footerBgVariant"
        :footer-text-variant="footerTextVariant"
    >
      <b-progress show-progress :max="graph.max" class="mb-3" size="lg" >
        <b-progress-bar variant="success" :value="graph.values.noDrop" animated></b-progress-bar>
        <b-progress-bar variant="danger" :value="graph.values.drop" animated></b-progress-bar>
      </b-progress>
      
      <div align="center">
        <h4>
          ไม่ถอน <b-badge variant="success">{{graph.values.noDrop}}%</b-badge>
          <span style="margin-left:5%">ถอน <b-badge variant="danger">{{graph.values.drop}}%</b-badge></span>
          <span style="margin-left:5%">จากทั้งหมด <b-badge variant="primary">{{graph.summary}} สถิติ</b-badge></span>
        </h4>
        
      </div>
    </b-modal>
  </div>
</template>

<script>
import formPage from './components/FormPage.vue'
import success from './components/Success.vue'
import KnowledgeProvider from './components/provider/KnowledgeProvider'
import StatsProvider from './components/provider/StatsProvider'

export default {
  name: 'App',
  components: {
    formPage,
    success
  },
  data(){
    return{
      graph:{
        values:{
          drop:0,
          noDrop:0
        },
        max:100,
        summary:0
      },
      
      numberOfAdvised : null,
      headerBgVariant: 'primary',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'primary',
      footerTextVariant: 'dark'
    }
  },
  methods:{
    
  },
  async mounted(){
    let temp = await KnowledgeProvider()
    this.numberOfAdvised = temp.count

    let stats = await StatsProvider()
    this.graph.values.drop = stats.drop
    this.graph.values.noDrop = stats.no
    this.graph.summary = stats.sumary
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
