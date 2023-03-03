import React from 'react'
import Faq from './Faq/Faq'

const Faqs = ({ items }:FaqsProps) => {

  const faqs = items.map(faq => <Faq title={faq.question}>{faq.answer}</Faq>)

  return (
    <div className="faqs">
      {faqs}
    </div>
  )
}

type FaqsProps = {
  items: FaqType[]
}

export type FaqType = {
  question: string,
  answer: string | React.ReactElement,
}

export default Faqs