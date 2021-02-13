import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import useSwipe from './useSwipe'
import theme from '../theme'

const minXSwipe = 200
const transitionTime = 200

const ListCarousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`

const CardList = styled.div`
  display: flex;
  touch-action: pan-y;
`

const ListWrapper = styled.div`
  width: 400px;
  overflow: hidden;
`

const Chevron = styled.div`
  ::before {
    content: '';
    color: ${props => props.color};
    height: 0.6rem;
    width: 0.6rem;
    border-width: 0.25em 0.25em 0 0;
    border-style: solid;
    display: inline-block;
  }
  ${props => props.left && `transform: rotate(-135deg);`};
  ${props => props.right && `transform: rotate(45deg);`};
`

const Button = styled.button`
  height: 100%;
  width: 40px;
  border: none;
  background-color: transparent;
`

const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  margin: 8px;
  justify-content: center;
  padding: 0;
`

const Stepper = styled.li`
  background: ${props => props.theme.inactiveColor};
  ${props => props.active && `background: ${props.theme.activeColor};`}
  width: 8px;
  height: 8px;
  border-radius: 5px;
  margin: 0 8px;
`

const Carousel = ({ children }) => {
  const [step, setStep] = useState(0)
  const [stepperCount, setStepperCount] = useState(0)
  const stepperListRef = useRef()
  const { activeColor, inactiveColor } = theme
  const slideLeft = () => step > 0 && setStep(step - 1)
  const slideRight = () => step < stepperCount - 1 && setStep(step + 1)
  const leftColor = step > 0 ? activeColor : inactiveColor
  const rightColor = step < children.length - 1 ? activeColor : inactiveColor
  const { startSwipe, swipe, endSwipe, xPixels, transition } = useSwipe({
    step,
    setStep,
    stepperCount,
    minXSwipe,
    transitionTime
  })

  useEffect(() => {
    const steppers = Array.from(stepperListRef?.current?.children || [])
    const visibleSteppers = steppers.filter(
      element => getComputedStyle(element)?.display !== 'none'
    )

    setStepperCount(visibleSteppers.length)
  }, [step])

  return (
    <div>
      <ListCarousel>
        <div>
          <Button onClick={slideLeft}>
            <Chevron left color={leftColor} />
          </Button>
        </div>
        <ListWrapper>
          <CardList
            onTouchStart={startSwipe}
            onTouchMove={swipe}
            onTouchEnd={endSwipe}
            style={{
              transition,
              transform: `translateX(${step * -100}%) translateX(${xPixels}px)`
            }}
          >
            {children}
          </CardList>
        </ListWrapper>
        <div>
          <Button onClick={slideRight}>
            <Chevron right color={rightColor} />
          </Button>
        </div>
      </ListCarousel>
      <List ref={stepperListRef}>
        {[...Array(children?.length)].map((_, index) => (
          <Stepper key={index} active={step === index} />
        ))}
      </List>
    </div>
  )
}

export default Carousel
