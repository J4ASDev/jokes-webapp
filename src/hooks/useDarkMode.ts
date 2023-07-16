import { useState, useCallback } from 'react'
import ThemeEnum from '../ts/enums/ThemeEnum'

type FnResponse = [
  theme: ThemeEnum,
  handleCurrentMode: () => void
]

export default function useDarkMode(): FnResponse {
  const [currentMode, setCurrentMode] = useState<ThemeEnum>(ThemeEnum.LIGHTMODE)

  const setMode = useCallback((mode: ThemeEnum) => setCurrentMode(mode), [setCurrentMode])

  const handleCurrentMode = useCallback(() => {
    setMode(currentMode === ThemeEnum.LIGHTMODE ? ThemeEnum.DARKMODE : ThemeEnum.LIGHTMODE)
  }, [currentMode])

  return [currentMode, handleCurrentMode]
}
