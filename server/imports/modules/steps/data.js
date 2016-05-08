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
            title: 'Traffic Accident',
            payloadKey: '11TrafficAccident',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMV1lYaFByMmdVRFU',
            buttons: null
          },
          {
            title: 'Violence',
            payloadKey: '12Violence',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMSDM1ZVNCWTJhdHc',
            buttons: null
          },
          {
            title: 'Health Emergency',
            payloadKey: '13HealthEmergency',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMZzlvbFVRZC1ubDA',
            buttons: null
          },
          {
            title: 'Fire',
            payloadKey: '14Fire',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMQ2U5MzVIVzVqbTQ',
            buttons: null
          },
          {
            title: 'Other',
            payloadKey: '15Other',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMLUU4U196OWNCb2c',
            buttons: null

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
            title: 'Traffic reporting',
            payloadKey: '21TrafficReporting',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMMURWcDJ3dzRmb2s',
            buttons: null
          },
          {
            title: 'Disturbances',
            payloadKey: '22Disturbances',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMcEV2MFMtcmZEOUU',
            buttons: null
          },
          {
            title: 'Alarms',
            payloadKey: '23Alarms',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMVG82Z2JSbEl4TDg',
            buttons: null
          },
          {
            title: 'Welfare checks',
            payloadKey: '24WelfareChecks',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMZEtOV2Jlejhzdkk',
            buttons: null
          },
          {
            title: 'Civil problems',
            payloadKey: '25CivilProblems',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMNUNCX01BenF3NVU',
            buttons: null
          },
          {
            title: 'Other',
            payloadKey: '26Other',
            image: 'https://drive.google.com/open?id=0B4s176m3ZUdMLUU4U196OWNCb2c',
            buttons: null
          }
        ]
      }
    }
  ]
};
