//load document first if <script> is placed in the <head>

$(document).ready(function () {
  
  const url = "../data/employees.json";
  
  $.getJSON( url, function ( response ) {
    
    let statusHTML = '<ul class="bulleted">';
    
    $.each(response, function ( index, employee ) {
      if (employee.inoffice === true) {
					statusHTML += '<li class="in">';
				} else {
					statusHTML += '<li class="out">';  
				}
				statusHTML += employee.name;
				statusHTML += '</li>';    
    }); //end each loop
    
    statusHTML += '</ul>';
    
    $('#employeeList').html(statusHTML);
    
  });  //end getJSON 
  
}); //end ready