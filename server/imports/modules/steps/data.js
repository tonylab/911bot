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
                type: 'textAndButton',
                text: 'Check yourself first - If you have been injured in the accident, first check yourself for any injuries. Try to assess how well you can move your limbs, and if you experience symptoms such as dizziness etc. Remember you need to be fit enough to help the others',
                button :{
                  text: 'Check yourself first - If you have been injured in the accident, first check yourself for any injuries. Try to assess how well you can move your limbs, and if you experience symptoms such as dizziness etc. Remember you need to be fit enough to help the others',
                  buttons: [
                    {
                      payloadKey: 'TAI1',
                      title: 'I AM OK',
                      innerStep:{
                        type: 'textAndButton',
                        text: 'Do not move any injured person - Do not move any injured person unless there is a fire or a strong smell of fuel that is caused by a leak. moving him/her in such a situation can cause more harm than good.',
                        button : {
                          text: 'Do not move any injured person - Do not move any injured person unless there is a fire or a strong smell of fuel that is caused by a leak. moving him/her in such a situation can cause more harm than good.',
                          buttons: [
                            {
                              payloadKey: 'TAI2',
                              title: 'GOT IT',
                              innerStep: {
                                type: 'textAndButton',
                                text: 'Secure the Accident Scene - Park your car with hazard lights and/or headlights on ideally facing approaching traffic. Place a warning triangle in the road.If there are other people who can help send them back along the road to wave traffic in order to slow it down. Take care on fast moving roads. Other drivers might not understand what you are trying to do.',
                                button : {
                                  text: 'Secure the Accident Scene',
                                  buttons: [
                                    {
                                      payloadKey: 'TAI3',
                                      title: 'DONE',
                                      innerStep: {
                                        type: 'textAndButton',
                                        text: 'Reduce risks - Check the scene, switch off engines, impose a no smoking ban. Keep children at a safe distance.',
                                        button : {
                                          text: 'Reduce risks',
                                          buttons: [
                                            {
                                              payloadKey: 'TAI4',
                                              title: 'DONE',
                                              innerStep: {

                                              }
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
                /*
                                                    title: 'Send us a short video',
                                                    subtitle: 'Sending us a short video will help us asses the damage and send the most accurate help',
                                                    image: '',
                                                    buttons: [{
                                                      payloadKey: 'TAI5',
                                                      title: 'Done',
                                                      innerStep: {

                */
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
            buttons: [{
              payloadKey: 'A Health Emergency',
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
