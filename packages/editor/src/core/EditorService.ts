import Schema from '@lowcode-set-up-platform/schema'
interface ComponentInterface {
  id: number;
  alias: string;
  type: "component" | "page";
  version: string;
  createdTime: number;
  committer: string;
  sceneType: "h5" | 'pc' | 'wx-mini';
  name: string;
  status: number;
  updatedTime: number
}
class EditorService {
  /**
   * 搭建服务的组件列表
   * @private
   */
  public componentList: ComponentInterface[] = []
  constructor() {
    console.log("编辑器初始化")
    console.log(Schema);
  }
}

export {
  EditorService
}