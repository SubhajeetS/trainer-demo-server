const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const meetingSchema = mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      index: true,
    },
    participants: [String],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
meetingSchema.plugin(toJSON);

/**
 * @typedef OTSession
 */
const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
