import TitleContext from '@/context/title-context'
import { useContext } from 'react'

export const FlowTitle = () => {
  const { title, setTitle } = useContext(TitleContext)
  return (
    <input
      className="text-lg font-bold focus:outline-none bg-transparent w-full"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  )
}
