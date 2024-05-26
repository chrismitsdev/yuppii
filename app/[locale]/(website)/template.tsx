export default function Template({children}: {children: React.ReactNode}) {
  return (
    <main className='overflow-hidden animate-appear'>
      {children}
    </main>
  )
}