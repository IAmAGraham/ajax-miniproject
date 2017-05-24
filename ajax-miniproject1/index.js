
$(document).ready(function(){
  console.log('Document ready!')

  // When I submit a form
  $('form#video-search').on('submit', function(event){
    event.preventDefault()
    console.log("Submitted Form!!!")
//find what the user types in
const query = $('#query').val()
sqValue = []
$.ajax({
cache: false,
data: $.extend({
  key: 'AIzaSyDvYnDpKRPl68yvd5SXI95smXK2YKDpdy0',
  q: `${query}`,
  part: 'snippet'
}, {maxResults:20}),
dataType: 'json',
type: 'GET',
timeout: 5000,
url: 'https://www.googleapis.com/youtube/v3/search',
success: function(data){
					//  console.log(data[1]);
					//  obj = data[1];
					//  jQuery.each( obj, function( key, value ) {
					// 	 sqValue.push(value[0]);
					//  });
					//  sqValue;
          const video = data.items[0].id.videoId

          const vids = data.items.map(function(vid){
            return `<iframe width="300" height="169" src="https://www.youtube.com/embed/${vid.id.videoId}" frameborder="0" allowfullscreen></iframe>`
          })

           $("#videos").append(vids[0], vids[1], vids[2], vids[3], vids[4]);
}

})

// const query = $('#query').val()
// const apikey = "AIzaSyDvYnDpKRPl68yvd5SXI95smXK2YKDpdy0"
//   var url = `https://www.googleapis.com/youtube/v3/videos?key=${apikey}`
//   $('#query').val('')
//   // I want to hit an API
//   $.ajax({
//     url: url,
//     q: "",
//     success: function(data){
//       console.log("Abstraction is cool!!!!")
//       console.log(data)
      // Take the results that I get
      // and render them out to the page
      // const lis = data.items.map(function(book){
        // return `<li>${book.volumeInfo.title}</li>`
      // })
      // $('ul#videos').html( lis.join('') )
    })
  })
