$(function() {
    $('burger_name').val('');
    
    // Devour button - jQuery functionality
    $('.btn-devour').on('click', function() {
        const id = $(this).data('id');
        console.log('devoured!');

        const devoured = { 
            devoured: 1
        };

        // Send the PUT request.
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devoured
        }).then(
            function() {
                console.log('changed devour to ', devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Form and button order - jQuery functionality
    $('.create-form').on('submit', function(event) {
        // Add preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            burger_name: $('#burger_name').val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
            console.log('created new burger');
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });

    // Remove button - jQuery functionality
    $('.btn-remove').on('click', function() {
        const id = $(this).data('id');

        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        }).then(
            function() {
                console.log('deleted burger');
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
