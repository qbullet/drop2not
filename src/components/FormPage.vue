<template>
  <div class="formPage" >
    <b-modal 
        id="modal-form" 
        ref="modal-form"
        size="md" 
        title="กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง" 
        scrollable
        hide-footer
        :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant"
        :body-bg-variant="bodyBgVariant"
        :body-text-variant="bodyTextVariant"
        :footer-bg-variant="footerBgVariant"
        :footer-text-variant="footerTextVariant"
    >
        <template>
            <div align="center">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" >
                    <b-form-group >
                        <b-form-radio-group
                            id="btn-yearEdu"
                            v-model="form.yearEduSel"
                            :options="options.yearEdus"
                            buttons
                            button-variant="outline-primary"
                            size="sm"
                            name="radio-btn-outline"
                        ></b-form-radio-group>
                    </b-form-group>

                    <b-form-group id="input-group-subject" label-for="input-subject">
                        <b-form-select
                        id="input-subject"
                        v-model="form.subjectSel"
                        :options="options.subjects"
                        required
                        ></b-form-select>
                    </b-form-group>

                    <b-form-group id="input-name-score"  label-for="input-score">
                        <b-form-input
                        id="input-score"
                        v-model="form.score"
                        required
                        min="0"
                        max="100"
                        type="number"
                        placeholder="คะแนนสอบมิดเทอม"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-teacher" label-for="input-teacher">
                        <b-form-select
                        id="input-teacher"
                        v-model="form.teacherSel"
                        :options="options.teachers"
                        required
                        ></b-form-select>
                    </b-form-group>

                    <b-form-group id="input-name-gpa"  label-for="input-gpa">
                        <b-form-input
                        id="input-gpa"
                        v-model="form.gpa"
                        required
                        min="0"
                        max="100"
                        placeholder="เกรดเฉลี่ย"
                        ></b-form-input>
                    </b-form-group>

                    <div>
                        <span><b-button type="submit" variant="primary" size="md">ยืนยัน</b-button></span>
                        <span style="padding-left:3%"><b-button type="reset" variant="danger" size="md">คืนค่า</b-button></span>
                    </div>
                    
            </b-form>
            <!-- <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
            </b-card> -->
            </div>
        </template>
    </b-modal>

    <!-- <b-modal 
        id="modal-result" 
        ref="modal-result"
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
                <div><img src="../assets/img/icon-sad.svg"/></div>
                <h1>เราแนะนำให้คุณถอนวิชานี้</h1>
            </div>
        </template>
    </b-modal> -->
  </div>
</template>

<script>
export default {
    name: 'formPage',
    data(){
        return{
            show: true,
            form: {
                yearEduSel: 1,
                subjectSel: null,
                score: '',
                teacherSel: null,
                gpa: '',
            },

            options:{
                yearEdus:[
                    {text: 'ชั้นปีที่ 1',value: 1 },
                    {text: 'ชั้นปีที่ 2',value: 2 },
                    {text: 'ชั้นปีที่ 3',value: 3 },
                    {text: 'ชั้นปีที่ 4',value: 4 },
                    {text: 'มากกว่าชั้นปีที่ 4',value: 5 },
                ],

                subjects: [
                    { text: 'วิชาที่กำลังตัดสินใจ',value: null ,disabled: true},
                    { text: 'CLIENT/SERVER', value:  '060001'},
                    { text: 'DATA MINING', value:  '060002'},
                    { text: 'DECISSION SUPPORT SYSTEM', value: '060003' },
                    { text: 'CLOUD APP SERVICE', value: '060004' },
                    { text: 'MOBILE APP', value: '060005' },
                ],

                teachers: [
                    { text: 'อาจารย์ผู้สอน',value: null ,disabled: true},
                    { text: 'อาจารย์ประดิษฐ์ พิทักษ์เสถียรกุล', value:  'PPK'},
                    { text: 'อาจารย์วันทนี	ประจวบศุภกิจ', value:  'WMK'},
                    { text: 'อาจารย์สุปีติ	กุลจันทร์', value: 'SKC' },
                    { text: 'อาจารย์ศรายุทธ ธเนศสกุลวัฒนา', value: 'STS' },
                ],

            },

            
            headerBgVariant: 'primary',
            headerTextVariant: 'light',
            bodyBgVariant: 'light',
            bodyTextVariant: 'dark',
            footerBgVariant: 'primary',
            footerTextVariant: 'dark'
        }

        
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            //alert(JSON.stringify(this.form))
            this.$refs['modal-form'].hide()
            //this.$refs['modal-result'].show()
            this.$bvModal.show('modal-result')
            },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.yearEduSel = 1,
            this.form.subjectSel = null,
            this.form.score = '',
            this.form.teacherSel = null,
            this.form.gpa = '',
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
