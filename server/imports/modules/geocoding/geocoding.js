import settings from '../settings'

const API_URLS = {
    token: 'https://www.arcgis.com/sharing/rest/oauth2/token/',
    reverseGeoCoding: 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode'
}

const tokenExpiration = 1440;
let token = null;

export function locationToAddress(location) {
    if(!location || !location.lat || !location.lng) {
        throw new Meteor.Error('location is missing');
    }
    token = token || getToken()
    if(!token) {
        throw new Meteor.Error('cannot generate token');
    }

    let response = HTTP.get(API_URLS.reverseGeoCoding, {
        params: {
            f: 'json',
            token: token,
            location: `${location.lat},${location.lng}`
        }
    })
    let content = JSON.parse(response.content)
    return content;
}


function getToken() {
    let tokenResponse = HTTP.post(API_URLS.token, {
        params: {
            f: 'json',
            'client_id': settings.ARCGIS_CLIENT_ID,
            'client_secret': settings.ARCGIS_CLIENT_SECRET,
            'grant_type': 'client_credentials',
            'expiration': '1440'
        }
    })


    let content = JSON.parse(tokenResponse.content);
    let tempToken =  content && content.access_token;
    if(tempToken) {
        token = tempToken;
        setTimeout(() => {
            token = null
        }, tokenExpiration/2)
    }
    return tempToken;
}
