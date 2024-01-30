const metaApi = 'xxxxxxxxxx.execute-api.xxxxxxxxx.amazonaws.com/rcv/app'
const hlsApi = 'xxxxxxxxxx.execute-api.xxxxxxxxx.amazonaws.com/rcv/app'
const streamAPI = 'xxxxxxxxxxxxx.s3.xxxxxxxxx.amazonaws.com/stream'

export const fetchStreamInfo = async () => {
  return await fetch(`https://${metaApi}`).then(async (res) => res.status === 200 ? await res.json() : {})
}

export const fetchDataset = async (sid) => {
  return await fetch(`https://${hlsApi}?sid=${sid}`).then(async (res) => res.status === 200 ? await res.json() : {})
}

export const getManifestUrl = (sid) => {
  return Number(sid) ? `https://${streamAPI}/${sid}/${sid}.m3u8` : 'https://'
}