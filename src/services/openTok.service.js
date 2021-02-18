const httpStatus = require('http-status');
const OpenTok = require('opentok');
const util = require('util');
const config = require('../config/config');
const ApiError = require('../utils/ApiError');

// initialize openTok object
const opentok = new OpenTok(config.openTok.apiKey, config.openTok.secret);

/**
 * Create a session
 * @param {string} userId
 * @returns {Promise<Object>}
 */
const createSession = async () => {
  try {
    const createOTSession = util.promisify(opentok.createSession).bind(opentok);
    const { sessionId } = await createOTSession();
    return sessionId;
  } catch (err) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err);
  }
};

const getSession = (sessionId) => {
  return {
    token: opentok.generateToken(sessionId),
    sessionId,
    apiKey: config.openTok.apiKey,
  };
};

module.exports = {
  createSession,
  getSession,
};
