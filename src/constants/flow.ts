import { ConditionalNode } from '@/components/nodes/conditional-node'
import { StartNode } from '@/components/nodes/start-node'
import { WebhookNode } from '@/components/nodes/webhook-node'

export const nodeTypes = {
  startNode: StartNode,
  conditionalNode: ConditionalNode,
  webhookNode: WebhookNode
}
