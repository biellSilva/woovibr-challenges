import { Handle, Position } from '@xyflow/react'

export const StartNode = () => {
  return (
    <div className="bg-gray-100 min-w-fit w-18 text-center p-2 rounded-full justify-center items-center flex shadow-md">
      <span className="text-muted-foreground text-xs font-semibold">Start</span>
      <Handle
        className="!bg-background !border-purple-500"
        type="source"
        position={Position.Right}
      />
    </div>
  )
}
