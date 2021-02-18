const catchAsync = require('../utils/catchAsync');
const { meetingService } = require('../services');

const createMeeting = catchAsync(async (req, res) => {
  const meeting = await meetingService.createMeeting(req.body);
  res.send({ meeting });
});

const getMeeting = catchAsync(async (req, res) => {
  const meeting = await meetingService.getMeetingSession(req.user.id);
  res.send(meeting);
});

module.exports = {
  createMeeting,
  getMeeting,
};
