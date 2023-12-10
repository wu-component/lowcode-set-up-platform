import React, {useEffect} from "react";
import hello from "@lowcode-set-up-platform/shared";
import { EditorService } from "../../core";
import { DynamicComponent } from "../dynamic";

export interface EditorIProps {
  editorService: EditorService
}
export const Editor: React.FC<EditorIProps> = (props: EditorIProps) => {

  useEffect(() => {
    console.log("编辑器渲染")
    console.log(hello());
    console.log("组件初始化", props.editorService)
  }, [props.editorService])
  return (
    <div>
      <DynamicComponent url="https://qiniu.canyuegongzi.xyz/js/umd.js"/>
    </div>
  )
}
