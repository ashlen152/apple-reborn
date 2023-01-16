import '../styles/globals.scss'

// const Container = styled.div`
//   main {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     padding: 1.6rem;

//     @media (min-width: 768px) {
//       flex-direction: row;
//       justify-content: space-between;
//     }
//   }
// `

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
