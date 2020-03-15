$(function () {
    $(".change-status").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id");
        let newOrder = $(this).data("newOrder");

        let newOrderState = {
            devoured: newOrder
        };
    // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newOrderState
        }).then(
            function () {
                console.log("changed status to", newOrder);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});