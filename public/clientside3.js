$('#button3').click(function() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/connect'
    });
});