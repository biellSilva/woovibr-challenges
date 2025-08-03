import React from 'react'
import { CreateDefaultNode } from './create-default-node'
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
          <CreateDefaultNode />
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
