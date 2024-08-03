const message = (status, message, data, error, path) => {
    return ({ status, message, data, error, path })
}

const isNullUndefinedOrBlank = (obj) => {
    if (obj == null || obj === undefined || obj === '' || obj.length == 0) {
        return true;
    }
    return false;
}

module.exports = { message, isNullUndefinedOrBlank };