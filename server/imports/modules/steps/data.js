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
              payloadKey: 'A Traffic Accident',
              title: 'Report',
              innerStep: {
                type: 'imageAndBubble',
                image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462699634/carSteps_shfyqm.jpg',
                timeout: 10000,
                bubbles: [
                  {
                    title: '1.Deal with open wounds',
                    subtitle: 'If there are extensive wounds, control the bleeding using pressure to the area.',
                    buttons:[{
                      payloadKey: 'pressureImg',
                      title: 'Apply pressure',
                      innerStep : {
                        type: 'image',
                        image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462702006/pressure_v38ahv.jpg'
                      }
                    }]
                  }
                  ,
                  {
                    title: '2.Look for signs of breathing',
                    subtitle: 'check if the person is breathing and if he has a pulse.'
                  },
                  {
                    title: '3.Perform life saving techniques',
                    subtitle: 'If there is no pulse, start CPR or EAR',
                    buttons: [
                      {
                        payloadKey: 'makeCPR',
                        title: 'How to make CPR',
                        innerStep: {
                          type: 'image',
                          image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462696950/cpr_j17pcn.jpeg'
                        }
                      },
                      {
                        payloadKey: 'makeEar',
                        title: 'How to make EAR',
                        innerStep: {
                          type: 'image',
                          image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462696950/ear_roesx6.jpg'
                        }
                      }
                    ]
                  },
                  {
                    title: '4.Ways to help in grave situations',
                    subtitle: 'If there is bleeding from the mouth or vomiting, turn the person to his side.'
                  },
                  {
                    title: '5.Keep the person warm',
                    subtitle: 'keeping them warm is essential to survival. You can use whatever you have.'
                  },
                  {
                    title: '6.Avoid feeding the person',
                    subtitle: 'Do not provide any fluid or food. it could lead to choking.'
                  }
                ]
              }
            }]
          },
          {
            title: 'Cardiac Arrest',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462702964/cardiacA_tlunep.jpg',
            buttons: [
              {
                payloadKey: 'A Cardiac arrest',
                title: 'Report',
                innerStep : {
                  type: 'image',
                  image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462696950/cpr_j17pcn.jpeg'
                }
              }
            ]
          },
          {
            title: 'Health Emergency',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/medical_emergency_wgcxcg.jpg',
            buttons: [
              {
                payloadKey: 'A Health Emergency',
                title: 'Report'
              }
            ]
          },
          {
            title: 'Violence',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/violence_zo9wkq.jpg',
            buttons: [{
              payloadKey: 'A Violence',
              title: 'Report'
            }]
          },
          {
            title: 'Fire',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/fire_jmiwgn.jpg',
            buttons: [{
              payloadKey: 'A Fire',
              title: 'Report'
            }]
          },
          {
            title: 'Other',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/911_csojjm.png',
            buttons: [{
              payloadKey: 'A Life Threatening Emergency',
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
              payloadKey: 'A Traffic Report',
              title: 'Report'
            }]
          },
          {
            title: 'Disturbances',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/disturbance_d4q9a0.jpg',
            buttons: [{
              payloadKey: 'A Disturbance',
              title: 'Report'
            }]
          },
          {
            title: 'Alarms',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/alarms_djx1rq.jpg',
            buttons: [{
              payloadKey: 'An Alarm',
              title: 'Report'
            }]
          },
          {
            title: 'Welfare Checks',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/wellfare_nsos3h.jpg',
            buttons: [{
              payloadKey: 'A Welfare Check',
              title: 'Report'
            }]
          },
          {
            title: 'Civil problems',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/civil_jugopw.jpg',
            buttons: [{
              payloadKey: 'A Civil Problem',
              title: 'Report'
            }]
          },
          {
            title: 'Other',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675405/911_csojjm.png',
            buttons: [{
              payloadKey: 'A Not Life Threatening Emergency',
              title: 'Report'
            }]
          }
        ]
      }
    }
  ]
};
