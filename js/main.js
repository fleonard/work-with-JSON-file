 	$(function() {

		$.getJSON('./js/list.json', function(data) {
			$.each(data.pizze, function(i,post){
	                 var html = '<li data-name="'+  post.name +'" data-price="'+  post.price +'"><span>' + post.name + ': </span><span>' + post.ingredients + '</span></li>';
	                 $(html).appendTo("#pizza-list ul");
	        });

		});


        $("#pizza-list ul").on('click', 'li', function() {
            var selected = $(this).data( "name" ),
                price = $(this).data( "price" );
            var html = '<li data-price="'+  price +'">' + selected +'<span>' + price + '£</span></li>';
	        $(html).appendTo("#select-pizza ul");

        });

        $("#select-pizza input").on('click', function() {
        		var position = $("#main").offset(),
                    list = $("#select-pizza ul li"),
                    tot = 0;
                $(list).each(function(){
                    tot += $(this).data("price"); 
                    console.log(tot);
                });
        		$(".overlay ul").append(list);
                $(".overlay").append("<span>Total: "+ tot +"£</span>");
            	$(".overlay").css( { position: "absolute", left: position.left, top: position.top, display: "block" });

        });

         $(".overlay input").on('click', function() {
            	$(".overlay").css( { display: "none" });
            	$(".overlay li").remove();
                $(".overlay p").remove();

        });

	});