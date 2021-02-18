const express = require('express');
const auth = require('../../middlewares/auth');
const meetingController = require('../../controllers/meeting.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('createMeeting'), meetingController.createMeeting)
  .get(auth('getMeeting'), meetingController.getMeeting);

module.exports = router;
