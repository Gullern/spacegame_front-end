var onLoad = function() {
	/* PAGES */
	var pages = ["header", "logo", "top_bar", "left_sidebar", "right_sidebar", "footer"];
	var content = ["overview", "planets", "galaxy", "trade", "resources", "design", "fleet", "research", "faction"];
	var args = control.load(pages, content);
	
	/* Load */
	main.load(args);
	header.load(args);
	logo.load(args);
	top_bar.load(args);
	left_sidebar.load(args);
	right_sidebar.load(args);
	footer.load(args);
};

var control = {
	pages: [],
	content: [],
	loadPage: function(href) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", href, false);
		// Needs error handling -> simple console.log
		xhr.send();
		return xhr.responseText;
	},
	load: function(pages, content) {
		/* LOAD */
		for (var i = 0; i < pages.length; i++) {
			this.pages.push(this.loadPage("modules/" + pages[i] + ".html"));
		}

		for (var i = 0; i < content.length; i++) {
			this.content.push(this.loadPage("content/views/" + content[i] + ".html"));
		}

		/* Append main pages */
		for (var i = 0; i < this.pages.length; i++) {
			document.getElementById(pages[i]).innerHTML = this.pages[i];
		}

		/* Ouput args */
		var args = [
			content,
			this.content
		];

		return args;
	}
};

var main = {
	load: function(args) {

	}
};
