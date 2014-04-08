	
   	 	jQuery(document).ready(function(){
            var deletions = 0;
            //Initialize deletions at 0
            
	    	$("#add").on("click", function(){
	    	//When you click on add, add new tab directly below existing tabs
            	$("#namecontainer").append('<li class="tab"><span class="tabname">Request </span>' + ($("li").index(this) + deletions) + '<div class="removebutton">X</div></li>');
	    	});
            
            $("#namecontainer").on("click", ".tabname", function () {
            //Select .tabname--div containing JUST the name          
            	$("#fieldcontainer").replaceWith('	<div id="fieldcontainer"> Displaying information associated with tab ' + ($("li").index($(this).parent()) + deletions));
            });
	    	
	    	$("#namecontainer").on("click", ".removebutton", function () {
            	var choice=confirm("Are you sure you want to delete this tab? This will erase any information you entered for this request.");
           		//User is asked to confirm choice
           		if (choice==true) {
          	 	//if they select OK:
              		$(this).parent().remove();
              		//remove the tab
            		//Remember to include error handling for if the tab that was deleted was the currently selected tab--it should either switch to another tab or instruct the user to click on another tab. the former, we need error handling for if ALL tabs are deleted
              		deletions = deletions + 1;
              		//increment deletions--this will help numbers remain accurate
          			}
            		//http://www.w3schools.com/js/js_popup.asp

           
	    	});(jQuery);
            
            
    });