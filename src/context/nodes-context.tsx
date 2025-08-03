import type { Node } from '@xyflow/react'
import { createContext, useState } from 'react'

interface ContextProps {
  nodes: Node[]
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>
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

  return (
    <NodesContext.Provider value={{ nodes, setNodes }}>
      {children}
    </NodesContext.Provider>
  )
}

export default NodesContext
