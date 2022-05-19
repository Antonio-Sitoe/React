import React from 'react'


const UserContext = React.createContext<{ nome: string, sobrenome: string }>({ nome: "", sobrenome: "" })


export default UserContext