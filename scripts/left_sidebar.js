var left_sidebar = {
	tabControl: {
		index: 0, // Initial tab selected
		parent: null,
		selected: null,
		target_handle: null,
		content_names: null,
		content: null,
		setTab: function(handle) {
			if (this.selected !== null) {
				var temp = this.selected.classList;
				for (var i = 0; i < temp.length; i++) {
					if (temp[i] === "active") {
						this.selected.classList.remove("active");
					}
				};
			}
			this.selected = handle;
			this.selected.classList.add("active");

			for (var i = 0; i < this.parent.length; i++) {
				if (this.parent[i] === this.selected) {
					this.index = i;
				}
			};

			this.target_handle.innerHTML = this.content[this.index];
		},
		load: function(args) {
			this.parent = document.getElementById("left_menu").children;
			this.selected = this.parent[this.index];
			this.target_handle = document.getElementById("content");

			this.content_names = args[0];
			this.content = args[1];
			
			this.setTab(this.selected);
		}
	},
	load: function(args) {
		this.tabControl.load(args);
	}
};
