(() => {
    const profileRepository = require('../repository/branches.repository');
    module.exports = async (req, res, next) => {
        try {
            const [userList] = await profileRepository.getUsers();
            res.json({ status: 200, message: 'user list', data: userList });

        } catch (err) {
            res.send(404)
        }
    }
})();
