import { Router } from 'express'

import {
  viewfest,
  viewevents,
  studentlogin,
  studentforgotPassword,
  chnagepassword,
  studentprofile,
  updatestudent,
  studentreg,
  studentDetails,
viewothercolleges

} from './controller'

const router = new Router()

router.put('/up/:id',updatestudent)

router.put('/updatepassword/:id',chnagepassword)

router.get('/viewfest', viewfest)

router.get('/viewevents', viewevents)

router.get('/viewstudent', studentDetails)

router.get('/studentlogin', studentlogin)

router.get('/studentpassword', studentforgotPassword)

router.post('/studentregistrations', studentreg)

router.get('/viewprofile', studentprofile)

router.get('/viewothercolleges', viewothercolleges)

export default router
