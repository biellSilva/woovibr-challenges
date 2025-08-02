import { ControlBar } from './components/control-bar'

export default function App() {
  return (
    <div
      className="w-screen h-screen bg-background text-muted-foreground"
      style={{
        backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
        backgroundSize: '15px 15px'
      }}
    >
      <ControlBar />
    </div>
  )
}
