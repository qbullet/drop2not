import axios from 'axios'
const URL = 'https://natdanaispace.cf/dss/count.php?api=CNL2C8VD'

async function KnowledgeProvider() {
    const resp = await axios.post(URL)
    return resp.data
}

export default KnowledgeProvider