
// ====================================
// MEDICARE HOSPITAL
// Appointment Form JavaScript
// ====================================

document.addEventListener("DOMContentLoaded", function () {

    const appointmentForm =
        document.getElementById("appointmentForm");

    const appointmentDate =
        document.getElementById("appointmentDate");

    const formStatus =
        document.getElementById("formStatus");

    const currentYear =
        document.getElementById("currentYear");

    // Automatically update footer year
    currentYear.textContent = new Date().getFullYear();

    // Prevent booking appointments in the past
    const today = new Date();
    const localToday = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    appointmentDate.min = localToday;

    // Appointment form submission
    appointmentForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Check browser validation
        if (!appointmentForm.checkValidity()) {
            appointmentForm.reportValidity();
            return;
        }

        // Prevent past date submission
        if (appointmentDate.value < localToday) {
            formStatus.textContent =
                "Please select today or a future date.";

            appointmentDate.focus();
            return;
        }

        // Display confirmation
        const patientName =
            document.getElementById("patientName").value.trim();

        formStatus.textContent =
            "Thank you, " + patientName +
            "! Your demo appointment request has been received. " +
            "This demonstration does not send or save your information.";

        // Move focus to the confirmation message
        formStatus.focus();

        // Reset the form after successful demonstration
        appointmentForm.reset();

        // Restore minimum date after resetting
        appointmentDate.min = localToday;
    });

});
