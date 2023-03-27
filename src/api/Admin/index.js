import { Router } from 'express'

import {
  adminLogin,
  forgotPassword,
  chnagepassword,
  viewfest,
  viewevents,
  vieworganizers,
  addOrganizer,
  addfest,
  updateorganizer,
  updatefest,
  destroy,
  addothercolleges,
  viewothercolleges,
  deleteOthercolleg,
  deleteFest

} from './controller'

const router = new Router()

router.get('/', adminLogin)

router.get('/getpassword', forgotPassword)

router.put('/updatepassword/:id',chnagepassword)

router.get('/vieworganizers', vieworganizers)

router.put('/updateorg/:id', updateorganizer)

router.post('/organizers', addOrganizer)

router.delete('/:id', destroy)

router.post('/fests', addfest)

router.put('/updatefest/:id', updatefest)

router.delete('/deletefest/:id', deleteFest)

router.get('/viewfest', viewfest)

router.get('/viewevents', viewevents)

router.get('/viewothercolleges', viewothercolleges)

router.delete('/deleteOthercolleg/:id', deleteOthercolleg)

router.post('/othercolleges', addothercolleges)

export default router
