import Input from '../atoms/Input'

type Props = {
  label: string,
  name: string,
  type?: 'text' | 'number'
}

function InputLabel({ label, name, type }: Props) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input name={name} type={type} />
    </div>
  )
}

export default InputLabel
