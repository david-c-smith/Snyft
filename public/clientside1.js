$('#button1').click(function() {
    $.ajax({
        type: 'POST',
        url: 'http://snyft.herokuapp.com/connect1'
    });
});
