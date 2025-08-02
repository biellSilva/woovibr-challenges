import {
  ChevronLeft,
  ChevronRight,
  Download,
  SquareDashedBottomCode,
  Upload
} from 'lucide-react'
import { Separator } from './ui/separator'

const BarSeparator = () => <Separator orientation="vertical" className="!h-5" />

export const ControlBar = () => {
  return (
    <div className="absolute bottom-0 mb-2 left-1/2 -translate-x-1/2 flex gap-2 items-center rounded-md justify-center w-fit p-2 bg-card text-foreground">
      <SquareDashedBottomCode className="size-5" />

      <BarSeparator />

      <ChevronLeft className="size-5" />
      <ChevronRight className="size-5" />

      <BarSeparator />

      <Download className="size-5" />
      <Upload className="size-5" />
    </div>
  )
}
