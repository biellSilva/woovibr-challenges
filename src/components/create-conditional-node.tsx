import MousePosContext from '@/context/mouse-pos-context'
import NodesContext from '@/context/nodes-context'
import { useReactFlow, type Node } from '@xyflow/react'
import { Square } from 'lucide-react'
import { useContext } from 'react'

export const CreateConditionalNode = () => {
  const { nodes, setNodes } = useContext(NodesContext)
  const { position } = useContext(MousePosContext)
  const { screenToFlowPosition } = useReactFlow()

  function addNode() {
    const node: Node = {
      id: `n${nodes.length + 1}`,
      position: screenToFlowPosition(position),
      data: { label: `Node ${nodes.length + 1}` },
      type: 'conditionalNode'
    }
    setNodes((prevNodes) => [...prevNodes, node])
  }
  return (
    <>
      <div onClick={addNode} className="flex items-center gap-2 cursor-pointer">
        <Square />
        <span>Conditional Node</span>
      </div>
    </>
  )
}
