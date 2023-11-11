import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { IAccordion } from '@/types/common'

const Accordion = ({
  children,
  title,
  titleClass,
  arrowOpenClass,
}: IAccordion) => {
  const [expanded, setExpanded] = useState(false)

  const toggleAccordion = () => setExpanded(!expanded)

  return (
    <>
      <motion.button
        initial={false}
        onClick={toggleAccordion}
        className={`${titleClass} ${expanded ? arrowOpenClass : ''}`}
      >
        {title}
      </motion.button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            style={{ overflow: 'hidden' }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Accordion
