import settings from '../settings'

const API_URLS = {
  token: 'https://www.arcgis.com/sharing/rest/oauth2/token/',
  reverseGeoCoding: 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode'
}

const tokenExpiration = 1440;
let token = null;

export function locationToAddress(location) {
  location = {lat: "40.6802", long: "-74.0143"};

  if (!location || !location.lat || !location.long) {
    console.log('no location :(')
    throw new Meteor.Error('location is missing');
  }

  location.lat = ""+location.lat.toString();
  location.long = ""+location.long.toString();
  location = JSON.stringify(location);
  console.log('location', location);
  location = JSON.parse(location);
  console.log('location', location);

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

  console.log('location response',response);
  let content = JSON.parse(response.content)
  if (content.error) {
    throw new Meteor.Error('Error finding address');
  } else {
    return content;
  }
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
  let tempToken = content && content.access_token;
  if (tempToken) {
    token = tempToken;
    setTimeout(() => {
      token = null
    }, tokenExpiration / 2)
  }
  return tempToken;
}
