import traverse from '@babel/traverse';
import parse from '../utils/parse';

export function isReactComponent(code: string) {
  const ast = parse(code);
  let hasJSXElement = false;

  traverse(ast, {
    JSXElement(path) {
      hasJSXElement = true;
      path.stop();
    },
    JSXFragment(path) {
      hasJSXElement = true;
      path.stop();
    },
  });
  return hasJSXElement;
}
