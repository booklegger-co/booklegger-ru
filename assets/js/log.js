function get_user_id ( length ) {
	var log_user_id = $.cookie('log_user_id')
	if ( log_user_id == null ) {
		log_user_id = ''
		var possible = '0123456789ABCDEF'
		for( var i=0; i < length; i++ ) {
        	log_user_id += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		$.cookie('log_user_id', log_user_id)
	}
	return log_user_id
}

function send_log (page, _event, from, ab) {
	var user_id = get_user_id (6)
	var url = '/log?user_id=' + user_id + '&page=' + page + '&event=' + _event + '&from=' + (from || 'default') + '&ab=' + ab
	http_request ( url, "GET" )
}