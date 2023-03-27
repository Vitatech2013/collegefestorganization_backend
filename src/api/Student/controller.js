
import organizerModel from '../Common/organizerModel';
import festModel from '../Common/festModel';
import eventsModel from '../Common/eventsModel';
import studentModal from '../Common/studentModal';
import {sendEmail} from '../Common/email';

export const vieworganizers = (req, res) => {
  organizerModel.find((err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
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

export const studentDetails = (req, res) => {
  studentModal.find((err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}

export const studentreg = (req, res) => {
  studentModal.create(req.body, (err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}

export const studentlogin = (req, res) => {
  studentModal.findOne({ "studentname": req.query.studentname, "pwd": req.query.pwd }, (err, result) => {
    res.send(result);
  })
}


export const studentforgotPassword = (req, res) => {
  studentModal.find({"email":req.query.email}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      result.map(results=>{
      const subject = 'Credentials Recived';
      const body = `StudentName: ${results.studentname}<br>Password: ${results.pwd}<br>Please Login Using these Credentials<br>Thank You.`;
      sendEmail(req.query.email, subject, body);
      })
      res.send(result);
    }
  })
}



export const studentprofile = (req, res) => {
  studentModal.findOne({ "studentname": req.query.studentname }, (err, result) => {
    res.send(result);
  })
}


export const updatestudent = (req, res) => {
  studentModal.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const chnagepassword = (req, res) => {
  studentModal.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
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
