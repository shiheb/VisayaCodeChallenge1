# VisayaCodeChallenge1
First cold assessment in Visaya Code Challenge
#################################################################<br>
## what we know

Configurator logic [Frontend] 
Here at Visaya we manage very complex products. Most of the products have different 
options for configuring and one option can have multiple values for you to select, only one 
value can be selected per option. There are some values for these options that when 
selected exclude values for other options. 
 
The options, values and exclusions can be described with the following json file 
https://drive.google.com/file/d/1PHWg7YYHsbBLIHQq8PtAX1OiU7DmbaPr/view?usp=sharing <br>
 
As a means of explaining the file above, the exclusions should work the following way:<br>
<br> 
● When 14015 is selected values 14049 and 14026 should not be available. <br>
● When 14049 or 14026 are selected 14015 should not be available. <br>
● When 14015 and 14027 are both selected 14050 should not be available. <br>
 
You will have to put in place a frontend solution that enforces any incoming exclusions 
when configuring a product. Make sure your solution also runs on IE11. 

## What we tried to do

As I tried to verify the json file given with this task in a json data validator in this website: https://jsonlint.com/ <br> I have corrected with my own assiduity. I hope it's what you meant to put in json file. <br>
The user interface is elementary, as I tried just to put all conditions of the products, that we are supposed to respect when choosing configurations.

The code just need to be executed with a server-side javascript to intergate javascript code in the webpage, like Apache or eclipse e4.<br>
The principle page is index.html present in racine of the repository. <br>
The list of the exclusions is automatically recuperated from the JSON file, same case for the rest of data.<br>
I used WampServer to implement my code, but it still works with any Web development platform on windows, MacOs or Linux. <br>
the code support all recent browsers, internet explorer 11 included.
we just have to make some modifications to be well displayed in Internet explorer 11 browser: <br>
● use a specific form to load JSON file (as shown in the code). <br>
● disable cache for AJAX  with this insctruction $.ajaxSetup({ cache: false }); <br>
● Use PSOT request with  contentType: 'text/plain .

I wish it was exactly what I was supposed to do .

