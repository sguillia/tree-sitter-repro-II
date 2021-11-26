const Parser = require('web-tree-sitter')
Parser.init().then(() => {
	/* the library is ready */

	const parser = new Parser

	// taken from https://github.com/tree-sitter/tree-sitter.github.io/blob/master/tree-sitter-javascript.wasm
	Parser.Language.load('./tree-sitter-javascript.wasm').then((JavaScript) => {
		parser.setLanguage(JavaScript)

		const tree = parser.parse("let a = 0")

		const cursor = tree.rootNode.firstChild.walk() // lexical_declaration

		console.log(cursor.gotoParent()) // why false?
	})
})
