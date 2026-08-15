const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function initSettingsForm(form) {
    if (!form) {
        return;
    }

    const fields = {
        name: form.elements.name,
        email: form.elements.email,
        notificationPreference: form.elements.notificationPreference,
    };

    const successMessage = form.querySelector("#form-status");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        clearValidation(form);

        const errors = validateFields(fields);

        if (Object.keys(errors).length > 0) {
            showValidationErrors(fields, errors);

            const firstInvalidField = Object.keys(errors)
                .map((fieldName) => fields[fieldName])
                .find(Boolean);

            firstInvalidField?.focus();
            return;
        }

        if (successMessage) {
            successMessage.textContent = "Settings saved successfully.";
            successMessage.hidden = false;
        }

        form.reset();
    });

    Object.values(fields).forEach((field) => {
        field.addEventListener("input", () => {
            clearFieldValidation(field);

            if (successMessage) {
                successMessage.hidden = true;
                successMessage.textContent = "";
            }
        });

        field.addEventListener("change", () => {
            clearFieldValidation(field);
        });
    });
}

function validateFields(fields) {
    const errors = {};

    if (!fields.name.value.trim()) {
        errors.name = "Please enter your name.";
    }

    if (!fields.email.value.trim()) {
        errors.email = "Please enter your email address.";
    } else if (!EMAIL_PATTERN.test(fields.email.value.trim())) {
        errors.email = "Please enter a valid email address.";
    }

    if (!fields.notificationPreference.value) {
        errors.notificationPreference = "Please select a notification preference.";
    }

    return errors;
}

function showValidationErrors(fields, errors) {
    Object.entries(errors).forEach(([fieldName, message]) => {
        const field = fields[fieldName];

        if (!field) {
            return;
        }

        field.setAttribute("aria-invalid", "true");

        const errorElement = document.getElementById(`${field.id}-error`);

        if (errorElement) {
            errorElement.textContent = message;
            errorElement.hidden = false;
        }
    });
}

function clearValidation(form) {
    Object.values(form.elements).forEach((element) => {
        if (element instanceof HTMLElement) {
            clearFieldValidation(element);
        }
    });
}

function clearFieldValidation(field) {
    if (!field.id) {
        return;
    }

    field.removeAttribute("aria-invalid");

    const errorElement = document.getElementById(`${field.id}-error`);

    if (errorElement) {
        errorElement.textContent = "";
        errorElement.hidden = true;
    }
}