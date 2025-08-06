import { handleClassName } from '@/constants/handle'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { Textarea } from '../ui/textarea'

interface ConditionalNodeProps {
  id: string
}

export const ConditionalNode = ({ id }: ConditionalNodeProps) => {
  const { updateNodeData, getNode } = useReactFlow()

  const node = getNode(id)

  if (!node) {
    return null
  }

  return (
    <div className="bg-white w-fit h-fit text-start p-2 rounded-sm shadow-md">
      <div className="flex flex-col w-fit">
        <span className="text-muted-foreground text-xs font-semibold mb-1">
          {typeof node.data.label === 'string' ? node.data.label : ''}
        </span>
        <Textarea
          onChange={(e) => {
            updateNodeData(id, { content: e.target.value })
          }}
          className="!bg-gray-200 focus-visible:ring-0 border-0 rounded-xs p-1 !text-xs text-muted min-w-full max-w-fit min-h-8 !h-fit"
        />
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
