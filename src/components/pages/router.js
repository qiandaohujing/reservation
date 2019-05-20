import login from "./login"
import register from "./register"
import modify from "./modify"
import userInfo from "./userInfo"
import seatRes from "./seatRes"
import roomRes from "./roomRes"
import {
  BaseRouter
} from "@/router/base"

const userRouter = [
  new BaseRouter('/login', login, 'login', '登录'),
  new BaseRouter('/register', register, 'register', '注册'),
  new BaseRouter('/modify', modify, 'modify', '修改密码'),
  new BaseRouter('/userInfo', userInfo, 'userInfo', '用户信息'),
  new BaseRouter('/seatRes', seatRes, 'seatRes', '座位预约'),
  new BaseRouter('/roomRes', roomRes, 'roomRes', '自习室预约'),
]

export default userRouter