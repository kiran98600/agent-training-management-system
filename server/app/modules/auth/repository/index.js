(() => {
    const userRepository = require('./user.repository');
    module.exports = {
        getUsers: userRepository.getUsers(),
    }
})();
