import './index.scss'

interface TextAreaComponent {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

const TextArea = ({
  onChange
}: TextAreaComponent) => {
  return <textarea onChange={onChange} className="text-area" placeholder="Paste your text here..." />
}

export default TextArea
