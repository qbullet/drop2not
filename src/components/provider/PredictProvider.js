import axios from 'axios'
// const URL = 'http://154.202.3.85/dss/cal.php?api_key=CNL2C8VD&fbclid=IwAR1u7AvWT-M0SPWc4VeEJUjUOkHywyOU9XpOSBjzJNjkZHj84K9GNOWKTrY'
const URL = 'https://154.202.3.85/dss/cal.php?'


async function PredictProvider (data) {
    let payload = 
        'api_key=CNL2C8VD&midterm=' + data.midterm
        + '&yearOfEdu=' + data.yearOfEdu
        + '&GPAX=' + data.GPAX
        + '&subject=' + data.subject
        + '&instructor=' + data.instructor
        + '&knowledge=' + data.knowledge
        + '&dohomeWork=' + data.dohomeWork
        + '&takeAclass=' + data.instructor

    const resp = await axios.post(URL.concat(payload))
    return resp.data
}

export default PredictProvider