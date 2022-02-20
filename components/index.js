import Demo from './demo/index.js';
import Test from './test/index.js';

const components = [
  Demo,
  Test,
]

const install = function (Vue) {
	components.forEach(component => {
		Vue.component(component.name, component);
	});
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
	install,
	Demo,
	Test,
}