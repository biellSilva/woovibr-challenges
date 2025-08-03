import { nodeTypes } from '@/constants/flow'
import EdgesContext from '@/context/edges-context'
import MousePosContext from '@/context/mouse-pos-context'
import NodesContext from '@/context/nodes-context'
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
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

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      fitView
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onPaneMouseMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY })
      }}
    >
      <Background />
    </ReactFlow>
  )
}
