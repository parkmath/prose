module.exports = {"app":"<% if (locale.current() === 'he-IL') { %>\n  <link rel='stylesheet' href='./style-rtl.css'>\n<% } %>\n\n<div id='loader' class='loader'></div>\n<div id='drawer' class='sidebar' <% if (locale.current() === 'he-IL') { %>dir='rtl'<% } %>></div>\n<nav id='navigation'></nav>\n<div id='main' <% if (locale.current() === 'he-IL') { %>dir='rtl'<% } %>></div>\n\n<div class='prose-menu dropdown-menu' <% if (locale.current() === 'he-IL') { %>dir='rtl'<% } %>>\n  <div class='inner clearfix'>\n    <a href='#' class='icon branding dropdown-hover' data-link=true>Prose</a>\n    <ul class='dropdown clearfix'>\n      <li><a href='#'>Prose</a></li>\n      <li><a class='about' href='#about'><%= t('navigation.about') %></a></li>\n      <li><a class='help' href='https://github.com/prose/prose'><%= t('navigation.develop') %></a></li>\n      <li><a href='#chooselanguage'><%= t('navigation.language') %></a></li>\n      <li class='divider authenticated'></li>\n      <li class='authenticated'>\n        <a href='#' class='logout'><%= t('navigation.logout') %></a>\n      </li>\n    </ul>\n  </div>\n</div>\n","breadcrumb":"<span class='slash'>/</span>\n<a class='path' href='#<%= trail %>/<%= url %>'><%= name %></a>\n","chooselanguage":"<h1><%= t('chooselanguage.title') %></h1>\n<ul class='fat-list round'>\n  <% _(chooseLanguage.languages).each(function(l) { %>\n    <li>\n    <a href='#' data-code='<%= l.code %>' class='language<% if (l.code === chooseLanguage.active) { %> active<% } %>'>\n        <% if (l.code === chooseLanguage.active) { %><span class='ico checkmark fr'></span><% } %>\n        <%= l.name %>\n        <small>(<%= l.code %>)</small>\n      </a>\n    </li>\n  <% }); %>\n</ul>\n<p><%= t('chooselanguage.description') %></p>\n","dialogs":{"help":"<%\n  function formattedClass(str) {\n    return str.toLowerCase().replace(/\\s/g, '-').replace('&amp;', '');\n  };\n%>\n\n<div class='col col25'>\n  <ul class='main-menu'>\n    <% _(help).each(function(mainMenu, i) { %>\n      <li><a href='#' class='<% if (i === 0) { %>active <% } %>' data-id='<%= formattedClass(mainMenu.menuName) %>'><%= mainMenu.menuName %></a></li>\n    <% }); %>\n  </ul>\n</div>\n\n<div class='col col25'>\n  <% _(help).each(function(mainMenu, index) { %>\n  <ul class='sub-menu <%= formattedClass(mainMenu.menuName) %> <% if (index === 0) { %>active<% } %>' data-id='<%= formattedClass(mainMenu.menuName) %>'>\n      <% _(mainMenu.content).each(function(subMenu, i) { %>\n        <li><a href='#' data-id='<%= formattedClass(subMenu.menuName) %>' class='<% if (index === 0 && i === 0) { %> active<% } %>'><%= subMenu.menuName %></a></li>\n      <% }); %>\n    </ul>\n  <% }); %>\n</div>\n\n<div class='col col-last prose small'>\n  <% _(help).each(function(mainMenu, index) { %>\n    <% _(mainMenu.content).each(function(d, i) { %>\n    <div class='help-content inner help-<%= formattedClass(d.menuName) %><% if (index === 0 && i === 0) { %> active<% } %>'>\n      <%= d.data %>\n    </div>\n    <% }); %>\n  <% }); %>\n</div>\n","link":"<div class='inner'>\n  <label><%= t('dialogs.link.title') %></label>\n  <input type='text' name='href' placeholder=\"<%= t('dialogs.link.hrefPlaceholder') %>\" />\n  <input type='text' name='text' placeholder=\"<%= t('dialogs.link.textPlaceholder') %>\" />\n  <input type='text' name='title' placeholder=\"<%= t('dialogs.link.titlePlaceholder') %>\" />\n\n  <% if (relativeLinks) { %>\n    <div class='collapsible'>\n      <select data-placeholder=\"<%= t('dialogs.link.insertPlaceholder') %>\" class='chzn-select'>\n        <option value></option>\n        <% _(relativeLinks).each(function(link) { %>\n        <option value='<%= link.href %>,<%= link.text %>'><%= link.text %></option>\n        <% }); %>\n      </select>\n    </div>\n  <% } %>\n\n  <a href='#' class='button round insert' data-type='link'><%= t('dialogs.link.insert') %></a>\n</div>\n","media":"<div class='inner clearfix'>\n\n  <div <% if (assetsDirectory) { %>class='col fl'<% } %>>\n    <label><%= t('dialogs.media.title') %></label>\n\n    <% if (writable) { %>\n      <div class='contain clearfix'>\n        <span class='ico picture-add fl'></span>\n        <%= description %>\n      </div>\n    <% } %>\n\n    <input type='text' name='url' placeholder=\"<%= t('dialogs.media.hrefPlaceholder')%>\" />\n    <input type='text' name='alt' placeholder=\"<%= t('dialogs.media.altPlaceholder')%>\" />\n    <a href='#' class='button round insert' data-type='media'><%= t('dialogs.link.insert') %></a>\n      <% if (!assetsDirectory) { %>\n        <small class='caption deemphasize'><%= t('dialogs.media.help') %></small>\n      <% } %>\n  </div>\n\n  <% if (assetsDirectory) { %>\n    <div class='col col-last fl media-listing'>\n      <label><%= t('dialogs.media.choose') %></label>\n      <ul id='media'></ul>\n      <small class='caption deemphasize'><%= t('dialogs.media.helpMedia') %></small>\n    </div>\n  <% } %>\n</div>\n","mediadirectory":"<% if (type === 'tree') { %>\n  <li class='directory'>\n    <span class='mask'></span>\n    <a class='clearfix item' href='<%= path %>'>\n      <span class='ico fl small inline folder'></span>\n      <%= name %>\n    </a>\n  </li>\n<% } else { %>\n  <li class='asset'>\n    <span class='mask'></span>\n    <a class='clearfix item' href='<%= path %>' title='<%= path %>'>\n      <% if (isMedia) { %>\n        <span class='ico fl small inline media'></span>\n      <% } else { %>\n        <span class='ico fl small inline document'></span>\n      <% } %>\n      <%= name %>\n    </a>\n  </li>\n<% } %>\n"},"drawer":"<div id='orgs'></div>\n<div id='branches'></div>\n<div id='history'></div>\n<div id='drafts'></div>\n<div id='save'></div>\n<div id='settings'></div>\n","file":"<header id='heading' class='heading limiter clearfix'></header>\n<div id='modal'></div>\n\n<div id='post' class='post limiter'>\n\n  <!-- parkmath-specific! -->\n  <div id='live-preview' class='lesson live-preview'></div> \n\n  <div class='editor views<% if (file.markdown) { %> markdown<% } %>'>\n    <div id='diff' class='view prose diff'>\n      <h2><%= t('main.file.metaTitle') %><br />\n        <span class='deemphasize small'><%= t('main.file.metaDescription') %></span>\n      </h2>\n      <div class='diff-content inner'></div>\n    </div>\n    <div id='meta' class='view round meta'></div>\n    <div id='edit' class='view active edit'>\n      <div class='topbar-wrapper'>\n        <div class='topbar'>\n          <div id='toolbar' class='containment toolbar round'></div>\n        </div>\n      </div>\n      <div id='drop' class='drop-mask'></div>\n      <textarea id='code' class='code round inner'></textarea>\n    </div>\n    <div id='preview' class='view preview prose'></div>\n  </div>\n</div>\n","files":"<% if (data.path && data.path !== data.rooturl) { %>\n  <div class='breadcrumb'>\n    <a class='branch' href='#<%= data.url %>'>..</a>\n    <% _.each(data.parts, function(part) { %>\n      <% if (part.name !== data.rooturl) { %>\n        <span class='slash'>/</span>\n        <a class='path' href='#<%= [data.url, part.url].join(\"/\") %>'><%= part.name %></a>\n      <% } %>\n    <% }); %>\n  </div>\n<% } %>\n\n<ul class='listing'></ul>\n","header":"<% if (data.alterable) { %>\n  <div class='round avatar'>\n    <%= data.avatar %>\n  </div>\n  <div class='fl details'>\n    <h4 class='parent-trail'><a href='#<%= data.user %>'><%= data.user %></a> / <a href='#<%= data.user %>/<%= data.repo.name %>'><%= data.repo.name %></a><% if (data.isPrivate) { %><span class='ico small inline private' title='Private Project'></span><% } %></h4>\n    <!-- if (isNew() && !translate) placeholder, not value -->\n    <input type='text' class='headerinput' data-mode='<%= data.mode %>' <% print((data.placeholder ? 'placeholder=' : 'value=') + '\"' + data.input + '\"') %>>\n    <div class='mask'></div>\n  </div>\n<% } else { %>\n  <div class='avatar round'><%= data.avatar %></div>\n  <div class='fl details'>\n    <h4><a class='user' href='#<%= data.user %>'><%= data.user %></a></h4>\n    <h2><a class='repo' href='#<%= data.path %>'><%= data.title %></a></h2>\n  </div>\n<% } %>\n","li":{"file":"<% if (file.binary) { %>\n  <div class='listing-icon icon round <%= file.extension %> <% if (file.media) { %>media<% } %>'></div>\n<% } else { %>\n  <a href='#<%= file.repo.owner.login %>/<%= file.repo.name %>/edit/<%= file.branch %>/<%= file.path %>' class='listing-icon'>\n    <span class='icon round <%= file.extension %> <% if (file.markdown) { %> md<% } %> <% if (file.media) { %> media<% } %>'></span>\n  </a>\n<% } %>\n\n<div class='details'>\n  <div class='actions fr clearfix'>\n    <% if (!file.binary) { %>\n      <a class='clearfix'\n        title=\"<%= t('main.repo.edit') %>\"\n        href='#<%= file.repo.owner.login %>/<%= file.repo.name %>/edit/<%= file.branch %>/<%= file.path %>'>\n        <%= t('main.repo.edit') %>\n      </a>\n    <% } %>\n    <% if (file.writable) { %>\n      <a\n        class='delete'\n        title=\"<%= t('main.repo.delete') %>\"\n        href='#'>\n        <span class='ico rubbish small'></span>\n      </a>\n    <% } %>\n  </div>\n  <% if (file.binary) { %>\n    <h3 class='title' title='<%= file.name %>'><%= file.name %></h3>\n  <% } else { %>\n    <h3 class='title' title='<%= file.name %>'><a class='clearfix'href='#<%= file.repo.owner.login %>/<%= file.repo.name %>/edit/<%= file.branch %>/<%= file.path %>'><%= file.name %></a></h3>\n  <% } %>\n  <span class='deemphasize'><%= file.jailpath %></span>\n</div>\n","folder":"<a href='#<%= folder.repo.owner.login %>/<%= folder.repo.name %>/tree/<%= folder.branch %>/<%= folder.path %>' class='listing-icon'>\n  <span class='icon round folder'></span>\n</a>\n\n<span class='details'>\n  <h3 class='title' title='<%= folder.name %>'>\n    <a href='#<%= folder.repo.owner.login %>/<%= folder.repo.name %>/tree/<%= folder.branch %>/<%= folder.path %>'>\n      <%= folder.name %>\n    </a>\n  </h3>\n  <span class='deemphasize'><%= folder.jailpath %></span>\n</span>\n","repo":"<a\n  class='listing-icon'\n  data-user='<%- repo.owner.login %>'\n  data-repo='<%- repo.name %>'\n  href='#<%- repo.owner.login %>/<%- repo.name %>'>\n  <% if ((repo.owner.login !== repo.login) && repo.private) { %>\n    <span class='icon round repo owner private' title=\"<%- t('main.repos.sharedFrom') %> (<%- repo.owner.login %>)\"></span>\n  <% } else if (repo.owner.login !== repo.login) { %>\n    <span class='icon round repo owner' title=\"<%- t('main.repos.sharedFrom') %> (<%- repo.owner.login %>)\"></span>\n  <% } else if (repo.fork && repo.private) { %>\n    <span class='icon round repo private fork' title=\"<%- t('main.repos.forkedFrom') %>\"></span>\n  <% } else if (repo.fork) { %>\n    <span class='icon round repo fork' title=\"<%- t('main.repos.forkedFrom') %>\"></span>\n  <% } else if (repo.private) { %>\n    <span class='icon round repo private'></span>\n  <% } else { %>\n    <span class='icon round repo'></span>\n  <% } %>\n</a>\n\n<div class='details'>\n  <div class='actions fr clearfix'>\n    <a\n      data-user='<%- repo.owner.login %>'\n      data-repo='<%- repo.name %>'\n      href='#<%- repo.owner.login %>/<%- repo.name %>'>\n      <%= t('main.repos.repo') %>\n    </a>\n    <% if (repo.homepage) { %>\n      <a href='<%- repo.homepage %>'><%= t('main.repos.site') %></a>\n    <% } %>\n  </div>\n  <a\n    data-user='<%- repo.owner.login %>'\n    data-repo='<%- repo.name %>'\n    href='#<%- repo.owner.login %>/<%- repo.name %>'>\n    <h3<% if (!repo.description) { %> class='title'<% } %>><%- repo.name %></h3>\n    <span class='deemphasize'><%- repo.description %></span>\n  </a>\n</div>\n"},"loading":"<div class='loading round clearfix'>\n  <div class='loading-icon'></div>\n  <span class=\"message\"></span>\n</div>\n","meta":{"button":"<div class='form-item'>\n  <label for='<%= meta.name %>'><%= meta.label %></label>\n  <% if (meta.help) { %><small class='deemphasize'><%= meta.help %></small><% } %>\n  <fieldset>\n    <button class='metafield round <%= meta.name %>' type='button' name='<%= meta.name %>' value='<%= meta.value %>' data-on='<%= meta.on %>' data-off='<%= meta.off %>'>\n      <% print(value ? meta.on : meta.off); %>\n    </button>\n  </fieldset>\n</div>\n","checkbox":"<div class='form-item'>\n  <fieldset>\n    <input class='metafield' type='checkbox' name='<%= meta.name %>' value='<%= meta.value %>'<% print(meta.checked ? 'checked' : '') %> />\n    <label class='aside' for='<%= meta.name %>'><%= meta.label %></label>\n  </fieldset>\n  <% if (meta.help) { %><small class='deemphasize'><%= meta.help %></small><% } %>\n</div>\n","multiselect":"<div class='form-item'>\n  <label for='<%= meta.name %>'><%= meta.label %></label>\n  <% if (meta.help) { %><small class='deemphasize'><%= meta.help %></small><% } %>\n\n  <fieldset>\n    <select id='<%= meta.name %>' name='<%= meta.name %>' data-placeholder='<%= meta.placeholder %>' multiple class='metafield chzn-select'>\n      <% _(meta.options).each(function(o) { %>\n        <% if (!o.lang || o.lang === meta.lang) { %>\n          <% if (o.name) { %>\n           <option value='<%= o.value %>'><%= o.name %></option>\n          <% } else if (o.value) { %>\n           <option value='<%= o.value %>'><%= o.value %></option>\n          <% } else { %>\n           <option value='<%= o %>'><%= o %></option>\n          <% } %>\n        <% } %>\n      <% }); %>\n    </select>\n  </fieldset>\n\n  <% if (meta.alterable) { %>\n    <div class='create'>\n      <input type='text' class='inline' data-select='<%= meta.name %>' />\n      <a href='#' class='round create-select inline button' data-select='<%= meta.name %>' title=\"<%= t('main.file.createMeta') %>\"><%= t('main.file.createMeta') %></a>\n    </div>\n  <% } %>\n</div>\n","raw":"<div class='form-item'>\n  <label for='raw'><%= t('main.file.rawMeta') %></label>\n  <% if (meta.help) { %><small><%= meta.help %></small><% } %>\n  <fieldset>\n    <div name='raw' id='raw' class='metafield inner'></div>\n  </fieldset>\n</div>\n","select":"<div class='form-item'>\n  <label for='<%= meta.name %>'><%= meta.label %></label>\n  <% if (meta.help) { %><small class='deemphasize'><%= meta.help %></small><% } %>\n\n  <fieldset>\n    <select name='<%= meta.name %>' data-placeholder='<%= meta.placeholder %>' class='metafield chzn-select'>\n      <% _(meta.options).each(function(o) { %>\n        <% if (!o.lang || o.lang === meta.lang) { %>\n          <% if (o.name) { %>\n           <option value='<%= o.value %>'><%= o.name %></option>\n          <% } else if (o.value) { %>\n           <option value='<%= o.value %>'><%= o.value %></option>\n          <% } else { %>\n           <option value='<%= o %>'><%= o %></option>\n          <% } %>\n        <% } %>\n      <% }); %>\n    </select>\n  </fieldset>\n</div>\n","text":"<div class='form-item'>\n  <label for='<%= meta.name %>'><%= meta.label %></label>\n  <% if (meta.help) { %><small class='deemphasize'><%= meta.help %></small><% } %>\n  <fieldset>\n    <input class='metafield' type='text' name='<%= meta.name %>' value='<%= meta.value %>' data-type='<%= meta.type %>' placeholder='<%= meta.placeholder %>' />\n  </fieldset>\n</div>\n","textarea":"<div class='form-item yaml-block'>\n  <label for='<%= meta.name %>'><%= meta.label %></label>\n  <% if (meta.help) { %><small class='deemphasize'><%= meta.help %></small><% } %>\n  <fieldset>\n    <textarea class='metafield' id='<%= meta.id %>' type='text' name='<%= meta.name %>' data-type='<%= meta.type %>' placeholder='<%= meta.placeholder %>'><%= meta.value %></textarea>\n  </fieldset>\n</div>\n"},"metadata":"<div class='form'></div>\n<a href='#' class='button round finish'><%= t('main.file.back') %></a>\n","modal":"<div class='modal-content round'>\n  <div class='modal-heading inner'>\n    <%= t('modal.errorHeading') %>\n  </div>\n  <div class='prose inner'>\n    <p><%= modal.message %></p>\n  </div>\n  <div class='modal-footer inner'>\n    <a href='#' class='button round got-it'><%= t('modal.confirm') %></a>\n  </div>\n</div>\n","nav":"<ul class='mobile nav clearfix'>\n  <li>\n    <a href='#' class='toggle ico menu round'></a>\n  </li>\n</ul>\n\n<ul class='file nav clearfix'>\n  <li>\n    <a href='#' title=\"<%= t('navigation.edit') %>\" class='ico round pencil edit' data-state='edit'>\n      <span class='popup round arrow-right'><%= t('navigation.edit') %></span>\n    </a>\n  </li>\n\n  <li>\n    <a href='#' title=\"<%= t('navigation.preview') %>\" class='ico round eye blob preview' data-state='blob'>\n      <span class='popup round arrow-right'><%= t('navigation.preview') %></span>\n    </a>\n  </li>\n\n  <li>\n    <a href='#' title=\"<%= t('navigation.meta') %>\" class='ico round metadata meta' data-state='meta'>\n      <span class='popup round arrow-right'><%= t('navigation.meta') %></span>\n    </a>\n  </li>\n\n  <li>\n    <a href='#' title=\"<%= t('navigation.settings') %>\" class='ico round sprocket settings' data-state='settings' data-drawer=true>\n      <span class='popup round arrow-right'><%= t('navigation.settings') %></span>\n    </a>\n  </li>\n\n  <li>\n    <a href='#' title=\"<%= t('navigation.save') %>\" class='ico round save' data-state='save'>\n      <div class='status'></div>\n      <span class='popup round arrow-right'>\n        <%= t('navigation.save') %>\n      </span>\n    </a>\n  </li>\n</ul>\n\n<ul class='auth nav clearfix'>\n  <li>\n    <a class='ico round switch login' href='<%= data.login %>' title=\"<%= t('login') %>\">\n      <span class='popup round arrow-right'><%= t('login') %></span>\n    </a>\n  </li>\n</ul>\n","notification":"<div class='notify'>\n  <h2 class='icon landing error'>Prose</h2>\n  <div class='inner'>\n    <p><%= data.message %></p>\n    <p class='error'><%= data.error %></p>\n\n    <% _(data.options).each(function(options) { %>\n    <div>\n      <a class='button round <% if(options.className) { %><%= options.className %><% } %>' href='<%= options.link %>'><%= options.title %></a>\n    </div>\n    <% }); %>\n  </div>\n</div>\n","profile":"<header id='heading' class='heading limiter clearfix'></header>\n\n<div id='content' class='application content limiter'>\n  <div class='topbar'>\n    <div id='search' class='content-search round'></div>\n  </div>\n  <ul id='repos' class='projects listing'></ul>\n</div>\n","repo":"<header id='heading' class='heading limiter clearfix'></header>\n\n<div id='content' class='application content limiter'>\n  <div class='topbar clearfix'>\n    <!-- if repo and authenticated -->\n    <!-- #user/repo/new/branch/path -->\n    <div id='search' class='fl content-search round'></div>\n    <a href='#' class='fl button round new new-file' data-state='new'>\n      <%= t('navigation.newFile') %>\n    </a>\n  </div>\n\n  <div id='files'></div>\n</div>\n","search":"<span class='ico search'></span>\n<input type='text' id='filter' placeholder=\"<%= search.placeholder %>\" />\n","sidebar":{"branches":"<div class='inner'>\n  <h2 class='label'><%= t('sidebar.repo.branch') %></h2>\n  <select class='chzn-select'></select>\n</div>\n","drafts":"<a class='button round' href='#<%= link %>'><%= t('sidebar.repo.drafts') %></a>\n","label":"<div class='inner'>\n  <h2 class='label inner'><%= label %></h2>\n</div>\n","li":{"commit":"<a class='<%= data.status %>' href='#<%= [data.repo.owner.login, data.repo.name, data.mode, data.branch, data.path].join(\"/\") %>'>\n  <span class='ico small inline <%= data.status %>'></span>\n  <span class='message'><%= data.file.filename %></span>\n</a>\n"},"orgs":"<div class='inner'>\n  <h2 class='label'><%= t('sidebar.repos.groups') %></h2>\n</div>\n<ul class='listing'>\n  <li>\n    <a href='#<%= orgs.login.user %>' title='<%= orgs.login.user %>' data-id='<%= orgs.login.id %>'>\n      <%= orgs.login.user %>\n    </a>\n  </li>\n  <% orgs.orgs.each(function(org) {  %>\n  <li>\n    <a href='#<%= org.login %>' title='<%= org.login %>' data-id='<%= org.id %>'>\n      <%= org.login %>\n    </a>\n  </li>\n  <% }); %>\n</ul>\n","save":"<div class='inner'>\n  <h2 class='label'><%= t('sidebar.save.label') %></h2>\n</div>\n<div class='inner authoring'>\n  <div class='commit'>\n    <textarea class='commit-message' placeholder></textarea>\n    <a class='ico small cancel round' title=\"<%= t('sidebar.save.cancel') %>\" href='#' data-action='cancel'>\n      <span class='popup round arrow-bottom'><%= t('sidebar.save.cancel') %></span>\n    </a>\n  </div>\n  <a class='confirm button round' href='#' data-action='confirm'><%= writable %></a>\n</div>\n","settings":"<div class='inner'>\n  <h2 class='label'><%= t('sidebar.settings.title') %></h2>\n</div>\n<div class='inner authoring'>\n  <% if (/^_posts/.test(settings.path)) { %>\n    <a class='draft button round' href='#' data-action='draft'><%= t('sidebar.settings.draft') %></a>\n  <% } %>\n  \n  <% if (settings.languages && settings.lang !== 'yaml') { %>\n    <% _.each(settings.languages, function(l) { %>\n      <% if (l.value && (settings.metadata && (settings.metadata.lang !== l.value))) { %>\n        <a class='translate round button' href='#<%= l.value %>' data-action='translate'><%= t('sidebar.settings.translate') + ' ' + l.name %></a>\n      <% } %>\n    <% }); %>\n  <% } %>\n\n  <!-- if !isNew() and is writable -->\n  <a class='delete button round' href='#' data-action='destroy'><%= t('sidebar.settings.delete') %></a>\n</div>\n\n<% if (settings.fileInput) { %>\n  <div class='inner'>\n    <h2 class='label'><%= t('sidebar.settings.fileInputLabel') %></h2>\n    <input type='text' class='filepath' placeholder='<%= settings.path %>' value='<%= settings.path %>'>\n  </div>\n<% } %>\n"},"start":"<div class='round splash'>\n  <h2 class='icon landing'>Prose</h2>\n  <div class='inner'>\n    <p><%= t('main.start.content') %></p>\n    <p><a href='#about'><%= t('main.start.learn') %></a></p>\n    <a class='round button' href='<%= auth.site %>/login/oauth/authorize?client_id=<%= auth.id %>&scope=repo'><%= t('login') %></a>\n  </div>\n</div>\n","toolbar":"<% if (toolbar.draft) { %>\n  <a href='#' class='draft-to-post round contain'>\n    <%= t('actions.draft.toPost') %><span class='ico small checkmark'></span>\n    <span class='popup round arrow-top'><%= t('actions.draft.toPostInfo') %></span>\n  </a>\n<% } else { %>\n  <% if (toolbar.metadata && toolbar.metadata.published) { %>\n    <a href='#' class='publish-flag published round contain' data-state='true'>\n      <%= t('actions.publishing.published') %><span class='ico small checkmark'></span>\n    </a>\n  <% } else if (toolbar.metadata && !toolbar.metadata.published) { %>\n    <a href='#' class='publish-flag round contain' data-state='false'>\n      <%= t('actions.publishing.unpublished') %><span class='ico small checkmark'></span>\n    </a>\n  <% } %>\n<% } %>\n\n<% if (toolbar.markdown) { %>\n<div class='options clearfix'>\n  <ul class='group round clearfix'>\n    <li><a href='#' title=\"<%= t('toolbar.heading') %>\" data-key='heading' data-snippet='<% print(\"##\\n\\n\") %>'>h2</a></li>\n    <li><a href='#' title=\"<%= t('toolbar.subHeading') %>\" data-key='sub-heading' data-snippet='<% print(\"###\\n\\n\") %>'>h3</a></li>\n  </ul>\n  <ul class='group round clearfix'>\n    <li>\n      <a title=\"<%= t('toolbar.link') %>\" href='#' data-key='link' data-snippet=false data-dialog=true>\n        <span class='ico small link'></span>\n      </a>\n    </li>\n    <li>\n      <a title=\"<%= t('toolbar.image') %>\" href='#' data-key='media' data-snippet=false data-dialog=true>\n        <span class='ico small picture'></span>\n      </a>\n    </li>\n  </ul>\n  <ul class='group round clearfix'>\n    <li><a href='#' title=\"<%= t('toolbar.bold') %>\" data-key='bold' data-snippet='****'>B</a></li>\n    <li>\n      <a data-key='italic' href='#' title=\"<%= t('toolbar.italic') %>\" data-snippet='__'>\n        <span class='ico small italic'></span>\n      </a>\n    </li>\n  </ul>\n  <ul class='group round clearfix'>\n    <li>\n      <a title=\"<%= t('toolbar.blockquote') %>\"  href='#' data-key='quote' data-snippet='<% print(\"> We loved with a love that was more than love\\n\\n\"); %>'>\n        <span class='ico small quote'></span>\n      </a>\n    </li>\n    <li>\n      <a href='#' title=\"<%= t('toolbar.list') %>\" data-key='list' data-snippet='<% print(\"- item\\n- item\\n- item\\n\\n\"); %>'>\n        <span class='ico small list'></span>\n      </a>\n    </li>\n    <li>\n      <a href='#' title=\"<%= t('toolbar.numberedlist') %>\" data-key='numbered-list' data-snippet='<% print(\"1. item\\n2. item\\n3. item\\n\\n\"); %>'>\n        <span class='ico small numbered-list'></span>\n      </a>\n    </li>\n  </ul>\n  <ul class='group round clearfix'>\n    <li>\n    <a class='round' title=\"<%= t('toolbar.help') %>\" href='#' data-key='help' data-snippet=false data-dialog=true>\n        <span class='ico small question'></span>\n      </a>\n    </li>\n  </ul>\n</div>\n<% } %>\n<div id='dialog'></div>\n"};