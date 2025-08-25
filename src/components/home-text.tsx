"use client"
import BlurText from '@/ui/blur-text';
import React from 'react'

export default function HomeText({text, className}: Readonly<{text: string, className: string}>) {

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  return (
    <BlurText
    className={className}
  text={text}
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
/>
  )
}
