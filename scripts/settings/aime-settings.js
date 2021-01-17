export function register(appName, updateFunc) {

    game.settings.register(appName,'ignorePassiveFeats', {
        name: game.i18n.localize('tokenactionhud.settings.aime.ignorePassiveFeats.name'),
        hint: game.i18n.localize('tokenactionhud.settings.aime.ignorePassiveFeats.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'showSpellInfo', {
        name: game.i18n.localize('tokenactionhud.settings.aime.showSpellInfo.name'),
        hint: game.i18n.localize('tokenactionhud.settings.aime.showSpellInfo.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'showAllNonpreparableSpells', {
        name: game.i18n.localize('tokenactionhud.settings.aime.showAllNonpreparableSpells.name'),
        hint: game.i18n.localize('tokenactionhud.settings.aime.showAllNonpreparableSpells.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'hideLongerActions', {
        name: game.i18n.localize('tokenactionhud.settings.aime.hideLongerActions.name'),
        hint: game.i18n.localize('tokenactionhud.settings.aime.hideLongerActions.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'abbreviateSkills', {
        name: game.i18n.localize('tokenactionhud.settings.aime.abbreviateSkills.name'),
        hint: game.i18n.localize('tokenactionhud.settings.aime.abbreviateSkills.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'splitAbilities', {
        name: game.i18n.localize('tokenactionhud.settings.aime.splitAbilities.name'),
        hint: game.i18n.localize('tokenactionhud.settings.aime.splitAbilities.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'showAllNpcItems', {
        name: game.i18n.localize('tokenactionhud.settings.aime.showAllNpcItems.name'),
        hint: game.i18n.localize('tokenactionhud.settings.aime.showAllNpcItems.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => { updateFunc(value); }
    });

    game.settings.register(appName,'showEmptyItems', {
        name: game.i18n.localize('tokenactionhud.settings.aime.showEmptyItems.name'),
        hint: game.i18n.localize('tokenactionhud.settings.aime.showEmptyItems.hint'),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        onChange: value => { updateFunc(value); }
    });
}