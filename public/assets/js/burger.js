$(function () {
    $(".change-status").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id");
        let newConsume = $(this).data("newconsume");

        let newConsumeState = {
            devoured: newConsume
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newConsumeState
        }).then(
            function () {
                console.log("changed status to", newConsume);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#bur").val().trim(),
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