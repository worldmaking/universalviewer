/// <reference path="../../js/jquery.d.ts" />
/// <reference path="../../js/extensions.d.ts" />
import baseApp = module("app/BaseApp");
import app = module("app/seadragon/App");
import baseCenter = module("app/shared/Center");
import p = module("app/seadragon/Provider");

export class Center extends baseCenter.Center {

    title: string;

    constructor($element: JQuery) {
        super($element);
    }

    create(): void {
        super.create();

        this.title = app.App.getDataProvider().getTitle();
    }

    resize(): void {
        super.resize();

        this.$title.ellipsisFill(this.title);

        
    }
}