if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'plugin-com-bing-translator'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'plugin-com-bing-translator'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'plugin-com-bing-translator'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'plugin-com-bing-translator'.");
}
this['plugin-com-bing-translator'] = function (_, Kotlin, $module$kotlinx_html_js) {
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
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var small = $module$kotlinx_html_js.kotlinx.html.small_69ofui$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var toString = Kotlin.toString;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var appendHTML = $module$kotlinx_html_js.kotlinx.html.stream.appendHTML_94plub$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_7ents2$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var em = $module$kotlinx_html_js.kotlinx.html.em_2lgk3j$;
  var strong = $module$kotlinx_html_js.kotlinx.html.strong_okpg28$;
  var audio = $module$kotlinx_html_js.kotlinx.html.audio_hb8i2y$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var Random = Kotlin.kotlin.random.Random;
  var set_role = $module$kotlinx_html_js.kotlinx.html.set_role_ueiko3$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var i = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
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
  var next = defineInlineFunction('plugin-com-bing-translator.org.dicthub.plugin.shared.util.next_g414bn$', wrapFunction(function () {
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
  var map = defineInlineFunction('plugin-com-bing-translator.org.dicthub.plugin.shared.util.map_wus875$', wrapFunction(function () {
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
      a($receiver, closure$sourceUrl, void 0, void 0, renderSource$lambda$lambda$lambda(closure$icon));
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
      a($receiver, closure$bugUrl, void 0, void 0, renderBugReport$lambda$lambda$lambda);
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
  function create_plugin_com_bing_translator() {
    return new BingTranslationProvider(AjaxHttpClient_getInstance(), new BingTranslationRenderer());
  }
  function BingTranslation(from, to, query, queryVoice, translation, translationVoice, details) {
    this.from = from;
    this.to = to;
    this.query = query;
    this.queryVoice = queryVoice;
    this.translation = translation;
    this.translationVoice = translationVoice;
    this.details = details;
  }
  BingTranslation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BingTranslation',
    interfaces: []
  };
  BingTranslation.prototype.component1 = function () {
    return this.from;
  };
  BingTranslation.prototype.component2 = function () {
    return this.to;
  };
  BingTranslation.prototype.component3 = function () {
    return this.query;
  };
  BingTranslation.prototype.component4 = function () {
    return this.queryVoice;
  };
  BingTranslation.prototype.component5 = function () {
    return this.translation;
  };
  BingTranslation.prototype.component6 = function () {
    return this.translationVoice;
  };
  BingTranslation.prototype.component7 = function () {
    return this.details;
  };
  BingTranslation.prototype.copy_tyee15$ = function (from, to, query, queryVoice, translation, translationVoice, details) {
    return new BingTranslation(from === void 0 ? this.from : from, to === void 0 ? this.to : to, query === void 0 ? this.query : query, queryVoice === void 0 ? this.queryVoice : queryVoice, translation === void 0 ? this.translation : translation, translationVoice === void 0 ? this.translationVoice : translationVoice, details === void 0 ? this.details : details);
  };
  BingTranslation.prototype.toString = function () {
    return 'BingTranslation(from=' + Kotlin.toString(this.from) + (', to=' + Kotlin.toString(this.to)) + (', query=' + Kotlin.toString(this.query)) + (', queryVoice=' + Kotlin.toString(this.queryVoice)) + (', translation=' + Kotlin.toString(this.translation)) + (', translationVoice=' + Kotlin.toString(this.translationVoice)) + (', details=' + Kotlin.toString(this.details)) + ')';
  };
  BingTranslation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    result = result * 31 + Kotlin.hashCode(this.query) | 0;
    result = result * 31 + Kotlin.hashCode(this.queryVoice) | 0;
    result = result * 31 + Kotlin.hashCode(this.translation) | 0;
    result = result * 31 + Kotlin.hashCode(this.translationVoice) | 0;
    result = result * 31 + Kotlin.hashCode(this.details) | 0;
    return result;
  };
  BingTranslation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to) && Kotlin.equals(this.query, other.query) && Kotlin.equals(this.queryVoice, other.queryVoice) && Kotlin.equals(this.translation, other.translation) && Kotlin.equals(this.translationVoice, other.translationVoice) && Kotlin.equals(this.details, other.details)))));
  };
  function Detail(poc, meanings) {
    this.poc = poc;
    this.meanings = meanings;
  }
  Detail.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Detail',
    interfaces: []
  };
  Detail.prototype.component1 = function () {
    return this.poc;
  };
  Detail.prototype.component2 = function () {
    return this.meanings;
  };
  Detail.prototype.copy_a5zxyn$ = function (poc, meanings) {
    return new Detail(poc === void 0 ? this.poc : poc, meanings === void 0 ? this.meanings : meanings);
  };
  Detail.prototype.toString = function () {
    return 'Detail(poc=' + Kotlin.toString(this.poc) + (', meanings=' + Kotlin.toString(this.meanings)) + ')';
  };
  Detail.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.poc) | 0;
    result = result * 31 + Kotlin.hashCode(this.meanings) | 0;
    return result;
  };
  Detail.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.poc, other.poc) && Kotlin.equals(this.meanings, other.meanings)))));
  };
  function Meaning(meaning, examples) {
    this.meaning = meaning;
    this.examples = examples;
  }
  Meaning.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Meaning',
    interfaces: []
  };
  Meaning.prototype.component1 = function () {
    return this.meaning;
  };
  Meaning.prototype.component2 = function () {
    return this.examples;
  };
  Meaning.prototype.copy_kwv3np$ = function (meaning, examples) {
    return new Meaning(meaning === void 0 ? this.meaning : meaning, examples === void 0 ? this.examples : examples);
  };
  Meaning.prototype.toString = function () {
    return 'Meaning(meaning=' + Kotlin.toString(this.meaning) + (', examples=' + Kotlin.toString(this.examples)) + ')';
  };
  Meaning.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.meaning) | 0;
    result = result * 31 + Kotlin.hashCode(this.examples) | 0;
    return result;
  };
  Meaning.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.meaning, other.meaning) && Kotlin.equals(this.examples, other.examples)))));
  };
  var ID;
  var BASE_URL;
  function BingTranslationProvider(httpClient, renderer) {
    this.httpClient_0 = httpClient;
    this.renderer_0 = renderer;
  }
  BingTranslationProvider.prototype.id = function () {
    return ID;
  };
  BingTranslationProvider.prototype.meta = function () {
    return createMeta('Bing microsoft translator', 'Bing multiple language translation', 'Bing Microsoft Translator', 'https://www.bing.com/translator', 'DictHub', 'https://github.com/willings/DictHub');
  };
  BingTranslationProvider.prototype.canTranslate = function (query) {
    return typeof langCodeMap[getFrom(query)] === 'string' && typeof langCodeMap[getTo(query)] === 'string';
  };
  function BingTranslationProvider$translate$lambda$lambda$lambda(this$BingTranslationProvider) {
    return function (it) {
      return this$BingTranslationProvider.parseQuickTranslation_0(it);
    };
  }
  function BingTranslationProvider$translate$lambda$lambda$lambda$lambda(this$BingTranslationProvider) {
    return function (it) {
      return this$BingTranslationProvider.parseDetailTranslation_0(it);
    };
  }
  function BingTranslationProvider$translate$lambda$lambda$lambda$lambda_0(closure$query, closure$token, this$BingTranslationProvider, closure$quickTranslation, closure$resolve) {
    return function (details) {
      var t = new BingTranslation(bingLangCode(getFrom(closure$query)), bingLangCode(getTo(closure$query)), getText(closure$query), this$BingTranslationProvider.voiceUrl_0(closure$token, getText(closure$query), bingLangCode(getFrom(closure$query))), closure$quickTranslation, this$BingTranslationProvider.voiceUrl_0(closure$token, closure$quickTranslation, bingLangCode(getTo(closure$query))), details);
      closure$resolve(this$BingTranslationProvider.renderer_0.render_lyhhi4$(t));
      return Unit;
    };
  }
  function BingTranslationProvider$translate$lambda$lambda$lambda$lambda_1(closure$resolve, this$BingTranslationProvider, closure$query) {
    return function (it) {
      closure$resolve(renderFailure(this$BingTranslationProvider.id(), sourceUrl(closure$query), closure$query, it));
      return Unit;
    };
  }
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
  function BingTranslationProvider$translate$lambda$lambda$lambda_0(closure$query, this$BingTranslationProvider, closure$token, closure$resolve) {
    return function (quickTranslation) {
      return (new Promise_init(map$lambda(this$BingTranslationProvider.getDetailTranslation_0(closure$query)(closure$token), BingTranslationProvider$translate$lambda$lambda$lambda$lambda(this$BingTranslationProvider)))).then(BingTranslationProvider$translate$lambda$lambda$lambda$lambda_0(closure$query, closure$token, this$BingTranslationProvider, quickTranslation, closure$resolve)).catch(BingTranslationProvider$translate$lambda$lambda$lambda$lambda_1(closure$resolve, this$BingTranslationProvider, closure$query));
    };
  }
  function BingTranslationProvider$translate$lambda$lambda$lambda_1(closure$resolve, this$BingTranslationProvider, closure$query) {
    return function (it) {
      closure$resolve(renderFailure(this$BingTranslationProvider.id(), sourceUrl(closure$query), closure$query, it));
      return Unit;
    };
  }
  function BingTranslationProvider$translate$lambda$lambda(closure$query, this$BingTranslationProvider, closure$resolve) {
    return function (token) {
      return (new Promise_init(map$lambda(this$BingTranslationProvider.getQuickTranslation_0(closure$query)(token), BingTranslationProvider$translate$lambda$lambda$lambda(this$BingTranslationProvider)))).then(BingTranslationProvider$translate$lambda$lambda$lambda_0(closure$query, this$BingTranslationProvider, token, closure$resolve)).catch(BingTranslationProvider$translate$lambda$lambda$lambda_1(closure$resolve, this$BingTranslationProvider, closure$query));
    };
  }
  function BingTranslationProvider$translate$lambda$lambda_0(closure$resolve, this$BingTranslationProvider, closure$query) {
    return function (it) {
      closure$resolve(renderFailure(this$BingTranslationProvider.id(), sourceUrl(closure$query), closure$query, it));
      return Unit;
    };
  }
  function BingTranslationProvider$translate$lambda(this$BingTranslationProvider, closure$query) {
    return function (resolve, f) {
      newTokenPromise(this$BingTranslationProvider.httpClient_0).then(BingTranslationProvider$translate$lambda$lambda(closure$query, this$BingTranslationProvider, resolve)).catch(BingTranslationProvider$translate$lambda$lambda_0(resolve, this$BingTranslationProvider, closure$query));
      return Unit;
    };
  }
  BingTranslationProvider.prototype.translate = function (query) {
    return new Promise(BingTranslationProvider$translate$lambda(this, query));
  };
  BingTranslationProvider.prototype.voiceUrl_0 = function (token, text, lang) {
    return 'https://www.bing.com/tspeak?&format=audio%2Fmp3&language=' + bingLangCode(lang) + '&IG=' + token + '&IID=translator.5038.1&options=female&text=' + encodeURIComponent(text);
  };
  function BingTranslationProvider$getQuickTranslation$lambda(this$BingTranslationProvider, closure$query) {
    return function (ig) {
      return this$BingTranslationProvider.httpClient_0.post_bokjk9$('https://www.bing.com/ttranslate?&category=&IG=' + ig + '&IID=translator.5038.1', mapOf(to('Content-Type', 'application/x-www-form-urlencoded')), this$BingTranslationProvider.buildFormData_0(getFrom(closure$query), getTo(closure$query), getText(closure$query)));
    };
  }
  BingTranslationProvider.prototype.getQuickTranslation_0 = function (query) {
    return BingTranslationProvider$getQuickTranslation$lambda(this, query);
  };
  function BingTranslationProvider$getDetailTranslation$lambda(this$BingTranslationProvider, closure$query) {
    return function (ig) {
      return this$BingTranslationProvider.httpClient_0.post_bokjk9$('https://www.bing.com/ttranslationlookup?&IG=' + ig + '&IID=translator.5038.1', mapOf(to('Content-Type', 'application/x-www-form-urlencoded')), this$BingTranslationProvider.buildFormData_0(getFrom(closure$query), getTo(closure$query), getText(closure$query)));
    };
  }
  BingTranslationProvider.prototype.getDetailTranslation_0 = function (query) {
    return BingTranslationProvider$getDetailTranslation$lambda(this, query);
  };
  BingTranslationProvider.prototype.parseQuickTranslation_0 = function (result) {
    return toString(JSON.parse(result)['translationResponse']);
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  BingTranslationProvider.prototype.parseDetailTranslation_0 = function (result) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isArray(tmp$ = JSON.parse(result)['translations']) ? tmp$ : null;
    if (tmp$_0 == null) {
      return emptyList();
    }
    var translations = tmp$_0;
    var destination = LinkedHashMap_init();
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== translations.length; ++tmp$_1) {
      var element = translations[tmp$_1];
      var key = element['posTag'];
      var tmp$_0_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element);
    }
    var $receiver = destination.entries;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      var tmp$_3 = destination_0.add_11rb$;
      var tmp$_4;
      var poc = typeof (tmp$_4 = item.key) === 'string' ? tmp$_4 : throwCCE();
      var $receiver_0 = item.value;
      var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_5;
      tmp$_5 = $receiver_0.iterator();
      while (tmp$_5.hasNext()) {
        var item_0 = tmp$_5.next();
        var tmp$_6 = destination_1.add_11rb$;
        var tmp$_7, tmp$_8, tmp$_9, tmp$_10;
        var meaning = typeof (tmp$_7 = item_0['normalizedTarget']) === 'string' ? tmp$_7 : throwCCE();
        var tmp$_11;
        if ((tmp$_8 = item_0['backTranslations']) != null) {
          var tmp$_12;
          tmp$_11 = Kotlin.isArray(tmp$_12 = tmp$_8) ? tmp$_12 : null;
        }
         else
          tmp$_11 = null;
        var tmp$_13;
        if ((tmp$_9 = tmp$_11) != null) {
          var destination_2 = ArrayList_init(tmp$_9.length);
          var tmp$_14;
          for (tmp$_14 = 0; tmp$_14 !== tmp$_9.length; ++tmp$_14) {
            var item_1 = tmp$_9[tmp$_14];
            var tmp$_15;
            destination_2.add_11rb$(typeof (tmp$_15 = item_1['normalizedText']) === 'string' ? tmp$_15 : throwCCE());
          }
          tmp$_13 = destination_2;
        }
         else
          tmp$_13 = null;
        var examples = (tmp$_10 = tmp$_13) != null ? tmp$_10 : emptyList();
        tmp$_6.call(destination_1, new Meaning(meaning, examples));
      }
      var meanings = destination_1;
      tmp$_3.call(destination_0, new Detail(poc, meanings));
    }
    return destination_0;
  };
  BingTranslationProvider.prototype.buildFormData_0 = function (from, to, query) {
    return 'from=' + bingLangCode(from) + '&to=' + bingLangCode(to) + '&text=' + encodeURIComponent(query);
  };
  BingTranslationProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BingTranslationProvider',
    interfaces: [TranslationProvider]
  };
  var langCodeMap;
  function bingLangCode(langCode) {
    var tmp$, tmp$_0;
    return (tmp$_0 = typeof (tmp$ = langCodeMap[langCode]) === 'string' ? tmp$ : null) != null ? tmp$_0 : langCode;
  }
  function sourceUrl(q) {
    return BASE_URL + '/#' + bingLangCode(getFrom(q)) + '/' + bingLangCode(getTo(q)) + '/' + getText(q);
  }
  function BingTranslationRenderer() {
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('[' + closure$t.from + ']');
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda_0(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$t.query);
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      $receiver.src = closure$t.queryVoice;
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda_1(closure$t) {
    return function ($receiver) {
      audio($receiver, void 0, BingTranslationRenderer$render$lambda$lambda$lambda$lambda(closure$t));
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda(closure$t) {
    return function ($receiver) {
      em($receiver, 'translation-lang', BingTranslationRenderer$render$lambda$lambda$lambda(closure$t));
      strong($receiver, void 0, BingTranslationRenderer$render$lambda$lambda$lambda_0(closure$t));
      $receiver.unaryPlus_pdl1vz$(' ');
      span($receiver, 'translation-voice', BingTranslationRenderer$render$lambda$lambda$lambda_1(closure$t));
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda_0(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('[' + closure$t.to + ']');
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      $receiver.src = closure$t.translationVoice;
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda_1(closure$t) {
    return function ($receiver) {
      audio($receiver, void 0, BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda(closure$t));
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda_2($receiver) {
    set_role($receiver, 'button');
    var $receiver_0 = $receiver.attributes;
    var key = 'data-toggle';
    var value = 'collapse';
    $receiver_0.put_xwzc9p$(key, value);
    $receiver.unaryPlus_pdl1vz$('\uD83D\uDCDA');
    return Unit;
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$detail.poc);
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail) {
    return function ($receiver) {
      i($receiver, 'translation-poc', BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail));
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$meaning) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$meaning.meaning + ': ');
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$meaning) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(joinToString(closure$meaning.examples, ', '));
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$meaning) {
    return function ($receiver) {
      span($receiver, 'translation-primary', BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$meaning));
      span($receiver, 'translation-secondary', BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$meaning));
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$detail) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$detail.meanings.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        li($receiver, 'list-group-item small', BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail) {
    return function ($receiver) {
      div_0($receiver, void 0, BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail));
      ul($receiver, 'list-group', BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$detail));
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda$lambda_3(closure$detailId, closure$t) {
    return function ($receiver) {
      set_id($receiver, closure$detailId);
      var tmp$;
      tmp$ = closure$t.details.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        div_0($receiver, void 0, BingTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda$lambda_2(closure$t) {
    return function ($receiver) {
      em($receiver, 'translation-lang', BingTranslationRenderer$render$lambda$lambda$lambda$lambda_0(closure$t));
      $receiver.unaryPlus_pdl1vz$(closure$t.translation);
      $receiver.unaryPlus_pdl1vz$(' ');
      span($receiver, 'translation-voice', BingTranslationRenderer$render$lambda$lambda$lambda$lambda_1(closure$t));
      if (!closure$t.details.isEmpty()) {
        var detailId = 'googleTranslationDetail' + Random.Default.nextInt();
        a($receiver, '#' + detailId, void 0, 'btn btn-light btn-sm mb-2', BingTranslationRenderer$render$lambda$lambda$lambda$lambda_2);
        div_0($receiver, 'collapse', BingTranslationRenderer$render$lambda$lambda$lambda$lambda_3(detailId, closure$t));
      }
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda$lambda_0(closure$t) {
    return function ($receiver) {
      li($receiver, 'list-group-item', BingTranslationRenderer$render$lambda$lambda$lambda_2(closure$t));
      return Unit;
    };
  }
  function BingTranslationRenderer$render$lambda(closure$t) {
    return function ($receiver) {
      div_0($receiver, 'alert alert-info', BingTranslationRenderer$render$lambda$lambda(closure$t));
      ul($receiver, 'list-group', BingTranslationRenderer$render$lambda$lambda_0(closure$t));
      return Unit;
    };
  }
  BingTranslationRenderer.prototype.render_lyhhi4$ = function (t) {
    var stringBuilder = StringBuilder_init();
    var container = appendHTML(stringBuilder);
    div(container, 't-result', BingTranslationRenderer$render$lambda(t));
    renderSource(container, this.sourceUrl_0(t), builtinSourceIcon(ID));
    return stringBuilder.toString();
  };
  BingTranslationRenderer.prototype.sourceUrl_0 = function (t) {
    return BASE_URL + '/?from=' + t.from + '&to=' + t.to + '&text=' + t.query;
  };
  BingTranslationRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BingTranslationRenderer',
    interfaces: []
  };
  var iggRegex;
  function newTokenPromise$lambda$lambda(closure$resolve, closure$reject) {
    return function (htmlContent) {
      var tmp$, tmp$_0, tmp$_1;
      if (((tmp$_1 = (tmp$_0 = (tmp$ = iggRegex.find_905azu$(htmlContent)) != null ? tmp$.groupValues : null) != null ? tmp$_0.get_za3lpa$(1) : null) != null ? closure$resolve(tmp$_1) : null) == null) {
        closure$reject(IllegalStateException_init('No IG found in html content'));
      }
      return Unit;
    };
  }
  function newTokenPromise$lambda(closure$httpAsyncClient) {
    return function (resolve, reject) {
      closure$httpAsyncClient.get_61zpoe$('https://www.bing.com/translator').then(newTokenPromise$lambda$lambda(resolve, reject)).catch(reject);
      return Unit;
    };
  }
  function newTokenPromise(httpAsyncClient) {
    return new Promise(newTokenPromise$lambda(httpAsyncClient));
  }
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
  _.create_plugin_com_bing_translator = create_plugin_com_bing_translator;
  var package$com_bing_translator = package$plugin.com_bing_translator || (package$plugin.com_bing_translator = {});
  package$com_bing_translator.BingTranslation = BingTranslation;
  package$com_bing_translator.Detail = Detail;
  package$com_bing_translator.Meaning = Meaning;
  Object.defineProperty(package$com_bing_translator, 'ID', {
    get: function () {
      return ID;
    }
  });
  Object.defineProperty(package$com_bing_translator, 'BASE_URL', {
    get: function () {
      return BASE_URL;
    }
  });
  $$importsForInline$$['plugin-com-bing-translator'] = _;
  package$com_bing_translator.BingTranslationProvider = BingTranslationProvider;
  package$com_bing_translator.BingTranslationRenderer = BingTranslationRenderer;
  Object.defineProperty(package$com_bing_translator, 'iggRegex', {
    get: function () {
      return iggRegex;
    }
  });
  package$com_bing_translator.newTokenPromise_76ir9i$ = newTokenPromise;
  BingTranslationProvider.prototype.updateOptions = TranslationProvider.prototype.updateOptions;
  ID = 'plugin-com-bing-translator';
  BASE_URL = 'https://www.bing.com/translator';
  langCodeMap = json([to('af', 'af'), to('ar', 'ar'), to('bg', 'bg'), to('bn', 'bn-BD'), to('bs', 'bs-Latn'), to('ca', 'ca'), to('cs', 'cs'), to('cy', 'cy'), to('da', 'da'), to('de', 'de'), to('el', 'el'), to('en', 'en'), to('es', 'es'), to('et', 'et'), to('fa', 'fa'), to('fi', 'fi'), to('fj', 'fj'), to('fr', 'fr'), to('he', 'he'), to('hi', 'hi'), to('hr', 'hr'), to('ht', 'ht'), to('hu', 'hu'), to('id', 'id'), to('is', 'is'), to('it', 'it'), to('ja', 'ja'), to('ko', 'ko'), to('lt', 'lt'), to('lv', 'lv'), to('mg', 'mg'), to('ms', 'ms'), to('mt', 'mt'), to('nl', 'nl'), to('no', 'no'), to('pl', 'pl'), to('pt', 'pt'), to('ro', 'ro'), to('ru', 'ru'), to('sk', 'sk'), to('sl', 'sl'), to('sm', 'sm'), to('sr', 'sr-Latn'), to('sv', 'sv'), to('sw', 'sw'), to('ta', 'ta'), to('te', 'te'), to('th', 'th'), to('tl', 'fil'), to('to', 'to'), to('tr', 'tr'), to('ty', 'ty'), to('uk', 'uk'), to('ur', 'ur'), to('vi', 'vi'), to('zh-CN', 'zh-CHS'), to('zh-TW', 'zh-CHT')]);
  iggRegex = Regex_init('IG:"([\\w\\d]+)"');
  Kotlin.defineModule('plugin-com-bing-translator', _);
  return _;
}(typeof this['plugin-com-bing-translator'] === 'undefined' ? {} : this['plugin-com-bing-translator'], kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=plugin-com-bing-translator.js.map
