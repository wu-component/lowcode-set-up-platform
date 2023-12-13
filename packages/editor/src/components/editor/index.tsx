import React, {useEffect} from "react";
import { EditorService } from "../../core";
import { DynamicComponent } from "../dynamic";
import styles from "./index.module.scss"

export interface EditorIProps {
  editorService: EditorService
}
export const Editor: React.FC<EditorIProps> = (props: EditorIProps) => {

  useEffect(() => {
    console.log(styles)
  }, [props.editorService])
  return (
    <div className={styles.editor} id="jjjj">
      <DynamicComponent url="https://qiniu.canyuegongzi.xyz/js/umd-1.0.js"/>
      <DynamicComponent url="https://qiniu.canyuegongzi.xyz/js/umd-2.0.js"/>
    </div>
  )
}
