const userRightsManager = require('bindings')('userRightsManager');

function getUserRights(username) {
    return userRightsManager.getUserRights(username).toString().split(";").map(function (elem) {
        if (elem.localeCompare("Администраторы") === 0) {
            return "Администратор";
        }
        if (elem.localeCompare("Пользователи") === 0) {
            return "Пользователь";
        }
        if (elem.localeCompare("Гости") === 0) {
            return "Гость";
        }

        return null;
    }).filter((elem) => elem !== null);
}

module.exports = {getUserRights}
