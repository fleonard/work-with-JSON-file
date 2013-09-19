 	$(function() {

		$.getJSON('./js/list.json', function(data) {
			$.each(data.pizze, function(i,post){
	                 var html = '<li data-name="'+  post.name +'"><span>' + post.name + ': </span><span>' + post.ingredients + '</span></li>';
	                 $(html).appendTo("#pizza-list ul");
	        });

		});


        $("ul").on('click', 'li', function() {
            var selected = $(this).data( "name" );
            var html = '<li>' + selected + '</li>';
	        $(html).appendTo("#select-pizza ul");

        });

        $("#select-pizza input").on('click', function() {
        		var position = $("#main").offset();
        		$(".overlay ul").append($("#select-pizza ul li"));
            	$(".overlay").css( { position: "absolute", left: position.left, top: position.top, display: "block" });

        });

         $(".overlay input").on('click', function() {
            	$(".overlay").css( { display: "none" });
            	$(".overlay li").remove();

        });

	});