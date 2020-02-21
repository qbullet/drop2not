import axios from 'axios'
const URL = 'https://natdanaispace.cf/dss/select_api.php?base=subject&api=CNL2C8VD'

async function SubjProvider () {
    const resp = await axios.get(URL)
    return resp.data
}

export default SubjProvider