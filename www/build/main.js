webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage.prototype.goToLogin = function () {
        this.navCtrl.push(this.loginPage);
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\pages\cadastro\cadastro.html"*/'<ion-content padding class="master">\n\n  <div class="logo d-flex justify-content-center">\n\n    <img src="../assets/imgs/logo-extend.png" alt="" class="logo">\n\n  </div>\n\n\n\n  <div class="form-login">\n\n    <ion-list class="items-middle" text-center>\n\n      <ion-item>\n\n        <ion-label color="ligh-grey" floating>\n\n          <ion-icon item-left name="md-person"></ion-icon>Nome</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="ligh-grey" floating>\n\n          <ion-icon item-left name="mail"></ion-icon>Email</ion-label>\n\n        <ion-input type="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="ligh-grey" floating>\n\n          <ion-icon item-left name="lock"></ion-icon>Senha</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n    <div class="login-button">\n\n      <button ion-button>CADASTRAR</button>\n\n    </div>\n\n    <div styl="margin-top: 3em" class="text-information">\n\n        <small>Já possui conta?\n\n            <a style="color: #fff" (click)=\'goToLogin()\'> Acessar</a>\n\n  \n\n        </small>     \n\n      </div>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticiasPage = /** @class */ (function () {
    function NoticiasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NoticiasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticiasPage');
    };
    NoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticias',template:/*ion-inline-start:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\pages\noticias\noticias.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Notícias</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div>\n\n    <ion-segment [(ngModel)]="news">\n\n      <ion-segment-button value="clima">\n\n        Clima\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="cotacoes">\n\n        Cotações\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="tecnologias">\n\n        Tecnologias\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="news">\n\n    <ion-list *ngSwitchCase="\'clima\'">\n\n      <ion-card>\n\n        <img src="../assets/imgs/background_2.jpg" />\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Geada destroi lavoura\n\n          </ion-card-title>\n\n          <p>\n\n            The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <div class="card-weather">\n\n            <span class="city">Maringá - PR</span>\n\n            <br>\n\n            <div class="sun"></div>\n\n            <span class="temp">33&#176;</span>\n\n            <span>\n\n              <ul class="variations">\n\n                <li>LIMPO</li>\n\n                <li>\n\n                  <span class="speed">9\n\n                    <span class="mph">mph</span>\n\n                  </span>\n\n                </li>\n\n              </ul>\n\n            </span>\n\n            <div class="forecast clear">\n\n              <div class="day tue">TER\n\n                <br>\n\n                <span class="cloudy"></span>\n\n                <br>\n\n                <span class="highTemp">23&#176;</span>\n\n                <br>\n\n                <span class="lowTemp">33&#176;</span>\n\n              </div>\n\n              <div class="day wed">QUA\n\n                <br>\n\n                <span class="sunny"></span>\n\n                <br>\n\n                <span class="highTemp">22&#176;</span>\n\n                <br>\n\n                <span class="lowTemp">30&#176;</span>\n\n              </div>\n\n              <div class="day thu">QUI\n\n                <br>\n\n                <span class="sunny"></span>\n\n                <br>\n\n                <span class="highTemp">18&#176;</span>\n\n                <br>\n\n                <span class="lowTemp">27&#176;</span>\n\n              </div>\n\n              <div class="day fri">SEX\n\n                <br>\n\n                <span class="cloudy"></span>\n\n                <br>\n\n                <span class="highTemp">19&#176;</span>\n\n                <br>\n\n                <span class="lowTemp">28&#176;</span>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'cotacoes\'">\n\n      <ion-card>\n\n        <ion-card-content>\n\n         \n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'tecnologias\'">\n\n      <ion-card>\n\n        <img src="../assets/imgs/john.jpg" />\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Novos Modelos Autômonos John Deere\n\n          </ion-card-title>\n\n          <p>\n\n            The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n    </ion-list>\n\n  </div>\n\n  <hr>\n\n\n\n\n\n  <!-- Real floating action button, fixed. It will not scroll with the content -->\n\n  <ion-fab top right edge>\n\n    <button ion-fab mini>\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\pages\noticias\noticias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NoticiasPage);
    return NoticiasPage;
}());

//# sourceMappingURL=noticias.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SensoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SensoresPage = /** @class */ (function () {
    function SensoresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SensoresPage.prototype.ionViewDidLoad = function () {
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
                datasets: [
                    {
                        label: "Previsto(R$)",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 80],
                        spanGaps: false,
                    },
                    {
                        label: "Executado(R$)",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(255, 0, 0,0.4)",
                        borderColor: "rgba(255, 0, 0,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(255, 0, 0,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(255, 0, 0,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [50, 75, 40, 30, 60, 70, 40],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], SensoresPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], SensoresPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], SensoresPage.prototype, "lineCanvas", void 0);
    SensoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sensores',template:/*ion-inline-start:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\pages\sensores\sensores.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Strider</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card style="border: none;">\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <img style="width: 100% !important; margin: 0px !important;" class="img-small" src="../../assets/imgs/monitore.png">\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <b style="font-size: 17px; color: #212529;">Monitoramento do seu plantio!</b>\n\n          <h3 style="margin-top: 6px;"> - Informações sobre o preparo de solo, plantio, proteção de cultivo, colheita e armazenamento.</h3>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <ion-icon style="font-size: 3em;\n\n                    margin-left: 17px;\n\n                    margin-top: 10px;\n\n                    color: #2ec95c;" name="md-arrow-round-up"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <b style="font-size: 20px; color: #212529;">+ 20% Irrigação.</b>\n\n          <h3> - Houve um aumento de 20% na irrigação do solo.</h3>\n\n        </ion-col>\n\n      </ion-row>\n\n      <small style="float: right;\n\n                      color: #222;\n\n                      margin-right: 10px;">(Strider - Irrigação)</small>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <ion-icon style="font-size: 3em;\n\n                    margin-left: 17px;\n\n                    margin-top: 10px;\n\n                    color: #2ec95c;" name="md-arrow-round-up"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <b style="font-size: 20px; color: #212529;">- 2.340,00 R$ em Plantio por hectare.</b>\n\n          <h3> - Houve uma economia no plantio por hectare.</h3>\n\n        </ion-col>\n\n      </ion-row>\n\n      <small style="float: right;\n\n                      color: #222;\n\n                      margin-right: 10px;">(Strider - Planejamento)</small>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n\n\n<br>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Controle de Orçamento\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #lineCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\pages\sensores\sensores.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], SensoresPage);
    return SensoresPage;
    var _a, _b;
}());

//# sourceMappingURL=sensores.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		275,
		3
	],
	"../pages/login/login.module": [
		278,
		2
	],
	"../pages/noticias/noticias.module": [
		276,
		1
	],
	"../pages/sensores/sensores.module": [
		277,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppsPage = /** @class */ (function () {
    function AppsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AppsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-apps',template:/*ion-inline-start:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\pages\apps\apps.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Integrações</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item style="padding-left: 0px;">\n\n        <ion-label style="color: grey">\n\n            <ion-icon name="md-search"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="text" placeholder="Pesquisar"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-4>\n\n                <button class="btn-search" ion-button color="light" round>Irrigação</button>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <button class="btn-search" ion-button color="light" round>Monitoramento</button>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <button class="btn-search" ion-button color="light" round>Finanças</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-card style="border: 2px solid #32db64;">\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <img class="img-small" src="../../assets/imgs/recomendacoes-1.png">\n\n                </ion-col>\n\n                <ion-col col-10>\n\n                    <b style="font-size: 20px; font-size: 20px;">Strider</b>\n\n                    <h3> - Monitoramento de irrigação.</h3>\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n            <small style="float: right;\n\n                    color: #222;\n\n                    margin-right: 10px;">Ativo</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <img class="img-small" src="../../assets/imgs/fracao.png">\n\n                </ion-col>\n\n                <ion-col col-10>\n\n                    <b style="font-size: 20px; color: #212529;">Strider</b>\n\n                    <h3> - Acompanhe a disponibilidade de água no solo para a cultura.</h3>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <img class="img-small" src="../../assets/imgs/relatorio.png">\n\n                </ion-col>\n\n                <ion-col col-10>\n\n                    <b style="font-size: 20px; color: #212529;">Strider</b>\n\n                    <h3> - Defina a melhor janela de plantio e colheita.</h3>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n\n\n    <ion-card style="border: 2px solid #32db64;">\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <img class="img-small" src="../../assets/imgs/g1.png">\n\n                </ion-col>\n\n                <ion-col col-10>\n\n                    <b style="font-size: 20px; color: #212529;">G1 Globo</b>\n\n                    <h3> - Notícias sobre clima, novidades e agronegócio.</h3>\n\n                </ion-col>\n\n            </ion-row>\n\n            <small style="float: right;\n\n                    color: #222;\n\n                    margin-right: 10px;">Ativo</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <img class="img-small" src="../../assets/imgs/crop.png">\n\n                </ion-col>\n\n                <ion-col col-10>\n\n                    <b style="font-size: 20px; color: #212529;">Smart Agro</b>\n\n                    <h3> - Monitoramento de colheita e plantio através de drones.</h3>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="primary">\n\n            <ion-icon name="arrow-dropleft"></ion-icon>\n\n        </button>\n\n        <ion-fab-list side="left">\n\n            <button ion-fab>\n\n                <ion-icon name="md-help"></ion-icon>\n\n            </button>\n\n            <button color="secondary" ion-fab>\n\n                <ion-icon name="md-add"></ion-icon>\n\n            </button>\n\n        </ion-fab-list>\n\n    </ion-fab>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\pages\apps\apps.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AppsPage);
    return AppsPage;
}());

//# sourceMappingURL=apps.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_noticias_noticias__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sensores_sensores__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_apps_apps__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_noticias_noticias__["a" /* NoticiasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sensores_sensores__["a" /* SensoresPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_apps_apps__["a" /* AppsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticias/noticias.module#NoticiasPageModule', name: 'NoticiasPage', segment: 'noticias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sensores/sensores.module#SensoresPageModule', name: 'SensoresPage', segment: 'sensores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_noticias_noticias__["a" /* NoticiasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sensores_sensores__["a" /* SensoresPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_apps_apps__["a" /* AppsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_noticias_noticias__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sensores_sensores__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_apps_apps__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Início', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Noticias', component: __WEBPACK_IMPORTED_MODULE_6__pages_noticias_noticias__["a" /* NoticiasPage */] },
            { title: 'Sensores', component: __WEBPACK_IMPORTED_MODULE_7__pages_sensores_sensores__["a" /* SensoresPage */] },
            { title: 'Integrações', component: __WEBPACK_IMPORTED_MODULE_8__pages_apps_apps__["a" /* AppsPage */] },
            { title: 'Sair', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] }
        ];
        console.log(this.pages);
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <img src="../assets/imgs/logo-extend.png">\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 293,
	"./af.js": 293,
	"./ar": 294,
	"./ar-dz": 295,
	"./ar-dz.js": 295,
	"./ar-kw": 296,
	"./ar-kw.js": 296,
	"./ar-ly": 297,
	"./ar-ly.js": 297,
	"./ar-ma": 298,
	"./ar-ma.js": 298,
	"./ar-sa": 299,
	"./ar-sa.js": 299,
	"./ar-tn": 300,
	"./ar-tn.js": 300,
	"./ar.js": 294,
	"./az": 301,
	"./az.js": 301,
	"./be": 302,
	"./be.js": 302,
	"./bg": 303,
	"./bg.js": 303,
	"./bm": 304,
	"./bm.js": 304,
	"./bn": 305,
	"./bn.js": 305,
	"./bo": 306,
	"./bo.js": 306,
	"./br": 307,
	"./br.js": 307,
	"./bs": 308,
	"./bs.js": 308,
	"./ca": 309,
	"./ca.js": 309,
	"./cs": 310,
	"./cs.js": 310,
	"./cv": 311,
	"./cv.js": 311,
	"./cy": 312,
	"./cy.js": 312,
	"./da": 313,
	"./da.js": 313,
	"./de": 314,
	"./de-at": 315,
	"./de-at.js": 315,
	"./de-ch": 316,
	"./de-ch.js": 316,
	"./de.js": 314,
	"./dv": 317,
	"./dv.js": 317,
	"./el": 318,
	"./el.js": 318,
	"./en-au": 319,
	"./en-au.js": 319,
	"./en-ca": 320,
	"./en-ca.js": 320,
	"./en-gb": 321,
	"./en-gb.js": 321,
	"./en-ie": 322,
	"./en-ie.js": 322,
	"./en-il": 323,
	"./en-il.js": 323,
	"./en-nz": 324,
	"./en-nz.js": 324,
	"./eo": 325,
	"./eo.js": 325,
	"./es": 326,
	"./es-do": 327,
	"./es-do.js": 327,
	"./es-us": 328,
	"./es-us.js": 328,
	"./es.js": 326,
	"./et": 329,
	"./et.js": 329,
	"./eu": 330,
	"./eu.js": 330,
	"./fa": 331,
	"./fa.js": 331,
	"./fi": 332,
	"./fi.js": 332,
	"./fo": 333,
	"./fo.js": 333,
	"./fr": 334,
	"./fr-ca": 335,
	"./fr-ca.js": 335,
	"./fr-ch": 336,
	"./fr-ch.js": 336,
	"./fr.js": 334,
	"./fy": 337,
	"./fy.js": 337,
	"./gd": 338,
	"./gd.js": 338,
	"./gl": 339,
	"./gl.js": 339,
	"./gom-latn": 340,
	"./gom-latn.js": 340,
	"./gu": 341,
	"./gu.js": 341,
	"./he": 342,
	"./he.js": 342,
	"./hi": 343,
	"./hi.js": 343,
	"./hr": 344,
	"./hr.js": 344,
	"./hu": 345,
	"./hu.js": 345,
	"./hy-am": 346,
	"./hy-am.js": 346,
	"./id": 347,
	"./id.js": 347,
	"./is": 348,
	"./is.js": 348,
	"./it": 349,
	"./it.js": 349,
	"./ja": 350,
	"./ja.js": 350,
	"./jv": 351,
	"./jv.js": 351,
	"./ka": 352,
	"./ka.js": 352,
	"./kk": 353,
	"./kk.js": 353,
	"./km": 354,
	"./km.js": 354,
	"./kn": 355,
	"./kn.js": 355,
	"./ko": 356,
	"./ko.js": 356,
	"./ky": 357,
	"./ky.js": 357,
	"./lb": 358,
	"./lb.js": 358,
	"./lo": 359,
	"./lo.js": 359,
	"./lt": 360,
	"./lt.js": 360,
	"./lv": 361,
	"./lv.js": 361,
	"./me": 362,
	"./me.js": 362,
	"./mi": 363,
	"./mi.js": 363,
	"./mk": 364,
	"./mk.js": 364,
	"./ml": 365,
	"./ml.js": 365,
	"./mn": 366,
	"./mn.js": 366,
	"./mr": 367,
	"./mr.js": 367,
	"./ms": 368,
	"./ms-my": 369,
	"./ms-my.js": 369,
	"./ms.js": 368,
	"./mt": 370,
	"./mt.js": 370,
	"./my": 371,
	"./my.js": 371,
	"./nb": 372,
	"./nb.js": 372,
	"./ne": 373,
	"./ne.js": 373,
	"./nl": 374,
	"./nl-be": 375,
	"./nl-be.js": 375,
	"./nl.js": 374,
	"./nn": 376,
	"./nn.js": 376,
	"./pa-in": 377,
	"./pa-in.js": 377,
	"./pl": 378,
	"./pl.js": 378,
	"./pt": 379,
	"./pt-br": 380,
	"./pt-br.js": 380,
	"./pt.js": 379,
	"./ro": 381,
	"./ro.js": 381,
	"./ru": 382,
	"./ru.js": 382,
	"./sd": 383,
	"./sd.js": 383,
	"./se": 384,
	"./se.js": 384,
	"./si": 385,
	"./si.js": 385,
	"./sk": 386,
	"./sk.js": 386,
	"./sl": 387,
	"./sl.js": 387,
	"./sq": 388,
	"./sq.js": 388,
	"./sr": 389,
	"./sr-cyrl": 390,
	"./sr-cyrl.js": 390,
	"./sr.js": 389,
	"./ss": 391,
	"./ss.js": 391,
	"./sv": 392,
	"./sv.js": 392,
	"./sw": 393,
	"./sw.js": 393,
	"./ta": 394,
	"./ta.js": 394,
	"./te": 395,
	"./te.js": 395,
	"./tet": 396,
	"./tet.js": 396,
	"./tg": 397,
	"./tg.js": 397,
	"./th": 398,
	"./th.js": 398,
	"./tl-ph": 399,
	"./tl-ph.js": 399,
	"./tlh": 400,
	"./tlh.js": 400,
	"./tr": 401,
	"./tr.js": 401,
	"./tzl": 402,
	"./tzl.js": 402,
	"./tzm": 403,
	"./tzm-latn": 404,
	"./tzm-latn.js": 404,
	"./tzm.js": 403,
	"./ug-cn": 405,
	"./ug-cn.js": 405,
	"./uk": 406,
	"./uk.js": 406,
	"./ur": 407,
	"./ur.js": 407,
	"./uz": 408,
	"./uz-latn": 409,
	"./uz-latn.js": 409,
	"./uz.js": 408,
	"./vi": 410,
	"./vi.js": 410,
	"./x-pseudo": 411,
	"./x-pseudo.js": 411,
	"./yo": 412,
	"./yo.js": 412,
	"./zh-cn": 413,
	"./zh-cn.js": 413,
	"./zh-hk": 414,
	"./zh-hk.js": 414,
	"./zh-tw": 415,
	"./zh-tw.js": 415
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 444;

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cadastro_cadastro__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cadastroPage = __WEBPACK_IMPORTED_MODULE_2__pages_cadastro_cadastro__["a" /* CadastroPage */];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goToCadastro = function () {
        this.navCtrl.push(this.cadastroPage);
    };
    LoginPage.prototype.home = function () {
        this.navCtrl.setRoot(this.rootPage);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\pages\login\login.html"*/'<ion-content padding class="master">\n\n  <div class="logo d-flex justify-content-center">\n\n    <img src="../assets/imgs/logo-extend.png" alt="" class="logo">\n\n  </div>\n\n\n\n  <div class="form-login">\n\n    <ion-list class="items-middle" text-center>\n\n      <ion-item>\n\n        <ion-label color="ligh-grey" floating>\n\n          <ion-icon item-left name="mail"></ion-icon>Email</ion-label>\n\n        <ion-input type="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="ligh-grey" floating>\n\n          <ion-icon item-left name="lock"></ion-icon>Senha</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n    <div class="login-button">\n\n      <button ion-button (click)="home()">ENTRAR</button>\n\n    </div>\n\n    <div styl="margin-top: 3em" class="text-information">\n\n      <small>Não possui conta ainda?\n\n          <a style="color: #fff" (click)=\'goToCadastro()\'> Cadastrar-se</a>\n\n\n\n      </small>     \n\n    </div>\n\n\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Agroamigo</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card style="border: none;">\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <img style="width: 100% !important; margin: 0px !important;" class="img-small" src="../../assets/imgs/logo.png">\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <b style="font-size: 17px; color: #212529;">Temos algumas novidades para você!</b>\n\n          <h3 style="margin-top: 6px;"> - Notícias sobre clima e agronegócio são os destaques da semana.</h3>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n \n\n\n\n  <ion-card>\n\n      <ion-card-content>\n\n          <ion-row>\n\n              <ion-col col-2>\n\n                  <ion-icon style="font-size: 3em;\n\n                  margin-left: 17px;\n\n                  margin-top: 10px;\n\n                  color: #2ec95c;" name="md-arrow-round-up"></ion-icon>\n\n              </ion-col>\n\n              <ion-col col-10>\n\n                  <b style="font-size: 20px; color: #212529;">+ 20% Irrigação.</b>\n\n                  <h3> - Houve um aumento de 20% na irrigação do solo.</h3>\n\n              </ion-col>\n\n          </ion-row>          \n\n          <small style="float: right;\n\n                    color: #222;\n\n                    margin-right: 10px;">(Strider - Irrigação)</small>\n\n          </ion-card-content>\n\n  </ion-card>  \n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Felipe Gerolomo\Desktop\Projetos\farmApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map