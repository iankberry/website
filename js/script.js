$(document).ready(function(){

	if ($("#twitter-container").length) {
		$("#twitter-container").tweet({
			username: "iankberry",
			join_text: "",
			count: 9,
			loading_text: "loading...",
			refresh_interval: 120,
			link_user: false
		});
		$('#twitter-container').bind('loaded', function() {
			twttr.anywhere(onAnywhereLoad);
			function onAnywhereLoad(twitter) { twitter.hovercards(); };
		});
	} else {
		twttr.anywhere(onAnywhereLoad);
		function onAnywhereLoad(twitter) { twitter.hovercards(); };
	}

	lastFmRecords.init({
		username: 'rax000',
		placeholder: 'lastfm-container',
		period: '3month', // which period/type of data do you want to show? you can choose from
						// recenttracks, 7day, 3month, 6month, 12month, overall, 
						// topalbums and lovedtracks
		count: 12,
		refresh: 3,
		offset: -5
	});

});