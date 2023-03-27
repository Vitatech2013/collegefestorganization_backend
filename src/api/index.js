import { Router } from 'express'

//import User from './user'
import Admin from './Admin'
import Organizer from './Organizer'
import Student from './Student'
const router = new Router()

router.use('/admin', Admin)
//router.use('/user', User)
router.use('/Organizer',Organizer)
router.use('/Student',Student)

export default router