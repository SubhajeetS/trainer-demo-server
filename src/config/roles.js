const roles = ['admin', 'trainer', 'trainee'];

const roleRights = new Map();
roleRights.set(roles[0], ['getUsers', 'manageUsers', 'createMeeting']);
roleRights.set(roles[1], ['getMeeting']);
roleRights.set(roles[2], ['getMeeting']);

module.exports = {
  roles,
  roleRights,
};
