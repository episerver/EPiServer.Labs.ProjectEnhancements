define([
    "dojo/_base/declare",
    "epi/_Module",
    "./store-initializer",
    "./project-selector-initializer",
    "./rename-project-command-initializer",
    "./project-dialog-content-initializer",
    "./project-mode-toolbar-view-model-initializer"
], function (
    declare,
    _Module,
    storeInitializer,
    projectSelectorInitializer,
    renameProjectCommandInitializer,
    projectDialogContentInitializer,
    projectModeToolbarViewModelInitializer
) {
    return declare([_Module], {
        initialize: function () {
            this.inherited(arguments);

            storeInitializer();
            projectSelectorInitializer();
            renameProjectCommandInitializer();
            projectDialogContentInitializer();
            projectModeToolbarViewModelInitializer();
        }
    });
});
