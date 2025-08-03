import { createContext, useState } from 'react'

interface ContextProps {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
}

const TitleContext = createContext<ContextProps>({} as ContextProps)

export const TitleProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [title, setTitle] = useState<string>('Untitled Flow')

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  )
}

export default TitleContext
