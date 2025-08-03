import { AppContextMenu } from './components/app-context-menu'
import { Flow } from './components/flow'

import { ReactFlowProvider } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { Header } from './components/header'
import { EdgesProvider } from './context/edges-context'
import { MousePosProvider } from './context/mouse-pos-context'
import { NodesProvider } from './context/nodes-context'
import { TitleProvider } from './context/title-context'

export default function App() {
  return (
    <ReactFlowProvider>
      <NodesProvider>
        <EdgesProvider>
          <TitleProvider>
            <MousePosProvider>
              <AppContextMenu>
                <main className="w-screen h-screen bg-background text-muted-foreground">
                  <Header />
                  <Flow />
                </main>
              </AppContextMenu>
            </MousePosProvider>
          </TitleProvider>
        </EdgesProvider>
      </NodesProvider>
    </ReactFlowProvider>
  )
}
