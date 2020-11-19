import { SystemManager } from './manager.js';
import { ActionHandlerSw5eFoundry as ActionHandler } from '../actions/sw5efoundry/sw5efoundry-actions.js'
import { RollHandlerBaseSw5eFoundry as Core } from '../rollHandlers/sw5efoundry/sw5efoundry-base.js';
import * as settings from '../settings/sw5efoundry-settings.js'

export class Sw5eFoundrySystemManager extends SystemManager {
    
    constructor(appName) {
        super(appName);
    }

    /** @override */
    doGetActionHandler(filterManager, categoryManager) {
        let actionHandler = new ActionHandler(filterManager, categoryManager);
        return actionHandler;
    }

    /** @override */
    getAvailableRollHandlers() {
        let choices = { 'core': 'Core Star Wars 5e' };

        return choices;
    }

    /** @override */
    doGetRollHandler(handlerId) {
        return new Core();
    }

    /** @override */
    doRegisterSettings(appName, updateFunc) {
        settings.register(appName, updateFunc);
    }
}