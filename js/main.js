 	$(function() {

		$.getJSON('./js/list.json', function(data) {
			$.each(data.pizze, function(i,post){
	                 var html = '<li data-name="'+  post.name +'"><span>' + post.name + ': </span><span>' + post.ingredients + '</span></li>';
	                 $(html).appendTo("#pizza-list ul");
	        });

		});


        $("ul").on('click', 'li', function() {
            var selected = $(this).data( "name" );
            var html = '<p>' + selected + '</p>';
	        $(html).appendTo("#select-pizza");

        });

	});