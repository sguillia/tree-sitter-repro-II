const assert = require('assert')
const Parser = require('tree-sitter')
const JavaScript = require('tree-sitter-javascript')

const parser = new Parser()
parser.setLanguage(JavaScript)

/**
program [0, 0] - [1, 0]
  lexical_declaration [0, 0] - [0, 9]
	variable_declarator [0, 4] - [0, 9]
	  name: identifier [0, 4] - [0, 5]
	  value: number [0, 8] - [0, 9]
 */
const tree = parser.parse("let a = 0")

const cursor = tree.rootNode.firstChild.walk() // lexical_declaration

console.log(cursor.gotoParent()) // why false?
