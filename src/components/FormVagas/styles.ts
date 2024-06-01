import styled from 'styled-components'

interface FormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  children?: React.ReactNode
}

export const Form = styled.form<FormProps>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

interface CampoProps {
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}

export const Campo = styled.input<CampoProps>`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
}

export const BtnPesquisar = styled.button<ButtonProps>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
