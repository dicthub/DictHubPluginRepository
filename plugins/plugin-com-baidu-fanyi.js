if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'plugin-com-baidu-fanyi'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'plugin-com-baidu-fanyi'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'plugin-com-baidu-fanyi'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'plugin-com-baidu-fanyi'.");
}
this['plugin-com-baidu-fanyi'] = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Throwable = Error;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var img = $module$kotlinx_html_js.kotlinx.html.img_evw26v$;
  var a_0 = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var small = $module$kotlinx_html_js.kotlinx.html.small_69ofui$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var toString = Kotlin.toString;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var appendHTML = $module$kotlinx_html_js.kotlinx.html.stream.appendHTML_94plub$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_7ents2$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_us0mfu$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var em = $module$kotlinx_html_js.kotlinx.html.em_2lgk3j$;
  var strong = $module$kotlinx_html_js.kotlinx.html.strong_okpg28$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var audio = $module$kotlinx_html_js.kotlinx.html.audio_hb8i2y$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var set_role = $module$kotlinx_html_js.kotlinx.html.set_role_ueiko3$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var i_0 = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  TranslationException.prototype = Object.create(Throwable.prototype);
  TranslationException.prototype.constructor = TranslationException;
  TranslationHttpFailureException.prototype = Object.create(TranslationException.prototype);
  TranslationHttpFailureException.prototype.constructor = TranslationHttpFailureException;
  TranslationNotFoundException.prototype = Object.create(TranslationException.prototype);
  TranslationNotFoundException.prototype.constructor = TranslationNotFoundException;
  TranslationParsingFailureException.prototype = Object.create(TranslationException.prototype);
  TranslationParsingFailureException.prototype.constructor = TranslationParsingFailureException;
  function TranslationException(message, cause) {
    if (message === void 0)
      message = null;
    if (cause === void 0)
      cause = null;
    Throwable.call(this);
    this.message_p94nxe$_0 = typeof message === 'undefined' && cause != null ? Kotlin.toString(cause) : message;
    this.cause_sx0cjo$_0 = cause;
    Kotlin.captureStack(Throwable, this);
    this.name = 'TranslationException';
    this.query = json([]);
    this.providerId = '';
    this.requestUrl = '';
    this.manualCheckUrl = null;
  }
  Object.defineProperty(TranslationException.prototype, 'message', {
    get: function () {
      return this.message_p94nxe$_0;
    }
  });
  Object.defineProperty(TranslationException.prototype, 'cause', {
    get: function () {
      return this.cause_sx0cjo$_0;
    }
  });
  TranslationException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TranslationException',
    interfaces: [Throwable]
  };
  function TranslationException_init(cause, $this) {
    $this = $this || Object.create(TranslationException.prototype);
    TranslationException.call($this, null, cause);
    return $this;
  }
  function TranslationHttpFailureException() {
    TranslationException.call(this);
    this.name = 'TranslationHttpFailureException';
    this.message_7991vs$_0 = 'Failed to fetch ' + this.requestUrl + ' due to http failure.';
  }
  Object.defineProperty(TranslationHttpFailureException.prototype, 'message', {
    get: function () {
      return this.message_7991vs$_0;
    }
  });
  TranslationHttpFailureException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TranslationHttpFailureException',
    interfaces: [TranslationException]
  };
  function TranslationNotFoundException() {
    TranslationException.call(this);
    this.name = 'TranslationNotFoundException';
    this.message_sn6b0z$_0 = this.query.toString() + ' not found from ' + this.providerId + ', ' + this.requestUrl;
  }
  Object.defineProperty(TranslationNotFoundException.prototype, 'message', {
    get: function () {
      return this.message_sn6b0z$_0;
    }
  });
  TranslationNotFoundException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TranslationNotFoundException',
    interfaces: [TranslationException]
  };
  function TranslationParsingFailureException() {
    TranslationException.call(this);
    this.name = 'TranslationParsingFailureException';
    this.rawContent = null;
    this.message_1onltk$_0 = 'Failed to parse content for ' + this.query + ' by ' + this.providerId + ', ' + this.requestUrl;
  }
  Object.defineProperty(TranslationParsingFailureException.prototype, 'message', {
    get: function () {
      return this.message_1onltk$_0;
    }
  });
  TranslationParsingFailureException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TranslationParsingFailureException',
    interfaces: [TranslationException]
  };
  function HttpAsyncClient() {
  }
  HttpAsyncClient.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HttpAsyncClient',
    interfaces: []
  };
  function AjaxHttpClient() {
    AjaxHttpClient_instance = this;
  }
  function AjaxHttpClient$get$lambda$lambda(closure$xhr, closure$resolve, closure$reject, closure$url) {
    return function (f) {
      if (closure$xhr.status === 200) {
        closure$resolve(closure$xhr.responseText);
      }
       else {
        closure$reject(RuntimeException_init(closure$xhr.status.toString() + ' ' + closure$xhr.statusText + ' when getting ' + closure$url));
      }
      return Unit;
    };
  }
  function AjaxHttpClient$get$lambda$lambda_0(closure$reject, closure$url) {
    return function (f) {
      closure$reject(RuntimeException_init('Failed to load ' + closure$url + '.'));
      return Unit;
    };
  }
  function AjaxHttpClient$get$lambda(closure$url) {
    return function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', AjaxHttpClient$get$lambda$lambda(xhr, resolve, reject, closure$url));
      xhr.addEventListener('error', AjaxHttpClient$get$lambda$lambda_0(reject, closure$url));
      xhr.open('GET', closure$url);
      xhr.send();
      return Unit;
    };
  }
  AjaxHttpClient.prototype.get_61zpoe$ = function (url) {
    return new Promise(AjaxHttpClient$get$lambda(url));
  };
  function AjaxHttpClient$post$lambda$lambda(closure$xhr, closure$resolve, closure$reject, closure$url) {
    return function (f) {
      if (closure$xhr.status === 200) {
        closure$resolve(closure$xhr.responseText);
      }
       else {
        closure$reject(RuntimeException_init(closure$xhr.status.toString() + ' ' + closure$xhr.statusText + ' when posting ' + closure$url));
      }
      return Unit;
    };
  }
  function AjaxHttpClient$post$lambda$lambda_0(closure$reject, closure$url) {
    return function (f) {
      closure$reject(RuntimeException_init('Failed to load ' + closure$url + '.'));
      return Unit;
    };
  }
  function AjaxHttpClient$post$lambda(closure$url, closure$header, closure$body) {
    return function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', AjaxHttpClient$post$lambda$lambda(xhr, resolve, reject, closure$url));
      xhr.addEventListener('error', AjaxHttpClient$post$lambda$lambda_0(reject, closure$url));
      xhr.open('POST', closure$url);
      var tmp$;
      tmp$ = closure$header.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        xhr.setRequestHeader(element.key, element.value);
      }
      xhr.send(closure$body);
      return Unit;
    };
  }
  AjaxHttpClient.prototype.post_bokjk9$ = function (url, header, body) {
    return new Promise(AjaxHttpClient$post$lambda(url, header, body));
  };
  AjaxHttpClient.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AjaxHttpClient',
    interfaces: [HttpAsyncClient]
  };
  var AjaxHttpClient_instance = null;
  function AjaxHttpClient_getInstance() {
    if (AjaxHttpClient_instance === null) {
      new AjaxHttpClient();
    }
    return AjaxHttpClient_instance;
  }
  var next = defineInlineFunction('plugin-com-baidu-fanyi.org.dicthub.plugin.shared.util.next_g414bn$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Promise_init = Promise;
    function next$lambda$lambda(closure$exec, closure$resolve, closure$reject) {
      return function (it) {
        return closure$exec(it).then(closure$resolve).catch(closure$reject);
      };
    }
    function next$lambda(this$next, closure$exec) {
      return function (resolve, reject) {
        this$next.then(next$lambda$lambda(closure$exec, resolve, reject)).catch(reject);
        return Unit;
      };
    }
    return function ($receiver, exec) {
      return new Promise_init(next$lambda($receiver, exec));
    };
  }));
  var map = defineInlineFunction('plugin-com-baidu-fanyi.org.dicthub.plugin.shared.util.map_wus875$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Promise_init = Promise;
    function map$lambda$lambda(closure$resolve, closure$func) {
      return function (it) {
        closure$resolve(closure$func(it));
        return Unit;
      };
    }
    function map$lambda(this$map, closure$func) {
      return function (resolve, reject) {
        this$map.then(map$lambda$lambda(resolve, closure$func)).catch(reject);
        return Unit;
      };
    }
    return function ($receiver, func) {
      return new Promise_init(map$lambda($receiver, func));
    };
  }));
  function builtinSourceIcon(id) {
    return 'img/plugin/' + id + '.png';
  }
  function renderSource$lambda$lambda$lambda(closure$icon) {
    return function ($receiver) {
      $receiver.target = '_blank';
      img($receiver, void 0, closure$icon);
      return Unit;
    };
  }
  function renderSource$lambda$lambda(closure$sourceUrl, closure$icon) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Powered by ');
      a_0($receiver, closure$sourceUrl, void 0, void 0, renderSource$lambda$lambda$lambda(closure$icon));
      return Unit;
    };
  }
  function renderSource$lambda(closure$sourceUrl, closure$icon) {
    return function ($receiver) {
      small($receiver, void 0, renderSource$lambda$lambda(closure$sourceUrl, closure$icon));
      return Unit;
    };
  }
  function renderSource(container, sourceUrl, icon) {
    div(container, 'translation-source', renderSource$lambda(sourceUrl, icon));
  }
  function renderBugReport$lambda$lambda$lambda$lambda($receiver) {
    $receiver.src = 'img/icon-bug.16.png';
    return Unit;
  }
  function renderBugReport$lambda$lambda$lambda($receiver) {
    $receiver.target = '_blank';
    img($receiver, void 0, void 0, void 0, renderBugReport$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function renderBugReport$lambda$lambda(closure$bugUrl) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Report issue: ');
      a_0($receiver, closure$bugUrl, void 0, void 0, renderBugReport$lambda$lambda$lambda);
      return Unit;
    };
  }
  function renderBugReport$lambda(closure$bugUrl) {
    return function ($receiver) {
      small($receiver, void 0, renderBugReport$lambda$lambda(closure$bugUrl));
      return Unit;
    };
  }
  function renderBugReport(container, id, query, exception) {
    var bugTitle = id + ' - [' + getText(query) + ']/' + getFrom(query) + '/' + getTo(query);
    var bugContent = 'message: ' + toString(exception.message) + ', cause: ```' + toString(exception.cause) + '```';
    var bugUrl = 'https://github.com/willings/DictHub/issues/new?title=' + bugTitle + '&body=' + bugContent;
    div(container, 'translation-report-bug', renderBugReport$lambda(bugUrl));
  }
  function renderFailure$lambda(closure$query) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('No result found for ' + '"' + getText(closure$query) + '"');
      return Unit;
    };
  }
  function renderFailure$lambda_0(closure$query) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Parse query html failed ' + '"' + getText(closure$query) + '"');
      return Unit;
    };
  }
  function renderFailure$lambda_1(closure$failure) {
    return function ($receiver) {
      var tmp$;
      $receiver.unaryPlus_pdl1vz$((tmp$ = closure$failure.message) != null ? tmp$ : 'Error when calling service');
      return Unit;
    };
  }
  function renderFailure(id, sourceUrl, query, failure) {
    console.error('Failure from ' + id + ' on ' + query, failure);
    var stringBuilder = StringBuilder_init();
    var container = appendHTML(stringBuilder);
    if (Kotlin.isType(failure, TranslationNotFoundException))
      p(container, 'alert alert-warning', renderFailure$lambda(query));
    else if (Kotlin.isType(failure, TranslationParsingFailureException))
      p(container, 'alert alert-danger', renderFailure$lambda_0(query));
    else {
      p(container, 'alert alert-warning', renderFailure$lambda_1(failure));
    }
    renderBugReport(container, id, query, failure);
    renderSource(container, sourceUrl, builtinSourceIcon(id));
    return stringBuilder.toString();
  }
  function getText($receiver) {
    return attribute($receiver, 'text');
  }
  function getFrom($receiver) {
    return attribute($receiver, 'from');
  }
  function getTo($receiver) {
    return attribute($receiver, 'to');
  }
  function createQuery(text, from, to_0) {
    return json([to('text', text), to('from', from), to('to', to_0)]);
  }
  function getName($receiver) {
    return attribute($receiver, 'name');
  }
  function getDescription($receiver) {
    return attribute($receiver, 'description');
  }
  function getSource($receiver) {
    return attribute($receiver, 'source');
  }
  function getSourceUrl($receiver) {
    return attribute($receiver, 'sourceUrl');
  }
  function getAuthor($receiver) {
    return attribute($receiver, 'author');
  }
  function getAuthorUrl($receiver) {
    return attribute($receiver, 'authorUrl');
  }
  function getOptions($receiver) {
    return attribute($receiver, 'options');
  }
  function getOption($receiver, name) {
    return attribute($receiver, name);
  }
  function getType($receiver) {
    return attribute($receiver, 'type');
  }
  function getOptionDescription($receiver) {
    return attribute($receiver, 'description');
  }
  function getDefault($receiver) {
    return attribute($receiver, 'default');
  }
  function createMeta(name, description, source, sourceUrl, author, authorUrl, options) {
    if (options === void 0)
      options = json([]);
    return json([to('name', name), to('description', description), to('source', source), to('sourceUrl', sourceUrl), to('author', author), to('authorUrl', authorUrl), to('options', options)]);
  }
  function createMetaOptionConfig(type, description, default_0) {
    var $receiver = json([to('type', type)]);
    if (description != null) {
      $receiver['description'] = description;
    }
    if (default_0 != null) {
      $receiver['default'] = default_0;
    }
    return $receiver;
  }
  function TranslationProvider() {
  }
  TranslationProvider.prototype.updateOptions = function (options) {
    console.log('Update options for ' + this.id(), options);
  };
  TranslationProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TranslationProvider',
    interfaces: []
  };
  function attribute($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver[name]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  }
  function create_plugin_com_baidu_fanyi() {
    console.log('Called create_plugin_com_baidu_fanyi');
    return new BaiduTranslationProvider(AjaxHttpClient_getInstance(), new BaiduTranslationRenderer());
  }
  function BaiduTranslation(from, to, query, translation, pron, details) {
    if (pron === void 0)
      pron = null;
    this.from = from;
    this.to = to;
    this.query = query;
    this.translation = translation;
    this.pron = pron;
    this.details = details;
  }
  BaiduTranslation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaiduTranslation',
    interfaces: []
  };
  BaiduTranslation.prototype.component1 = function () {
    return this.from;
  };
  BaiduTranslation.prototype.component2 = function () {
    return this.to;
  };
  BaiduTranslation.prototype.component3 = function () {
    return this.query;
  };
  BaiduTranslation.prototype.component4 = function () {
    return this.translation;
  };
  BaiduTranslation.prototype.component5 = function () {
    return this.pron;
  };
  BaiduTranslation.prototype.component6 = function () {
    return this.details;
  };
  BaiduTranslation.prototype.copy_qtgw6a$ = function (from, to, query, translation, pron, details) {
    return new BaiduTranslation(from === void 0 ? this.from : from, to === void 0 ? this.to : to, query === void 0 ? this.query : query, translation === void 0 ? this.translation : translation, pron === void 0 ? this.pron : pron, details === void 0 ? this.details : details);
  };
  BaiduTranslation.prototype.toString = function () {
    return 'BaiduTranslation(from=' + Kotlin.toString(this.from) + (', to=' + Kotlin.toString(this.to)) + (', query=' + Kotlin.toString(this.query)) + (', translation=' + Kotlin.toString(this.translation)) + (', pron=' + Kotlin.toString(this.pron)) + (', details=' + Kotlin.toString(this.details)) + ')';
  };
  BaiduTranslation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    result = result * 31 + Kotlin.hashCode(this.query) | 0;
    result = result * 31 + Kotlin.hashCode(this.translation) | 0;
    result = result * 31 + Kotlin.hashCode(this.pron) | 0;
    result = result * 31 + Kotlin.hashCode(this.details) | 0;
    return result;
  };
  BaiduTranslation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to) && Kotlin.equals(this.query, other.query) && Kotlin.equals(this.translation, other.translation) && Kotlin.equals(this.pron, other.pron) && Kotlin.equals(this.details, other.details)))));
  };
  function TranslationDetails(poc, meanings) {
    this.poc = poc;
    this.meanings = meanings;
  }
  TranslationDetails.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TranslationDetails',
    interfaces: []
  };
  TranslationDetails.prototype.component1 = function () {
    return this.poc;
  };
  TranslationDetails.prototype.component2 = function () {
    return this.meanings;
  };
  TranslationDetails.prototype.copy_kwv3np$ = function (poc, meanings) {
    return new TranslationDetails(poc === void 0 ? this.poc : poc, meanings === void 0 ? this.meanings : meanings);
  };
  TranslationDetails.prototype.toString = function () {
    return 'TranslationDetails(poc=' + Kotlin.toString(this.poc) + (', meanings=' + Kotlin.toString(this.meanings)) + ')';
  };
  TranslationDetails.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.poc) | 0;
    result = result * 31 + Kotlin.hashCode(this.meanings) | 0;
    return result;
  };
  TranslationDetails.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.poc, other.poc) && Kotlin.equals(this.meanings, other.meanings)))));
  };
  var ID;
  var BASE_URL;
  function BaiduTranslationProvider(httpClient, renderer) {
    this.httpClient_0 = httpClient;
    this.renderer_0 = renderer;
  }
  BaiduTranslationProvider.prototype.id = function () {
    return ID;
  };
  BaiduTranslationProvider.prototype.meta = function () {
    return createMeta('Baidu Multi-language Translation', 'Support up to 28 language translation', 'Baidu Fanyi', 'https://fanyi.baidu.com/', 'DictHub', 'https://github.com/willings/DictHub');
  };
  BaiduTranslationProvider.prototype.canTranslate = function (query) {
    return typeof langCodeMap[getFrom(query)] === 'string' && typeof langCodeMap[getTo(query)] === 'string';
  };
  function BaiduTranslationProvider$translate$lambda(this$BaiduTranslationProvider) {
    return function (it) {
      return this$BaiduTranslationProvider.parseTranslationData_0(it);
    };
  }
  function BaiduTranslationProvider$translate$lambda_0(this$BaiduTranslationProvider) {
    return function (it) {
      return this$BaiduTranslationProvider.renderer_0.render_4zxeg5$(it);
    };
  }
  function BaiduTranslationProvider$translate$lambda_1(this$BaiduTranslationProvider, closure$query) {
    return function (it) {
      return renderFailure(this$BaiduTranslationProvider.id(), sourceUrl(closure$query), closure$query, it);
    };
  }
  var Promise_init = Promise;
  function next$lambda$lambda(closure$exec, closure$resolve, closure$reject) {
    return function (it) {
      return closure$exec(it).then(closure$resolve).catch(closure$reject);
    };
  }
  function next$lambda(this$next, closure$exec) {
    return function (resolve, reject) {
      this$next.then(next$lambda$lambda(closure$exec, resolve, reject)).catch(reject);
      return Unit;
    };
  }
  function map$lambda$lambda(closure$resolve, closure$func) {
    return function (it) {
      closure$resolve(closure$func(it));
      return Unit;
    };
  }
  function map$lambda(this$map, closure$func) {
    return function (resolve, reject) {
      this$map.then(map$lambda$lambda(resolve, closure$func)).catch(reject);
      return Unit;
    };
  }
  BaiduTranslationProvider.prototype.translate = function (query) {
    return (new Promise_init(map$lambda(new Promise_init(next$lambda(newTokenPromise(), this.callBaiduApi_0(query))), BaiduTranslationProvider$translate$lambda(this)))).then(BaiduTranslationProvider$translate$lambda_0(this)).catch(BaiduTranslationProvider$translate$lambda_1(this, query));
  };
  BaiduTranslationProvider.prototype.parseTranslationData_0 = function (jsonStr) {
    return this.parseTranslationResult_0(JSON.parse(jsonStr));
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  BaiduTranslationProvider.prototype.parseTranslationResult_0 = function (data) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    var tmp$_11;
    tmp$ = (tmp$_11 = data['trans_result']) == null || Kotlin.isType(tmp$_11, Any) ? tmp$_11 : null;
    if (tmp$ == null) {
      throw new TranslationNotFoundException();
    }
    var translationResult = tmp$;
    var tmp$_12;
    tmp$_0 = (tmp$_12 = translationResult['from']) == null || Kotlin.isType(tmp$_12, Any) ? tmp$_12 : null;
    if (tmp$_0 == null) {
      throw new TranslationParsingFailureException();
    }
    var from = tmp$_0;
    var tmp$_13;
    tmp$_1 = (tmp$_13 = translationResult['to']) == null || Kotlin.isType(tmp$_13, Any) ? tmp$_13 : null;
    if (tmp$_1 == null) {
      throw new TranslationParsingFailureException();
    }
    var to = tmp$_1;
    var tmp$_14;
    tmp$_3 = (tmp$_2 = (tmp$_14 = translationResult['data']) == null || Kotlin.isType(tmp$_14, Any) ? tmp$_14 : null) != null ? firstOrNull(tmp$_2) : null;
    if (tmp$_3 == null) {
      throw new TranslationNotFoundException();
    }
    var translation = tmp$_3;
    var tmp$_15;
    var tmp$_16;
    if ((tmp$_4 = (tmp$_16 = data['dict_result']) == null || Kotlin.isType(tmp$_16, Any) ? tmp$_16 : null) != null) {
      var tmp$_17;
      tmp$_15 = (tmp$_17 = tmp$_4['simple_means']) == null || Kotlin.isType(tmp$_17, Any) ? tmp$_17 : null;
    }
     else
      tmp$_15 = null;
    var tmp$_18;
    if ((tmp$_5 = tmp$_15) != null) {
      var tmp$_19;
      tmp$_18 = (tmp$_19 = tmp$_5['symbols']) == null || Kotlin.isType(tmp$_19, Any) ? tmp$_19 : null;
    }
     else
      tmp$_18 = null;
    var symbol = (tmp$_6 = tmp$_18) != null ? firstOrNull(tmp$_6) : null;
    var tmp$_20;
    if (symbol != null) {
      var tmp$_21;
      tmp$_20 = (tmp$_21 = symbol['ph_am']) == null || Kotlin.isType(tmp$_21, Any) ? tmp$_21 : null;
    }
     else
      tmp$_20 = null;
    var tmp$_22;
    if ((tmp$_7 = tmp$_20) != null)
      tmp$_22 = tmp$_7;
    else {
      var tmp$_23;
      if (symbol != null) {
        var tmp$_24;
        tmp$_23 = (tmp$_24 = symbol['ph_en']) == null || Kotlin.isType(tmp$_24, Any) ? tmp$_24 : null;
      }
       else
        tmp$_23 = null;
      tmp$_22 = tmp$_23;
    }
    var pron = tmp$_22;
    var tmp$_25;
    if (symbol != null) {
      var tmp$_26;
      tmp$_25 = (tmp$_26 = symbol['parts']) == null || Kotlin.isType(tmp$_26, Any) ? tmp$_26 : null;
    }
     else
      tmp$_25 = null;
    var tmp$_27;
    if ((tmp$_8 = tmp$_25) != null) {
      var destination = ArrayList_init(tmp$_8.length);
      var tmp$_28;
      for (tmp$_28 = 0; tmp$_28 !== tmp$_8.length; ++tmp$_28) {
        var item = tmp$_8[tmp$_28];
        var tmp$_29, tmp$_30, tmp$_31;
        var tmp$_32;
        var tmp$_33;
        destination.add_11rb$(new TranslationDetails((tmp$_29 = (tmp$_32 = item['part']) == null || Kotlin.isType(tmp$_32, Any) ? tmp$_32 : null) != null ? tmp$_29 : '', (tmp$_31 = (tmp$_30 = (tmp$_33 = item['means']) == null || Kotlin.isType(tmp$_33, Any) ? tmp$_33 : null) != null ? toList(tmp$_30) : null) != null ? tmp$_31 : emptyList()));
      }
      tmp$_27 = destination;
    }
     else
      tmp$_27 = null;
    var details = tmp$_27;
    var tmp$_34;
    tmp$_9 = (tmp$_34 = translation['src']) == null || Kotlin.isType(tmp$_34, Any) ? tmp$_34 : null;
    if (tmp$_9 == null) {
      throw new TranslationParsingFailureException();
    }
    var tmp$_35;
    tmp$_10 = (tmp$_35 = translation['dst']) == null || Kotlin.isType(tmp$_35, Any) ? tmp$_35 : null;
    if (tmp$_10 == null) {
      throw new TranslationParsingFailureException();
    }
    return new BaiduTranslation(from, to, tmp$_9, tmp$_10, pron, details != null ? details : emptyList());
  };
  function BaiduTranslationProvider$callBaiduApi$lambda(this$BaiduTranslationProvider, closure$query) {
    return function (token) {
      return this$BaiduTranslationProvider.httpClient_0.post_bokjk9$('https://fanyi.baidu.com/v2transapi', mapOf(to('Content-Type', 'application/x-www-form-urlencoded')), this$BaiduTranslationProvider.buildFormData_0(getFrom(closure$query), getTo(closure$query), getText(closure$query), signQuery(getText(closure$query), token.gtk), token.token));
    };
  }
  BaiduTranslationProvider.prototype.callBaiduApi_0 = function (query) {
    return BaiduTranslationProvider$callBaiduApi$lambda(this, query);
  };
  BaiduTranslationProvider.prototype.buildFormData_0 = function (from, to, query, sign, token) {
    return 'from=' + baiduLangCode(from).toString() + '&to=' + baiduLangCode(to).toString() + '&query=' + query + '&simple_means_flag=3&sign=' + sign + '&token=' + token;
  };
  BaiduTranslationProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaiduTranslationProvider',
    interfaces: [TranslationProvider]
  };
  var langCodeMap;
  function baiduLangCode(langCode) {
    var tmp$;
    return (tmp$ = langCodeMap[langCode]) != null ? tmp$ : langCode;
  }
  function value($receiver, key) {
    var tmp$;
    return (tmp$ = $receiver[key]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : null;
  }
  function sourceUrl(q) {
    return BASE_URL + '/#' + baiduLangCode(getFrom(q)).toString() + '/' + baiduLangCode(getTo(q)).toString() + '/' + getText(q);
  }
  function BaiduTranslationRenderer() {
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('[' + closure$t.from + ']');
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda_0(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$t.query);
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      var tmp$;
      if ((tmp$ = closure$t.pron) != null) {
        $receiver.unaryPlus_pdl1vz$('[' + tmp$ + ']');
      }
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda_1(closure$t) {
    return function ($receiver) {
      em($receiver, void 0, BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda(closure$t));
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_0(closure$t, this$BaiduTranslationRenderer) {
    return function ($receiver) {
      $receiver.src = this$BaiduTranslationRenderer.voiceUrl_0(closure$t.from, closure$t.query);
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda_2(closure$t, this$BaiduTranslationRenderer) {
    return function ($receiver) {
      audio($receiver, void 0, BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_0(closure$t, this$BaiduTranslationRenderer));
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda(closure$t, this$BaiduTranslationRenderer) {
    return function ($receiver) {
      em($receiver, 'translation-lang', BaiduTranslationRenderer$render$lambda$lambda$lambda(closure$t));
      strong($receiver, void 0, BaiduTranslationRenderer$render$lambda$lambda$lambda_0(closure$t));
      $receiver.unaryPlus_pdl1vz$(' ');
      span($receiver, 'translation-pronunciation', BaiduTranslationRenderer$render$lambda$lambda$lambda_1(closure$t));
      span($receiver, 'translation-voice', BaiduTranslationRenderer$render$lambda$lambda$lambda_2(closure$t, this$BaiduTranslationRenderer));
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_1(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('[' + closure$t.to + ']');
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_2($receiver) {
    set_role($receiver, 'button');
    var $receiver_0 = $receiver.attributes;
    var key = 'data-toggle';
    var value = 'collapse';
    $receiver_0.put_xwzc9p$(key, value);
    $receiver.unaryPlus_pdl1vz$('\uD83D\uDCDA');
    return Unit;
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$translationDetail) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$translationDetail.poc);
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$translationDetail) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(joinToString(closure$translationDetail.meanings, '; '));
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$translationDetail) {
    return function ($receiver) {
      i_0($receiver, 'translation-poc', BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$translationDetail));
      span($receiver, 'translation-primary', BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$translationDetail));
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$t.details.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        li($receiver, 'list-group-item small', BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_3(closure$detailId, closure$t) {
    return function ($receiver) {
      set_id($receiver, closure$detailId);
      ul($receiver, 'list-group', BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda(closure$t));
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda$lambda_3(closure$t) {
    return function ($receiver) {
      em($receiver, 'translation-lang', BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_1(closure$t));
      $receiver.unaryPlus_pdl1vz$(closure$t.translation);
      if (!closure$t.details.isEmpty()) {
        var detailId = 'baiduDetail';
        a_0($receiver, '#baiduDetail', void 0, 'btn btn-light btn-sm mb-2', BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_2);
        div_0($receiver, 'collapse', BaiduTranslationRenderer$render$lambda$lambda$lambda$lambda_3(detailId, closure$t));
      }
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda$lambda_0(closure$t) {
    return function ($receiver) {
      li($receiver, 'list-group-item', BaiduTranslationRenderer$render$lambda$lambda$lambda_3(closure$t));
      return Unit;
    };
  }
  function BaiduTranslationRenderer$render$lambda(closure$t, this$BaiduTranslationRenderer) {
    return function ($receiver) {
      div_0($receiver, 'alert alert-info', BaiduTranslationRenderer$render$lambda$lambda(closure$t, this$BaiduTranslationRenderer));
      ul($receiver, 'list-group', BaiduTranslationRenderer$render$lambda$lambda_0(closure$t));
      return Unit;
    };
  }
  BaiduTranslationRenderer.prototype.render_4zxeg5$ = function (t) {
    var stringBuilder = StringBuilder_init();
    var container = appendHTML(stringBuilder);
    div(container, 't-result', BaiduTranslationRenderer$render$lambda(t, this));
    renderSource(container, this.sourceUrl_0(t), builtinSourceIcon(ID));
    return stringBuilder.toString();
  };
  BaiduTranslationRenderer.prototype.sourceUrl_0 = function (t) {
    return BASE_URL + '/#' + t.from + '/' + t.to + '/' + t.query;
  };
  BaiduTranslationRenderer.prototype.voiceUrl_0 = function (lang, text) {
    return BASE_URL + '/gettts?spd=3&source=web&lan=' + lang + '&text=' + text;
  };
  BaiduTranslationRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaiduTranslationRenderer',
    interfaces: []
  };
  var regexToken;
  var regexGtk;
  function Token(token, gtk) {
    this.token = token;
    this.gtk = gtk;
  }
  Token.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Token',
    interfaces: []
  };
  Token.prototype.component1 = function () {
    return this.token;
  };
  Token.prototype.component2 = function () {
    return this.gtk;
  };
  Token.prototype.copy_puj7f4$ = function (token, gtk) {
    return new Token(token === void 0 ? this.token : token, gtk === void 0 ? this.gtk : gtk);
  };
  Token.prototype.toString = function () {
    return 'Token(token=' + Kotlin.toString(this.token) + (', gtk=' + Kotlin.toString(this.gtk)) + ')';
  };
  Token.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    result = result * 31 + Kotlin.hashCode(this.gtk) | 0;
    return result;
  };
  Token.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.token, other.token) && Kotlin.equals(this.gtk, other.gtk)))));
  };
  function newTokenPromise$lambda$lambda(closure$resolve, closure$reject) {
    return function (htmlContent) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      var token = (tmp$_0 = (tmp$ = regexToken.find_905azu$(htmlContent)) != null ? tmp$.groupValues : null) != null ? tmp$_0.get_za3lpa$(1) : null;
      var gtk = (tmp$_2 = (tmp$_1 = regexGtk.find_905azu$(htmlContent)) != null ? tmp$_1.groupValues : null) != null ? tmp$_2.get_za3lpa$(1) : null;
      if (token != null && gtk != null) {
        closure$resolve(new Token(token, gtk));
      }
       else {
        closure$reject(IllegalStateException_init('Token parse failed'));
      }
      return Unit;
    };
  }
  function newTokenPromise$lambda(resolve, reject) {
    AjaxHttpClient_getInstance().get_61zpoe$('https://fanyi.baidu.com').then(newTokenPromise$lambda$lambda(resolve, reject)).catch(reject);
    return Unit;
  }
  function newTokenPromise() {
    return new Promise(newTokenPromise$lambda);
  }
  var signQuery;
  var package$org = _.org || (_.org = {});
  var package$dicthub = package$org.dicthub || (package$org.dicthub = {});
  var package$plugin = package$dicthub.plugin || (package$dicthub.plugin = {});
  var package$shared = package$plugin.shared || (package$plugin.shared = {});
  var package$util = package$shared.util || (package$shared.util = {});
  package$util.TranslationException_init_dbl4no$ = TranslationException_init;
  package$util.TranslationException = TranslationException;
  package$util.TranslationHttpFailureException = TranslationHttpFailureException;
  package$util.TranslationNotFoundException = TranslationNotFoundException;
  package$util.TranslationParsingFailureException = TranslationParsingFailureException;
  package$util.HttpAsyncClient = HttpAsyncClient;
  Object.defineProperty(package$util, 'AjaxHttpClient', {
    get: AjaxHttpClient_getInstance
  });
  package$util.next_g414bn$ = next;
  package$util.map_wus875$ = map;
  package$util.builtinSourceIcon_61zpoe$ = builtinSourceIcon;
  package$util.renderSource_45shcv$ = renderSource;
  package$util.renderBugReport_wsdkps$ = renderBugReport;
  package$util.renderFailure_5kevx$ = renderFailure;
  package$util.getText_t1yf75$ = getText;
  package$util.getFrom_t1yf75$ = getFrom;
  package$util.getTo_t1yf75$ = getTo;
  package$util.createQuery_6hosri$ = createQuery;
  package$util.getName_t1yf75$ = getName;
  package$util.getDescription_t1yf75$ = getDescription;
  package$util.getSource_t1yf75$ = getSource;
  package$util.getSourceUrl_t1yf75$ = getSourceUrl;
  package$util.getAuthor_t1yf75$ = getAuthor;
  package$util.getAuthorUrl_t1yf75$ = getAuthorUrl;
  package$util.getOptions_t1yf75$ = getOptions;
  package$util.getOption_fxvzox$ = getOption;
  package$util.getType_t1yf75$ = getType;
  package$util.getOptionDescription_t1yf75$ = getOptionDescription;
  package$util.getDefault_t1yf75$ = getDefault;
  package$util.createMeta_ebpex8$ = createMeta;
  package$util.createMetaOptionConfig_5p2dge$ = createMetaOptionConfig;
  package$util.TranslationProvider = TranslationProvider;
  package$util.attribute_mxpdhj$ = attribute;
  _.create_plugin_com_baidu_fanyi = create_plugin_com_baidu_fanyi;
  var package$com_baidu_fanyi = package$plugin.com_baidu_fanyi || (package$plugin.com_baidu_fanyi = {});
  package$com_baidu_fanyi.BaiduTranslation = BaiduTranslation;
  package$com_baidu_fanyi.TranslationDetails = TranslationDetails;
  Object.defineProperty(package$com_baidu_fanyi, 'ID', {
    get: function () {
      return ID;
    }
  });
  Object.defineProperty(package$com_baidu_fanyi, 'BASE_URL', {
    get: function () {
      return BASE_URL;
    }
  });
  $$importsForInline$$['plugin-com-baidu-fanyi'] = _;
  package$com_baidu_fanyi.BaiduTranslationProvider = BaiduTranslationProvider;
  package$com_baidu_fanyi.BaiduTranslationRenderer = BaiduTranslationRenderer;
  package$com_baidu_fanyi.Token = Token;
  package$com_baidu_fanyi.newTokenPromise = newTokenPromise;
  Object.defineProperty(package$com_baidu_fanyi, 'signQuery', {
    get: function () {
      return signQuery;
    }
  });
  BaiduTranslationProvider.prototype.updateOptions = TranslationProvider.prototype.updateOptions;
  ID = 'plugin-com-baidu-fanyi';
  BASE_URL = 'https://fanyi.baidu.com';
  langCodeMap = json([to('en', 'en'), to('ar', 'ara'), to('et', 'est'), to('bg', 'bul'), to('pl', 'pl'), to('da', 'dan'), to('de', 'de'), to('ru', 'ru'), to('fr', 'fra'), to('fi', 'fin'), to('ko', 'kor'), to('nl', 'nl'), to('cs', 'cs'), to('ro', 'rom'), to('pt', 'pt'), to('ja', 'jp'), to('sv', 'swe'), to('sk', 'slo'), to('th', 'th'), to('es', 'spa'), to('el', 'el'), to('hu', 'hu'), to('it', 'it'), to('vi', 'vie'), to('zh-CN', 'zh'), to('zh-TW', 'zh')]);
  regexToken = Regex_init("token:\\s?'([a-f\\d]+)'");
  regexGtk = Regex_init("window.gtk = '(\\d+.\\d+)';");
  function a(r, o) {
    for (var t = 0; t < o.length - 2; t += 3) {
      var a = o.charAt(t + 2);
      a = a >= 'a' ? a.charCodeAt(0) - 87 : Number(a), a = '+' === o.charAt(t + 1) ? r >>> a : r << a, r = '+' === o.charAt(t) ? r + a & 4.294967295E9 : r ^ a;
    }
    return r;
  }
  var C = null;
  function baidu_sign(r, _gtk) {
    var o = r.length;
    o > 30 && (r = '' + r.substr(0, 10) + r.substr(Math.floor(o / 2) - 5, 10) + r.substr(-10, 10));
    var t = void 0, t = null !== C ? C : (C = _gtk || '') || '';
    for (var e = t.split('.'), h = Number(e[0]) || 0, i = Number(e[1]) || 0, d = [], f = 0, g = 0; g < r.length; g++) {
      var m = r.charCodeAt(g);
      128 > m ? (d[f++] = m) : (2048 > m ? (d[f++] = m >> 6 | 192) : (55296 === (64512 & m) && g + 1 < r.length && 56320 === (64512 & r.charCodeAt(g + 1)) ? (m = 65536 + ((1023 & m) << 10) + (1023 & r.charCodeAt(++g)), d[f++] = m >> 18 | 240, d[f++] = m >> 12 & 63 | 128) : (d[f++] = m >> 12 | 224), d[f++] = m >> 6 & 63 | 128), d[f++] = 63 & m | 128);
    }
    for (var S = h, u = '+-a^+6', l = '+-3^+b+-f', s = 0; s < d.length; s++)
      S += d[s], S = a(S, u);
    return S = a(S, l), S ^= i, 0 > S && (S = (2147483647 & S) + 2.147483648E9), S %= 1000000.0, S.toString() + '.' + (S ^ h);
  }
  signQuery = baidu_sign;
  Kotlin.defineModule('plugin-com-baidu-fanyi', _);
  return _;
}(typeof this['plugin-com-baidu-fanyi'] === 'undefined' ? {} : this['plugin-com-baidu-fanyi'], kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=plugin-com-baidu-fanyi.js.map
