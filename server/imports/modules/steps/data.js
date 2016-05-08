export default {
  type: 'button',
  text: 'Please choose:',
  buttons: [
    {
      title: "Life threatening",
      payloadKey: '1LifeThreatening',
      innerStep: {
        type: 'bubbles',
        bubbles: [
          {
            title: '',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1461712951/Premier_League_2013-14_slider_gnxdpg.png',
            buttons: [{
              payloadKey: '11TrafficAccident',
              title: 'Traffic Accident'
            }]
          },
          {
            title: '',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1461712951/Premier_League_2013-14_slider_gnxdpg.png',
            buttons: [{
              payloadKey: '12Violence',
              title: 'Violence'
            }]
          },
          {
            title: '',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMZzlvbFVRZC1ubDA',
            buttons: [{
              payloadKey: '13HealthEmergency',
              title: 'Health Emergency'
            }]
          },
          {
            title: '',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMQ2U5MzVIVzVqbTQ',
            buttons: [{
              payloadKey: '14Fire',
              title: 'Fire'
            }]
          },
          {
            title: '',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMLUU4U196OWNCb2c',
            buttons: [{
              payloadKey: '15Other',
              title: 'Other'
            }]
          }
        ]
      }
    },
    {
      title: "Not life threatening",
      payloadKey: '2NotLifeThreatening',
      innerStep: {
        type: 'bubbles',
        bubbles: [
          {
            title: '',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMMURWcDJ3dzRmb2s',
            buttons: [{
              payloadKey: '21TrafficReporting',
              title: 'Traffic reporting'
            }]
          },
          {
            title: '',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMcEV2MFMtcmZEOUU',
            buttons: [{
              payloadKey: '22Disturbances',
              title: 'Disturbances'
            }]
          },
          {
            title: '',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMVG82Z2JSbEl4TDg',
            buttons: [{
              payloadKey: '23Alarms',
              title: 'Alarms'
            }]
          },
          {
            title: '',
            payloadKey: '24WelfareChecks',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMZEtOV2Jlejhzdkk',
            buttons: [{
              payloadKey: '24WelfareChecks',
              title: 'Welfare Checks'
            }]
          },
          {
            title: '',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMNUNCX01BenF3NVU',
            buttons: [{
              payloadKey: '25CivilProblems',
              title: 'Civil problems'
            }]
          },
          {
            title: '',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMLUU4U196OWNCb2c',
            buttons: [{
              payloadKey: '26Other',
              title: 'Other'
            }]
          }
        ]
      }
    }
  ]
};
