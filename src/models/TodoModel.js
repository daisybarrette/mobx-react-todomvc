import {observable} from 'mobx';

export default class TodoModel {
	store;
	id;
	@observable title;
	@observable completed;
	@observable tags; //might use a different implementation, try this to get something working
	

	constructor(store, id, title, completed, tags) {
		this.store = store;
		this.id = id;
		this.title = title;
		this.completed = completed;
		this.tags = tags;
	}

	toggle() {
		this.completed = !this.completed;
	}
	
	//need a way to tell if an item is tagged or not, then sort through which tag is which later
	toggleTagged() {
		this.tagged = !this.tagged;
	}

	destroy() {
		this.store.todos.remove(this);
	}

	setTitle(title) {
		this.title = title;
	}
	
	//allow the user to set the tags-- will need to customize this later
	setTags(tags) {
		this.tags = tags;
	}

	toJS() {
		return {
			id: this.id,
			title: this.title,
			completed: this.completed,
			tags: this.tags
		};
	}

	static fromJS(store, object) {
		return new TodoModel(store, object.id, object.title, object.completed, object.tags);
	}
}
