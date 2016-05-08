import { Meteor } from 'meteor/meteor';
import {api} from './imports/api'
import './imports/modules/steps/generateFlow.js';

Meteor.startup(() => {
  api();
});