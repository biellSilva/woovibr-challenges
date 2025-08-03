import { Handle, Position } from '@xyflow/react'

export const StartNode = () => {
  return (
    <div className="bg-gray-100 min-w-fit w-18 text-center p-2 rounded-sm shadow-md">
      <span className="text-muted-foreground">Start</span>
      <Handle
        className="!bg-background !border-purple-500"
        type="source"
        position={Position.Right}
      />
    </div>
  )
}
