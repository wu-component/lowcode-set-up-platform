export interface LoadServiceOptions {
  /**
   * 是否启用沙箱执行组件
   */
  enableSandbox: boolean;
}

/**
 * 加载缓存
 */
const CACHE_LOAD_MAP = new Map<string, any>()
export class LoadService {
  public url = ''
  constructor(url: string, options: LoadServiceOptions) {
    console.log("初始化组件加载器", url, options)
    this.url = url
  }

  public importScript(): Promise<any> {
    return new Promise((resolve) => {
      if (CACHE_LOAD_MAP.get(this.url)) {
        return resolve(CACHE_LOAD_MAP.get(this.url))
      }
      // 发起 get 请求
      return fetch(this.url)
        .then(response => response.text())
        .then(text => {
          // 记录最后一个 window 的属性
          const lastWindowKey = Object.keys(window).pop()

          // eval 执行
          eval(text)

          // 获取最新 key
          const newLastWindowKey = Object.keys(window).pop()

          // @ts-ignore
          const res = lastWindowKey !== newLastWindowKey && window[newLastWindowKey] ? (window[newLastWindowKey]) : ({})
          const Com = res.default ? res.default : res
          CACHE_LOAD_MAP.set(this.url, Com);
          resolve(Com)
        })
    })
  }
}