import {
  ChevronLeft,
  ChevronRight,
  Download,
  SquareDashedBottomCode,
  Upload
} from 'lucide-react'
import { Separator } from './components/ui/separator'

export default function App() {
  return (
    <div
      className="w-screen h-screen bg-background text-muted-foreground"
      style={{
        backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
        backgroundSize: '15px 15px'
      }}
    >
      <div className="absolute bottom-0 mb-2 left-1/2 -translate-x-1/2 flex gap-2 items-center rounded-md justify-center w-fit p-2 bg-card text-foreground">
        <SquareDashedBottomCode className="size-5" />
        <Separator orientation="vertical" className="!h-5" />
        <ChevronLeft className="size-5" />
        <ChevronRight className="size-5" />
        <Separator orientation="vertical" className="!h-5" />
        <Download className="size-5" />
        <Upload className="size-5" />
      </div>
    </div>
  )
}
