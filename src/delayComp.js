import React from 'react'

const DeleayComponent = (prop) => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 500)

    return () => clearTimeout(timeout)

  }, [show])

  if (!show) return null

  return (
    alert(`Ta da ! ${prop.winner} won the Game !`)
  );
}

export default DeleayComponent