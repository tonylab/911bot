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
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/car_accident_suyuj6.jpg',
            buttons: null
          },
          {
            title: 'Violence',
            payloadKey: '12Violence',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/violence_zo9wkq.jpg',
            buttons: null
          },
          {
            title: 'Health Emergency',
            payloadKey: '13HealthEmergency',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/medical_emergency_wgcxcg.jpg',
            buttons: null
          },
          {
            title: 'Fire',
            payloadKey: '14Fire',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/fire_jmiwgn.jpg',
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
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/trafic_hazard_bcieys.png',
            buttons: null
          },
          {
            title: 'Disturbances',
            payloadKey: '22Disturbances',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/disturbance_d4q9a0.jpg',
            buttons: null
          },
          {
            title: 'Alarms',
            payloadKey: '23Alarms',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/alarms_djx1rq.jpg',
            buttons: null
          },
          {
            title: 'Welfare checks',
            payloadKey: '24WelfareChecks',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/wellfare_nsos3h.jpg',
            buttons: null
          },
          {
            title: 'Civil problems',
            payloadKey: '25CivilProblems',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/civil_jugopw.jpg',
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
