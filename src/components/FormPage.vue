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
                    <div style="padding-bottom:4%">
                        <b-container class="bv-example-row">
                            <b-row>
                                <b-col>
                                    <label for="input-score">คะแนนสอบกลางภาค</label>
                                    <b-form-spinbutton id="input-score" v-model="form.score" min="1" max="100"></b-form-spinbutton>
                                </b-col>
                                <b-col>
                                    <label for="input-max-score">คะแนนเต็ม</label>
                                    <b-form-spinbutton id="input-max-score" v-model="form.maxScore" min="1" max="100"></b-form-spinbutton>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>

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
                    
                    <b-container class="bv-example-row">
                        <b-row>
                            <b-col >
                                <div class="mt-2" align="right">เกรดเฉลี่ย : </div>
                            </b-col>
                            <b-col cols="8">
                                <b-form-spinbutton id="input-max-score" v-model="form.gpa" min="0.00" max="4.00" step="0.01"></b-form-spinbutton>
                            </b-col>
                        </b-row>
                    </b-container>
                    
                    <b-form-group id="input-name-gpa"  label-for="input-gpa">
                        <b-form-input
                        id="input-gpa"
                        v-model="form.gpa"
                        required
                        type="range"
                        min="0.0"
                        max="4.0"
                        step="0.01"
                        placeholder="เกรดเฉลี่ย"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-subject" label-for="input-subject">
                        <b-form-select
                        id="input-subject"
                        v-model="form.subjectSel"
                        :options="options.subjects"
                        required
                        ></b-form-select>
                    </b-form-group>

                    <b-form-group id="input-group-teacher" label-for="input-teacher">
                        <b-form-select
                        id="input-teacher"
                        v-model="form.teacherSel"
                        :options="options.teachers"
                        required
                        ></b-form-select>
                    </b-form-group>
                    <div align="left">
                        <b-form-group label="ความเข้าใจในเนื้อหา" >
                            <b-form-radio-group
                                id="btn-knowledgeScore"
                                v-model="form.knowledgeScore"
                                :options="options.knowledgeScores"
                                buttons
                                button-variant="outline-primary"
                                size="sm"
                                name="radio-btn-outline"
                            ></b-form-radio-group>
                        </b-form-group>

                        <b-form-group label="การส่งการบ้าน" >
                            <b-form-radio-group
                                id="btn-doHWByMyself"
                                v-model="form.doHWByMyself"
                                :options="options.doHWByMyselves"
                                buttons
                                button-variant="outline-primary"
                                size="sm"
                                name="radio-btn-outline"
                            ></b-form-radio-group>
                        </b-form-group>

                        <b-form-group label="การเข้าเรียน" >
                            <b-form-radio-group
                                id="btn-takeClass"
                                v-model="form.takeClass"
                                :options="options.takeClasses"
                                buttons
                                button-variant="outline-primary"
                                size="sm"
                                name="radio-btn-outline"
                            ></b-form-radio-group>
                        </b-form-group>
                    </div>

                    <div>
                        <span><b-button type="submit" variant="primary" size="md">ยืนยัน</b-button></span>
                        <span style="padding-left:3%"><b-button type="reset" variant="danger" size="md">คืนค่า</b-button></span>
                    </div>
                    
            </b-form>
            </div>

        </template>
    </b-modal>

  </div>
</template>

<script>
import SubjProvider from './provider/SubjectProvider'
import InstProvider from './provider/InstructorProvider'
import PredictProvider from './provider/PredictProvider'

export default {
    name: 'formPage',
    data(){
        return{
            show: true,
            form: {
                yearEduSel: 1,
                subjectSel: null,
                score: 15,
                maxScore:30,
                teacherSel: null,
                gpa: 2.0,
                knowledgeScore:3,
                doHWByMyself:2,
                takeClass:1,
            },

            options:{
                yearEdus:[
                    {text: 'ชั้นปีที่ 1',value: 1 },
                    {text: 'ชั้นปีที่ 2 และ 3',value: 2 },
                    {text: 'ชั้นปีที่ 4 ขึ้นไป',value: 3 },
                ],
                subjects: [],
                teachers: [],
                knowledgeScores:[
                    {text: 'ไม่ค่อยเข้าใจ',value: 1 },
                    {text: 'ปานกลาง',value: 2 },
                    {text: 'เข้าใจดี',value: 3 },
                ],
                doHWByMyselves:[
                    {text: 'ไม่ค่อยส่งเลย',value: 1 },
                    {text: 'ส่งบ่อยครั้ง',value: 2 },
                    {text: 'ส่งทุกครั้ง',value: 3 },
                ],
                takeClasses:[
                    {text: 'ขาดเรียนบ่อย',value: 1 },
                    {text: 'ขาดบ้างบางครั้ง',value: 2 },
                    {text: 'เข้าเรียนเสมอ',value: 3 },
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
        async onSubmit(evt) {
            evt.preventDefault()
            //alert(JSON.stringify(this.form))
            let resp = await PredictProvider(this.resultCalc())
            
            this.$refs['modal-form'].hide()
            // Reset our form values
            this.form.yearEduSel = 1
            this.form.subjectSel = null
            this.form.score = 15
            this.form.maxScore = 30
            this.form.teacherSel = null
            this.form.gpa = 2.0
            this.form.knowledgeScore = 3
            this.form.doHWByMyself = 2
            this.form.takeClass = 1
            window.alert(resp.finish)
            if (resp.state == 100)this.$bvModal.show('modal-drop')
            else if (resp.state == 200)this.$bvModal.show('modal-nodrop')
            },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.yearEduSel = 1
            this.form.subjectSel = null
            this.form.score = 15
            this.form.maxScore = 30
            this.form.teacherSel = null
            this.form.gpa = 2.0
            this.form.knowledgeScore = 3
            this.form.doHWByMyself = 2
            this.form.takeClass = 1
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        resultCalc(){
            let midscore = (this.form.score * 100) / this.form.maxScore

            let result = {
                midterm:midscore,
                yearOfEdu:this.form.yearEduSel,
                GPAX:this.form.gpa,
                subject:this.form.subjectSel,
                instructor:this.form.teacherSel,
                knowledge:this.form.knowledgeScore,
                dohomeWork:this.form.doHWByMyself,
                takeAclass:this.form.takeClass,
            }

            return result
        },
        async initData(){
            let subj = await SubjProvider()
            let inst = await InstProvider()
            
            this.options.subjects.push({ text: 'วิชาที่กำลังตัดสินใจ',value: null ,disabled: true})
            subj.forEach(element => {
                this.options.subjects.push({ text: element.subject, value: element.weight})
            });
            this.options.teachers.push({ text: 'อาจารย์ผู้สอน',value: null ,disabled: true})
            inst.forEach(element => {
                this.options.teachers.push({ text: element.name, value: element.weight})
            });
            
            // this.options.subjects.push({ text: 'วิชาที่กำลังตัดสินใจ',value: null ,disabled: true})
            // for(let i=1;i<=subj.length;i++)this.options.subjects.push({ text: subj[i].subject, value: subj[i].weight})
            // this.options.teachers.push({ text: 'อาจารย์ผู้สอน',value: null ,disabled: true})
            // for(let i=1;i<=inst.length;i++)this.options.teachers.push({ text: inst[i].name, value: inst[i].weight})
        }
    },
    mounted() {   
        this.initData()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
