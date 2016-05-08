JsonRoutes.sendPlainResult = (res, options) => {
    options = options || {};
    if (options.headers) setHeaders(res, options.headers);
    
    res.statusCode = options.code || 200;
    writeToBody(res, options.data);
    res.end();
}

function writeToBody(res, data) {
    if (data !== undefined) {
        res.write(data);
    }
}


function setHeaders(res, headers) {
    _.each(headers, function (value, key) {
        res.setHeader(key, value);
    });
}
