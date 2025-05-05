export default function Template(props: {children: React.ReactNode}) {
  return (
    <main
      className='animate-page-appear'
      {...props}
    />
  )
}
