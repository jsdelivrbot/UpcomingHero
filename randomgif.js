var randomgif = $.getJSON("https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC");
var rgifarr = $.makeArray(randomgif);
var rdata = rgifarr["data"];
var rdataarr = $.makeArray(rdata);
var randomurl = rdataarr["image_original_url"];
$('body').append(randomurl);

