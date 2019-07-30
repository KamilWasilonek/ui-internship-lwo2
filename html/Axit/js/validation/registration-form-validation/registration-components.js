export const components = new Promise((resolve) => {
  document.addEventListener('DOMContentLoaded', () => {
    const bannerForm = document.forms['trialForm'];
    const errorMessagesElements = bannerForm.getElementsByClassName(
        'banner__val-error'
    );
    const nameInput = bannerForm.elements['username'];
    const emailInput = bannerForm.elements['email'];
    const passwordInput = bannerForm.elements['password'];

    resolve({
      bannerForm,
      errorMessagesElements,
      nameInput,
      emailInput,
      passwordInput,
    });
  });
});
