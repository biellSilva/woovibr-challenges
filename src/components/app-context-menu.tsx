import { ChevronLeft, ChevronRight, Download, Upload } from 'lucide-react'
import React from 'react'
import { NodesMenu } from './nodes-menu'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger
} from './ui/context-menu'
import { Separator } from './ui/separator'

export const AppContextMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="flex flex-col gap-y-1">
        <ContextMenuGroup>
          <ContextMenuItem>
            <NodesMenu />
          </ContextMenuItem>
        </ContextMenuGroup>

        <Separator />

        <ContextMenuGroup>
          <ContextMenuItem>
            <ChevronLeft />
            <span>Back</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <ChevronRight />
            <span>Forward</span>
          </ContextMenuItem>
        </ContextMenuGroup>

        <Separator />

        <ContextMenuGroup>
          <ContextMenuItem>
            <Download />
            <span>Download</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <Upload />
            <span>Upload</span>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
