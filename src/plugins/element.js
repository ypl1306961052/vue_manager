/**
 Created by ypl on 2020-6-2;
 */
import Vue from 'vue'
import ElementUI, {Aside, Button, Container, Form, FormItem, Header, Input, Message, Avatar} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(ElementUI)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Avatar)
// 导入element-ui的项目 通知消息
Vue.prototype.message = Message
