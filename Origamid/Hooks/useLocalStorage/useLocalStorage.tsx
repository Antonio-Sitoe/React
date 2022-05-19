import React from 'react'

const useLocalStorage = (key: string, intialState: any) => {
  const [local, setLocal] = React.useState(() => {
    const storage = window.localStorage.getItem(key)
    return storage ? storage : intialState
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, local)
  }, [local, key])

  return [local, setLocal]
}

export default useLocalStorage