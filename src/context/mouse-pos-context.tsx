import { createContext, useState } from 'react'

interface ContextProps {
  position: { x: number; y: number }
  setPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
}

const MousePosContext = createContext<ContextProps>({} as ContextProps)

export const MousePosProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  })

  return (
    <MousePosContext.Provider value={{ position, setPosition }}>
      {children}
    </MousePosContext.Provider>
  )
}

export default MousePosContext
