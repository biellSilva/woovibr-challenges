import { useReactFlow, type Node } from '@xyflow/react'
import { createContext, useContext, useState } from 'react'
import MousePosContext from './mouse-pos-context'

export interface AddNodeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>
  type: string
}

interface ContextProps {
  nodes: Node[]
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>
  addNode: (props: AddNodeProps) => void
}

const NodesContext = createContext<ContextProps>({} as ContextProps)

const initialNodes = [
  {
    id: 'n1',
    position: { x: 0, y: 0 },
    data: { label: 'Start' },
    type: 'startNode'
  }
]

export const NodesProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes)
  const { position } = useContext(MousePosContext)
  const { screenToFlowPosition } = useReactFlow()

  const addNode = ({ data, type }: AddNodeProps) => {
    const node: Node = {
      id: `n${nodes.length + 1}`,
      position: screenToFlowPosition(position),
      data,
      type
    }
    setNodes((prevNodes) => [...prevNodes, node])
  }

  return (
    <NodesContext.Provider value={{ nodes, setNodes, addNode }}>
      {children}
    </NodesContext.Provider>
  )
}

export default NodesContext
