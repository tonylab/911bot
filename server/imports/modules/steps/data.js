export default {
  type: 'button',
  text: 'Please choose:',
  buttons: [
    {
      "text": "Life threatening",
      innerStep: {
        type: 'bubbles',
        bubbles: [
          {
            text: 'Traffic Accident',
            image: '',
            button: ''
          },
          {
            text: 'Violence',
            image: '',
            button: ''
          },
          {
            text: 'Health Emergency',
            image: '',
            button: ''
          },
          {
            text: 'Fire',
            image: '',
            button: ''
          },
          {
            text: 'Other',
            image: '',
            button: ''
          }
        ]
      }
    },
    {
      "text": "Not life threatening",
      innerStep: {
        type: 'bubbles',
        bubbles: [
          {
            text: 'Traffic reporting',
            image: '',
            button: ''
          },
          {
            text: 'Disturbances',
            image: '',
            button: ''
          },
          {
            text: 'Alarms',
            image: '',
            button: ''
          },
          {
            text: 'Welfare checks',
            image: '',
            button: ''
          },
          {
            text: 'Civil problems',
            image: '',
            button: ''
          },
          {
            text: 'Health issues',
            image: '',
            button: ''
          },
          {
            text: 'Other',
            image: '',
            button: ''
          }
        ]
      }
    }
  ]
};
