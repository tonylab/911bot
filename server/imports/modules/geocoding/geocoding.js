import settings from '../settings'

const API_URLS = {
  token: 'https://www.arcgis.com/sharing/rest/oauth2/token/',
  reverseGeoCoding: 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode'
}

const tokenExpiration = 1440;
let token = null;

export function locationToAddress(location) {
  if (!location || !location.lat || !location.long) {
    console.log('no location :(')
    throw new Meteor.Error('location is missing');
  }

  location.lat = location.lat.toString().slice(0, 8);
  location.long = location.long.toString().slice(0, 8);

  console.log('lat', location.lat, loc.lat, location.lat == loc.lat);
  console.log('long', location.long, loc.long, location.long == loc.long);

  token = token || getToken()

  if (!token) {
    throw new Meteor.Error('cannot generate token');
  }

  const locationStr = location.long + "," + location.lat;
  console.log('##token', token, 'locationStr', locationStr);
  let response = HTTP.get(API_URLS.reverseGeoCoding, {
    params: {
      f: 'pjson',
      token: token,
      location: locationStr
    }
  });
  let content = JSON.parse(response.content)
  if (content.error) {
    throw new Meteor.Error('Error finding address');
  } else {
    return content;
  }
}


/** TEST ADDRESS */
var loc = {long: "-74.01430", lat: "40.68021"};
//locationToAddress(loc);
// locationToAddress({long: "-74.0145",lat:"40.68195"})
/***/


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
  let tempToken = content && content.access_token;
  if (tempToken) {
    token = tempToken;
    setTimeout(() => {
      token = null
    }, tokenExpiration / 2)
  }
  return tempToken;
}
