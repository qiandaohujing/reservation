import login from "./login"
import register from "./register"
import modify from "./modify"
import {
  BaseRouter
} from "@/router/base"

const userRouter = [
  new BaseRouter('/login', login, 'login', '登录'),
  new BaseRouter('/register', register, 'register', '注册'),
  new BaseRouter('/modify', modify, 'modify', '修改密码'),
]

export default userRouter