import { handleClassName } from '@/constants/handle'
import { Handle, Position } from '@xyflow/react'
import { Textarea } from '../ui/textarea'

export const ConditionalNode = () => {
  return (
    <div className="bg-white min-w-18 w-fit text-start p-2 rounded-sm shadow-md">
      <div className="flex flex-col w-fit">
        <span className="text-muted-foreground outline-0">Condition</span>
        <Textarea className="!bg-gray-200 focus-visible:ring-0 border-0 rounded-xs p-1 !text-xs text-muted min-w-18 w-fit min-h-8 !h-fit" />
      </div>

      <Handle
        id="input"
        className={handleClassName('target')}
        type="target"
        position={Position.Left}
      />
      <Handle
        id="true"
        className="!bg-green-500"
        type="source"
        position={Position.Right}
      />
      <Handle
        id="false"
        className="!bg-red-500"
        type="source"
        position={Position.Bottom}
      />
    </div>
  )
}
