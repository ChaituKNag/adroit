// SCSS - Dependency
require('stylesheets/index.scss');

// HBS - Base Layout
require('layouts/base.hbs');

// HBS - Pages
require('pages/index.hbs');
require('pages/home-page.hbs');

// HBS - Components
require('fe-components/sample-component/sample-component');
require('fe-components/bootstrap-sample/bootstrap-sample');


if (module.hot) {
	module.hot.accept();
}
