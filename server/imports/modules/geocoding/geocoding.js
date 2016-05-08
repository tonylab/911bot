const API_URLS = {
    token: 'https://www.arcgis.com/sharing/rest/oauth2/token/',
}
export function locationToAddress(location) {
    let response = HTTP.post(API_URLS.token, {
        params: {
            f: 'json',
            'client_id': '3eVIA46CthGcREe5',
            'client_secret': 'bfc9c507667d47dcb906180846e234d5',
            'grant_type': 'client_credentials',
            'expiration': '1440'
        }
    })
}

