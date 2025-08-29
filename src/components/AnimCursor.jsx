import React from 'react'
import AnimatedCursor from "react-animated-cursor"

export default function AnimCursor() {
  return (
    
        <AnimatedCursor
      innerSize={8}
      outerSize={50}
      color='193, 11, 111'
      outerAlpha={0.2}
      outerStyle={{
        // border: '3px solid #B0916E',
        // border: '3px solid #FFFFFF',
        border: '2px solid #25A774',
        backgroundColor: 'transparent'
      }}
      innerStyle={{
        backgroundColor: '#ff0000'
      }}
      innerScale={0.7}
      outerScale={0.5}
      trailingSpeed ={6}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 1
          }
        }
      ]}
    />
    
  )
}