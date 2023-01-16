import React from 'react'

import Link from 'next/link'

const TableofContentRoutes = [
  { label: 'Introduction', href: '#' },
  { label: 'Getting Started', href: '#' },
  { label: 'What is LogRocket', href: '#' },
  { label: 'How to Monitor Frontend with LogRocket', href: '#' },
  { label: 'How to Perform Product Analysis with LogRocket', href: '#' },
  { label: 'Why LogRocket is Awesome', href: '#' },
  { label: 'Conclusion', href: '#' }
]

const TableOfContents = () => {
  return (
    <div>
      <h2>Table of Contents</h2>
      <nav>
        <ul>
          {TableofContentRoutes.map(route => (
            <Link href={route.href} key={route.label}>
              {route.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default TableOfContents
