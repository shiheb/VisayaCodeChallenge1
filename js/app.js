var url = "data.json";
var urlRand = new Date().getTime(); 


$.ajaxSetup({ cache: false });
  

$.ajax({
      cache: false,
      crossDomain: true,
      type: 'POST',
      url: url,
      contentType: 'text/plain; charset=utf-8', 
      dataType: 'json', 
      success: function(data) {
          console.log('SUCESS!!!');
      },
      error: function (jqXHR, exception) {
          // Note: Often ie will give no error msg. Aren't they helpful?
          console.log('ERROR: jqXHR, exception', jqXHR, exception );
      }
}).done(function(data){
 
  var el = document.querySelector(".listOptions");

            for (var i = 0; i < data.options.length; i++) {

                $.each(data.options[i].values, function(index, value) {
                        //recuperate every confugurations from JSON and render it as checkbox
                    var record = '<div><input type="checkbox" id="' + value.option_type_id + '" name="interest" value="' + value.option_type_id + '">      <label for="' + value.option_type_id + '">' + value.option_type_id + '</label> </div>';
                    $(".listOptions").append(record);
                });
            }
            // T is an array that contain the first list of exclusions
            var T = [];
            $.each(data.exclusions[0], function(index, value) { T.push(index); });
            // U is an array that contain the second list of exclusions
            var U = [];
            $.each(data.exclusions[1], function(index, value) { U.push(index); });
            // V is an array that contain the third list of exclusions
            var V = [];
            $.each(data.exclusions[2], function(index, value) { V.push(index); });
            //manipulation to disable some confugations when the checkbox is changed 
            document.getElementById(T[0]).addEventListener("change", function() {
                if (document.getElementById(T[0]).checked) { document.getElementById(T[1]).disabled = true; } else { document.getElementById(T[1]).disabled = false; }
            });
            document.getElementById(T[1]).addEventListener("change", function() {
                if (document.getElementById(T[1]).checked)

                { document.getElementById(T[0]).disabled = true; } else { document.getElementById(T[0]).disabled = false; }

            });
            document.getElementById(U[0]).addEventListener("change", function() {
                if (document.getElementById(U[0]).checked) { document.getElementById(U[1]).disabled = true; } else { document.getElementById(U[1]).disabled = false; }
            });
            document.getElementById(U[1]).addEventListener("change", function() {

                if (document.getElementById(U[1]).checked)

                { document.getElementById(U[0]).disabled = true; } else { document.getElementById(U[0]).disabled = false; }
            });
            document.getElementById(V[0]).addEventListener("change", function() {
                if ((document.getElementById(V[0]).checked) && (document.getElementById(V[1]).checked)) { document.getElementById(V[V.length - 1]).disabled = true; } else { document.getElementById(V[V.length - 1]).disabled = false; }
            });
            document.getElementById(V[1]).addEventListener("change", function() {
                if ((document.getElementById(V[0]).checked) && (document.getElementById(V[1]).checked)) { document.getElementById(V[V.length - 1]).disabled = true; } else { document.getElementById(V[V.length - 1]).disabled = false; }
            });


        });
