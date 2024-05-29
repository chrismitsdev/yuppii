export default function Template({children}: {children: React.ReactNode}) {
  return (
    <main className='animate-appear'>
      {children}
    </main>
  )
}