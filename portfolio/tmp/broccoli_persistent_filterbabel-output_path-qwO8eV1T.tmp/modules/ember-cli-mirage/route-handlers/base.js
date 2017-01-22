var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

import assert from 'ember-cli-mirage/assert';
import { camelize, singularize, dasherize } from 'ember-cli-mirage/utils/inflector';

var BaseRouteHandler = (function () {
  function BaseRouteHandler() {
    _classCallCheck(this, BaseRouteHandler);
  }

  _createClass(BaseRouteHandler, [{
    key: 'getModelClassFromPath',
    value: function getModelClassFromPath(fullPath) {
      if (!fullPath) {
        return;
      }
      var path = fullPath.split('/');
      var lastPath = undefined;
      while (path.length > 0) {
        lastPath = path.splice(-1)[0];
        if (lastPath && lastPath !== ':id') {
          break;
        }
      }
      var modelName = dasherize(camelize(singularize(lastPath)));
      return modelName;
    }
  }, {
    key: '_getIdForRequest',
    value: function _getIdForRequest(request, jsonApiDoc) {
      var id = undefined;
      if (request && request.params && request.params.id) {
        id = request.params.id;
      } else if (jsonApiDoc && jsonApiDoc.data && jsonApiDoc.data.id) {
        id = jsonApiDoc.data.id;
      }
      return id;
    }
  }, {
    key: '_getJsonApiDocForRequest',
    value: function _getJsonApiDocForRequest(request, modelName) {
      var body = undefined;
      if (request && request.requestBody) {
        body = JSON.parse(request.requestBody);
      }
      return this.serializerOrRegistry.normalize(body, modelName);
    }
  }, {
    key: '_getAttrsForRequest',
    value: function _getAttrsForRequest(request, modelName) {
      var json = this._getJsonApiDocForRequest(request, modelName);
      var id = this._getIdForRequest(request, json);
      var attrs = {};

      assert(json.data && (json.data.attributes || json.data.relationships), 'You\'re using a shorthand or #normalizedRequestAttrs, but your serializer\'s normalize function did not return a valid JSON:API document. http://www.ember-cli-mirage.com/docs/v0.2.x/serializers/#normalizejson');

      if (json.data.attributes) {
        attrs = Object.keys(json.data.attributes).reduce(function (sum, key) {
          sum[camelize(key)] = json.data.attributes[key];
          return sum;
        }, {});
      }

      if (json.data.relationships) {
        Object.keys(json.data.relationships).forEach(function (key) {
          var relationship = json.data.relationships[key];

          if (!Array.isArray(relationship.data)) {
            attrs[camelize(key) + 'Id'] = relationship.data && relationship.data.id;
          }
        }, {});
      }

      if (id) {
        attrs.id = id;
      }

      return attrs;
    }
  }]);

  return BaseRouteHandler;
})();

export default BaseRouteHandler;