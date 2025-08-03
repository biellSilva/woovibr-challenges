import React from 'react'
import { CreateConditionalNode } from './create-conditional-node'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from './ui/context-menu'

export const AppContextMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <CreateConditionalNode />
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
