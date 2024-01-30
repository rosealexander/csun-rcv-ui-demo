import Graph from "./Graph";
import {useCallback, useEffect, useState} from "react";
import {fetchDataset, fetchStreamInfo} from "../../api";
import {Container, Skeleton} from "@mui/material";
import Video from "./Video";

const colors = [
  '#FF0000',
  '#008000',
  '#0000FF',
  '#800080',
  '#808000',
  '#FF00FF',
  '#FFFF00',
  '#00FFFF',
  '#00FF00',
  '#000080',
]

const buildGraphData = (items) => {
  items = items.slice(Math.max(items.length - 30, 0))

  const labels = items.map(item => item['Time'])

  const categories = Array.from(new Set(items.flatMap(item => item['Category'].split(', '))))

  const datasets = categories.map((category, idx) => {
    return {
      label: category,
      data: items.map(item => item['Category'].split(', ').filter(c => c === category).length),
      borderColor: colors[idx % 10],
      backgroundColor: colors[idx % 10],
      yAxisID: 'y',
    }
  })

  return {labels, datasets};
}

const Body = (callback, deps) => {
  const [streamId, setStreamId] = useState('0')
  const [graphData, setGraphData] = useState(buildGraphData([]))

  const updateData = (dataset) => {
    const new_data = buildGraphData(dataset)
    setGraphData(new_data)
  }

  const update = useCallback(() => fetchStreamInfo().then(res => {
    const sid = 'sid' in res ? res.sid : '0'
    if (sid !== streamId) setStreamId(sid)
    if (sid !== '0') fetchDataset(sid).then(res => updateData(res["Items"]))
  }),[streamId])

  useEffect( () => {
    (async () => await update())()
    setInterval(async () => await update(), 2 * 1000)
  }, [update])

  return (
    <Container maxWidth={"sm"}>
      {Number(streamId) ? <Video sid={streamId}/> : <Skeleton variant="rectangular" width={552} height={414} />}
      <Graph sid={streamId} data={graphData}/>
    </Container>
  )
}

export default Body;
