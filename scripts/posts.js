/*Gordon Connell
Opt code test
3/10/16*/


function ajax_get_json() {
    var hr = new XMLHttpRequest();
    hr.open("GET", "//jsonplaceholder.typicode.com/posts", true);
    hr.setRequestHeader("Content-type", "application/json", true);
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
	    	var data = JSON.parse(hr.responseText);
	    	var results1 = document.getElementById("results1");
	    	var results2 = document.getElementById("results2");
	    	var results3 = document.getElementById("results3");
	    	var results4 = document.getElementById("results4");
	    	var results5 = document.getElementById("results5");
	    	results1.innerHTML = "";
	    	results2.innerHTML = "";
	    	results3.innerHTML = "";
	    	results4.innerHTML = "";
	    	results5.innerHTML = "";
	    	for (var p in data) {
	    		if (p < 20) {
	    			results1.innerHTML += "<div class='idv_post'><div class='view'>View this Post</div><img class='close-button' src='images/close.png' title='close post' /><div class='post'>" + data[p].body + "<span>Details</span><div class='details'><div>Title: " + data[p].title + "</div><div>Post number: " + data[p].id + "</div><div>Posted by: User " + data[p].userId + "</div></div></div></div>";
	    		} else if (20 <= p && p < 40) {
	    			results2.innerHTML += "<div class='idv_post'><div class='view'>View this Post</div><img class='close-button' src='images/close.png' title='close post' /><div class='post'>" + data[p].body + "<span>Details</span><div class='details'><div>Title: " + data[p].title + "</div><div>Post number: " + data[p].id + "</div><div>Posted by: User " + data[p].userId + "</div></div></div></div>";
	    		} else if (40 <= p && p < 60) {
	    			results3.innerHTML += "<div class='idv_post'><div class='view'>View this Post</div><img class='close-button' src='images/close.png' title='close post' /><div class='post'>" + data[p].body + "<span>Details</span><div class='details'><div>Title: " + data[p].title + "</div><div>Post number: " + data[p].id + "</div><div>Posted by: User " + data[p].userId + "</div></div></div></div>";
	    		} else if (60 <= p && p < 80) {
	    			results4.innerHTML += "<div class='idv_post'><div class='view'>View this Post</div><img class='close-button' src='images/close.png' title='close post' /><div class='post'>" + data[p].body + "<span>Details</span><div class='details'><div>Title: " + data[p].title + "</div><div>Post number: " + data[p].id + "</div><div>Posted by: User " + data[p].userId + "</div></div></div></div>";
	    		} else if (80 <= p && p <= 100) {
	    			results5.innerHTML += "<div class='idv_post'><div class='view'>View this Post</div><img class='close-button' src='images/close.png' title='close post' /><div class='post'>" + data[p].body + "<span>Details</span><div class='details'><div>Title: " + data[p].title + "</div><div>Post number: " + data[p].id + "</div><div>Posted by: User " + data[p].userId + "</div></div></div></div>";
	    		}
	    	}
	    }
    }
    hr.send(null); // Actually execute the request
    // document.getElementById("status").innerHTML = "requesting...";
}

$( document ).ready(function() {
	$(document).on("click", ".close-button", function() {
		$(this).hide("slow");
		$(this).next().hide("slow");
		$(this).prev().show("slow");
		$(this).next().children(".details").hide();
	});

	$(document).on("click", ".idv_post .view", function() {
		$(this).hide();
		$(this).next().show("slow");
		$(this).next().next().show("slow");
	});

	$(document).on("click", ".idv_post span", function() {
		$(this).next().toggle();
	});



	var showing = document.getElementById("showing");

	$(document).on("click", "#page2", function() {
		$(".pagination a").removeClass("active");
		$(this).addClass("active");
		$('.otherResults').hide();
		$('#results2').show();
		showing.innerHTML = "Showing 21 - 40";
	});

	$(document).on("click", "#page3", function() {
		$(".pagination a").removeClass("active");
		$(this).addClass("active");
		$('.otherResults').hide();
		$('#results3').show();
		showing.innerHTML = "Showing 41 - 60";
	});

	$(document).on("click", "#page4", function() {
		$(".pagination a").removeClass("active");
		$(this).addClass("active");
		$('.otherResults').hide();
		$('#results4').show();
		showing.innerHTML = "Showing 61 - 80";
	});

	$(document).on("click", "#page5", function() {
		$(".pagination a").removeClass("active");
		$(this).addClass("active");
		$('.otherResults').hide();
		$('#results5').show();
		showing.innerHTML = "Showing 81 - 100";
	});

	$(document).on("click", "#page1", function() {
		$(".pagination a").removeClass("active");
		$(this).addClass("active");
		$('.otherResults').hide();
		$('#results1').show();
		showing.innerHTML = "Showing 1 - 20";
	});
});
