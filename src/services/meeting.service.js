const { Meeting } = require('../models');
const { createSession, getSession } = require('./openTok.service');

const createMeeting = async (participants) => {
  const opentokSessionId = await createSession();
  const meeting = await Meeting.create({
    participants,
    sessionId: opentokSessionId,
  });

  return meeting;
};

// assuming there is only one meeting in the database for testing
const getMeetingSession = async (userId) => {
  const meeting = await Meeting.findOne({ participants: userId });
  const session = getSession(meeting.sessionId);
  return session;
};

module.exports = {
  createMeeting,
  getMeetingSession,
};
