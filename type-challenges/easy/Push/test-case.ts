
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]

/**
 * 1. 学科专题 需求确定和评审确定下步开发计划
 * 2. 应用播放 js sdk 的修改和测试
 * 3. 学习vue3 和ts 
 * 4. 小程序开会研讨确定技术路线
 * 5. 指导新人了解公司前端开发流程
 * 
 * 1. 学科专题UI评审和开发计划确定
 * 2. 学习vue3 和ts 
 * 3. 学习编写ui 组件库
 */
