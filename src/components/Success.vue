<template>
    <div class="success">
        <b-modal 
            id="modal-nodrop" 
            ref="modal-nodrop"
            size="md" 
            title="คำแนะนำจากเรา" 
            scrollable
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :body-bg-variant="bodyBgVariant"
            :body-text-variant="bodyTextVariant"
            :footer-bg-variant="footerBgVariant"
            :footer-text-variant="footerTextVariant"
        >
            <template>
                <div align="center">
                    <div style="padding-bottom:5%;"><img src="../assets/img/icon-congratulations.svg"/></div>
                    <h3>เราแนะนำให้คุณไม่ดรอปวิชานี้</h3>
                </div>
            </template>
        </b-modal>

        <b-modal 
            id="modal-drop" 
            ref="modal-drop"
            size="md" 
            title="คำแนะนำจากเรา" 
            scrollable
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :body-bg-variant="bodyBgVariant"
            :body-text-variant="bodyTextVariant"
            :footer-bg-variant="footerBgVariant"
            :footer-text-variant="footerTextVariant"
        >
            <template>
                <div align="center">
                    <div style="padding-bottom:5%;"><img src="../assets/img/icon-sad.svg"/></div>
                    <h3>เราแนะนำให้คุณถอนวิชานี้</h3>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'Success',
        data(){
            return{
                result:true,
                rand:0,
                headerBgVariant: 'primary',
                headerTextVariant: 'light',
                bodyBgVariant: 'light',
                bodyTextVariant: 'dark',
                footerBgVariant: 'primary',
                footerTextVariant: 'dark'
            }
        },
        methods: {
        },
    }
</script>

<style scoped>

#success {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color: #2c3e50; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>