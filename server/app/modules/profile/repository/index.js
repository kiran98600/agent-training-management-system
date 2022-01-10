(() => {
    const profileRepository = require('./profile.repository');
    module.exports = {
        getMenus: profileRepository.getMenus(),
        getSubMenus: profileRepository.getMenus(),
        getActions: profileRepository.getActions()
    }
})();
