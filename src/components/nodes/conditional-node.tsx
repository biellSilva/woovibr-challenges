import { Handle, Position } from '@xyflow/react'

export const ConditionalNode = () => {
  return (
    <div className="bg-gray-100 min-w-fit w-18 text-center p-2 rounded-sm shadow-md">
      <Handle className="" type="target" position={Position.Left} />
      <input
        className="text-muted-foreground outline-0"
        placeholder="Condition"
      />
      <Handle
        className="!bg-background !border-green-500"
        type="source"
        position={Position.Right}
      />
      <Handle
        className="!bg-background !border-red-500 "
        type="source"
        position={Position.Bottom}
      />
    </div>
  )
}
