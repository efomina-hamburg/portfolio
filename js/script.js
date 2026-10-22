
$(document).ready(function () {
    $(".burger-menu").on("click", function () {
        const menu = $(".navigation");
        const isExpanded = $(this).attr("aria-expanded") === "true";

        if (isExpanded) {
            menu.slideUp(200);
        } else {
            menu.slideDown(200);
        }

        $(this)
            .attr("aria-expanded", !isExpanded)
            .attr("aria-label", isExpanded ? "Menü öffnen" : "Menü schließen")
            .text(isExpanded ? "☰" : "✕");
    });

    $(".navigation a").on("click", function () {
        $(".navigation").slideUp(200);

        $(".burger-menu")
            .attr("aria-expanded", "false")
            .attr("aria-label", "Menü öffnen")
            .text("☰");
    });
});


$(document).ready(function () {
    $("#contact-form").on("submit", function (event) {
        event.preventDefault();

        const firstname = $("#firstname").val().trim();
        const lastname = $("#lastname").val().trim();
        const email = $("#email").val().trim();
        const subject = $("#subject").val().trim();
        const message = $("#message").val().trim();
        const privacyAccepted = $("#privacy").is(":checked");

        $("#form-error").text("");
        $("#form-success").prop("hidden", true);

        if (
            !firstname ||
            !lastname ||
            !email ||
            !subject ||
            !message
        ) {
            $("#form-error").text(
                "Bitte fülle alle Felder aus."
            );
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            $("#form-error").text(
                "Bitte gib eine gültige E-Mail-Adresse ein."
            );
            return;
        }

        if (!privacyAccepted) {
            $("#form-error").text(
                "Bitte akzeptiere die Datenschutzerklärung."
            );
            return;
        }

        $("#form-success").prop("hidden", false);
        this.reset();
    });
});
