document.querySelector(function() {

    document.querySelector('#no-script').remove();

    //var searchTerm = "books";
    var baseUrl = "data.txt";
    $.getJSON(baseUrl, function(data) {
        $.each(data, function() {
            document.querySelector(`<article></article>`)
                .hide()
                .insertAdjacentHTML("beforeend",'<h2> Name: '+this.nm+'</h2>')
                .insertAdjacentHTML("beforeend",'<p>Ruled: '+ this.yrs +'</p>')
                .insertAdjacentHTML("beforeend",'<span> House: '+ this.hse+'</span>')
                .appendTo('#main')
                .fadeIn();
        });

    });

});
