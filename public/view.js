$(document).ready(function () {
    var burgerUneatenList = $("<li>");
    var burgerEatenList = $("<li>");



    $(".uneatenBurgers").push(burgerUneatenList)

    var uneatenBurgersArray = [];
    var eatenBurgersArray = [];

    getUneatenBurgers();
    getEatenBurgers();

    function getUneatenBurgers() {
        $.ajax({
            method: "GET",
            url: "/api/burgers",
            data: burgers
        }).then(function (data) {

        });
    };

    function getEatenBurgers() {
        $.get("/api/burgers", function (data) {

        });
    };

    $(document).on("click", ".devourburger", function (event) {
        event.preventDefault();
        var id = $(this).data("burgerid");
        var newDevouredState = {
            devoured: true
        };
        $.ajax("/api/burgers/" + id, {
            method: "PUT",
            data: newDevouredState
        }).then(function () {
            location.reload();
        });
    });
    $("#createBurger").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger: $("#createBurger [name=Burger]").val().trim(),
            devoured: false
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            method: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        });
    });
    $(document).on("click", ".delete-burger", function (event) {
        var id = $(this).data("burgerid");
        event.preventDefault();
        $.ajax("/api/burgers/" + id, {
            method: "DELETE"
        }).then(function () {
            location.reload();
        });
    });
});