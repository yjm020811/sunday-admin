// 导入所有的svg,
// 完成svgIcon的全局注册
import SvgIcon from '../components/SvgIcon.vue'

const svgRequire = require.context('./svg', false, /.*\.svg/)

// 可以通过svgRequire.keys()获取所有的svg图标，然后再进行遍历
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

// 全局注册
export default (app) => {
  app.component('svgIcon', SvgIcon)
}
