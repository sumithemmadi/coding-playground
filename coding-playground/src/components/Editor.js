import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled } from 'react-codemirror2'

const Editor = ({ displayName, language, value, onChange }) => {
  const handleChange = (editor, data, value) => {
    onChange(value)
  }

  return (
    <div className='editor-container'>
      <div className='editor-title'>{displayName}</div>
      <Controlled
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: 'material',
          height: '100%',
        }}
      />
    </div>
  )
}

export default Editor