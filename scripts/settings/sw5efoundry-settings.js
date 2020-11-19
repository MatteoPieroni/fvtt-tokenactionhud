export function register(app, updateSettings) {
    game.settings.register(app,'ignorePassiveFeats', {
        name: game.i18n.localize('tokenactionhud.settings.sw5efoundry.ignorePassiveFeats.name'),
        hint: game.i18n.localize('tokenactionhud.settings.sw5efoundry.ignorePassiveFeats.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { updateSettings(value); }
    });

    game.settings.register(app,'hideLongerActions', {
        name: game.i18n.localize('tokenactionhud.settings.sw5efoundry.hideLongerActions.name'),
        hint: game.i18n.localize('tokenactionhud.settings.sw5efoundry.hideLongerActions.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { updateSettings(value); }
    });

    game.settings.register(app,'abbreviateSkills', {
        name: game.i18n.localize('tokenactionhud.settings.sw5efoundry.abbreviateSkills.name'),
        hint: game.i18n.localize('tokenactionhud.settings.sw5efoundry.abbreviateSkills.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { updateSettings(value); }
    });
    
    game.settings.register(app,'showEmptyItems', {
        name: game.i18n.localize('tokenactionhud.settings.sw5efoundry.showEmptyItems.name'),
        hint: game.i18n.localize('tokenactionhud.settings.sw5efoundry.showEmptyItems.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { updateSettings(value); }
    });
}
    