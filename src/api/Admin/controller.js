
import adminModel from './adminModel';
import organizerModel from '../Common/organizerModel';
import festModel from '../Common/festModel';
import eventsModel from '../Common/eventsModel';
import otherCollegeFestModel from '../Common/otherCollegeFestModel';
import {sendEmail} from '../Common/email';


export const adminLogin = (req, res) => {
  adminModel.findOne({ "username": req.query.username, "pwd": req.query.pwd }, (err, result) => {
    res.send(result);
  })
}


export const forgotPassword = (req, res) => {
  console.log(req.query.emailid);
  adminModel.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
    
      res.send(err);
    }
     else {
       result.map(results=>{
      const subject = 'Credentials Recived';
      const body = `UserName: ${results.username}<br>Password: ${results.pwd}<br>Please Login Using these Credentials<br>Thank You.`;
      sendEmail(req.query.emailid, subject, body);
    })
      res.send(result);
    }
  })
}

export const chnagepassword = (req, res) => {
  adminModel.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
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

export const addOrganizer = (req, res) => {
  organizerModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
            const body = `You are successfully registered in College Event Manager... <br>Please Login Using below Credentials<br>Emailid: ${req.body.email}<br>MobileNo: ${req.body.contactno}<br>Thank You.`;      
            sendEmail(req.body.email, subject, body);
      res.send(result);
    }
  })
}

export const addothercolleges = (req, res) => {
  otherCollegeFestModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const addfest = (req, res) => {
  festModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updatefest = (req, res) => {
  festModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const destroy = (req, res) =>
  organizerModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  });

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


export const deleteFest = (req, res) => {
  festModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
      if (err) {
        res.send(err);
      }
      else {
        res.send(deletedObj);
      }
    });
  }


export const deleteOthercolleg = (req, res) => {
  otherCollegeFestModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
      if (err) {
        res.send(err);
      }
      else {
        res.send(deletedObj);
      }
    });
  }

