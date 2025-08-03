import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DownloadUpload } from './download-upload'
import { FlowTitle } from './flow-title'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export const Header = () => {
  return (
    <div className="absolute z-10 top-0 left-0 w-screen h-12 flex items-center justify-between px-4 bg-background border-b border-border gap-2">
      <FlowTitle />

      <Separator orientation="vertical" className="!h-[70%]" />

      <DownloadUpload />

      <Separator orientation="vertical" className="!h-[70%]" />
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <ChevronLeft />
        </Button>
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}
