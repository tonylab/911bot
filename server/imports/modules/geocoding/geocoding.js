import settings from '../settings'

const API_URLS = {
    token: 'https://www.arcgis.com/sharing/rest/oauth2/token/',
    reverseGeoCoding: 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode'
}

const tokenExpiration = 1440;
let token = null;

export function locationToAddress(location) {
    if(!location || !location.lat || !location.long) {
        throw new Meteor.Error('location is missing');
    }
    token = token || getToken()
    if(!token) {
        throw new Meteor.Error('cannot generate token');
    }

    const locationStr = location.long +","+ location.lat;
    console.log('##token', token,'locationStr',locationStr);
    let response = HTTP.get(API_URLS.reverseGeoCoding, {
        params: {
            f: 'pjson',
            token: token,
            location: locationStr
        }
    });
    console.log('response',response)
    let content = JSON.parse(response.content)
    if(content.error) {
        throw new Meteor.Error('Error finding address');
    } else {
        return content;
    }
}



locationToAddress({long: "-74.014305633817585",lat:"40.680211126918707"})
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
