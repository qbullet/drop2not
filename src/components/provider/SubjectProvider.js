import axios from 'axios'
const URL = 'http://154.202.3.85/dss/select_api.php?base=subject&api=CNL2C8VD'

async function SubjProvider () {
    const resp = await axios.get(URL)
    return resp.data
}

export default SubjProvider