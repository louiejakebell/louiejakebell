import { useState } from 'react'

const useSwipe = ({
  step,
  setStep,
  stepperCount,
  minXSwipe,
  transitionTime
}) => {
  const [startX, setStartX] = useState(0)
  const [finalX, setFinalX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [finalY, setFinalY] = useState(0)
  const [xPixels, setXPixels] = useState(0)
  const [transition, setTransition] = useState(
    `transform ${transitionTime}ms ease-in-out 0s`
  )

  const startSwipe = event => {
    const touches = event?.touches?.[0]

    setTransition('none')
    setStartX(touches?.clientX)
    setStartY(touches?.clientY)
  }

  const swipe = event => {
    const touches = event?.touches?.[0]
    const xDifference = touches.clientX - startX
    const yDifference = touches.clientY - startY

    if (Math.abs(yDifference) > Math.abs(xDifference)) return

    const maxNegative = xDifference < -minXSwipe ? -minXSwipe : xDifference
    const maxPositive = xDifference > minXSwipe ? minXSwipe : xDifference

    setFinalX(touches?.clientX)
    setFinalY(touches?.clientY)
    setXPixels(xDifference < 0 ? maxNegative : maxPositive)
  }

  const endSwipe = () => {
    const xDifference = Math.abs(startX - finalX)
    const yDifference = Math.abs(startY - finalY)

    setTransition(`transform ${transitionTime}ms ease-in-out 0s`)
    setXPixels(0)
    setStartX(0)
    setFinalX(0)

    if (xDifference < minXSwipe || yDifference > xDifference) return
    if (finalX >= startX && step > 0) setStep(step - 1)
    if (finalX < startX && step < stepperCount - 1) setStep(step + 1)
  }

  return { startSwipe, swipe, endSwipe, xPixels, transition }
}

export default useSwipe
