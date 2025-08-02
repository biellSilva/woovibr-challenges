import { AppContextMenu } from './components/app-context-menu'
import { ControlBar } from './components/control-bar'
import { Flow } from './components/flow'

import '@xyflow/react/dist/style.css'
import { EdgesProvider } from './context/edges-context'
import { NodesProvider } from './context/nodes-context'

export default function App() {
  return (
    <NodesProvider>
      <EdgesProvider>
        <AppContextMenu>
          <main className="w-screen h-screen bg-background text-muted-foreground">
            <Flow />
            <ControlBar />
          </main>
        </AppContextMenu>
      </EdgesProvider>
    </NodesProvider>
  )
}
