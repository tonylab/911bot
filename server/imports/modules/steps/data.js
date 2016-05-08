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
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/car_accident_suyuj6.jpg',
            buttons: [{
              payloadKey: '11TrafficAccident',
              title: 'Traffic Accident'
            }]
          },
          {
            title: '',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/violence_zo9wkq.jpg',
            buttons: [{
              payloadKey: '12Violence',
              title: 'Violence'
            }]
          },
          {
            title: '',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/medical_emergency_wgcxcg.jpg',
            buttons: [{
              payloadKey: '13HealthEmergency',
              title: 'Health Emergency'
            }]
          },
          {
            title: '',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/fire_jmiwgn.jpg',
            buttons: [{
              payloadKey: '14Fire',
              title: 'Fire'
            }]
          },
          {
            title: '',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/911_csojjm.png',
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
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/trafic_hazard_bcieys.png',
            buttons: [{
              payloadKey: '21TrafficReporting',
              title: 'Traffic reporting'
            }]
          },
          {
            title: '',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/disturbance_d4q9a0.jpg',
            buttons: [{
              payloadKey: '22Disturbances',
              title: 'Disturbances'
            }]
          },
          {
            title: '',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/alarms_djx1rq.jpg',
            buttons: [{
              payloadKey: '23Alarms',
              title: 'Alarms'
            }]
          },
          {
            title: '',
            payloadKey: '24WelfareChecks',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/wellfare_nsos3h.jpg',
            buttons: [{
              payloadKey: '24WelfareChecks',
              title: 'Welfare Checks'
            }]
          },
          {
            title: '',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/civil_jugopw.jpg',
            buttons: [{
              payloadKey: '25CivilProblems',
              title: 'Civil problems'
            }]
          },
          {
            title: '',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/911_csojjm.png',
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
