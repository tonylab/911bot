export default {
  type: 'button',
  text: 'Do you need assistance about a life threatening issue ?',
  buttons: [
    {
      title: "Yes",
      payloadKey: '1LifeThreatening',
      innerStep: {
        type: 'bubbles',
        bubbles: [
          {
            title: 'Traffic Accident',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/car_accident_suyuj6.jpg',
            buttons: [{
              payloadKey: '11TrafficAccident',
              title: 'Report'
            }]
          },
          {
            title: 'Violence',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/violence_zo9wkq.jpg',
            buttons: [{
              payloadKey: '12Violence',
              title: 'Report'
            }]
          },
          {
            title: 'Health Emergency',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/medical_emergency_wgcxcg.jpg',
            buttons: [{
              payloadKey: '13HealthEmergency',
              title: 'Report'
            }]
          },
          {
            title: 'Fire',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/fire_jmiwgn.jpg',
            buttons: [{
              payloadKey: '14Fire',
              title: 'Report'
            }]
          },
          {
            title: 'Other',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/911_csojjm.png',
            buttons: [{
              payloadKey: '15Other',
              title: 'Report'
            }]
          }
        ]
      }
    },
    {
      title: "No",
      payloadKey: '2NotLifeThreatening',
      innerStep: {
        type: 'bubbles',
        bubbles: [
          {
            title: 'Traffic reporting',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/trafic_hazard_bcieys.png',
            buttons: [{
              payloadKey: '21TrafficReporting',
              title: 'Report'
            }]
          },
          {
            title: 'Disturbances',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/disturbance_d4q9a0.jpg',
            buttons: [{
              payloadKey: '22Disturbances',
              title: 'Report'
            }]
          },
          {
            title: 'Alarms',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/alarms_djx1rq.jpg',
            buttons: [{
              payloadKey: '23Alarms',
              title: 'Report'
            }]
          },
          {
            title: 'Welfare Checks',
            payloadKey: '24WelfareChecks',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/wellfare_nsos3h.jpg',
            buttons: [{
              payloadKey: '24WelfareChecks',
              title: 'Report'
            }]
          },
          {
            title: 'Civil problems',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/civil_jugopw.jpg',
            buttons: [{
              payloadKey: '25CivilProblems',
              title: 'Report'
            }]
          },
          {
            title: 'Other',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/911_csojjm.png',
            buttons: [{
              payloadKey: '26Other',
              title: 'Report'
            }]
          }
        ]
      }
    }
  ]
};
