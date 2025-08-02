import NodesContext from '@/context/nodes-context'
import type { Node } from '@xyflow/react'
import { SquareDashedBottomCode } from 'lucide-react'
import { useContext } from 'react'

export const NodesMenu = () => {
  const { nodes, setNodes } = useContext(NodesContext)

  function addNode() {
    const node: Node = {
      id: `n${nodes.length + 1}`,
      position: { x: 0, y: 0 },
      data: { label: `Node ${nodes.length + 1}` }
    }
    setNodes((prevNodes) => [...prevNodes, node])
  }
  return (
    <>
      <div onClick={addNode} className="flex items-center gap-2 cursor-pointer">
        <SquareDashedBottomCode />
        <span>Components</span>
      </div>
    </>
  )
}
