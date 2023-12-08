import './App.scss'
import {Editor} from "@lowcode-set-up-platform/editor";
import {useRef} from "react";
import {EditorService} from "@lowcode-set-up-platform/editor/src/core";
function App() {
  const editorService = useRef(new EditorService())

  return (
    <>
      <div className='editor-content__container'>
        <Editor editorService={editorService.current} />
      </div>
    </>
  )
}

export default App
