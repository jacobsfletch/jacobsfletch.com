var keystone = require('keystone');

var Hashtag = new keystone.List('Hashtag', {
	autokey: {
        from: 'name',
        path: 'key',
        unique: true
    }
});

Hashtag.add({
	name: {
        type: String,
        required: true
    }
});

Hashtag.relationship({
    ref: 'Project',
    path: 'hashtags'
});

Hashtag.register();
