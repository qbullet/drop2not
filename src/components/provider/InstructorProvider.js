import axios from 'axios'
const URL = 'https://natdanaispace.cf/dss/select_api.php?base=instructor&api=CNL2C8VD'

async function InstProvider () {
    const resp = await axios.post(URL)
    return resp.data
}

export default InstProvider