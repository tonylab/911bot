import { Meteor } from 'meteor/meteor';
import {api} from './imports/api'

Meteor.startup(() => {
  api();
});
