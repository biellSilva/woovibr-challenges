import { nodeTypes } from '@/constants/flow'
import EdgesContext from '@/context/edges-context'
import MousePosContext from '@/context/mouse-pos-context'
import NodesContext from '@/context/nodes-context'
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  ReactFlow,
  type OnConnect,
  type OnEdgesChange,
  type OnNodesChange
} from '@xyflow/react'
import { useCallback, useContext } from 'react'

export const Flow = () => {
  const { nodes, setNodes } = useContext(NodesContext)
  const { edges, setEdges } = useContext(EdgesContext)
  const { setPosition } = useContext(MousePosContext)

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  )
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  )

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  )

  const onPaneMouseMove = useCallback(() => {
    let timeoutId: NodeJS.Timeout | null = null

    return (event: React.MouseEvent) => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setPosition({ x: event.clientX, y: event.clientY })
      }, 50)
    }
  }, [setPosition])()

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      fitView
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onPaneMouseMove={onPaneMouseMove}
    >
      <Background />
      <Controls />
    </ReactFlow>
  )
}
