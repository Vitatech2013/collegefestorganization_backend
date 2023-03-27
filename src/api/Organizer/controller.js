import organizerModel from '../Common/organizerModel';
import festModel from '../Common/festModel';
import eventsModel from '../Common/eventsModel';
import {sendEmail} from '../Common/email';


export const show = (req, res) => {
    organizerModel.findOne({ "email": req.query.email, "contactno": req.query.contactno }, (err, result) => {
      res.send(result);
    })
  }


  export const organizorforgotPassword = (req, res) => {
    organizerModel.find({ "email": req.query.email}, (err, result) => {
      if (err) {
        res.send(err);
      }else {
        result.map(results=>{
        const subject = 'Credentials Recived';
        const body = `EmailId: ${results.email}<br>MobileNo: ${results.contactno}<br>Please Login Using these Credentials<br>Thank You.`;
        sendEmail(req.query.email, subject, body);
        })
        res.send(result);
      }
    })
  }

  export const chnageMobileNo = (req, res) => {
    organizerModel.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedObj);
      }
    })
  }
  

export const addOrganizer = (req, res) => {
    organizerModel.create(req.body, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        
        res.send(result);
      }
    })
  }
  

export const vieworganizers = (req, res) => {
    organizerModel.find((err, list) => {
      if (!err) {
        res.send(list);
      } else {
        res.send(err);
      }
    })
  }

  
export const updateorganizer = (req, res) => {
    organizerModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedObj);
      }
    })
  }
  

  
export const viewfest = (req, res) => {
    festModel.find((err, list) => {
      if (!err) {
        res.send(list);
      } else {
        res.send(err);
      }
    })
  }
  
  export const viewevents = (req, res) => {
    eventsModel.find((err, list) => {
      if (!err) {
        res.send(list);
      } else {
        res.send(err);
      }
    })
  }
  
  export const viewothercolleges = (req, res) => {
    otherCollegeFestModel.find((err, list) => {
      if (!err) {
        res.send(list);
      } else {
        res.send(err);
      }
    })
  }


export const addevents = (req, res) => {
    eventsModel.create(req.body, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  }
  
  
export const Updatevents = (req, res) => {
    eventsModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedObj);
      }
    })
  }
  
  
export const deleteFest = (req, res) => {
    eventsModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
      if (err) {
        res.send(err);
      }
      else {
        res.send(deletedObj);
      }
    });
  }
