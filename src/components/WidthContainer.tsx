function WidthContainer({children}: {children: React.ReactNode}) {
  return (
    <div className="w-11/12 max-w-6xl mx-auto">{children}</div>
  )
}

export default WidthContainer