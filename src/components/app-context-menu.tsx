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
    icon: <Square />,
    type: 'conditionalNode',
    data: { label: 'Conditional', content: '' }
  },
  {
    icon: <Square />,
    type: 'webhookNode',
    data: { label: 'Webhook', url: '', method: 'POST', headers: '', body: '' }
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
            {node.data.label}
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  )
}
