import { Meteor } from 'meteor/meteor';
import {api} from './imports/api'
import './imports/modules/steps/generate_flow.js';

import {locationToAddress} from './imports/modules/geocoding/geocoding'

Meteor.startup(() => {
  api();
  locationToAddress()
});