import EdgesContext from '@/context/edges-context'
import NodesContext from '@/context/nodes-context'
import TitleContext from '@/context/title-context'
import { Download, Upload } from 'lucide-react'
import { useContext } from 'react'
import { Button } from './ui/button'

export const DownloadUpload = () => {
  const { title, setTitle } = useContext(TitleContext)
  const { nodes, setNodes } = useContext(NodesContext)
  const { edges, setEdges } = useContext(EdgesContext)

  const handleUpload = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'application/json'
    input.onchange = (event) => {
      const target = event.target as HTMLInputElement | null
      const file = target && target.files ? target.files[0] : null
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const data = JSON.parse(e.target?.result as string)
          setTitle(data.title)
          setNodes(data.nodes)
          setEdges(data.edges)
        }
        reader.readAsText(file)
      }
    }
    input.click()
  }

  const handleDownload = () => {
    const data = {
      title,
      nodes,
      edges
    }
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${title}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        className="cursor-pointer"
        onClick={handleDownload}
      >
        <Download />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="cursor-pointer"
        onClick={handleUpload}
      >
        <Upload />
      </Button>
    </div>
  )
}
