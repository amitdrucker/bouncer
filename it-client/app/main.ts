import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
import "./rxjs-ex";

//enableProdMode();

//JIT
platformBrowserDynamic()
    .bootstrapModule(AppModule);