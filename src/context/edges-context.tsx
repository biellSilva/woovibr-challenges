import type { Edge } from '@xyflow/react'
import { createContext, useState } from 'react'

interface ContextProps {
  edges: Edge[]
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>
}

const EdgesContext = createContext<ContextProps>({} as ContextProps)

export const EdgesProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [edges, setEdges] = useState<Edge[]>([])

  return (
    <EdgesContext.Provider value={{ edges, setEdges }}>
      {children}
    </EdgesContext.Provider>
  )
}

export default EdgesContext
