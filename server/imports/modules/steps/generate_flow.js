import staticData from './data.js';
import {parseData, initialMessageConst} from './message_store.js';

// On init create base impl
parseData(staticData, initialMessageConst);