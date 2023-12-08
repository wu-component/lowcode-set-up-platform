import { useEffect, useState } from "react";
import {LoadService} from "../../core/LoadService.tsx";

interface DynamicComponentIProps {
  url: string;
  umdProps?: Record<string, never>;
  children?: JSX.Element
}
export const DynamicComponent = (props: DynamicComponentIProps) => {
  const { url, children = null, umdProps = {}} = props;
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error>()
  const [UmdCom, setUmdCom] = useState<JSX.Element>()

  useEffect(() => {
    console.log("开始加载组件")
    const loadService = new LoadService(url, {
      enableSandbox: true
    })
    setLoading(true)
    loadService.importScript().then((res: JSX.Element) => {
      console.log("222222222222")
      console.log(res)
      setLoading(false)
      setUmdCom(res)
    }).catch((e: Error) => {
      console.log(e)
      setError(e)
    })
  }, [url])

  if (!url) return <></>;
  if (error) return <div>error!!!</div>
  if (loading) return <div>loading...</div>
  if (!UmdCom) return <div>加载失败，请检查</div>;

  // @ts-ignore
  return <UmdCom {...umdProps}>{ children }</UmdCom>
}