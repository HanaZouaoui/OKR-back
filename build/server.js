/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./errorMessages.ts":
/*!**************************!*\
  !*** ./errorMessages.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst errorsMessages = {\r\n    invalidEmail: \"L'adresse email n'est pas valide \",\r\n    userNotFound: 'Utilisateur introuvable ',\r\n    accountAlReadyExists: 'Ces identifiants existent déjà ',\r\n    isNotAnImage: 'Veuillez choisir une image ',\r\n    auth: {\r\n        userNotFound: 'Utilisateur introuvable ',\r\n        invalidPassword: \"Ce mot de passe n'est pas valide \",\r\n        incorrectPassword: 'Mot de passe incorrecte ',\r\n        invalidConf: 'Les mots de passe ne sont pas identiques ',\r\n        invalidCode: 'Code incorrecte ',\r\n        unAuthorized: 'Accès non autorisé',\r\n        emailAlreadyUsed: 'Adresse email déjà utilisée '\r\n    },\r\n    product: {\r\n        productNotFound: \"Produit n'existe pas \"\r\n    },\r\n    payment: {\r\n        cardNotValid: 'Données de la carte non valide'\r\n    },\r\n    command: {\r\n        commandNotFound: \"Commande n'est pas existe\",\r\n        stuart: {\r\n            createdJobError: 'stuart error create job',\r\n            notValidJob: 'stuart not valid job '\r\n        }\r\n    }\r\n};\r\nexports.default = errorsMessages;\r\n\n\n//# sourceURL=webpack:///./errorMessages.ts?");

/***/ }),

/***/ "./src/graphql/directiveResolvers/index.ts":
/*!*************************************************!*\
  !*** ./src/graphql/directiveResolvers/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nexports.default = {\r\n    auth: (next, source, { roles }, { user }) => roles.includes(user.role) ? next() : new apollo_server_express_1.AuthenticationError(\"UnAuthorized\")\r\n};\r\n\n\n//# sourceURL=webpack:///./src/graphql/directiveResolvers/index.ts?");

/***/ }),

/***/ "./src/graphql/index.ts":
/*!******************************!*\
  !*** ./src/graphql/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst graphql_tools_1 = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\r\nconst resolvers_1 = __webpack_require__(/*! ./resolvers */ \"./src/graphql/resolvers/index.ts\");\r\nconst typeDefs_1 = __webpack_require__(/*! ./typeDefs */ \"./src/graphql/typeDefs/index.ts\");\r\nconst directiveResolvers_1 = __webpack_require__(/*! ./directiveResolvers */ \"./src/graphql/directiveResolvers/index.ts\");\r\nexports.default = graphql_tools_1.makeExecutableSchema({\r\n    typeDefs: typeDefs_1.default,\r\n    resolvers: resolvers_1.default,\r\n    directiveResolvers: directiveResolvers_1.default,\r\n    logger: {\r\n        log: message => {\r\n            //console.log(\"Logger: \", message);\r\n        }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/graphql/index.ts?");

/***/ }),

/***/ "./src/graphql/pubsub/index.ts":
/*!*************************************!*\
  !*** ./src/graphql/pubsub/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst graphql_subscriptions_1 = __webpack_require__(/*! graphql-subscriptions */ \"graphql-subscriptions\");\r\nconst instance = new graphql_subscriptions_1.PubSub();\r\ninstance.ee.setMaxListeners(10e1000000);\r\nexports.default = instance;\r\n\n\n//# sourceURL=webpack:///./src/graphql/pubsub/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/index.ts":
/*!****************************************!*\
  !*** ./src/graphql/resolvers/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nconst mutations_1 = __webpack_require__(/*! ./mutations */ \"./src/graphql/resolvers/mutations/index.ts\");\r\nconst queries_1 = __webpack_require__(/*! ./queries */ \"./src/graphql/resolvers/queries/index.ts\");\r\nconst subscriptions_1 = __webpack_require__(/*! ./subscriptions */ \"./src/graphql/resolvers/subscriptions/index.ts\");\r\nconst nestedResolvers_1 = __webpack_require__(/*! ./nestedResolvers */ \"./src/graphql/resolvers/nestedResolvers/index.ts\");\r\nexports.default = Object.assign({ Query: queries_1.default,\r\n    Mutation: mutations_1.default,\r\n    Subscription: subscriptions_1.default, Upload: apollo_server_express_1.GraphQLUpload }, nestedResolvers_1.default);\r\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/mutations/index.ts":
/*!**************************************************!*\
  !*** ./src/graphql/resolvers/mutations/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst posts_1 = __webpack_require__(/*! ./posts */ \"./src/graphql/resolvers/mutations/posts/index.ts\");\r\nconst organisation_1 = __webpack_require__(/*! ./organisation */ \"./src/graphql/resolvers/mutations/organisation/index.ts\");\r\nexports.default = Object.assign(Object.assign({}, posts_1.default), organisation_1.default);\r\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/mutations/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/mutations/organisation/index.ts":
/*!***************************************************************!*\
  !*** ./src/graphql/resolvers/mutations/organisation/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst models_1 = __webpack_require__(/*! ../../../../models */ \"./src/models/index.ts\");\r\nexports.default = {\r\n    addOrganisation: (root, { input }) => new Promise((resolve, reject) => {\r\n        new models_1.OrganisationModel(Object.assign({}, input)).save((err, org) => {\r\n            if (err)\r\n                return reject(err);\r\n            return resolve(org);\r\n        });\r\n    }),\r\n    addLevel: (root, { input }) => new Promise((resolve, reject) => {\r\n        new models_1.DepartmentModel(Object.assign({}, input)).save((err, org) => {\r\n            if (err)\r\n                return reject(err);\r\n            return resolve(org);\r\n        });\r\n    }),\r\n    addProject: (root, { input }) => new Promise((resolve, reject) => {\r\n        new models_1.ProjectModel(Object.assign({}, input)).save((err, org) => {\r\n            if (err)\r\n                return reject(err);\r\n            return resolve(org);\r\n        });\r\n    }),\r\n};\r\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/mutations/organisation/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/mutations/posts/index.ts":
/*!********************************************************!*\
  !*** ./src/graphql/resolvers/mutations/posts/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst function_1 = __webpack_require__(/*! ../../../../helpers/function */ \"./src/helpers/function.ts\");\r\nconst models_1 = __webpack_require__(/*! ../../../../models */ \"./src/models/index.ts\");\r\nconst comment_model_1 = __webpack_require__(/*! ../../../../models/comment.model */ \"./src/models/comment.model.ts\");\r\nconst notifications_model_1 = __webpack_require__(/*! ../../../../models/notifications.model */ \"./src/models/notifications.model.ts\");\r\nexports.default = {\r\n    addPost: (root, { input }, { user, role }) => new Promise((resolve, reject) => {\r\n        const { media, body, project } = input;\r\n        let inputs = { body, createdBy: user === null || user === void 0 ? void 0 : user.id, project };\r\n        if (media) {\r\n            const filename = `posts/${Date.now()}.jpg`;\r\n            const path = `uploads/${filename}`;\r\n            function_1.uploadFile(media, path);\r\n            inputs = Object.assign(Object.assign({}, inputs), { media: `${process.env.MEDIA_ENDPOINT}/${filename}` });\r\n        }\r\n        new models_1.PostModel(Object.assign({}, inputs)).save((err, post) => {\r\n            if (err)\r\n                return reject(err);\r\n            return resolve(post);\r\n        });\r\n    }),\r\n    addComment: (root, { input }, { user, role }) => {\r\n        return new Promise((resolve, reject) => {\r\n            if (!!!input.post)\r\n                return reject(\"POST NOT FOUND\");\r\n            new comment_model_1.CommentModel(Object.assign(Object.assign({}, input), { createdBy: user.id })).save((err, comment) => {\r\n                if (err || !!!comment)\r\n                    return reject(err);\r\n                const { post } = input;\r\n                models_1.PostModel.updateOne({ id: post }, {\r\n                    $push: { comments: comment.id },\r\n                }).exec((errP, PostComment) => {\r\n                    models_1.PostModel.findById(post).then((posti) => {\r\n                        var _a, _b, _c, _d;\r\n                        let body = `${user.lastName} ${user.firstName} commented your post on ${(_a = posti.project) === null || _a === void 0 ? void 0 : _a.name}`;\r\n                        const inputNotif = { body, userWall: (_b = posti === null || posti === void 0 ? void 0 : posti.createdBy) === null || _b === void 0 ? void 0 : _b.id, project: (_c = posti === null || posti === void 0 ? void 0 : posti.project) === null || _c === void 0 ? void 0 : _c.id };\r\n                        if (user.id !== ((_d = posti === null || posti === void 0 ? void 0 : posti.createdBy) === null || _d === void 0 ? void 0 : _d.id)) {\r\n                            new notifications_model_1.NotficationModel(inputNotif).save();\r\n                        }\r\n                        return resolve(comment);\r\n                    });\r\n                });\r\n            });\r\n        });\r\n    },\r\n    deleteComment: (r, { id }) => {\r\n        comment_model_1.CommentModel.findById(id).then((comm) => {\r\n            comm.remove();\r\n        });\r\n    },\r\n    updateComment: (r, { id, input }) => {\r\n        comment_model_1.CommentModel.findById(id).then((comm) => {\r\n            comm.body = input.body;\r\n            comm.save();\r\n        });\r\n    },\r\n    addLike: (root, { post }, { user, role }) => {\r\n        return new Promise((resolve, reject) => {\r\n            if (!!!post)\r\n                return reject(\"POST NOT FOUND\");\r\n            models_1.PostModel.updateOne({ id: post }, {\r\n                $push: { likes: user.id },\r\n            }).exec((err, res) => {\r\n                resolve(models_1.PostModel.findOne({ id: post }));\r\n            });\r\n        });\r\n    },\r\n    deletePost: (root, { post }, { user, role }) => {\r\n        console.log({ post });\r\n        return models_1.PostModel.findById(post).then((post) => {\r\n            return post.remove();\r\n        });\r\n    },\r\n    updatePost: (root, { id, input }, { user, role }) => {\r\n        models_1.PostModel.findById(id).then((post) => {\r\n            post.body = input.body;\r\n            post.save();\r\n        });\r\n    },\r\n    updateNotifications: (r, {}, { user }) => {\r\n        notifications_model_1.NotficationModel.updateMany({\r\n            userWall: user === null || user === void 0 ? void 0 : user.id\r\n        }, {\r\n            $set: {\r\n                readed: true\r\n            }\r\n        }).exec();\r\n    },\r\n    addQuestion: (r, { input }, { user }) => new Promise((resolve, reject) => {\r\n        const { question, project } = input;\r\n        let inputs = { question, project, userWall: user === null || user === void 0 ? void 0 : user.id };\r\n        new models_1.FivePointModel(Object.assign({}, inputs)).save((err, ques) => {\r\n            if (err)\r\n                return reject(err);\r\n            return resolve(ques);\r\n        });\r\n    })\r\n};\r\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/mutations/posts/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/nestedResolvers/index.ts":
/*!********************************************************!*\
  !*** ./src/graphql/resolvers/nestedResolvers/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst userWall_1 = __webpack_require__(/*! ./userWall */ \"./src/graphql/resolvers/nestedResolvers/userWall.ts\");\r\nconst organisation_1 = __webpack_require__(/*! ./organisation */ \"./src/graphql/resolvers/nestedResolvers/organisation.ts\");\r\nconst level_1 = __webpack_require__(/*! ./level */ \"./src/graphql/resolvers/nestedResolvers/level.ts\");\r\nconst projects_1 = __webpack_require__(/*! ./projects */ \"./src/graphql/resolvers/nestedResolvers/projects.ts\");\r\nconst post_1 = __webpack_require__(/*! ./post */ \"./src/graphql/resolvers/nestedResolvers/post.ts\");\r\nexports.default = {\r\n    UserWall: userWall_1.default,\r\n    Organisation: organisation_1.default,\r\n    Level: level_1.default,\r\n    Project: projects_1.default,\r\n    Post: post_1.default\r\n};\r\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/nestedResolvers/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/nestedResolvers/level.ts":
/*!********************************************************!*\
  !*** ./src/graphql/resolvers/nestedResolvers/level.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst models_1 = __webpack_require__(/*! ../../../models */ \"./src/models/index.ts\");\r\nexports.default = {\r\n    projects: (_) => models_1.ProjectModel.find({ level: _ === null || _ === void 0 ? void 0 : _.id })\r\n};\r\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/nestedResolvers/level.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/nestedResolvers/organisation.ts":
/*!***************************************************************!*\
  !*** ./src/graphql/resolvers/nestedResolvers/organisation.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst models_1 = __webpack_require__(/*! ../../../models */ \"./src/models/index.ts\");\r\nexports.default = {\r\n    levels: (_) => models_1.DepartmentModel.find({ organisation: _ === null || _ === void 0 ? void 0 : _.id })\r\n};\r\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/nestedResolvers/organisation.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/nestedResolvers/post.ts":
/*!*******************************************************!*\
  !*** ./src/graphql/resolvers/nestedResolvers/post.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    isMyPost: (p, {}, { user }) => { var _a; return ((_a = p === null || p === void 0 ? void 0 : p.createdBy) === null || _a === void 0 ? void 0 : _a.id) === (user === null || user === void 0 ? void 0 : user.id); }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/nestedResolvers/post.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/nestedResolvers/projects.ts":
/*!***********************************************************!*\
  !*** ./src/graphql/resolvers/nestedResolvers/projects.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst models_1 = __webpack_require__(/*! ../../../models */ \"./src/models/index.ts\");\r\nexports.default = {\r\n    usersWall: (p) => models_1.UserWallModel.find(),\r\n    myRole: (p, {}, { user }) => { var _a, _b; return (_b = (_a = user === null || user === void 0 ? void 0 : user.projects) === null || _a === void 0 ? void 0 : _a.find(pp => { var _a; return ((_a = pp === null || pp === void 0 ? void 0 : pp.project) === null || _a === void 0 ? void 0 : _a.id) === (p === null || p === void 0 ? void 0 : p.id); })) === null || _b === void 0 ? void 0 : _b.role; }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/nestedResolvers/projects.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/nestedResolvers/userWall.ts":
/*!***********************************************************!*\
  !*** ./src/graphql/resolvers/nestedResolvers/userWall.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    fullName: _ => _.firstName + ' ' + _.lastName,\r\n    photoUrl: () => \"https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/sumo/img/default-FFA-avatar.png\"\r\n};\r\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/nestedResolvers/userWall.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/queries/index.ts":
/*!************************************************!*\
  !*** ./src/graphql/resolvers/queries/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst posts_1 = __webpack_require__(/*! ./posts */ \"./src/graphql/resolvers/queries/posts/index.ts\");\r\nconst organisation_1 = __webpack_require__(/*! ./organisation */ \"./src/graphql/resolvers/queries/organisation/index.ts\");\r\nexports.default = Object.assign(Object.assign({}, posts_1.default), organisation_1.default);\r\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/queries/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/queries/organisation/index.ts":
/*!*************************************************************!*\
  !*** ./src/graphql/resolvers/queries/organisation/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst models_1 = __webpack_require__(/*! ../../../../models */ \"./src/models/index.ts\");\r\nexports.default = {\r\n    getOrganisations: (root, {}) => {\r\n        return models_1.OrganisationModel.find({});\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/queries/organisation/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/queries/posts/index.ts":
/*!******************************************************!*\
  !*** ./src/graphql/resolvers/queries/posts/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst models_1 = __webpack_require__(/*! ../../../../models */ \"./src/models/index.ts\");\r\nconst notifications_model_1 = __webpack_require__(/*! ../../../../models/notifications.model */ \"./src/models/notifications.model.ts\");\r\nexports.default = {\r\n    getPosts: (root, { project, tag }) => new Promise((resolve, reject) => {\r\n        console.log({ project, tag });\r\n        let query = { project };\r\n        models_1.PostModel.find(query)\r\n            .sort({ createdAt: -1 })\r\n            .then((forms) => {\r\n            if (tag) {\r\n                return resolve(forms === null || forms === void 0 ? void 0 : forms.filter((p) => { var _a; return (_a = p === null || p === void 0 ? void 0 : p.comments) === null || _a === void 0 ? void 0 : _a.some((cm) => { var _a; return (_a = cm === null || cm === void 0 ? void 0 : cm.body) === null || _a === void 0 ? void 0 : _a.includes(tag); }); }));\r\n            }\r\n            resolve(forms);\r\n        });\r\n    }),\r\n    getNotifications: (root, {}, { user }) => {\r\n        return new Promise((resolve, reject) => {\r\n            notifications_model_1.NotficationModel.find({ userWall: user === null || user === void 0 ? void 0 : user.id }).sort({ createdAt: -1 }).then(notifs => {\r\n                return resolve(notifs);\r\n            });\r\n        });\r\n    },\r\n    getFivePoints: (r, { project }) => {\r\n        return models_1.FivePointModel.find({ project });\r\n    },\r\n    getMyProfile: (r, {}, { user }) => {\r\n        return user;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/queries/posts/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/subscriptions/index.ts":
/*!******************************************************!*\
  !*** ./src/graphql/resolvers/subscriptions/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {};\r\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/subscriptions/index.ts?");

/***/ }),

/***/ "./src/graphql/typeDefs/index.ts":
/*!***************************************!*\
  !*** ./src/graphql/typeDefs/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst fs = __webpack_require__(/*! fs */ \"fs\");\r\nconst userType = fs.readFileSync('./src/graphql/typeDefs/user.graphql', 'utf-8');\r\nconst userWall = fs.readFileSync('./src/graphql/typeDefs/userWall.graphql', 'utf-8');\r\nconst posts = fs.readFileSync('./src/graphql/typeDefs/posts.graphql', 'utf-8');\r\nconst schema = fs.readFileSync('./src/graphql/typeDefs/schema.graphql', 'utf-8');\r\nconst notification = fs.readFileSync('./src/graphql/typeDefs/notification.graphql', 'utf-8');\r\nconst graphql = ''.concat(userType, posts, userWall, notification, schema);\r\nexports.default = graphql;\r\n\n\n//# sourceURL=webpack:///./src/graphql/typeDefs/index.ts?");

/***/ }),

/***/ "./src/graphql/util/constants.ts":
/*!***************************************!*\
  !*** ./src/graphql/util/constants.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SubscriptionFire = void 0;\r\nexports.SubscriptionFire = {\r\n    COMMAND_UPDATED: 'COMMAND_UPDATED',\r\n    COMMAND_ADDED: 'COMMAND_ADDED'\r\n};\r\n\n\n//# sourceURL=webpack:///./src/graphql/util/constants.ts?");

/***/ }),

/***/ "./src/graphql/util/populateFields.ts":
/*!********************************************!*\
  !*** ./src/graphql/util/populateFields.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.populateFields = void 0;\r\nexports.populateFields = {\r\n    clients: ['profile'],\r\n    client: ['profile'],\r\n    florists: ['profile'],\r\n    command: {\r\n        clientFlorist: [\r\n            { path: 'client', populate: [{ path: 'profile' }] },\r\n            { path: 'florist', populate: [{ path: 'profile' }] }\r\n        ],\r\n        clientFloristProducts: [\r\n            { path: 'florist', populate: [{ path: 'profile' }] },\r\n            { path: 'client', populate: [{ path: 'profile' }] },\r\n            { path: 'products.product' }\r\n        ]\r\n    },\r\n    florist: {\r\n        profile: [{ path: 'profile' }]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/graphql/util/populateFields.ts?");

/***/ }),

/***/ "./src/helpers/function.ts":
/*!*********************************!*\
  !*** ./src/helpers/function.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getRandom = exports.removeFile = exports.uploadFile = exports.getUserByToken = void 0;\r\nconst token_1 = __webpack_require__(/*! ../tools/token */ \"./src/tools/token.ts\");\r\nconst models_1 = __webpack_require__(/*! ../models */ \"./src/models/index.ts\");\r\nconst constant_1 = __webpack_require__(/*! ../tools/constant */ \"./src/tools/constant.ts\");\r\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\r\nconst getUserModelByRole = () => {\r\n    return null;\r\n};\r\nexports.getUserByToken = token => {\r\n    return new Promise((resolve, reject) => {\r\n        token_1.default.ensure(token)\r\n            .then(payload => {\r\n            switch (payload.role) {\r\n                case constant_1.UserRole.usersWall:\r\n                    models_1.UserWallModel.findOne({ profile: payload.id }).populate('profile').then(client => resolve(client));\r\n                    break;\r\n                case constant_1.UserRole.ADMIN:\r\n                    {\r\n                        models_1.AdminModel.findOne({ profile: payload.id }).populate('profile').then(admin => {\r\n                            resolve(admin);\r\n                        });\r\n                    }\r\n                    break;\r\n                default:\r\n                    resolve(payload);\r\n            }\r\n        })\r\n            .catch(err => reject(err));\r\n    });\r\n};\r\nconst upload = (stream, filePath) => {\r\n    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\r\n        stream\r\n            .pipe(fs_1.createWriteStream(filePath))\r\n            .on(\"error\", (e) => reject(e.message))\r\n            .on(\"finish\", () => resolve(`${process.env.MEDIA_ENDPOINT}`));\r\n    }));\r\n};\r\nexports.uploadFile = (file, path, id = null, oldPath = null) => {\r\n    console.log(file);\r\n    return new Promise((resolve, reject) => {\r\n        Promise.resolve(file)\r\n            .then(({ createReadStream, mimetype }) => {\r\n            const stream = createReadStream();\r\n            //const filePath = `${PUBLIC_PATH}/images/${subPath}/${id}.${extension}`;\r\n            //if (!mimetype.startsWith('image')) return reject('isNotAnImage');\r\n            if (oldPath)\r\n                exports.removeFile(oldPath, () => {\r\n                    upload(stream, path)\r\n                        .then((link) => console.log(link))\r\n                        .catch((e) => reject(e));\r\n                });\r\n            else\r\n                upload(stream, path)\r\n                    .then((link) => resolve(link))\r\n                    .catch((e) => reject(e));\r\n        })\r\n            .catch((e) => reject(e.message));\r\n    });\r\n};\r\nexports.removeFile = (path, cb = null) => {\r\n    fs_1.default.unlink(`.${path}`, () => {\r\n        if (cb)\r\n            cb();\r\n    });\r\n};\r\nexports.getRandom = (min, max) => {\r\n    return Math.floor(Math.random() * (max - min + 1)) + min;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/helpers/function.ts?");

/***/ }),

/***/ "./src/helpers/moment.js":
/*!*******************************!*\
  !*** ./src/helpers/moment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ \"moment-timezone\");\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);\nvar moment = __webpack_require__(/*! moment */ \"moment\");\r\n\r\nconst fr = 'France/Paris';\r\nconst tn = 'Africa/Tunis';\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (moment.tz.setDefault(fr));\r\n\n\n//# sourceURL=webpack:///./src/helpers/moment.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst http_1 = __webpack_require__(/*! http */ \"http\");\r\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\r\nconst server_1 = __webpack_require__(/*! ./server */ \"./src/server.ts\");\r\nconst subscriptions_transport_ws_1 = __webpack_require__(/*! subscriptions-transport-ws */ \"subscriptions-transport-ws\");\r\nconst graphql_2 = __webpack_require__(/*! ./graphql */ \"./src/graphql/index.ts\");\r\nconst function_1 = __webpack_require__(/*! ./helpers/function */ \"./src/helpers/function.ts\");\r\nconst ws = http_1.createServer(server_1.default);\r\nws\r\n    .listen(process.env.PORT, () => {\r\n    console.log(`Server listening at port ${process.env.PORT} ...`);\r\n})\r\n    .on('listening', () => {\r\n    console.log('Subscription is listing....');\r\n    new subscriptions_transport_ws_1.SubscriptionServer({\r\n        execute: graphql_1.execute,\r\n        subscribe: graphql_1.subscribe,\r\n        schema: graphql_2.default,\r\n        onConnect: (connectionParams) => __awaiter(void 0, void 0, void 0, function* () {\r\n            if (connectionParams.token) {\r\n                const token = connectionParams.token;\r\n                return new Promise((resolve, reject) => {\r\n                    function_1.getUserByToken(token)\r\n                        .then(res => {\r\n                        return resolve(res);\r\n                    })\r\n                        .catch(err => reject(err));\r\n                });\r\n            }\r\n        })\r\n    }, {\r\n        server: ws,\r\n        path: '/subscriptions'\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/models/admin.model.ts":
/*!***********************************!*\
  !*** ./src/models/admin.model.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AdminModel = void 0;\r\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\r\nconst adminSchema = new mongoose_1.Schema({\r\n    id: String,\r\n    profile: {\r\n        type: mongoose_1.Schema.Types.ObjectId,\r\n        required: true,\r\n        ref: \"users\"\r\n    },\r\n    createdAt: Number,\r\n    updatedAt: Number,\r\n}, {\r\n    toJSON: { virtuals: true },\r\n    toObject: { virtuals: true },\r\n    versionKey: false\r\n});\r\npreSave_1.createdAt(adminSchema);\r\nexports.AdminModel = mongoose_1.model(\"admins\", adminSchema);\r\n\n\n//# sourceURL=webpack:///./src/models/admin.model.ts?");

/***/ }),

/***/ "./src/models/comment.model.ts":
/*!*************************************!*\
  !*** ./src/models/comment.model.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentModel = void 0;\r\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\r\nconst commentSchema = new mongoose_1.Schema({\r\n    id: String,\r\n    body: {\r\n        type: String,\r\n        default: ''\r\n    },\r\n    media: {\r\n        type: String,\r\n    },\r\n    subComments: {\r\n        type: [String],\r\n        ref: \"comments\",\r\n        autopopulate: true,\r\n        default: []\r\n    },\r\n    likes: {\r\n        type: [String],\r\n        default: []\r\n    },\r\n    createdBy: {\r\n        type: String,\r\n        ref: \"usersWall\",\r\n        autopopulate: true\r\n    },\r\n    post: {\r\n        type: String,\r\n        default: null,\r\n    },\r\n    createdAt: Number,\r\n    updatedAt: Number,\r\n}, {\r\n    toJSON: { virtuals: true },\r\n    toObject: { virtuals: true },\r\n    versionKey: false\r\n});\r\npreSave_1.createdAt(commentSchema);\r\nexports.CommentModel = mongoose_1.model(\"comments\", commentSchema);\r\n\n\n//# sourceURL=webpack:///./src/models/comment.model.ts?");

/***/ }),

/***/ "./src/models/departement.model.ts":
/*!*****************************************!*\
  !*** ./src/models/departement.model.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DepartmentModel = void 0;\r\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\r\nconst depSchema = new mongoose_1.Schema({\r\n    id: String,\r\n    name: {\r\n        type: String\r\n    },\r\n    organisation: {\r\n        type: String,\r\n        ref: \"organisations\"\r\n    },\r\n    photoUrl: String,\r\n    createdAt: Number,\r\n    updatedAt: Number,\r\n}, {\r\n    toJSON: { virtuals: true },\r\n    toObject: { virtuals: true },\r\n    versionKey: false\r\n});\r\npreSave_1.createdAt(depSchema);\r\nexports.DepartmentModel = mongoose_1.model(\"departments\", depSchema);\r\n\n\n//# sourceURL=webpack:///./src/models/departement.model.ts?");

/***/ }),

/***/ "./src/models/fivepoints.model.ts":
/*!****************************************!*\
  !*** ./src/models/fivepoints.model.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.FivePointModel = void 0;\r\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\r\nconst reviewSchema = new mongoose_1.Schema({\r\n    userWall: {\r\n        type: String,\r\n        ref: \"usersWall\",\r\n        autopopulate: true\r\n    },\r\n    rating: Number\r\n});\r\nconst projectSchema = new mongoose_1.Schema({\r\n    id: String,\r\n    question: {\r\n        type: String\r\n    },\r\n    userWall: {\r\n        type: String,\r\n        default: \"\"\r\n    },\r\n    project: {\r\n        type: String,\r\n        default: \"\",\r\n        autopopulate: true\r\n    },\r\n    reviews: {\r\n        type: [reviewSchema],\r\n        default: []\r\n    },\r\n    createdAt: Number,\r\n    updatedAt: Number,\r\n}, {\r\n    toJSON: { virtuals: true },\r\n    toObject: { virtuals: true },\r\n    versionKey: false\r\n});\r\npreSave_1.createdAt(projectSchema);\r\nexports.FivePointModel = mongoose_1.model(\"fivepoints\", projectSchema);\r\n\n\n//# sourceURL=webpack:///./src/models/fivepoints.model.ts?");

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.FivePointModel = exports.ProjectModel = exports.DepartmentModel = exports.OrganisationModel = exports.CommentModel = exports.PostModel = exports.UserWallModel = exports.AdminModel = exports.UserModel = void 0;\r\nconst user_model_1 = __webpack_require__(/*! ./user.model */ \"./src/models/user.model.ts\");\r\nObject.defineProperty(exports, \"UserModel\", { enumerable: true, get: function () { return user_model_1.UserModel; } });\r\nconst admin_model_1 = __webpack_require__(/*! ./admin.model */ \"./src/models/admin.model.ts\");\r\nObject.defineProperty(exports, \"AdminModel\", { enumerable: true, get: function () { return admin_model_1.AdminModel; } });\r\nconst userWall_model_1 = __webpack_require__(/*! ./userWall.model */ \"./src/models/userWall.model.ts\");\r\nObject.defineProperty(exports, \"UserWallModel\", { enumerable: true, get: function () { return userWall_model_1.UserWallModel; } });\r\nconst post_model_1 = __webpack_require__(/*! ./post.model */ \"./src/models/post.model.ts\");\r\nObject.defineProperty(exports, \"PostModel\", { enumerable: true, get: function () { return post_model_1.PostModel; } });\r\nconst comment_model_1 = __webpack_require__(/*! ./comment.model */ \"./src/models/comment.model.ts\");\r\nObject.defineProperty(exports, \"CommentModel\", { enumerable: true, get: function () { return comment_model_1.CommentModel; } });\r\nconst organisation_model_1 = __webpack_require__(/*! ./organisation.model */ \"./src/models/organisation.model.ts\");\r\nObject.defineProperty(exports, \"OrganisationModel\", { enumerable: true, get: function () { return organisation_model_1.OrganisationModel; } });\r\nconst departement_model_1 = __webpack_require__(/*! ./departement.model */ \"./src/models/departement.model.ts\");\r\nObject.defineProperty(exports, \"DepartmentModel\", { enumerable: true, get: function () { return departement_model_1.DepartmentModel; } });\r\nconst project_model_1 = __webpack_require__(/*! ./project.model */ \"./src/models/project.model.ts\");\r\nObject.defineProperty(exports, \"ProjectModel\", { enumerable: true, get: function () { return project_model_1.ProjectModel; } });\r\nconst fivepoints_model_1 = __webpack_require__(/*! ./fivepoints.model */ \"./src/models/fivepoints.model.ts\");\r\nObject.defineProperty(exports, \"FivePointModel\", { enumerable: true, get: function () { return fivepoints_model_1.FivePointModel; } });\r\nconst seedsData = () => {\r\n    admin_model_1.AdminModel.countDocuments((err, count) => {\r\n        if (!err && count === 0) {\r\n            new user_model_1.UserModel({\r\n                email: \"admin@gmail.com\",\r\n                password: \"123456\",\r\n                ref: \"admins\",\r\n            })\r\n                .save()\r\n                .then((user) => new admin_model_1.AdminModel({ profile: user.id }).save().then((admin) => admin));\r\n        }\r\n    });\r\n    userWall_model_1.UserWallModel.countDocuments((err, count) => {\r\n        if (!err && count === 0) {\r\n            new user_model_1.UserModel({\r\n                email: \"client@gmail.com\",\r\n                password: \"123456\",\r\n                ref: \"usersWall\",\r\n            })\r\n                .save()\r\n                .then((user) => {\r\n                new userWall_model_1.UserWallModel({\r\n                    firstName: \"sahbani\",\r\n                    lastName: \"wael\",\r\n                    profile: user.id,\r\n                }).save();\r\n            });\r\n        }\r\n    });\r\n    organisation_model_1.OrganisationModel.countDocuments((err, count) => {\r\n        if (!err && count === 0) {\r\n            new organisation_model_1.OrganisationModel({ name: \"Informatique\", photoUrl: \"tes\" }).save((errc, org) => {\r\n                new departement_model_1.DepartmentModel({ name: \"SI\" }).save();\r\n            });\r\n        }\r\n    });\r\n};\r\nseedsData();\r\n\n\n//# sourceURL=webpack:///./src/models/index.ts?");

/***/ }),

/***/ "./src/models/notifications.model.ts":
/*!*******************************************!*\
  !*** ./src/models/notifications.model.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NotficationModel = void 0;\r\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\r\nconst projectSchema = new mongoose_1.Schema({\r\n    id: String,\r\n    body: {\r\n        type: String\r\n    },\r\n    userWall: {\r\n        type: String,\r\n        default: \"\"\r\n    },\r\n    project: {\r\n        type: String,\r\n        default: \"\",\r\n        autopopulate: true\r\n    },\r\n    readed: {\r\n        type: Boolean,\r\n        default: false,\r\n    },\r\n    createdAt: Number,\r\n    updatedAt: Number,\r\n}, {\r\n    toJSON: { virtuals: true },\r\n    toObject: { virtuals: true },\r\n    versionKey: false\r\n});\r\npreSave_1.createdAt(projectSchema);\r\nexports.NotficationModel = mongoose_1.model(\"notifications\", projectSchema);\r\n\n\n//# sourceURL=webpack:///./src/models/notifications.model.ts?");

/***/ }),

/***/ "./src/models/organisation.model.ts":
/*!******************************************!*\
  !*** ./src/models/organisation.model.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.OrganisationModel = void 0;\r\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\r\nconst organisationSchema = new mongoose_1.Schema({\r\n    id: String,\r\n    name: {\r\n        type: String\r\n    },\r\n    photoUrl: String,\r\n    createdAt: Number,\r\n    updatedAt: Number,\r\n}, {\r\n    toJSON: { virtuals: true },\r\n    toObject: { virtuals: true },\r\n    versionKey: false\r\n});\r\npreSave_1.createdAt(organisationSchema);\r\nexports.OrganisationModel = mongoose_1.model(\"organisations\", organisationSchema);\r\n\n\n//# sourceURL=webpack:///./src/models/organisation.model.ts?");

/***/ }),

/***/ "./src/models/post.model.ts":
/*!**********************************!*\
  !*** ./src/models/post.model.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostModel = void 0;\r\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\r\nconst postsSchema = new mongoose_1.Schema({\r\n    id: String,\r\n    media: {\r\n        type: String,\r\n        default: \"\",\r\n    },\r\n    body: {\r\n        type: String,\r\n        default: ''\r\n    },\r\n    comments: {\r\n        type: [String],\r\n        ref: \"comments\",\r\n        autopopulate: true\r\n    },\r\n    likes: {\r\n        type: [String],\r\n        default: []\r\n    },\r\n    createdBy: {\r\n        type: String,\r\n        autopopulate: true,\r\n        ref: \"usersWall\"\r\n    },\r\n    project: {\r\n        type: String,\r\n        ref: \"projects\",\r\n        autopopulate: true\r\n    },\r\n    createdAt: Number,\r\n    updatedAt: Number,\r\n}, {\r\n    toJSON: { virtuals: true },\r\n    toObject: { virtuals: true },\r\n    versionKey: false\r\n});\r\npreSave_1.createdAt(postsSchema);\r\nexports.PostModel = mongoose_1.model(\"posts\", postsSchema);\r\n\n\n//# sourceURL=webpack:///./src/models/post.model.ts?");

/***/ }),

/***/ "./src/models/preSave.ts":
/*!*******************************!*\
  !*** ./src/models/preSave.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.createdAt = void 0;\r\nconst moment_1 = __webpack_require__(/*! ../helpers/moment */ \"./src/helpers/moment.js\");\r\nexports.createdAt = schema => {\r\n    schema.plugin(__webpack_require__(/*! mongoose-autopopulate */ \"mongoose-autopopulate\"));\r\n    schema.pre(\"save\", function () {\r\n        if (this.isNew) {\r\n            this.createdAt = moment_1.default().valueOf();\r\n            if (!this.id)\r\n                this.id = this._id.toString();\r\n            else\r\n                this._id = this.id;\r\n        }\r\n        else\r\n            this.updatedAt = moment_1.default().valueOf();\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/models/preSave.ts?");

/***/ }),

/***/ "./src/models/project.model.ts":
/*!*************************************!*\
  !*** ./src/models/project.model.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ProjectModel = void 0;\r\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\r\nconst projectSchema = new mongoose_1.Schema({\r\n    id: String,\r\n    name: {\r\n        type: String\r\n    },\r\n    usersWall: {\r\n        type: [String],\r\n        default: []\r\n    },\r\n    level: {\r\n        type: String,\r\n        ref: \"departments\",\r\n        autopopulate: true\r\n    },\r\n    createdAt: Number,\r\n    updatedAt: Number,\r\n}, {\r\n    toJSON: { virtuals: true },\r\n    toObject: { virtuals: true },\r\n    versionKey: false\r\n});\r\npreSave_1.createdAt(projectSchema);\r\nexports.ProjectModel = mongoose_1.model(\"projects\", projectSchema);\r\n\n\n//# sourceURL=webpack:///./src/models/project.model.ts?");

/***/ }),

/***/ "./src/models/user.model.ts":
/*!**********************************!*\
  !*** ./src/models/user.model.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserModel = void 0;\r\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\r\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\r\nconst userSchema = new mongoose_1.Schema({\r\n    id: String,\r\n    ref: {\r\n        type: String,\r\n        required: true\r\n    },\r\n    email: {\r\n        type: String,\r\n        unique: true,\r\n        required: true,\r\n        trim: true,\r\n        lowercase: true\r\n    },\r\n    password: {\r\n        type: String,\r\n        required: true\r\n    },\r\n    isBlocked: {\r\n        type: Boolean,\r\n        default: false\r\n    },\r\n    isVerified: {\r\n        type: Boolean,\r\n        default: false\r\n    },\r\n    createdAt: Number,\r\n    updatedAt: Number\r\n}, {\r\n    toJSON: { virtuals: true },\r\n    toObject: { virtuals: true },\r\n});\r\npreSave_1.createdAt(userSchema);\r\nuserSchema.pre(\"save\", function (next) {\r\n    if (this.isModified(\"password\") && this.isNew) {\r\n        try {\r\n            const salt = bcrypt.genSaltSync(10);\r\n            const hash = bcrypt.hashSync(this.password, salt);\r\n            this.password = hash;\r\n            next();\r\n        }\r\n        catch (e) {\r\n            next(e);\r\n        }\r\n    }\r\n    else {\r\n        next();\r\n    }\r\n});\r\nuserSchema.methods.isValidPassword = function (password) {\r\n    return bcrypt.compareSync(password, this.password);\r\n};\r\nuserSchema.statics.hashPassword = function (password) {\r\n    return new Promise((resolve, reject) => {\r\n        try {\r\n            const salt = bcrypt.genSaltSync(10);\r\n            const hash = bcrypt.hashSync(password, salt);\r\n            resolve(hash);\r\n        }\r\n        catch (e) {\r\n            reject(e);\r\n        }\r\n    });\r\n};\r\nexports.UserModel = mongoose_1.model(\"users\", userSchema);\r\n\n\n//# sourceURL=webpack:///./src/models/user.model.ts?");

/***/ }),

/***/ "./src/models/userWall.model.ts":
/*!**************************************!*\
  !*** ./src/models/userWall.model.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserWallModel = void 0;\r\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\r\nconst projectSchema = new mongoose_1.Schema({\r\n    project: {\r\n        type: String,\r\n        ref: \"projects\",\r\n        autopopulate: true,\r\n    },\r\n    role: {\r\n        type: String,\r\n        enum: [\"MANAGER\", \"OBSERVER\", \"MEMBER\"]\r\n    }\r\n});\r\nconst userWallSchema = new mongoose_1.Schema({\r\n    id: String,\r\n    profile: {\r\n        type: mongoose_1.Schema.Types.ObjectId,\r\n        required: true,\r\n        ref: 'users',\r\n        autopopulate: true\r\n    },\r\n    firstName: {\r\n        type: String,\r\n        required: true,\r\n        trim: true,\r\n        default: ''\r\n    },\r\n    lastName: {\r\n        type: String,\r\n        required: true,\r\n        trim: true,\r\n        default: ''\r\n    },\r\n    userName: {\r\n        type: String,\r\n        default: \"\"\r\n    },\r\n    tel: {\r\n        type: String,\r\n        trim: true,\r\n        default: ''\r\n    },\r\n    address: {\r\n        type: String,\r\n        trim: true,\r\n        default: ''\r\n    },\r\n    sexe: {\r\n        type: String,\r\n        default: 'Femme'\r\n    },\r\n    photoUrl: {\r\n        type: String,\r\n        default: ''\r\n    },\r\n    organisation: {\r\n        type: String,\r\n        ref: \"organisations\"\r\n    },\r\n    projects: {\r\n        type: [projectSchema],\r\n        default: []\r\n    },\r\n    createdAt: Number,\r\n    updatedAt: Number\r\n}, {\r\n    toObject: {\r\n        virtuals: true\r\n    },\r\n    toJSON: { virtuals: true }\r\n});\r\npreSave_1.createdAt(userWallSchema);\r\nexports.UserWallModel = mongoose_1.model('usersWall', userWallSchema);\r\n\n\n//# sourceURL=webpack:///./src/models/userWall.model.ts?");

/***/ }),

/***/ "./src/routes/auth.ts":
/*!****************************!*\
  !*** ./src/routes/auth.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AuthRouter = void 0;\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst token_1 = __webpack_require__(/*! ../tools/token */ \"./src/tools/token.ts\");\r\nconst constant_1 = __webpack_require__(/*! ../tools/constant */ \"./src/tools/constant.ts\");\r\nconst models_1 = __webpack_require__(/*! ../models */ \"./src/models/index.ts\");\r\nconst errorMessages_1 = __webpack_require__(/*! ../../errorMessages */ \"./errorMessages.ts\");\r\nexports.AuthRouter = express_1.Router();\r\nexports.AuthRouter.post(\"/login/visitor\", (req, res, next) => {\r\n    token_1.default.generate({ role: constant_1.UserRole.VISITOR }).then((token) => {\r\n        res.end(JSON.stringify({ success: true, token }, null, 5));\r\n    });\r\n});\r\nexports.AuthRouter.post(\"/login/admin\", (req, res, next) => {\r\n    let { email, password } = req.body;\r\n    if (email && password) {\r\n        email = email.trim();\r\n        models_1.UserModel.findOne({ email, ref: \"admins\" }).then((user) => {\r\n            if (!user) {\r\n                return res.end(JSON.stringify({ success: false, message: errorMessages_1.default.userNotFound }, null, 5));\r\n            }\r\n            if (!user.isValidPassword(password)) {\r\n                return res.end(JSON.stringify({ success: false, fieldError: errorMessages_1.default.auth.invalidPassword }, null, 5));\r\n            }\r\n            token_1.default.generate({ id: user.id, role: constant_1.UserRole.ADMIN })\r\n                .then((token) => {\r\n                return res.end(JSON.stringify({ success: true, token }, null, 5));\r\n            })\r\n                .catch((err) => next(err));\r\n        });\r\n    }\r\n    else {\r\n        return res.end(JSON.stringify({ success: false, fieldError: errorMessages_1.default.invalidEmail }, null, 5));\r\n    }\r\n});\r\nexports.AuthRouter.get(\"/regsiter/mail-exist\", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const { email } = req.body;\r\n    models_1.UserModel.find;\r\n}));\r\nexports.AuthRouter.post(\"/register/userWall\", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const body = req.body;\r\n    if (body) {\r\n        const { email, password, lastName, firstName, userName } = body;\r\n        if (!email || !password) {\r\n            return res.end(JSON.stringify({ success: false, error: \"Email and password required\" }));\r\n        }\r\n        const user = yield models_1.UserModel.findOne({ email });\r\n        if (user)\r\n            return res.end(JSON.stringify({ succes: false, error: \"Email exist\" }));\r\n        new models_1.UserModel({ email, password, ref: constant_1.UserRole.usersWall }).save((err, user) => {\r\n            if (err || !user)\r\n                return res.end(JSON.stringify(err));\r\n            new models_1.UserWallModel({ firstName, lastName, profile: user === null || user === void 0 ? void 0 : user.id }).save((er, wall) => {\r\n                if (er || !wall)\r\n                    return res.end(JSON.stringify(er));\r\n                return res.end(JSON.stringify({ success: true, wall }));\r\n            });\r\n        });\r\n    }\r\n}));\r\nexports.AuthRouter.post(\"/login/userwall\", (req, res, next) => {\r\n    let { email, password } = req.body;\r\n    if (email && password) {\r\n        email = email.trim();\r\n        models_1.UserModel.findOne({ email, ref: \"usersWall\" }).then((user) => __awaiter(void 0, void 0, void 0, function* () {\r\n            if (!user) {\r\n                return res.end(JSON.stringify({ success: false, message: errorMessages_1.default.userNotFound }, null, 5));\r\n            }\r\n            if (!user.isValidPassword(password)) {\r\n                return res.end(JSON.stringify({ success: false, fieldError: errorMessages_1.default.auth.invalidPassword }, null, 5));\r\n            }\r\n            const wall = yield models_1.UserWallModel.findOne({ profile: user === null || user === void 0 ? void 0 : user.id });\r\n            token_1.default.generate({ id: user.id, userWallId: wall === null || wall === void 0 ? void 0 : wall.id, role: constant_1.UserRole.usersWall })\r\n                .then((token) => {\r\n                return res.end(JSON.stringify({ success: true, token }, null, 5));\r\n            })\r\n                .catch((err) => next(err));\r\n        }));\r\n    }\r\n    else {\r\n        return res.end(JSON.stringify({ success: false, fieldError: errorMessages_1.default.invalidEmail }, null, 5));\r\n    }\r\n});\r\nexports.AuthRouter.post(\"/login/check-token\", (req, res, next) => {\r\n    const token = req.headers.authorization;\r\n    console.log(token);\r\n    if (!token) {\r\n        return res.sendStatus(401);\r\n    }\r\n    token_1.default.ensure(token)\r\n        .then((payload) => {\r\n        return res.end(JSON.stringify({ success: true, payload }, null, 5));\r\n    })\r\n        .catch((err) => res.sendStatus(401));\r\n});\r\nexports.default = exports.AuthRouter;\r\n\n\n//# sourceURL=webpack:///./src/routes/auth.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./auth */ \"./src/routes/auth.ts\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/media.ts":
/*!*****************************!*\
  !*** ./src/routes/media.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MediaRouter = void 0;\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\r\nexports.MediaRouter = express_1.Router();\r\nconst pipe = (req, res, next, path) => {\r\n    if (fs_1.existsSync(path)) {\r\n        try {\r\n            const data = fs_1.readFileSync(path);\r\n            res.writeHead(200, { 'Content-Type': 'image/jpeg' });\r\n            res.end(data);\r\n        }\r\n        catch (e) {\r\n            next(e);\r\n        }\r\n    }\r\n    else {\r\n        res.writeHead(404);\r\n        res.end();\r\n    }\r\n};\r\nconst pipeImagePost = (req, res, next) => {\r\n    const filename = req.params.name;\r\n    const path = `./uploads/posts/${filename}`;\r\n    pipe(req, res, next, path);\r\n};\r\nconst pipeImageTheme = (req, res, next) => {\r\n    const filename = req.params.name;\r\n    const path = `./uploads/themes/${filename}`;\r\n    pipe(req, res, next, path);\r\n};\r\nconst pipeImageProduct = (req, res, next) => {\r\n    const filename = req.params.name;\r\n    const path = `./uploads/products/${filename}`;\r\n    pipe(req, res, next, path);\r\n};\r\nconst pipeImageStore = (req, res, next) => {\r\n    const filename = req.params.name;\r\n    const path = `./uploads/stores/${filename}`;\r\n    pipe(req, res, next, path);\r\n};\r\nconst pipeImageMention = (req, res, next) => {\r\n    const filename = req.params.name;\r\n    const path = `./uploads/mentions/${filename}`;\r\n    pipe(req, res, next, path);\r\n};\r\nconst pipeImageChat = (req, res, next) => {\r\n    const filename = req.params.name;\r\n    const path = `./uploads/chat/${filename}`;\r\n    pipe(req, res, next, path);\r\n};\r\nexports.MediaRouter.all('/posts/:name', pipeImagePost);\r\n\n\n//# sourceURL=webpack:///./src/routes/media.ts?");

/***/ }),

/***/ "./src/routes/stuart.ts":
/*!******************************!*\
  !*** ./src/routes/stuart.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.StuartRouter = void 0;\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst models_1 = __webpack_require__(/*! ../models */ \"./src/models/index.ts\");\r\nconst populateFields_1 = __webpack_require__(/*! ../graphql/util/populateFields */ \"./src/graphql/util/populateFields.ts\");\r\nconst pubsub_1 = __webpack_require__(/*! ../graphql/pubsub */ \"./src/graphql/pubsub/index.ts\");\r\nconst constants_1 = __webpack_require__(/*! ../graphql/util/constants */ \"./src/graphql/util/constants.ts\");\r\nconst moment_1 = __webpack_require__(/*! ../helpers/moment */ \"./src/helpers/moment.js\");\r\nexports.StuartRouter = express_1.Router();\r\nexports.StuartRouter.post('/webhooks', (req, res, next) => {\r\n    const { data } = req.body;\r\n    if (data) {\r\n        const { status, clientReference } = data;\r\n        let state = null;\r\n        if (status) {\r\n            switch (status) {\r\n                case 'in_progress':\r\n                    state = 'DELIVERING';\r\n                    break;\r\n                case 'delivering':\r\n                    state = 'DELIVERING';\r\n                    break;\r\n                case 'finished':\r\n                    state = 'DELIVERED';\r\n                    break;\r\n                case 'canceled':\r\n                    state = 'CANCELED';\r\n                    break;\r\n                case 'voided':\r\n                    state = 'VOIDED';\r\n                    break;\r\n                case 'revoked':\r\n                    state = 'REVOKED';\r\n                    break;\r\n                case 'expired':\r\n                    state = 'EXPIRED';\r\n                    break;\r\n            }\r\n        }\r\n        if (!!state) {\r\n            if (clientReference) {\r\n                models_1.CommandModel.findOne({ num: parseInt(clientReference) })\r\n                    .populate(populateFields_1.populateFields.command.clientFlorist)\r\n                    .then(cmd => {\r\n                    const order = cmd;\r\n                    if (order) {\r\n                        const { driver, trackingUrl } = data;\r\n                        order.state = state ? state : 'PENDING';\r\n                        order.status = [...order.status, { state, date: moment_1.default().valueOf() }];\r\n                        if (driver && trackingUrl) {\r\n                            order.apiResponseLivringInfos = {\r\n                                job: data ? data.id : null,\r\n                                trackingUrl,\r\n                                driver: {\r\n                                    firstName: driver ? driver.firstname : null,\r\n                                    lastName: driver ? driver.lastname : null,\r\n                                    phone: driver ? driver.phone : null\r\n                                }\r\n                            };\r\n                        }\r\n                        order.save();\r\n                        pubsub_1.default.publish(constants_1.SubscriptionFire.COMMAND_UPDATED, { command: order });\r\n                    }\r\n                });\r\n            }\r\n        }\r\n    }\r\n});\r\nexports.default = exports.StuartRouter;\r\n\n\n//# sourceURL=webpack:///./src/routes/stuart.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\nconst compression = __webpack_require__(/*! compression */ \"compression\");\r\nconst cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\r\nconst cors = __webpack_require__(/*! cors */ \"cors\");\r\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\r\nconst express = __webpack_require__(/*! express */ \"express\");\r\nconst helmet = __webpack_require__(/*! helmet */ \"helmet\");\r\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst logger = __webpack_require__(/*! morgan */ \"morgan\");\r\nconst bluebird = __webpack_require__(/*! bluebird */ \"bluebird\");\r\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nconst graphql_1 = __webpack_require__(/*! ./graphql */ \"./src/graphql/index.ts\");\r\nconst routes_1 = __webpack_require__(/*! ./routes */ \"./src/routes/index.ts\");\r\nconst token_1 = __webpack_require__(/*! ./tools/token */ \"./src/tools/token.ts\");\r\nconst constant_1 = __webpack_require__(/*! ./tools/constant */ \"./src/tools/constant.ts\");\r\nconst function_1 = __webpack_require__(/*! ./helpers/function */ \"./src/helpers/function.ts\");\r\nconst stuart_1 = __webpack_require__(/*! ./routes/stuart */ \"./src/routes/stuart.ts\");\r\nconst media_1 = __webpack_require__(/*! ./routes/media */ \"./src/routes/media.ts\");\r\n//import { getUserByToken } from './helpers/function';\r\n//ANCHOR conexion mongoose database\r\nclass Server {\r\n    constructor() {\r\n        dotenv.config();\r\n        this.app = express();\r\n        this.connectMongoDB();\r\n        this.config();\r\n        this.setupRoutes();\r\n        this.setupGraphQL();\r\n        //console.log(process.env.PORT)\r\n    }\r\n    connectMongoDB() {\r\n        const mongoUrl = process.env.MONGOOSE_URI_CONNECTION;\r\n        mongoose.Promise = bluebird;\r\n        mongoose\r\n            .connect(mongoUrl, {\r\n            useCreateIndex: true,\r\n            useNewUrlParser: true,\r\n            useFindAndModify: false,\r\n            useUnifiedTopology: true\r\n        })\r\n            .then(() => {\r\n            /** ready to use. The `mongoose.connect()` promise resolves to undefined. */\r\n            console.log('Connected to database');\r\n        })\r\n            .catch(err => {\r\n            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);\r\n            // process.exit();\r\n        });\r\n    }\r\n    setupRoutes() {\r\n        this.app.use(process.env.AUTH_ENDPOINT, routes_1.AuthRouter);\r\n        this.app.use(process.env.MEDIA_ENDPOINT, media_1.MediaRouter);\r\n        this.app.use(process.env.STUART_ENDPOINT, stuart_1.default);\r\n        this.app.use(process.env.GRAPHQL_ENDPOINT, (req, res, next) => {\r\n            const token = req.headers.authorization;\r\n            token_1.default.ensure(token).then(() => next()).catch(message => res.status(401).json({\r\n                success: false,\r\n                code: 401,\r\n                message\r\n            }));\r\n        });\r\n    }\r\n    setupGraphQL() {\r\n        const server = new apollo_server_express_1.ApolloServer({\r\n            schema: graphql_1.default,\r\n            context: ({ req }) => __awaiter(this, void 0, void 0, function* () {\r\n                var _a, _b;\r\n                const user = yield function_1.getUserByToken(req.headers.authorization);\r\n                return { user, token: req.headers.authorization, role: (_b = (_a = user) === null || _a === void 0 ? void 0 : _a.role) !== null && _b !== void 0 ? _b : constant_1.UserRole.VISITOR };\r\n            })\r\n        });\r\n        server.applyMiddleware({ app: this.app, path: process.env.GRAPHQL_ENDPOINT });\r\n    }\r\n    config() {\r\n        this.app.use(bodyParser.urlencoded({ extended: true }));\r\n        this.app.use(bodyParser.json());\r\n        this.app.use(cookieParser());\r\n        this.app.use(logger('dev'));\r\n        //this.app.use(expressValidator());\r\n        this.app.use(helmet());\r\n        this.app.use(compression());\r\n        this.app.use(cors());\r\n    }\r\n}\r\nexports.default = new Server().app;\r\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ }),

/***/ "./src/tools/constant.ts":
/*!*******************************!*\
  !*** ./src/tools/constant.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MomentFormat = exports.MAX_DISTANCE = exports.PHONE_PRFIX = exports.CURRENCY = exports.EMAIL_SENDER_PASSWORD = exports.EMAIL_SENDER = exports.MAIL_PASSWORD = exports.MAIL_USER = exports.MAIL_HOST = exports.UserRole = void 0;\r\nexports.UserRole = {\r\n    ADMIN: 'ADMIN',\r\n    CLIENT: 'CLIENT',\r\n    FLORIST: 'FLORIST',\r\n    VISITOR: 'VISITOR',\r\n    usersWall: \"usersWall\",\r\n    admin: \"admin\"\r\n};\r\nexports.MAIL_HOST = 'mail.toolynk.com';\r\nexports.MAIL_USER = 'bridge@toolynk.com';\r\nexports.MAIL_PASSWORD = 'G&340fvv';\r\nexports.EMAIL_SENDER = 'contact@toolynk.com';\r\nexports.EMAIL_SENDER_PASSWORD = 'sahbanial123';\r\nexports.CURRENCY = 'EUR';\r\nexports.PHONE_PRFIX = '+33';\r\nexports.MAX_DISTANCE = 7;\r\nexports.MomentFormat = {\r\n    DATE_HOURS: 'DD/MM/YYYY HH:mm',\r\n    DATE: 'DD/MM/YYYY',\r\n    TIME: 'HH:mm'\r\n};\r\n\n\n//# sourceURL=webpack:///./src/tools/constant.ts?");

/***/ }),

/***/ "./src/tools/token.ts":
/*!****************************!*\
  !*** ./src/tools/token.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nconst generate = (payload) => new Promise((resolve, reject) => {\r\n    console.log(process.env.JWT_EXPIRES_IN);\r\n    try {\r\n        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);\r\n        resolve(token);\r\n    }\r\n    catch (e) {\r\n        reject(e);\r\n    }\r\n});\r\nconst ensure = (token) => new Promise((resolve, reject) => {\r\n    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, payload) {\r\n        if (err) {\r\n            return reject(err);\r\n        }\r\n        resolve(payload);\r\n    });\r\n});\r\nexports.default = {\r\n    generate,\r\n    ensure\r\n};\r\n\n\n//# sourceURL=webpack:///./src/tools/token.ts?");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");\n\n//# sourceURL=webpack:///external_%22apollo-server-express%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");\n\n//# sourceURL=webpack:///external_%22bluebird%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");\n\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ }),

/***/ "graphql-subscriptions":
/*!****************************************!*\
  !*** external "graphql-subscriptions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-subscriptions\");\n\n//# sourceURL=webpack:///external_%22graphql-subscriptions%22?");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");\n\n//# sourceURL=webpack:///external_%22graphql-tools%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "moment-timezone":
/*!**********************************!*\
  !*** external "moment-timezone" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment-timezone\");\n\n//# sourceURL=webpack:///external_%22moment-timezone%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "mongoose-autopopulate":
/*!****************************************!*\
  !*** external "mongoose-autopopulate" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose-autopopulate\");\n\n//# sourceURL=webpack:///external_%22mongoose-autopopulate%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "subscriptions-transport-ws":
/*!*********************************************!*\
  !*** external "subscriptions-transport-ws" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"subscriptions-transport-ws\");\n\n//# sourceURL=webpack:///external_%22subscriptions-transport-ws%22?");

/***/ })

/******/ });