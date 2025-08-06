import NodesContext from '@/context/nodes-context'

import { Square } from 'lucide-react'
import React from 'react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from './ui/context-menu'

const CustomNodes = [
  {
    label: 'Conditional Node',
    icon: <Square />,
    type: 'conditionalNode',
    data: { label: 'Conditional Node', content: '' }
  }
]

export const AppContextMenu = ({ children }: { children: React.ReactNode }) => {
  const { addNode } = React.useContext(NodesContext)

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        {CustomNodes.map((node) => (
          <ContextMenuItem
            key={node.type}
            onClick={() => addNode({ data: node.data, type: node.type })}
          >
            {node.icon}
            {node.label}
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  )
}
