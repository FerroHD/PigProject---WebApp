var was_down = 0;

Offline.on('down', function() {
	was_down = 1;
	//connection went down
	console.log("Connection went down");
	//Desktop version
	$("#connectionStatusDesktop").removeClass('text-warning text-success').html('Offline <i class="fa fa-fw fa-circle"></i>').addClass('text-danger animated shake');
    setTimeout(function() {
    	$("#connectionStatusDesktop").removeClass('animated shake');
    }, 1000);
    //Mobile version
    $("#connectionStatusMobile").removeClass('badge-warning badge-success').html('Offline').addClass('badge-danger');
});

Offline.on('up', function() {
	//connection is back!
	console.log("Connection is back");
	//Desktop version
	if (was_down == 1) {
		$("#connectionStatusDesktop").removeClass('text-warning text-danger').html('Online <i class="fa fa-fw fa-circle"></i>').addClass('text-success animated shake');
    	setTimeout(function() {
    		$("#connectionStatusDesktop").removeClass('animated shake');
    	}, 1000);
	} else {
		$("#connectionStatusDesktop").removeClass('text-warning').html('Online <i class="fa fa-fw fa-circle"></i>').addClass('text-success');
	}
    //Mobile version
    $("#connectionStatusMobile").removeClass('badge-warning badge-danger').html('Online').addClass('badge-success');
});