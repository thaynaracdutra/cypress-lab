/**
 * @fileoverview Calls the template generator with the flag for generating multiple files set to false.
 * @author Marcelo S. Portugal <marceloquarion@gmail.com>
 */
'use strict';

const templateGenerator = require('./template-generator');

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = function(results) {
	return templateGenerator.generateTemplate(results, false);
};
