=== Contact Form 7 ===
Contributors: takayukister
Donate link: https://contactform7.com/donate/
Tags: contact, form, contact form, feedback, email, ajax, captcha, akismet, multilingual
<<<<<<< HEAD
Requires at least: 5.4
Tested up to: 5.5
Stable tag: 5.3
=======
Requires at least: 4.9
Tested up to: 5.3
Stable tag: 5.1.5
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Just another contact form plugin. Simple but flexible.

== Description ==

Contact Form 7 can manage multiple contact forms, plus you can customize the form and the mail contents flexibly with simple markup. The form supports Ajax-powered submitting, CAPTCHA, Akismet spam filtering and so on.

<<<<<<< HEAD
= Docs and support =

You can find [docs](https://contactform7.com/docs/), [FAQ](https://contactform7.com/faq/) and more detailed information about Contact Form 7 on [contactform7.com](https://contactform7.com/). When you can't find the answer to your question on the FAQ or in any of the documentation, check the [support forum](https://wordpress.org/support/plugin/contact-form-7/) on WordPress.org. If you can't locate any topics that pertain to your particular issue, post a new topic for it.

= Contact Form 7 needs your support =

It is hard to continue development and support for this free plugin without contributions from users like you. If you enjoy using Contact Form 7 and find it useful, please consider [making a donation](https://contactform7.com/donate/). Your donation will help encourage and support the plugin's continued development and better user support.

= Privacy notices =
=======
= Docs & Support =

You can find [docs](https://contactform7.com/docs/), [FAQ](https://contactform7.com/faq/) and more detailed information about Contact Form 7 on [contactform7.com](https://contactform7.com/). If you were unable to find the answer to your question on the FAQ or in any of the documentation, you should check the [support forum](https://wordpress.org/support/plugin/contact-form-7/) on WordPress.org. If you can't locate any topics that pertain to your particular issue, post a new topic for it.

= Contact Form 7 Needs Your Support =

It is hard to continue development and support for this free plugin without contributions from users like you. If you enjoy using Contact Form 7 and find it useful, please consider [__making a donation__](https://contactform7.com/donate/). Your donation will help encourage and support the plugin's continued development and better user support.

= Privacy Notices =
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

With the default configuration, this plugin, in itself, does not:

* track users by stealth;
* write any user personal data to the database;
* send any data to external servers;
* use cookies.

If you activate certain features in this plugin, the contact form submitter's personal data, including their IP address, may be sent to the service provider. Thus, confirming the provider's privacy policy is recommended. These features include:

* reCAPTCHA ([Google](https://policies.google.com/?hl=en))
* Akismet ([Automattic](https://automattic.com/privacy/))
* Constant Contact ([Endurance International Group](https://www.endurance.com/privacy))

<<<<<<< HEAD
= Recommended plugins =
=======
= Recommended Plugins =
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

The following plugins are recommended for Contact Form 7 users:

* [Flamingo](https://wordpress.org/plugins/flamingo/) by Takayuki Miyoshi - With Flamingo, you can save submitted messages via contact forms in the database.
* [Bogo](https://wordpress.org/plugins/bogo/) by Takayuki Miyoshi - Bogo is a straight-forward multilingual plugin that doesn't cause headaches.

= Translations =

<<<<<<< HEAD
You can [translate Contact Form 7](https://contactform7.com/translating-contact-form-7/) on [translate.wordpress.org](https://translate.wordpress.org/projects/wp-plugins/contact-form-7).
=======
You can [translate Contact Form 7](https://contactform7.com/translating-contact-form-7/) on [__translate.wordpress.org__](https://translate.wordpress.org/projects/wp-plugins/contact-form-7).
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

== Installation ==

1. Upload the entire `contact-form-7` folder to the `/wp-content/plugins/` directory.
<<<<<<< HEAD
1. Activate the plugin through the **Plugins** screen (**Plugins > Installed Plugins**).

You will find **Contact** menu in your WordPress admin screen.

For basic usage, have a look at the [plugin's website](https://contactform7.com/).
=======
1. Activate the plugin through the 'Plugins' menu in WordPress.

You will find 'Contact' menu in your WordPress admin panel.

For basic usage, you can also have a look at the [plugin web site](https://contactform7.com/).
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

== Frequently Asked Questions ==

Do you have questions or issues with Contact Form 7? Use these support channels appropriately.

1. [Docs](https://contactform7.com/docs/)
1. [FAQ](https://contactform7.com/faq/)
<<<<<<< HEAD
1. [Support forum](https://wordpress.org/support/plugin/contact-form-7/)
=======
1. [Support Forum](https://wordpress.org/support/plugin/contact-form-7/)
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664

[Support](https://contactform7.com/support/)

== Screenshots ==

1. screenshot-1.png

== Changelog ==

For more information, see [Releases](https://contactform7.com/category/releases/).

<<<<<<< HEAD
= 5.3 =

* Block Editor: Introduces the contact form selector block type.
* Renames the 'images' directory to 'assets'.
* New filter hook: `wpcf7_form_tag_date_option`.
* Date: Makes all DateTime date formats available for `min` and `max` options.
* Date: Converts the default value to Y-m-d date format string.
* Disallowed list: Deprecates the `wpcf7_submission_is_blacklisted` filter hook in favor of `wpcf7_submission_has_disallowed_words`.
* Accessibility: Sets the `aria-describedby` attribute for invalid fields.
* Default form template: Removes the "(required)" labels from required fields. Adds "(optional)" to optional fields instead.
* Default mail template: Uses site-related special mail-tags.

= 5.2.2 =

* Fixed: A REST API call aborted with a PHP fatal error when the `WPCF7_USE_PIPE` constant value was false.
* Introduces the `wpcf7_doing_it_wrong()` function.
* Sets the `trigger_error()` function’s `$error_type` parameter explicitly.
* Makes the `wpcf7_special_mail_tags` filter functions’ `$mail_tag` parameter optional.

= 5.2.1 =

* Makes the [contact-form-7 404 "Not Found"] message localizable.
* REST API: Adds the `permission_callback` argument to every endpoint definition.
* Flamingo: Uses `id()` instead of `id`, if available.
* Fixed: The `free_text` option did not work correctly with the `exclusive` option.
* Applies `wpcf7_mail_tag_replaced` filters even when the `$posted_data` is null.
* Adds custom mail-tag replacement for quiz fields.
* Admin: Updates the date column format in the list table.

= 5.2 =

* Submission: Introduces the `$posted_data_hash` and `$skip_spam_check` properties.
* Submission: Introduces the `wpcf7_skip_spam_check` filter hook.
* Contact form: Introduces the `pref()` method.
* REST API: Adds parsed form-tags data to the response.
* REST API: Deprecates the `wpcf7_ajax_json_echo` and `wpcf7_ajax_onload` filter hooks and introduces the `wpcf7_feedback_response` and `wpcf7_refill_response` filter hooks as alternatives.
* Frontend CSS: Style rules for the response output refer to the `form` element’s `class` attribute.
* Frontend JavaScript: Abolishes the use of jQuery events.
* reCAPTCHA: Moves script code to a separate file.
* reCAPTCHA: Changes the name of the field for reCAPTCHA response token from `g-recaptcha-response` to `_wpcf7_recaptcha_response`.

== Upgrade Notice ==
=======
= 5.1.5 =

* Config Validator: New test item for the unavailable_html_elements error.
* Config Validator: New test item for the attachments_overweight error.

= 5.1.4 =

* reCAPTCHA: introduces the WPCF7_RECAPTCHA_SITEKEY and WPCF7_RECAPTCHA_SECRET constants.
* reCAPTCHA: Introduces the wpcf7_recaptcha_sitekey and wpcf7_recaptcha_secret filter hooks.
* Adds $status parameter to the wpcf7_form_response_output filter.
* Creates a nonce only when the submitter is a logged-in user.
* Introduces WPCF7_ContactForm::unit_tag(), a public method that returns a unit tag.
* reCAPTCHA: gives a different spam log message for cases where the response token is empty.
* Acceptance Checkbox: supports the label_first option in an acceptance form-tag.

= 5.1.3 =

* Fixes a bug making it unable to unselect an option in the Mail tab panel.

= 5.1.2 =

* Constant Contact: Introduces the contact list selector.
* Constant Contact: Introduces the constant_contact additional setting.
* reCAPTCHA: Introduces the wpcf7_recaptcha_actions and wpcf7_recaptcha_threshold filter hooks.

= 5.1.1 =

* reCAPTCHA: Modifies the reaction to empty response tokens.

= 5.1 =

* Introduces the Constant Contact integration module.
* Updates the reCAPTCHA module to support reCAPTCHA v3.
* Adds Dark Mode style rules.

= 5.0.5 =

* Fixes the inconsistency problem between get_data_option() and get_default_option() in the WPCF7_FormTag class.
* Suppresses PHP errors occur on unlink() calls.
* Introduces wpcf7_is_file_path_in_content_dir() to support the use of the UPLOADS constant.

= 5.0.4 =

* Specifies the capability_type argument explicitly in the register_post_type() call to fix the privilege escalation vulnerability issue.
* Local File Attachment – disallows the specifying of absolute file paths referring to files outside the wp-content directory.
* Config Validator – adds a test item to detect invalid file attachment settings.
* Fixes a bug in the JavaScript fallback function for legacy browsers that do not support the HTML5 placeholder attribute.
* Acceptance Checkbox – unsets the form-tag's do-not-store feature.

= 5.0.3 =

* CSS: Applies the "not-allowed" cursor style to submit buttons in the "disabled" state.
* Acceptance Checkbox: Revises the tag-generator UI to encourage the use of better options in terms of personal data protection.
* Introduces wpcf7_anonymize_ip_addr() function.
* Introduces the consent_for:storage option for all types of form-tags.

= 5.0.2 =

* Added the Privacy Notices section to the readme.txt file.
* Updated the Information meta-box content.
* Use get_user_locale() instead of get_locale() where it is more appropriate.
* Acceptance Checkbox: Reset submit buttons’ disabled status after a successful submission.

= 5.0.1 =

* Fixed incorrect uses of _n().
* Config validation: Fixed incorrect count of alerts in the Additional Settings tab panel.
* Config validation: Fixed improper treatment for the [_site_admin_email] special mail-tag in the From mail header field.
* Acceptance checkbox: The class and id attributes specified were applied to the wrong HTML element.
* Config validation: When there is an additional mail header for mailboxes like Cc or Reply-To, but it has a possible empty value, “Invalid mailbox syntax is used” error will be returned.
* Explicitly specify the fourth parameter of add_action() to avoid passing unintended parameter values.
* Check if the target directory is empty before removing the directory.

= 5.0 =

* Additional settings: on_sent_ok and on_submit have been removed.
* New additional setting: skip_mail
* Flamingo: Inbound channel title changes in conjunction with a change in the title of the corresponding contact form.
* DOM events: Make an entire API response object accessible through the event.detail.apiResponse property.
* HTML mail: Adds language-related attributes to the HTML header.
* File upload: Sets the accept attribute to an uploading field.
* Introduces the WPCF7_MailTag class.
* Allows aborting a mail-sending attempt using the wpcf7_before_send_mail action hook. Also, you can set a custom status and a message through the action hook.
* Acceptance checkbox: Allows the specifying of a statement of conditions in the form-tag’s content part.
* Acceptance checkbox: Supports the optional option.
* New special mail tags: [_site_title], [_site_description], [_site_url], [_site_admin_email], [_invalid_fields], [_user_login], [_user_email], [_user_url], [_user_first_name], [_user_last_name], [_user_nickname], and [_user_display_name]
* New filter hooks: wpcf7_upload_file_name, wpcf7_autop_or_not, wpcf7_posted_data_{$type}, and wpcf7_mail_tag_replaced_{$type}
* New form-tag features: zero-controls-container and not-for-mail

== Upgrade Notice ==

= 5.1.1 =

Read the [release announcement post](https://contactform7.com/category/releases/) before upgrading. There is an important notice.

= 5.0.4 =

This is a security and maintenance release and we strongly encourage you to update to it immediately. For more information, refer to the [release announcement post](https://contactform7.com/category/releases/).
>>>>>>> 046da9b56784140cae8bc7eed79f683177ce7664
