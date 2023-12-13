type LoadFormat = 'UMD' | 'ES'
export interface LoadServiceOptions {
  /**
   * 是否启用沙箱执行组件
   */
  enableSandbox?: boolean;

  /**
   * 加载组件的格式
   */
  format?: LoadFormat
}

// export const COMPONENT_APP_UMD = 'ComponentLoadUmd';
export const COMPONENT_APP_UMD = 'MyLib';

/**
 * 加载缓存
 */
const CACHE_LOAD_MAP = new Map<string, any>()
export class LoadService {
  public url = ''
  public options: LoadServiceOptions = {}
  constructor(url: string, options: LoadServiceOptions) {
    this.url = url
    this.options = options;
  }

  public importScript() {
    const { format = 'UMD', enableSandbox = false } = this.options;
    if (format === 'UMD') {
      return this.importScriptUmd()
    }
    if (format === 'ES') {
      return this.importScriptEs()
    }
  }

  public importScriptEs(): Promise<any> {
    return new Promise((resolve) => {
      if (CACHE_LOAD_MAP.get(this.url)) {
        return resolve(CACHE_LOAD_MAP.get(this.url))
      }
      // 发起 get 请求
      return fetch(this.url)
        .then(response => response.text())
        .then(text => {
          // eval 执行
          eval(`${text}`)
          // new Function(`${text}`)
          const Com = window[COMPONENT_APP_UMD].default ? window[COMPONENT_APP_UMD].default : window[COMPONENT_APP_UMD]
          CACHE_LOAD_MAP.set(this.url, Com);
          resolve(Com)
        })
    })
  }

  private importScriptUmd(): Promise<any> {
    return new Promise((resolve) => {
      if (CACHE_LOAD_MAP.get(this.url)) {
        return resolve(CACHE_LOAD_MAP.get(this.url))
      }
      // 发起 get 请求
      return fetch(this.url)
        .then(response => response.text())
        .then(text => {
          // eval 执行
          eval(`${text}`)
          // new Function(`${text}`)
          const Com = window[COMPONENT_APP_UMD].default ? window[COMPONENT_APP_UMD].default : window[COMPONENT_APP_UMD]
          CACHE_LOAD_MAP.set(this.url, Com);
          resolve(Com)
        })
    })
  }
}
