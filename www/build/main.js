webpackJsonp([4],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(58);
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
            selector: 'page-cadastro',template:/*ion-inline-start:"c:\Users\yangu\Documents\farmApp2\src\pages\cadastro\cadastro.html"*/'<ion-content padding class="master">\n\n  <div class="logo d-flex justify-content-center">\n\n    <img src="../assets/imgs/logo-extend.png" alt="" class="logo">\n\n  </div>\n\n\n\n  <div class="form-login">\n\n    <ion-list class="items-middle" text-center>\n\n      <ion-item>\n\n        <ion-label color="ligh-grey" floating>\n\n          <ion-icon item-left name="md-person"></ion-icon>Nome</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="ligh-grey" floating>\n\n          <ion-icon item-left name="mail"></ion-icon>Email</ion-label>\n\n        <ion-input type="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="ligh-grey" floating>\n\n          <ion-icon item-left name="lock"></ion-icon>Senha</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n    <div class="login-button">\n\n      <button ion-button>CADASTRAR</button>\n\n    </div>\n\n    <div styl="margin-top: 3em" class="text-information">\n\n        <small>Já possui conta?\n\n            <a style="color: #fff" (click)=\'goToLogin()\'> Acessar</a>\n\n  \n\n        </small>     \n\n      </div>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"c:\Users\yangu\Documents\farmApp2\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apps_apps__ = __webpack_require__(87);
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
        this.appsPage = __WEBPACK_IMPORTED_MODULE_2__apps_apps__["a" /* AppsPage */];
        this.news = "clima";
    }
    NoticiasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticiasPage');
    };
    NoticiasPage.prototype.addNews = function () {
        this.navCtrl.push(this.appsPage);
    };
    NoticiasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticias',template:/*ion-inline-start:"c:\Users\yangu\Documents\farmApp2\src\pages\noticias\noticias.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Notícias</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div>\n\n    <ion-segment [(ngModel)]="news">\n\n      <ion-segment-button value="clima">\n\n        Clima\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="cotacoes">\n\n        Cotações\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="tecnologias">\n\n        Tecnologias\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="news">\n\n    <ion-list *ngSwitchCase="\'clima\'">\n\n      <ion-card>\n\n        <img src="../assets/imgs/background_2.jpg" />\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Geada destroi lavoura\n\n          </ion-card-title>\n\n          <p>\n\n            Temperaturas baixas dificultaram a safra deste ano no PR. <small>(G1 - PR)</small>\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <div class="card-weather">\n\n            <span class="city">Maringá - PR</span>\n\n            <br>\n\n            <div class="sun"></div>\n\n            <span class="temp">33&#176;</span>\n\n            <span>\n\n              <ul class="variations">\n\n                <li>LIMPO</li>\n\n                <li>\n\n                  <span class="speed">9\n\n                    <span class="mph">mph</span>\n\n                  </span>\n\n                </li>\n\n              </ul>\n\n            </span>\n\n            <div class="forecast clear">\n\n              <div class="day tue">TER\n\n                <br>\n\n                <span class="cloudy"></span>\n\n                <br>\n\n                <span class="highTemp">23&#176;</span>\n\n                <br>\n\n                <span class="lowTemp">33&#176;</span>\n\n              </div>\n\n              <div class="day wed">QUA\n\n                <br>\n\n                <span class="sunny"></span>\n\n                <br>\n\n                <span class="highTemp">22&#176;</span>\n\n                <br>\n\n                <span class="lowTemp">30&#176;</span>\n\n              </div>\n\n              <div class="day thu">QUI\n\n                <br>\n\n                <span class="sunny"></span>\n\n                <br>\n\n                <span class="highTemp">18&#176;</span>\n\n                <br>\n\n                <span class="lowTemp">27&#176;</span>\n\n              </div>\n\n              <div class="day fri">SEX\n\n                <br>\n\n                <span class="cloudy"></span>\n\n                <br>\n\n                <span class="highTemp">19&#176;</span>\n\n                <br>\n\n                <span class="lowTemp">28&#176;</span>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'cotacoes\'">\n\n      <ion-card>\n\n        <ion-card-content>\n\n         \n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'tecnologias\'">\n\n      <ion-card>\n\n        <img src="../assets/imgs/john.jpg" />\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Novos Modelos Autômonos John Deere\n\n          </ion-card-title>\n\n          <p>\n\n            The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n    </ion-list>\n\n  </div>\n\n  <hr>\n\n\n\n\n\n  <!-- Real floating action button, fixed. It will not scroll with the content -->\n\n  <ion-fab top right edge>\n\n    <button ion-fab mini (click)="addNews()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"c:\Users\yangu\Documents\farmApp2\src\pages\noticias\noticias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NoticiasPage);
    return NoticiasPage;
}());

//# sourceMappingURL=noticias.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(386);
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
            selector: 'page-sensores',template:/*ion-inline-start:"c:\Users\yangu\Documents\farmApp2\src\pages\sensores\sensores.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Monitoramento</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card style="border: none;">\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <img style="width: 100% !important; margin: 0px !important;" class="img-small" src="../../assets/imgs/monitore.png">\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <b style="font-size: 17px; color: #212529;">Monitoramento do seu plantio!</b>\n\n          <h3 style="margin-top: 6px;"> - Informações sobre o preparo de solo, plantio, proteção de cultivo, colheita e armazenamento.</h3>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <ion-icon style="font-size: 3em;\n\n                    margin-left: 17px;\n\n                    margin-top: 10px;\n\n                    color: #2ec95c;" name="md-arrow-round-up"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <b style="font-size: 20px; color: #212529;">+ 20% Irrigação.</b>\n\n          <h3> - Houve um aumento de 20% na irrigação do solo.</h3>\n\n        </ion-col>\n\n      </ion-row>\n\n      <small style="float: right;\n\n                      color: #222;\n\n                      margin-right: 10px;">(Strider - Irrigação)</small>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <ion-icon style="font-size: 3em;\n\n                    margin-left: 17px;\n\n                    margin-top: 10px;\n\n                    color: #2ec95c;" name="md-arrow-round-up"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <b style="font-size: 20px; color: #212529;">- 2.340,00 R$ em Plantio por hectare.</b>\n\n          <h3> - Houve uma economia no plantio por hectare.</h3>\n\n        </ion-col>\n\n      </ion-row>\n\n      <small style="float: right;\n\n                      color: #222;\n\n                      margin-right: 10px;">(Strider - Planejamento)</small>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n\n\n<br>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Controle de Orçamento\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #lineCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"c:\Users\yangu\Documents\farmApp2\src\pages\sensores\sensores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SensoresPage);
    return SensoresPage;
}());

//# sourceMappingURL=sensores.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		460,
		3
	],
	"../pages/login/login.module": [
		461,
		2
	],
	"../pages/noticias/noticias.module": [
		462,
		1
	],
	"../pages/sensores/sensores.module": [
		463,
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
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
    }
    IntroPage.prototype.home = function () {
        this.navCtrl.setRoot(this.rootPage);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"c:\Users\yangu\Documents\farmApp2\src\pages\intro\intro.html"*/'<ion-content padding style="background-color: #31cc81;">\n\n\n\n  <div style="margin-top: 4em;">\n\n    <h2 style="color: #fff;\n\n    font-size: 2.5rem;\n\n    text-align: center;">\n\n    Escolha alguns de seus interesses</h2>\n\n\n\n    <ion-card style="background-color: #31cc81 !important;\n\n    border: 0px;\n\n    padding-top: 4em;">\n\n      <ion-card-content>\n\n        <ion-row>\n\n          <ion-item>\n\n            <ion-label style="font-size: 2rem;\n\n            color: #fff;">Controle de Plantio</ion-label>\n\n            <ion-checkbox color="light" checked="false"></ion-checkbox>\n\n          </ion-item>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-item>\n\n            <ion-label style="font-size: 2rem;\n\n            color: #fff;">Notícias</ion-label>\n\n            <ion-checkbox color="light" checked="false"></ion-checkbox>\n\n          </ion-item>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-item>\n\n            <ion-label style="font-size: 2rem;\n\n            color: #fff;">Recomendações de irrigação</ion-label>\n\n            <ion-checkbox color="light" checked="false"></ion-checkbox>\n\n          </ion-item>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-item>\n\n            <ion-label style="font-size: 2rem;\n\n            color: #fff;">Acompanhamento da disponibi- <br>lidade\n\n              de água no solo para a <br>  cultura</ion-label>\n\n            <ion-checkbox color="light" checked="false"></ion-checkbox>\n\n          </ion-item>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-item>\n\n            <ion-label style="font-size: 2rem;\n\n            color: #fff;">Redução de custos e controle de <br> orçamento</ion-label>\n\n            <ion-checkbox color="light" checked="false"></ion-checkbox>\n\n          </ion-item>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </div>\n\n\n\n  <p style="margin-left: 1rem;\n\n            color: rgba(34, 34, 34, 0.56);\n\n            text-align: center;\n\n            margin-top: 4em;">\n\n    Não encontrou o que procura? <b>O Agroamigo aprenderá com o seu uso!</b>\n\n  </p> \n\n\n\n  <div class="login-button" style="position: absolute;\n\n  width: 90%;\n\n  bottom: 2em;">\n\n    <button ion-button (click)="home()">ACESSAR</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"c:\Users\yangu\Documents\farmApp2\src\pages\intro\intro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_noticias_noticias__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sensores_sensores__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_apps_apps__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_intro_intro__ = __webpack_require__(164);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_apps_apps__["a" /* AppsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_intro_intro__["a" /* IntroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticias/noticias.module#NoticiasPageModule', name: 'NoticiasPage', segment: 'noticias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sensores/sensores.module#SensoresPageModule', name: 'SensoresPage', segment: 'sensores', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_12__pages_apps_apps__["a" /* AppsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_intro_intro__["a" /* IntroPage */]
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

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 171,
	"./af.js": 171,
	"./ar": 172,
	"./ar-dz": 173,
	"./ar-dz.js": 173,
	"./ar-kw": 174,
	"./ar-kw.js": 174,
	"./ar-ly": 175,
	"./ar-ly.js": 175,
	"./ar-ma": 176,
	"./ar-ma.js": 176,
	"./ar-sa": 177,
	"./ar-sa.js": 177,
	"./ar-tn": 178,
	"./ar-tn.js": 178,
	"./ar.js": 172,
	"./az": 179,
	"./az.js": 179,
	"./be": 180,
	"./be.js": 180,
	"./bg": 181,
	"./bg.js": 181,
	"./bm": 182,
	"./bm.js": 182,
	"./bn": 183,
	"./bn.js": 183,
	"./bo": 184,
	"./bo.js": 184,
	"./br": 185,
	"./br.js": 185,
	"./bs": 186,
	"./bs.js": 186,
	"./ca": 187,
	"./ca.js": 187,
	"./cs": 188,
	"./cs.js": 188,
	"./cv": 189,
	"./cv.js": 189,
	"./cy": 190,
	"./cy.js": 190,
	"./da": 191,
	"./da.js": 191,
	"./de": 192,
	"./de-at": 193,
	"./de-at.js": 193,
	"./de-ch": 194,
	"./de-ch.js": 194,
	"./de.js": 192,
	"./dv": 195,
	"./dv.js": 195,
	"./el": 196,
	"./el.js": 196,
	"./en-au": 197,
	"./en-au.js": 197,
	"./en-ca": 198,
	"./en-ca.js": 198,
	"./en-gb": 199,
	"./en-gb.js": 199,
	"./en-ie": 200,
	"./en-ie.js": 200,
	"./en-il": 201,
	"./en-il.js": 201,
	"./en-nz": 202,
	"./en-nz.js": 202,
	"./eo": 203,
	"./eo.js": 203,
	"./es": 204,
	"./es-do": 205,
	"./es-do.js": 205,
	"./es-us": 206,
	"./es-us.js": 206,
	"./es.js": 204,
	"./et": 207,
	"./et.js": 207,
	"./eu": 208,
	"./eu.js": 208,
	"./fa": 209,
	"./fa.js": 209,
	"./fi": 210,
	"./fi.js": 210,
	"./fo": 211,
	"./fo.js": 211,
	"./fr": 212,
	"./fr-ca": 213,
	"./fr-ca.js": 213,
	"./fr-ch": 214,
	"./fr-ch.js": 214,
	"./fr.js": 212,
	"./fy": 215,
	"./fy.js": 215,
	"./gd": 216,
	"./gd.js": 216,
	"./gl": 217,
	"./gl.js": 217,
	"./gom-latn": 218,
	"./gom-latn.js": 218,
	"./gu": 219,
	"./gu.js": 219,
	"./he": 220,
	"./he.js": 220,
	"./hi": 221,
	"./hi.js": 221,
	"./hr": 222,
	"./hr.js": 222,
	"./hu": 223,
	"./hu.js": 223,
	"./hy-am": 224,
	"./hy-am.js": 224,
	"./id": 225,
	"./id.js": 225,
	"./is": 226,
	"./is.js": 226,
	"./it": 227,
	"./it.js": 227,
	"./ja": 228,
	"./ja.js": 228,
	"./jv": 229,
	"./jv.js": 229,
	"./ka": 230,
	"./ka.js": 230,
	"./kk": 231,
	"./kk.js": 231,
	"./km": 232,
	"./km.js": 232,
	"./kn": 233,
	"./kn.js": 233,
	"./ko": 234,
	"./ko.js": 234,
	"./ky": 235,
	"./ky.js": 235,
	"./lb": 236,
	"./lb.js": 236,
	"./lo": 237,
	"./lo.js": 237,
	"./lt": 238,
	"./lt.js": 238,
	"./lv": 239,
	"./lv.js": 239,
	"./me": 240,
	"./me.js": 240,
	"./mi": 241,
	"./mi.js": 241,
	"./mk": 242,
	"./mk.js": 242,
	"./ml": 243,
	"./ml.js": 243,
	"./mn": 244,
	"./mn.js": 244,
	"./mr": 245,
	"./mr.js": 245,
	"./ms": 246,
	"./ms-my": 247,
	"./ms-my.js": 247,
	"./ms.js": 246,
	"./mt": 248,
	"./mt.js": 248,
	"./my": 249,
	"./my.js": 249,
	"./nb": 250,
	"./nb.js": 250,
	"./ne": 251,
	"./ne.js": 251,
	"./nl": 252,
	"./nl-be": 253,
	"./nl-be.js": 253,
	"./nl.js": 252,
	"./nn": 254,
	"./nn.js": 254,
	"./pa-in": 255,
	"./pa-in.js": 255,
	"./pl": 256,
	"./pl.js": 256,
	"./pt": 257,
	"./pt-br": 258,
	"./pt-br.js": 258,
	"./pt.js": 257,
	"./ro": 259,
	"./ro.js": 259,
	"./ru": 260,
	"./ru.js": 260,
	"./sd": 261,
	"./sd.js": 261,
	"./se": 262,
	"./se.js": 262,
	"./si": 263,
	"./si.js": 263,
	"./sk": 264,
	"./sk.js": 264,
	"./sl": 265,
	"./sl.js": 265,
	"./sq": 266,
	"./sq.js": 266,
	"./sr": 267,
	"./sr-cyrl": 268,
	"./sr-cyrl.js": 268,
	"./sr.js": 267,
	"./ss": 269,
	"./ss.js": 269,
	"./sv": 270,
	"./sv.js": 270,
	"./sw": 271,
	"./sw.js": 271,
	"./ta": 272,
	"./ta.js": 272,
	"./te": 273,
	"./te.js": 273,
	"./tet": 274,
	"./tet.js": 274,
	"./tg": 275,
	"./tg.js": 275,
	"./th": 276,
	"./th.js": 276,
	"./tl-ph": 277,
	"./tl-ph.js": 277,
	"./tlh": 278,
	"./tlh.js": 278,
	"./tr": 279,
	"./tr.js": 279,
	"./tzl": 280,
	"./tzl.js": 280,
	"./tzm": 281,
	"./tzm-latn": 282,
	"./tzm-latn.js": 282,
	"./tzm.js": 281,
	"./ug-cn": 283,
	"./ug-cn.js": 283,
	"./uk": 284,
	"./uk.js": 284,
	"./ur": 285,
	"./ur.js": 285,
	"./uz": 286,
	"./uz-latn": 287,
	"./uz-latn.js": 287,
	"./uz.js": 286,
	"./vi": 288,
	"./vi.js": 288,
	"./x-pseudo": 289,
	"./x-pseudo.js": 289,
	"./yo": 290,
	"./yo.js": 290,
	"./zh-cn": 291,
	"./zh-cn.js": 291,
	"./zh-hk": 292,
	"./zh-hk.js": 292,
	"./zh-tw": 293,
	"./zh-tw.js": 293
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
webpackContext.id = 414;

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_noticias_noticias__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sensores_sensores__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_apps_apps__ = __webpack_require__(87);
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
            { title: 'Monitoramento', component: __WEBPACK_IMPORTED_MODULE_7__pages_sensores_sensores__["a" /* SensoresPage */] },
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\Users\yangu\Documents\farmApp2\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <img src="../assets/imgs/logo-extend.png">\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"c:\Users\yangu\Documents\farmApp2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 459:
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
            selector: 'page-list',template:/*ion-inline-start:"c:\Users\yangu\Documents\farmApp2\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Users\yangu\Documents\farmApp2\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cadastro_cadastro__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intro_intro__ = __webpack_require__(164);
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
        this.introPage = __WEBPACK_IMPORTED_MODULE_3__intro_intro__["a" /* IntroPage */];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goToCadastro = function () {
        this.navCtrl.push(this.cadastroPage);
    };
    LoginPage.prototype.home = function () {
        this.navCtrl.setRoot(this.introPage);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"c:\Users\yangu\Documents\farmApp2\src\pages\login\login.html"*/'<ion-content padding class="master">\n\n  <div class="logo d-flex justify-content-center">\n\n    <img src="../assets/imgs/logo-extend.png" alt="" class="logo">\n\n  </div>\n\n\n\n  <div class="form-login">\n\n    <ion-list class="items-middle" text-center>\n\n      <ion-item>\n\n        <ion-label color="ligh-grey" floating>\n\n          <ion-icon item-left name="mail"></ion-icon>Email</ion-label>\n\n        <ion-input type="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="ligh-grey" floating>\n\n          <ion-icon item-left name="lock"></ion-icon>Senha</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n    <div class="login-button">\n\n      <button ion-button (click)="home()">ENTRAR</button>\n\n    </div>\n\n    <div styl="margin-top: 3em" class="text-information">\n\n      <small>Não possui conta ainda?\n\n          <a style="color: #fff" (click)=\'goToCadastro()\'> Cadastrar-se</a>\n\n\n\n      </small>     \n\n    </div>\n\n\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"c:\Users\yangu\Documents\farmApp2\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 86:
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
            selector: 'page-home',template:/*ion-inline-start:"c:\Users\yangu\Documents\farmApp2\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Agroamigo</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card style="border: none;">\n\n    <ion-card-content>\n\n      <ion-row>\n\n        <ion-col col-2>\n\n          <img style="width: 100% !important; margin: 0px !important;" class="img-small" src="../../assets/imgs/logo.png">\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <b style="font-size: 17px; color: #212529;">Temos algumas novidades para você!</b>\n\n          <h3 style="margin-top: 6px;"> - Notícias sobre clima e agronegócio são os destaques da semana.</h3>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <div>\n\n    <small>05/05/2018 - 11/05/2018</small>\n\n  </div>\n\n \n\n\n\n  <ion-card>\n\n      <ion-card-content>\n\n          <ion-row>\n\n              <ion-col col-2>\n\n                  <ion-icon style="font-size: 3em;\n\n                  margin-left: 17px;\n\n                  margin-top: 10px;\n\n                  color: #2ec95c;" name="md-arrow-round-up"></ion-icon>\n\n              </ion-col>\n\n              <ion-col col-10>\n\n                  <b style="font-size: 20px; color: #212529;">+ 20% Irrigação.</b>\n\n                  <h3> - Houve um aumento de 20% na irrigação do solo.</h3>\n\n              </ion-col>\n\n          </ion-row>          \n\n          <small style="float: right;\n\n                    color: #222;\n\n                    margin-right: 10px;">(Strider - Irrigação)</small>\n\n          </ion-card-content>\n\n  </ion-card>  \n\n\n\n</ion-content>'/*ion-inline-end:"c:\Users\yangu\Documents\farmApp2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 87:
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
            selector: 'page-apps',template:/*ion-inline-start:"c:\Users\yangu\Documents\farmApp2\src\pages\apps\apps.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Integrações</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item style="padding-left: 0px;">\n\n        <ion-label style="color: grey">\n\n            <ion-icon name="md-search"></ion-icon>\n\n        </ion-label>\n\n        <ion-input type="text" placeholder="Pesquisar"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-4>\n\n                <button class="btn-search" ion-button color="light" round>Irrigação</button>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <button class="btn-search" ion-button color="light" round>Monitoramento</button>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <button class="btn-search" ion-button color="light" round>Finanças</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-card style="border: 2px solid #32db64;">\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <img class="img-small" src="../../assets/imgs/recomendacoes-1.png">\n\n                </ion-col>\n\n                <ion-col col-10>\n\n                    <b style="font-size: 20px; font-size: 20px;">Strider</b>\n\n                    <h3> - Monitoramento de irrigação.</h3>\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n            <small style="float: right;\n\n                    color: #222;\n\n                    margin-right: 10px;">Ativo</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <img class="img-small" src="../../assets/imgs/fracao.png">\n\n                </ion-col>\n\n                <ion-col col-10>\n\n                    <b style="font-size: 20px; color: #212529;">Strider</b>\n\n                    <h3> - Acompanhe a disponibilidade de água no solo para a cultura.</h3>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <img class="img-small" src="../../assets/imgs/relatorio.png">\n\n                </ion-col>\n\n                <ion-col col-10>\n\n                    <b style="font-size: 20px; color: #212529;">Strider</b>\n\n                    <h3> - Defina a melhor janela de plantio e colheita.</h3>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n\n\n    <ion-card style="border: 2px solid #32db64;">\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <img class="img-small" src="../../assets/imgs/g1.png">\n\n                </ion-col>\n\n                <ion-col col-10>\n\n                    <b style="font-size: 20px; color: #212529;">G1 Globo</b>\n\n                    <h3> - Notícias sobre clima, novidades e agronegócio.</h3>\n\n                </ion-col>\n\n            </ion-row>\n\n            <small style="float: right;\n\n                    color: #222;\n\n                    margin-right: 10px;">Ativo</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <img class="img-small" src="../../assets/imgs/crop.png">\n\n                </ion-col>\n\n                <ion-col col-10>\n\n                    <b style="font-size: 20px; color: #212529;">Smart Agro</b>\n\n                    <h3> - Monitoramento de colheita e plantio através de drones.</h3>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="light">\n\n            <ion-icon name="md-help"></ion-icon>\n\n        </button>        \n\n    </ion-fab>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"c:\Users\yangu\Documents\farmApp2\src\pages\apps\apps.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AppsPage);
    return AppsPage;
}());

//# sourceMappingURL=apps.js.map

/***/ })

},[337]);
//# sourceMappingURL=main.js.map