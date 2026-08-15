const FIELDS = {
  fullName: {
    errorId: 'full-name-error',
    validate(value) {
      const trimmed = value.trim();
      if (!trimmed) return 'Full name is required.';
      if (trimmed.length < 2) return 'Full name must be at least 2 characters.';
      if (trimmed.length > 80) return 'Full name must be 80 characters or fewer.';
      return '';
    },
  },
  email: {
    errorId: 'email-error',
    validate(value) {
      const trimmed = value.trim();
      if (!trimmed) return 'Email address is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        return 'Enter a valid email address.';
      }
      return '';
    },
  },
  homeAirport: {
    errorId: 'home-airport-error',
    validate(value) {
      const trimmed = value.trim();
      if (!trimmed) return 'Home airport is required.';
      if (!/^[A-Za-z]{3}$/.test(trimmed)) {
        return 'Enter a valid 3-letter airport code (e.g. JFK).';
      }
      return '';
    },
  },
  currency: {
    errorId: 'currency-error',
    validate(value) {
      if (!value) return 'Please select a preferred currency.';
      return '';
    },
  },
};

function getFieldElements(form, name) {
  const input = form.elements.namedItem(name);
  const errorEl = document.getElementById(FIELDS[name].errorId);

  if (!(input instanceof HTMLElement)) {
    return null;
  }

  return { input, errorEl };
}

function setFieldState(input, errorEl, message) {
  const isInvalid = Boolean(message);

  input.classList.toggle('settings-form__input--invalid', isInvalid);
  input.classList.toggle('settings-form__select--invalid', isInvalid);
  input.setAttribute('aria-invalid', String(isInvalid));

  if (errorEl) {
    errorEl.textContent = message;
  }
}

function validateField(form, name) {
  const field = getFieldElements(form, name);
  if (!field) return true;

  const { input, errorEl } = field;
  const value = 'value' in input ? input.value : '';
  const message = FIELDS[name].validate(value);

  setFieldState(input, errorEl, message);
  return !message;
}

function validateForm(form) {
  return Object.keys(FIELDS).every((name) => validateField(form, name));
}

function clearFormStatus(statusEl) {
  statusEl.textContent = '';
  statusEl.classList.remove('settings-form__status--success', 'settings-form__status--error');
}

function setFormStatus(statusEl, message, type) {
  statusEl.textContent = message;
  statusEl.classList.remove('settings-form__status--success', 'settings-form__status--error');
  statusEl.classList.add(`settings-form__status--${type}`);
}

function getFormData(form) {
  return {
    fullName: form.elements.namedItem('fullName').value.trim(),
    email: form.elements.namedItem('email').value.trim(),
    homeAirport: form.elements.namedItem('homeAirport').value.trim().toUpperCase(),
    currency: form.elements.namedItem('currency').value,
    emailNotifications: form.elements.namedItem('emailNotifications').checked,
  };
}

function bindFieldValidation(form) {
  Object.keys(FIELDS).forEach((name) => {
    const field = getFieldElements(form, name);
    if (!field) return;

    const revalidateIfInvalid = () => {
      if (field.input.getAttribute('aria-invalid') === 'true') {
        validateField(form, name);
      }
    };

    field.input.addEventListener('blur', () => validateField(form, name));
    field.input.addEventListener('input', revalidateIfInvalid);
    field.input.addEventListener('change', revalidateIfInvalid);
  });
}

export function initSettingsForm() {
  const form = document.getElementById('settings-form');
  const statusEl = document.getElementById('form-status');

  if (!(form instanceof HTMLFormElement) || !(statusEl instanceof HTMLElement)) {
    return;
  }

  bindFieldValidation(form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearFormStatus(statusEl);

    const isValid = validateForm(form);
    if (!isValid) {
      setFormStatus(statusEl, 'Please fix the errors below before saving.', 'error');

      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid instanceof HTMLElement) {
        firstInvalid.focus();
      }
      return;
    }

    const data = getFormData(form);
    console.log('Settings saved:', data);
    setFormStatus(statusEl, 'Your settings were saved successfully.', 'success');
  });

  form.addEventListener('reset', () => {
    clearFormStatus(statusEl);

    Object.keys(FIELDS).forEach((name) => {
      const field = getFieldElements(form, name);
      if (field) {
        setFieldState(field.input, field.errorEl, '');
      }
    });
  });
}
