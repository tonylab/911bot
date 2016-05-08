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
                bubbles: [
                  {
                    title: '1.Check the other person(s) for injuries',
                    subtitle: 'If other people are injured, first assess the extent of his/ her injuries.',
                    buttons: [{
                      payloadKey: 'HOW TO ASSES',
                      title: 'HOW TO ASSES'
                    }]
                  },
                  {
                    title: '2.Look for signs of breathing',
                    subtitle: 'check if the person is breathing and if he has a pulse.'
                  },
                  {
                    title: '3.Check for obstructions in mouth and throat',
                    subtitle: 'If you do not hear any breath sounds, check his/her mouth for any obstructions. If there is something obstructing the airway, use your index and middle finger to clear the airway.'
                  },
                  {
                    title: '4.Perform life saving techniques',
                    subtitle: 'If there is no pulse, start CPR or EAR. Keep the person’s neck straight to start EAR or CPR',
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
                    title: '5.Ways to help in grave situations',
                    subtitle: 'If there is bleeding from the mouth or the patient is vomiting, turn the person to his/her side. This will avoid any chances of the person choking. Place the person’s arm that is under him straight out and the arm closest to you across his chest.'
                  },
                  {
                    title: '6.Deal with open wounds',
                    subtitle: 'If there are extensive wounds, try to control the bleeding using pressure to the area using a cloth. Press down with your palms rather than your finger tips.'
                  }
                  ,
                  {
                    title: '7.Keep the person warm',
                    subtitle: 'Usually accident victims feel excessively cold due to shock. Therefore keeping them warm is essential to survival. You can use whatever you have to do this, such as a T-shirt, jacket, etc.'
                  },
                  {
                    title: '8.Avoid feeding the person',
                    subtitle: 'Do not give the person any water, food or other fluids through the mouth, it could lead to the patient choking.'
                  }
                ]
              }
            }]
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
            title: 'Health Emergency',
            image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462675406/medical_emergency_wgcxcg.jpg',
            buttons: [
              {
                payloadKey: 'A Cardiac arrest',
                title: 'Cardiac arrest',
                innerStep : {
                  type: 'image',
                  image: 'http://res.cloudinary.com/hqkcoueyo/image/upload/v1462696950/cpr_j17pcn.jpeg'
                }
              },
              {
                payloadKey: 'A Health Emergency',
                title: 'Other Health Emergencies'
              }
            ]
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
