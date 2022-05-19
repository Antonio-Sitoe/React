export interface FormProps {
  name: string, 
  email:string, 
  cep: string, 
  rua: string, 
  numero:string, 
  bairro:string,
  cidade: string, 
  estado: string
}

export const formObject = {
  name: '', email: "", cep: '', rua: "", numero: "", bairro: "",
  cidade: '', estado: ""
}
