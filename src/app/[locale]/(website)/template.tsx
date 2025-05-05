export default function Template(props: {children: React.ReactNode}) {
  return (
    <main
      className='overflow-hidden animate-page-appear'
      {...props}
    />
  )
}
