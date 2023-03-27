import { Router } from 'express'

import {
  show,
  organizorforgotPassword,
  chnageMobileNo,
  viewfest,
  viewevents,
  vieworganizers,
  addOrganizer,
  updateorganizer,
  viewothercolleges,
  addevents,
  Updatevents,
  deleteFest

} from './controller'

const router = new Router()

router.get('/show', show)

router.get('/organizerpassword', organizorforgotPassword)

router.put('/updatemobileno/:id',chnageMobileNo)

router.get('/vieworganizers', vieworganizers)

router.put('/:id', updateorganizer)

router.post('/organizers', addOrganizer)

router.get('/viewfest', viewfest)

router.get('/viewevents', viewevents)

router.get('/viewothercolleges', viewothercolleges)

router.post('/events', addevents)

router.delete('/deleteFest/:id', deleteFest)

router.put('/updateevents/:id', Updatevents)

export default router
