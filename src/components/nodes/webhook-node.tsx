import { handleClassName } from '@/constants/handle'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'
import { Textarea } from '../ui/textarea'

interface WebhookNodeProps {
  id: string
}

export const WebhookNode = ({ id }: WebhookNodeProps) => {
  const { updateNodeData, getNode } = useReactFlow()
  const node = getNode(id)
  if (!node) {
    return null
  }

  return (
    <div className="bg-white w-fit text-start p-2 rounded-sm shadow-md">
      <div className="flex flex-col w-fit gap-1">
        <span className="text-muted-foreground text-xs font-semibold">
          Webhook
        </span>
        <Input
          value={typeof node.data.url === 'string' ? node.data.url : ''}
          onChange={(e) => {
            updateNodeData(id, { url: e.target.value })
          }}
          placeholder="Webhook URL"
          className="!bg-gray-200 focus-visible:ring-0 border-0 rounded-xs p-1 !text-xs text-muted min-w-full max-w-fit"
        />
        <Select>
          <SelectTrigger
            className="w-full !bg-gray-200 h-fit text-xs rounded-xs"
            defaultValue={
              typeof node.data.method === 'string'
                ? node.data.method
                : undefined
            }
          >
            <SelectValue placeholder="Select an method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="GET">GET</SelectItem>
            <SelectItem value="POST">POST</SelectItem>
            <SelectItem value="PUT">PUT</SelectItem>
            <SelectItem value="DELETE">DELETE</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          placeholder="Request Body"
          className="!bg-gray-200 focus-visible:ring-0 border-0 rounded-xs p-1 !text-xs text-muted min-w-full max-w-fit"
          value={typeof node.data.body === 'string' ? node.data.body : ''}
          onChange={(e) => {
            updateNodeData(id, { body: e.target.value })
          }}
        />
        <Textarea
          placeholder="Headers (JSON format)"
          className="!bg-gray-200 focus-visible:ring-0 border-0 rounded-xs p-1 !text-xs text-muted min-w-full max-w-fit"
          value={typeof node.data.headers === 'string' ? node.data.headers : ''}
          onChange={(e) => {
            updateNodeData(id, { headers: e.target.value })
          }}
        />
      </div>

      <Handle
        className={handleClassName('target')}
        type="target"
        position={Position.Left}
      />
      <Handle
        id="success"
        className="!bg-green-500"
        type="source"
        position={Position.Right}
      />
      <Handle
        id="error"
        className="!bg-red-500"
        type="source"
        position={Position.Bottom}
      />
    </div>
  )
}
