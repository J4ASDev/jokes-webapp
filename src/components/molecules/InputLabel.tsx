import Input from '../atoms/Input'

type Props = {
  label: string,
  name: string
}

function InputLabel({ label, name }: Props) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input name={name} />
    </div>
  )
}

export default InputLabel
