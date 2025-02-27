import { ReactNode, useState } from 'react'

interface Props {
  text: string
  children: ReactNode
}
export default function Tooltip({ text, children }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}>
      {children}
      {isVisible && (
        <div className="text-myred absolute bottom-full left-1/2 mb-1 w-12 -translate-x-1/2 transform text-center text-sm">
          {text}
        </div>
      )}
    </div>
  )
}
