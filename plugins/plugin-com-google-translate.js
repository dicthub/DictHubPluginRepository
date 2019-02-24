if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'plugin-com-google-translate'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'plugin-com-google-translate'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'plugin-com-google-translate'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'plugin-com-google-translate'.");
}
this['plugin-com-google-translate'] = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
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
  var getOrNull = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var equals = Kotlin.equals;
  var em = $module$kotlinx_html_js.kotlinx.html.em_2lgk3j$;
  var strong = $module$kotlinx_html_js.kotlinx.html.strong_okpg28$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var audio = $module$kotlinx_html_js.kotlinx.html.audio_hb8i2y$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var Random = Kotlin.kotlin.random.Random;
  var set_role = $module$kotlinx_html_js.kotlinx.html.set_role_ueiko3$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var i = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_7wnvza$;
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
  var next = defineInlineFunction('plugin-com-google-translate.org.dicthub.plugin.shared.util.next_g414bn$', wrapFunction(function () {
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
  var map = defineInlineFunction('plugin-com-google-translate.org.dicthub.plugin.shared.util.map_wus875$', wrapFunction(function () {
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
  function create_plugin_com_google_translate() {
    return new GoogleTranslationProvider(AjaxHttpClient_getInstance(), new GoogleTranslationParser(), new GoogleTranslationRenderer());
  }
  function GoogleTranslation(sourceUrl, query, from, to, pron, translation, details) {
    this.sourceUrl = sourceUrl;
    this.query = query;
    this.from = from;
    this.to = to;
    this.pron = pron;
    this.translation = translation;
    this.details = details;
  }
  GoogleTranslation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoogleTranslation',
    interfaces: []
  };
  GoogleTranslation.prototype.component1 = function () {
    return this.sourceUrl;
  };
  GoogleTranslation.prototype.component2 = function () {
    return this.query;
  };
  GoogleTranslation.prototype.component3 = function () {
    return this.from;
  };
  GoogleTranslation.prototype.component4 = function () {
    return this.to;
  };
  GoogleTranslation.prototype.component5 = function () {
    return this.pron;
  };
  GoogleTranslation.prototype.component6 = function () {
    return this.translation;
  };
  GoogleTranslation.prototype.component7 = function () {
    return this.details;
  };
  GoogleTranslation.prototype.copy_j0y0ff$ = function (sourceUrl, query, from, to, pron, translation, details) {
    return new GoogleTranslation(sourceUrl === void 0 ? this.sourceUrl : sourceUrl, query === void 0 ? this.query : query, from === void 0 ? this.from : from, to === void 0 ? this.to : to, pron === void 0 ? this.pron : pron, translation === void 0 ? this.translation : translation, details === void 0 ? this.details : details);
  };
  GoogleTranslation.prototype.toString = function () {
    return 'GoogleTranslation(sourceUrl=' + Kotlin.toString(this.sourceUrl) + (', query=' + Kotlin.toString(this.query)) + (', from=' + Kotlin.toString(this.from)) + (', to=' + Kotlin.toString(this.to)) + (', pron=' + Kotlin.toString(this.pron)) + (', translation=' + Kotlin.toString(this.translation)) + (', details=' + Kotlin.toString(this.details)) + ')';
  };
  GoogleTranslation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sourceUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.query) | 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    result = result * 31 + Kotlin.hashCode(this.pron) | 0;
    result = result * 31 + Kotlin.hashCode(this.translation) | 0;
    result = result * 31 + Kotlin.hashCode(this.details) | 0;
    return result;
  };
  GoogleTranslation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.sourceUrl, other.sourceUrl) && Kotlin.equals(this.query, other.query) && Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to) && Kotlin.equals(this.pron, other.pron) && Kotlin.equals(this.translation, other.translation) && Kotlin.equals(this.details, other.details)))));
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
  Detail.prototype.copy_wvkek4$ = function (poc, meanings) {
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
  function GoogleTranslationParser() {
  }
  GoogleTranslationParser.prototype.parse_w74nik$ = function (sourceUrl, jsonStr, from, to) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var json = JSON.parse(jsonStr);
    tmp$_0 = Kotlin.isArray(tmp$ = getOrNull(json, 0)) ? tmp$ : null;
    if (tmp$_0 == null) {
      return null;
    }
    var firstLine = tmp$_0;
    var tmp$_14;
    if ((tmp$_1 = getOrNull(firstLine, 0)) != null) {
      var tmp$_15;
      tmp$_14 = Kotlin.isArray(tmp$_15 = tmp$_1) ? tmp$_15 : null;
    }
     else
      tmp$_14 = null;
    tmp$_2 = tmp$_14;
    if (tmp$_2 == null) {
      return null;
    }
    var text = tmp$_2;
    var tmp$_16;
    if ((tmp$_3 = getOrNull(firstLine, 1)) != null) {
      var tmp$_17;
      tmp$_16 = Kotlin.isArray(tmp$_17 = tmp$_3) ? tmp$_17 : null;
    }
     else
      tmp$_16 = null;
    tmp$_4 = tmp$_16;
    if (tmp$_4 == null) {
      return null;
    }
    var pron = tmp$_4;
    tmp$_6 = typeof (tmp$_5 = text[1]) === 'string' ? tmp$_5 : throwCCE();
    tmp$_8 = typeof (tmp$_7 = text[0]) === 'string' ? tmp$_7 : throwCCE();
    tmp$_10 = (tmp$_9 = pron[3]) == null || typeof tmp$_9 === 'string' ? tmp$_9 : throwCCE();
    var tmp$_18;
    if ((tmp$_11 = getOrNull(json, 1)) != null) {
      var tmp$_19;
      tmp$_18 = Kotlin.isArray(tmp$_19 = tmp$_11) ? tmp$_19 : null;
    }
     else
      tmp$_18 = null;
    return new GoogleTranslation(sourceUrl, tmp$_6, from, to, tmp$_10, tmp$_8, (tmp$_13 = (tmp$_12 = tmp$_18) != null ? this.parseTranslationDetails_0(tmp$_12) : null) != null ? tmp$_13 : emptyList());
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  GoogleTranslationParser.prototype.parseTranslationDetails_0 = function (secondLine) {
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== secondLine.length; ++tmp$) {
      var element = secondLine[tmp$];
      if (Kotlin.isArray(element))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination_0.add_11rb$;
      var tmp$_2, tmp$_3, tmp$_4, tmp$_5;
      var type = typeof (tmp$_2 = getOrNull(item, 0)) === 'string' ? tmp$_2 : throwCCE();
      var tmp$_6;
      if ((tmp$_3 = getOrNull(item, 2)) != null) {
        var tmp$_7;
        tmp$_6 = Kotlin.isArray(tmp$_7 = tmp$_3) ? tmp$_7 : throwCCE();
      }
       else
        tmp$_6 = null;
      var tmp$_8;
      if ((tmp$_4 = tmp$_6) != null) {
        var destination_1 = ArrayList_init_0(tmp$_4.length);
        var tmp$_9;
        for (tmp$_9 = 0; tmp$_9 !== tmp$_4.length; ++tmp$_9) {
          var item_0 = tmp$_4[tmp$_9];
          var tmp$_10 = destination_1.add_11rb$;
          var tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17;
          var arr = Kotlin.isArray(tmp$_11 = item_0) ? tmp$_11 : throwCCE();
          tmp$_13 = typeof (tmp$_12 = getOrNull(arr, 0)) === 'string' ? tmp$_12 : throwCCE();
          var tmp$_18;
          if ((tmp$_14 = getOrNull(arr, 1)) != null) {
            var tmp$_19;
            tmp$_18 = Kotlin.isArray(tmp$_19 = tmp$_14) ? tmp$_19 : throwCCE();
          }
           else
            tmp$_18 = null;
          var tmp$_20;
          if ((tmp$_15 = tmp$_18) != null) {
            var destination_2 = ArrayList_init();
            var tmp$_21;
            for (tmp$_21 = 0; tmp$_21 !== tmp$_15.length; ++tmp$_21) {
              var element_0 = tmp$_15[tmp$_21];
              if (typeof element_0 === 'string')
                destination_2.add_11rb$(element_0);
            }
            tmp$_20 = destination_2;
          }
           else
            tmp$_20 = null;
          tmp$_10.call(destination_1, new Meaning(tmp$_13, (tmp$_17 = (tmp$_16 = tmp$_20) != null ? toList(tmp$_16) : null) != null ? tmp$_17 : emptyList()));
        }
        tmp$_8 = destination_1;
      }
       else
        tmp$_8 = null;
      var meanings = (tmp$_5 = tmp$_8) != null ? tmp$_5 : emptyList();
      tmp$_1.call(destination_0, new Detail(type, meanings));
    }
    return destination_0;
  };
  GoogleTranslationParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoogleTranslationParser',
    interfaces: []
  };
  var ID;
  var DOMAIN_TRANSLATE_GOOGLE_COM;
  var DOMAIN_TRANSLATE_GOOGLE_CN;
  var OPTION_USE_GOOGLE_CN;
  var useCnDomain;
  function baseUrl() {
    return useCnDomain ? DOMAIN_TRANSLATE_GOOGLE_CN : DOMAIN_TRANSLATE_GOOGLE_COM;
  }
  function GoogleTranslationProvider(httpClient, googleTranslationParser, googleTranslationRenderer) {
    this.httpClient_0 = httpClient;
    this.googleTranslationParser_0 = googleTranslationParser;
    this.googleTranslationRenderer_0 = googleTranslationRenderer;
  }
  GoogleTranslationProvider.prototype.id = function () {
    return ID;
  };
  GoogleTranslationProvider.prototype.meta = function () {
    return createMeta('Google Translation', 'Provides all language translation', 'Google Translate', baseUrl(), 'DictHub', 'https://github.com/willings/DictHub', json([to('useGoogleCn', createMetaOptionConfig('checkbox', 'Use https://translate.google.cn/ to avoid GFW', 'false'))]));
  };
  GoogleTranslationProvider.prototype.canTranslate = function (query) {
    return !equals(getFrom(query), getTo(query));
  };
  function GoogleTranslationProvider$translate$lambda$lambda(this$GoogleTranslationProvider, closure$token) {
    return function (it) {
      return this$GoogleTranslationProvider.googleTranslationRenderer_0.render_900fok$(it, closure$token);
    };
  }
  function GoogleTranslationProvider$translate$lambda$lambda_0(this$GoogleTranslationProvider, closure$query) {
    return function (it) {
      return renderFailure(this$GoogleTranslationProvider.id(), this$GoogleTranslationProvider.sourceUrl_0(closure$query), closure$query, it);
    };
  }
  function GoogleTranslationProvider$translate$lambda(closure$query, this$GoogleTranslationProvider) {
    return function (token) {
      return this$GoogleTranslationProvider.translateWithToken_0(closure$query, token).then(GoogleTranslationProvider$translate$lambda$lambda(this$GoogleTranslationProvider, token)).catch(GoogleTranslationProvider$translate$lambda$lambda_0(this$GoogleTranslationProvider, closure$query));
    };
  }
  function GoogleTranslationProvider$translate$lambda_0(this$GoogleTranslationProvider, closure$query) {
    return function (it) {
      return renderFailure(this$GoogleTranslationProvider.id(), this$GoogleTranslationProvider.sourceUrl_0(closure$query), closure$query, it);
    };
  }
  GoogleTranslationProvider.prototype.translate = function (query) {
    return this.getToken_0().then(GoogleTranslationProvider$translate$lambda(query, this)).catch(GoogleTranslationProvider$translate$lambda_0(this, query));
  };
  GoogleTranslationProvider.prototype.updateOptions = function (options) {
    useCnDomain = equals(options[OPTION_USE_GOOGLE_CN], 'true');
    console.info('useCnDomain', useCnDomain);
  };
  function GoogleTranslationProvider$getToken$lambda$lambda(closure$reject) {
    return function (it) {
      closure$reject(new TranslationException('Failed to get token', it));
      return Unit;
    };
  }
  function GoogleTranslationProvider$getToken$lambda(resolve, reject) {
    getGTranslateToken().then(resolve).catch(GoogleTranslationProvider$getToken$lambda$lambda(reject));
    return Unit;
  }
  GoogleTranslationProvider.prototype.getToken_0 = function () {
    return new Promise(GoogleTranslationProvider$getToken$lambda);
  };
  function GoogleTranslationProvider$translateWithToken$lambda$lambda(this$GoogleTranslationProvider, closure$query, closure$resolve, closure$requestUrl, closure$reject) {
    return function (rawContent) {
      var tmp$;
      if (((tmp$ = this$GoogleTranslationProvider.googleTranslationParser_0.parse_w74nik$(this$GoogleTranslationProvider.sourceUrl_0(closure$query), rawContent, getFrom(closure$query), getTo(closure$query))) != null ? closure$resolve(tmp$) : null) == null) {
        var $receiver = this$GoogleTranslationProvider;
        var closure$query_0 = closure$query;
        var closure$requestUrl_0 = closure$requestUrl;
        var closure$reject_0 = closure$reject;
        var $receiver_0 = new TranslationParsingFailureException();
        $receiver.buildTranslationException_0(closure$query_0)($receiver_0);
        $receiver_0.requestUrl = closure$requestUrl_0;
        $receiver_0.rawContent = rawContent;
        var parsingFailure = $receiver_0;
        closure$reject_0(parsingFailure);
      }
      return Unit;
    };
  }
  function GoogleTranslationProvider$translateWithToken$lambda$lambda_0(closure$query, this$GoogleTranslationProvider, closure$reject) {
    return function (it) {
      var $receiver = new TranslationHttpFailureException();
      this$GoogleTranslationProvider.buildTranslationException_0(closure$query)($receiver);
      var httpException = $receiver;
      closure$reject(httpException);
      return Unit;
    };
  }
  function GoogleTranslationProvider$translateWithToken$lambda(closure$query, closure$token, this$GoogleTranslationProvider) {
    return function (resolve, reject) {
      var tk = hash(getText(closure$query), closure$token);
      var requestUrl = this$GoogleTranslationProvider.queryUrl_0(tk, closure$query);
      this$GoogleTranslationProvider.httpClient_0.get_61zpoe$(requestUrl).then(GoogleTranslationProvider$translateWithToken$lambda$lambda(this$GoogleTranslationProvider, closure$query, resolve, requestUrl, reject)).catch(GoogleTranslationProvider$translateWithToken$lambda$lambda_0(closure$query, this$GoogleTranslationProvider, reject));
      return Unit;
    };
  }
  GoogleTranslationProvider.prototype.translateWithToken_0 = function (query, token) {
    return new Promise(GoogleTranslationProvider$translateWithToken$lambda(query, token, this));
  };
  function GoogleTranslationProvider$buildTranslationException$lambda(this$GoogleTranslationProvider, closure$query) {
    return function (exception) {
      exception.providerId = this$GoogleTranslationProvider.id();
      exception.query = closure$query;
      exception.manualCheckUrl = this$GoogleTranslationProvider.sourceUrl_0(closure$query);
      return Unit;
    };
  }
  GoogleTranslationProvider.prototype.buildTranslationException_0 = function (query) {
    return GoogleTranslationProvider$buildTranslationException$lambda(this, query);
  };
  GoogleTranslationProvider.prototype.sourceUrl_0 = function (query) {
    return baseUrl() + '/#' + (getFrom(query) + '/' + getTo(query) + '/' + encodeURIComponent(getText(query)));
  };
  GoogleTranslationProvider.prototype.queryUrl_0 = function (token, q) {
    return baseUrl() + '/translate_a/single?client=webapp' + '&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&pc=1&otf=1&ssel=0&tsel=0&kc=1' + ('&sl=' + getFrom(q) + '&tl=' + getTo(q) + '&hl=' + getTo(q) + '&tk=' + token + '&q=' + encodeURIComponent(getText(q)));
  };
  GoogleTranslationProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoogleTranslationProvider',
    interfaces: [TranslationProvider]
  };
  function GoogleTranslationRenderer() {
  }
  function GoogleTranslationRenderer$render$lambda(closure$token) {
    return function (lang, text) {
      return baseUrl() + '/translate_tts?ie=UTF-8&client=webapp&tl=' + lang + '&q=' + text + '&tk=' + hash(text, closure$token).toString();
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('[' + closure$t.from + ']');
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda_0(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$t.query);
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda(closure$t) {
    return function ($receiver) {
      var tmp$;
      if ((tmp$ = closure$t.pron) != null) {
        $receiver.unaryPlus_pdl1vz$('[' + tmp$ + ']');
      }
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda_1(closure$t) {
    return function ($receiver) {
      em($receiver, void 0, GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda(closure$t));
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda_0(closure$voiceUrl, closure$t) {
    return function ($receiver) {
      $receiver.src = closure$voiceUrl(closure$t.from, closure$t.query);
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda_2(closure$voiceUrl, closure$t) {
    return function ($receiver) {
      audio($receiver, void 0, GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda_0(closure$voiceUrl, closure$t));
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda(closure$t, closure$voiceUrl) {
    return function ($receiver) {
      em($receiver, 'translation-lang', GoogleTranslationRenderer$render$lambda$lambda$lambda(closure$t));
      strong($receiver, void 0, GoogleTranslationRenderer$render$lambda$lambda$lambda_0(closure$t));
      $receiver.unaryPlus_pdl1vz$(' ');
      span($receiver, 'translation-pronunciation', GoogleTranslationRenderer$render$lambda$lambda$lambda_1(closure$t));
      span($receiver, 'translation-voice', GoogleTranslationRenderer$render$lambda$lambda$lambda_2(closure$voiceUrl, closure$t));
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda_1(closure$t) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('[' + closure$t.to + ']');
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda(closure$voiceUrl, closure$t) {
    return function ($receiver) {
      $receiver.src = closure$voiceUrl(closure$t.to, closure$t.translation);
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda_2(closure$voiceUrl, closure$t) {
    return function ($receiver) {
      audio($receiver, void 0, GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda(closure$voiceUrl, closure$t));
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda_3($receiver) {
    set_role($receiver, 'button');
    var $receiver_0 = $receiver.attributes;
    var key = 'data-toggle';
    var value = 'collapse';
    $receiver_0.put_xwzc9p$(key, value);
    $receiver.unaryPlus_pdl1vz$('\uD83D\uDCDA');
    return Unit;
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$detail.poc);
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail) {
    return function ($receiver) {
      i($receiver, 'translation-poc', GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail));
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$meaning) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$meaning.meaning + ': ');
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$meaning) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(joinToString(closure$meaning.examples, ', '));
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$meaning) {
    return function ($receiver) {
      span($receiver, 'translation-primary', GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$meaning));
      span($receiver, 'translation-secondary', GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$meaning));
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$detail) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$detail.meanings.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        li($receiver, 'list-group-item small', GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail) {
    return function ($receiver) {
      div_0($receiver, void 0, GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$detail));
      ul($receiver, 'list-group', GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$detail));
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda_4(closure$detailId, closure$t) {
    return function ($receiver) {
      set_id($receiver, closure$detailId);
      var tmp$;
      tmp$ = closure$t.details.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        div_0($receiver, void 0, GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda$lambda_3(closure$t, closure$voiceUrl) {
    return function ($receiver) {
      em($receiver, 'translation-lang', GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda_1(closure$t));
      $receiver.unaryPlus_pdl1vz$(closure$t.translation);
      span($receiver, 'translation-voice', GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda_2(closure$voiceUrl, closure$t));
      if (!closure$t.details.isEmpty()) {
        var detailId = 'googleTranslationDetail' + Random.Default.nextInt();
        a_0($receiver, '#' + detailId, void 0, 'btn btn-light btn-sm mb-2', GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda_3);
        div_0($receiver, 'collapse', GoogleTranslationRenderer$render$lambda$lambda$lambda$lambda_4(detailId, closure$t));
      }
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda$lambda_0(closure$t, closure$voiceUrl) {
    return function ($receiver) {
      li($receiver, 'list-group-item', GoogleTranslationRenderer$render$lambda$lambda$lambda_3(closure$t, closure$voiceUrl));
      return Unit;
    };
  }
  function GoogleTranslationRenderer$render$lambda_0(closure$t, closure$voiceUrl) {
    return function ($receiver) {
      div_0($receiver, 'alert alert-info', GoogleTranslationRenderer$render$lambda$lambda(closure$t, closure$voiceUrl));
      ul($receiver, 'list-group', GoogleTranslationRenderer$render$lambda$lambda_0(closure$t, closure$voiceUrl));
      return Unit;
    };
  }
  GoogleTranslationRenderer.prototype.render_900fok$ = function (t, token) {
    var stringBuilder = StringBuilder_init();
    var container = appendHTML(stringBuilder);
    var voiceUrl = GoogleTranslationRenderer$render$lambda(token);
    div(container, 't-result', GoogleTranslationRenderer$render$lambda_0(t, voiceUrl));
    renderSource(container, t.sourceUrl, builtinSourceIcon(ID));
    return stringBuilder.toString();
  };
  GoogleTranslationRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoogleTranslationRenderer',
    interfaces: []
  };
  var hash;
  function getGTranslateToken$lambda$lambda(closure$resolve, closure$reject) {
    return function (html) {
      var tmp$, tmp$_0, tmp$_1;
      var regex = Regex_init("TKK='(\\d+\\.\\d+)'|tkk:'(\\d+\\.\\d+)'");
      var match = regex.find_905azu$(html);
      var tmp$_2;
      if ((tmp$_1 = (tmp$_0 = (tmp$ = match != null ? match.groups : null) != null ? lastOrNull(tmp$) : null) != null ? tmp$_0.value : null) != null) {
        closure$resolve(tmp$_1);
        tmp$_2 = Unit;
      }
       else
        tmp$_2 = null;
      if (tmp$_2 == null) {
        closure$reject(IllegalStateException_init('Failed when getting google token'));
      }
      return Unit;
    };
  }
  function getGTranslateToken$lambda$lambda_0(closure$reject) {
    return function (it) {
      closure$reject(it);
      return Unit;
    };
  }
  function getGTranslateToken$lambda(resolve, reject) {
    AjaxHttpClient_getInstance().get_61zpoe$(baseUrl()).then(getGTranslateToken$lambda$lambda(resolve, reject)).catch(getGTranslateToken$lambda$lambda_0(reject));
    return Unit;
  }
  function getGTranslateToken() {
    return new Promise(getGTranslateToken$lambda);
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
  _.create_plugin_com_google_translate = create_plugin_com_google_translate;
  var package$com_google_translate = package$plugin.com_google_translate || (package$plugin.com_google_translate = {});
  package$com_google_translate.GoogleTranslation = GoogleTranslation;
  package$com_google_translate.Detail = Detail;
  package$com_google_translate.Meaning = Meaning;
  package$com_google_translate.GoogleTranslationParser = GoogleTranslationParser;
  Object.defineProperty(package$com_google_translate, 'ID', {
    get: function () {
      return ID;
    }
  });
  Object.defineProperty(package$com_google_translate, 'DOMAIN_TRANSLATE_GOOGLE_COM', {
    get: function () {
      return DOMAIN_TRANSLATE_GOOGLE_COM;
    }
  });
  Object.defineProperty(package$com_google_translate, 'DOMAIN_TRANSLATE_GOOGLE_CN', {
    get: function () {
      return DOMAIN_TRANSLATE_GOOGLE_CN;
    }
  });
  package$com_google_translate.baseUrl = baseUrl;
  package$com_google_translate.GoogleTranslationProvider = GoogleTranslationProvider;
  package$com_google_translate.GoogleTranslationRenderer = GoogleTranslationRenderer;
  Object.defineProperty(package$com_google_translate, 'hash', {
    get: function () {
      return hash;
    }
  });
  package$com_google_translate.getGTranslateToken = getGTranslateToken;
  ID = 'plugin-com-google-translate';
  DOMAIN_TRANSLATE_GOOGLE_COM = 'https://translate.google.com';
  DOMAIN_TRANSLATE_GOOGLE_CN = 'https://translate.google.cn';
  OPTION_USE_GOOGLE_CN = 'useGoogleCn';
  useCnDomain = false;
  function sM(r, t) {
    var n;
    if (null !== yr)
      n = yr;
    else {
      n = wr(String.fromCharCode(84));
      var e = wr(String.fromCharCode(75));
      (n = [n(), n()])[1] = e(), n = (yr = t || '') || '';
    }
    var a = wr(String.fromCharCode(116));
    e = wr(String.fromCharCode(107));
    (a = [a(), a()])[1] = e(), e = '&' + a.join('') + '=', a = n.split('.'), n = Number(a[0]) || 0;
    for (var o = [], h = 0, f = 0; f < r.length; f++) {
      var u = r.charCodeAt(f);
      128 > u ? (o[h++] = u) : (2048 > u ? (o[h++] = u >> 6 | 192) : (55296 == (64512 & u) && f + 1 < r.length && 56320 == (64512 & r.charCodeAt(f + 1)) ? (u = 65536 + ((1023 & u) << 10) + (1023 & r.charCodeAt(++f)), o[h++] = u >> 18 | 240, o[h++] = u >> 12 & 63 | 128) : (o[h++] = u >> 12 | 224), o[h++] = u >> 6 & 63 | 128), o[h++] = 63 & u | 128);
    }
    for (r = n, h = 0; h < o.length; h++)
      r += o[h], r = xr(r, '+-a^+6');
    return r = xr(r, '+-3^+b+-f'), 0 > (r ^= Number(a[1]) || 0) && (r = 2.147483648E9 + (2147483647 & r)), e + ((r %= 1000000.0).toString() + '.') + (r ^ n);
  }
  var yr = null, wr = function (r) {
    return function () {
      return r;
    };
  }, xr = function (r, t) {
    for (var n = 0; n < t.length - 2; n += 3) {
      var e = 'a' <= (e = t.charAt(n + 2)) ? e.charCodeAt(0) - 87 : Number(e);
      e = '+' == t.charAt(n + 1) ? r >>> e : r << e;
      r = '+' == t.charAt(n) ? r + e & 4.294967295E9 : r ^ e;
    }
    return r;
  };
  hash = sM;
  Kotlin.defineModule('plugin-com-google-translate', _);
  return _;
}(typeof this['plugin-com-google-translate'] === 'undefined' ? {} : this['plugin-com-google-translate'], kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=plugin-com-google-translate.js.map
