import type { FC } from 'react'
import { useImmer } from 'use-immer'
import './index.css'

export const Immer: FC = () => {
  const [info, updateInfo] = useImmer({ count: 0 })
  function handlePlus() {
    updateInfo((draft) => {
      draft.count++
    })
  }

  return (
    <div className="immer">
      <span>{info.count}</span>
      <button onClick={handlePlus}>+1</button>
    </div>
  )
}
