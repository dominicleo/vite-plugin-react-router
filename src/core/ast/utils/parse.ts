import t from '@babel/types';
import parser from '@babel/parser';

export default function parse(code: string): t.File {
  return parser.parse(code, {
    sourceType: 'module',
    plugins: [
      'jsx',
      'typescript',
      'classProperties',
      'dynamicImport',
      'exportDefaultFrom',
      'exportNamespaceFrom',
      'functionBind',
      'nullishCoalescingOperator',
      'objectRestSpread',
      'optionalChaining',
      'decorators-legacy',
    ],
    allowAwaitOutsideFunction: true,
  });
}
