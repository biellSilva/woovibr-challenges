import { ConditionalNode } from '@/components/nodes/conditional-node'
import { StartNode } from '@/components/nodes/start-node'
import type { Node } from '@xyflow/react'

export const nodeTypes = {
  startNode: StartNode,
  conditionalNode: ConditionalNode
}

export const initialNodes: Node[] = [
  {
    id: 'n1',
    type: 'startNode',
    position: { x: 0, y: 0 },
    data: { label: 'Input Node' }
  }
]
