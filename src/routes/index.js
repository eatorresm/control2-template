import Router from 'koa-router'
import getHealth from './health/health'
import users from './'
import "../utils/constants"
import "../utils/uuid"
import "../data/users"
import { get } from 'koa/lib/response'
import { getToken, getUser } from '../data/users'


const router = new Router()

router.get('/health', getHealth)
router.get('../data/users',getToken)


export default router
