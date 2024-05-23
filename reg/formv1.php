<?php

$offer_name = isset($offer_name) ? $offer_name : "generic_crypto_offer";
$language = isset($language) ? $language : "gr";
$cc_url = isset($cc_url) ? $cc_url : ""; //url for call-center

$country = isset($country) ? $country : "GB";
$rf_redirect_timout = isset($rf_redirect_timout) ? $rf_redirect_timout : 6;
$rf_primary_color = isset($rf_primary_color) ? $rf_primary_color : "#4f46e5";

$rf_messages = array(
    "header" => isset($rf_messages["header"]) ? $rf_messages["header"] : "Change your life today!",
    "loading" => isset($rf_messages["loading"]) ? $rf_messages["loading"] : "Loading...",
    "first_name" => isset($rf_messages["first_name"]) ? $rf_messages["first_name"] : "First Name",
    "last_name" => isset($rf_messages["last_name"]) ? $rf_messages["last_name"] : "Last Name",
    "phone" => isset($rf_messages["phone"]) ? $rf_messages["phone"] : "Phone Number",
    "submit" => isset($rf_messages["submit"]) ? $rf_messages["submit"] : "Get started now",
    "registration_completed_title" => isset($rf_messages["registration_completed_title"]) ? $rf_messages["registration_completed_title"] : "Registration completed",
    "registration_completed_message" => isset($rf_messages["registration_completed_message"]) ? $rf_messages["registration_completed_message"] : "You will be redirected to your account in {{timer}} seconds...",
);
$rf_errors = array(
    "first_name_empty" => isset($rf_errors["first_name_empty"]) ? $rf_errors["first_name_empty"] : "Enter first name.",
    "last_name_empty" => isset($rf_errors["last_name_empty"]) ? $rf_errors["last_name_empty"] : "Enter last name.",
    "phone_empty" => isset($rf_errors["phone_empty"]) ? $rf_errors["phone_empty"] : "Enter phone number.",
    "phone_invalid" => isset($rf_errors["phone_invalid"]) ? $rf_errors["phone_invalid"] : "Invalid phone number.",
    "registation_failed_title" => isset($rf_errors["registation_failed_title"]) ? $rf_errors["registation_failed_title"] : "Something went wrong",
    "registation_failed_message" => isset($rf_errors["registation_failed_message"]) ? $rf_errors["registation_failed_message"] : "There was a problem with your request. Please try again.",
    "invalid_params_title" => isset($rf_errors["invalid_params_title"]) ? $rf_errors["invalid_params_title"] : "There was a problem with your request.",
);

$rf_files_path = "reg/files";
$rf_img_path = $rf_files_path . "/img";
$rf_css_path = $rf_files_path . "/css";
$rf_js_path = $rf_files_path . "/js";

?>

<div id="reg-form">
    <!-- reg-form styles start -->
    <link rel="stylesheet" href="<?php echo $rf_css_path . "/intlTelInput.min.css"  ?>" />
    <link rel="stylesheet" href="<?php echo $rf_css_path . "/form.css"  ?>" />
    <!-- reg-form styles end -->

    <div class="rf-container">
        <div class="rf-container__inner">
            <form class="rf-form js-rf-form" novalidate="novalidate">
                <div class="rf-form__header">
                    <?php echo $rf_messages["header"] ?>
                </div>

              <img src="/images/product.png" alt="" class="rf-form__prodimg">

                <div class="rf-form__content">
                    <div class="rf-form__loader js-rf-loader" style="display: none;">
                        <?php echo $rf_messages["loading"] ?>
                    </div>

                    <div class="rf-form-field">
                        <input class="rf-form-input" type="text" name="firstName" placeholder="<?php echo $rf_messages["first_name"] ?>" aria-label="<?php echo $rf_messages["first_name"] ?>" required="required" autocomplete="given-name" />
                        <small class="rf-form-field__error js-first-name-error"></small>
                    </div>

                    <div class="rf-form-field">
                        <input class="rf-form-input" type="text" name="lastName" placeholder="<?php echo $rf_messages["last_name"] ?>" aria-label="<?php echo $rf_messages["last_name"] ?>" required="required" autocomplete="family-name" />
                        <small class="rf-form-field__error js-last-name-error"></small>
                    </div>

                    <div class="rf-form-field">
                        <input class="rf-form-input" type="tel" name="phone" placeholder="<?php echo $rf_messages["phone"] ?>" aria-label="<?php echo $rf_messages["phone"] ?>" required="required" autocomplete="tel" />
                        <small class="rf-form-field__error js-phone-error"></small>
                    </div>

                    <div class="rf-alert rf-alert_error" style="display: none;">
                        <svg xmlns="http://www.w3.org/2000/svg" class="rf-alert__icon" fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                        </svg>
                        <div class="rf-alert__content js-rf-alert-error">
                        </div>
                    </div>

                    <div class="rf-alert rf-alert_success" style="display: none;">
                        <svg xmlns="http://www.w3.org/2000/svg" class="rf-alert__icon" fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <div class="rf-alert__content js-rf-alert-success">
                        </div>
                    </div>

                    <button class="rf-form-button" type="submit">
                        <?php echo $rf_messages["submit"] ?>
                    </button>
                </div>
            </form>

           
        </div>
    </div>

    <!-- reg-form scripts start -->
    <script src="<?php echo $rf_js_path . "/intlTelInput.min.js"  ?>"></script>
    <script>
        var country_code = '<?php echo $country ?>';
        (function initRegForm() {
            
            var country = '<?php echo $country ?>';
            var offer_name = '<?php echo $offer_name ?>';
            var language = '<?php echo $language ?>';

            var formEl = document.querySelector('.js-rf-form');
            var alertErrorEl = document.querySelector('.js-rf-alert-error');
            var alertSuccessEl = document.querySelector('.js-rf-alert-success');

            var loaderEl = formEl.querySelector('.js-rf-loader');
            var formErrorEls = {
                firstName: formEl.querySelector('.js-first-name-error'),
                lastName: formEl.querySelector('.js-last-name-error'),
                email: formEl.querySelector('.js-email-error'),
                phone: formEl.querySelector('.js-phone-error'),
            };
            var iti = window.intlTelInput(formEl.phone, {
                autoHideDialCode: true,
                separateDialCode: true,
                initialCountry: country,
                utilsScript: '../reg/files/js/intlTelInput-utils.js',
            });

            fetchUserCountry()
                .then(function(userCountry) {
                    country = userCountry;
                    country_code = userCountry;
                    iti.setCountry(userCountry);

                    formEl.addEventListener('submit', handleSubmit);
                })
                
            function validatePhone(value) {
                if (!value) {
                    return '<?php echo $rf_errors["phone_empty"] ?>';
                }
                if (!iti.isValidNumber()) {
                    return '<?php echo $rf_errors["phone_invalid"] ?>';
                }
            }

            function fetchUserCountry() {
                return fetch('https://ipinfo.io/json')
                    .then(function(res) {
                        return res.json();
                    })
                    .then(function(payload) {
                        if (payload && typeof payload.country === 'string') {
                            return payload.country;
                        } else {
                            return '<?php echo $country ?>';
                        }
                    })
                    .catch(function(error) {
                        console.error('Failed to get user country:', error);
                        return '<?php echo $country ?>';
                    })
            }

        })();
    </script>
    <!-- reg-form scripts end -->
</div>
