import { Meteor } from 'meteor/meteor';
import {api} from './imports/api'
import './imports/modules/steps/generate_flow.js';

Meteor.startup(() => {
  api();
});