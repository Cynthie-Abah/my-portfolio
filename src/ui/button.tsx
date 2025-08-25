import React from 'react'
import ShinyText from './shiny-text'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Button({
  text,
  type = "button",
  className,
  href,
  onClick
}: Readonly<{ text: string; className?: string; type?: 'button' | 'link', href?: string, onClick?: ()=> void}>) {
  if (type === "link") {
    return (
      <Link href={href ?? ''} className={className}>
        <ShinyText text={text} disabled={false} speed={3} className="custom-class" />
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    )
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      <ShinyText text={text} disabled={false} speed={3} className="custom-class" />
      <ArrowRight className="ml-2 w-5 h-5" />
    </button>
  )
}

