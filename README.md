# tooorangey.XPathOfLeastResistance
a property editor for Umbraco to show a contextual hint for the XPath required to retrieve the node it is placed on
## What?
Essentially in some circumstances Umbraco.TypedContentAtXPath is the most efficient way to retrieve content from the Umbraco Cache, but people use Children() and Descendants() as it's 'easier' to use, causing lots of filtering in memory, perhaps if people felt more comfortable with XPath, then they would probably use it more. This property editor attempts therefore to demystify the XPath within the context of the individual Umbraco install (eg it's not just some examples of <books <authors etc that you end up trying to remember XPath from on W3Schools it will use the document types of your Umbraco site for the examples... and secondly the main reason it's been knocked together, is when you've inherited an Umbraco site, and you are refactoring for performance, eg uses TypedContentAtXPath it's really annoying if people have used a random strategy of upper case or lower case first letter for the alias of the document type - so this just saves having to keep lookign up doc types and their alias to construct a working XPath.
## The repo
	Currently contains a new Umbraco 7.1.1 solution with the community starter kit.
	Login: admin@tooorangey.co.uk, test123456
	The property editor is in /app_plugins/tooorangey.XPathOfLeastResistance
	It's been added to the SEO/Navigation tab, via composition and appears on most pages.
	
## Current Status
	It's just writing out the XPath to the particular item, with a button for more advice - needs ideas and suggestions for the pull out panel content
	
	
