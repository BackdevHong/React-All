import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { charCountState, textState } from './CounterStore'

function TextInput() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo: {text}
        </div>
    )
}

function TextLength() {
    const count = useRecoilValue(charCountState)

    return (
        <>
            길이 : {count}
        </>
    )
}
export default function Charactor() {
  return (
    <div>
          <TextInput></TextInput>
          <TextLength></TextLength>
    </div>
  )
}
