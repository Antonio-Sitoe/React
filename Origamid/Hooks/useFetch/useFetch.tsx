import React from 'react'

interface IOptions {

}

const useFetch = () => {
  const [data, setData] = React.useState<null | { message: string }>(null);
  const [error, setError] = React.useState<null | string>(null)
  const [loading, setLoading] = React.useState(false)

  const request = React.useCallback(async function (url: string, options: any) {
    let response
    let json;
    try {
      setLoading(true)
      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      setError(`${erro}`)
      json = null
    }
    finally {
      setLoading(false)
      setData(json)
      return { response, json }
    }
  }, [])


  return { data, error, loading, request }
}

export default useFetch 