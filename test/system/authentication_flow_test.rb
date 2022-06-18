require "application_system_test_case"

class AuthenticationFlowTest < ApplicationSystemTestCase
  test "Successful login" do
    visit login_path

    user = users(:base)
    find_by_id("user_email").send_keys(user.email)
    find_by_id("user_password").send_keys("123456", :enter)

    assert_selector("sl-alert", text: t("devise.sessions.signed_in"))
    assert_equal current_user_id, user.id.to_s
  end

  test "Failed login" do
    visit login_path

    find_by_id("user_email").send_keys("unknown@gmail.com")
    find_by_id("user_password").send_keys("123456", :enter)

    assert_selector("sl-alert", text: t("devise.failure.invalid", authentication_keys: User.authentication_keys.join(" ").capitalize))
    assert_equal current_user_id, ""
  end

  test "Successful signup" do
    visit signup_path

    find_by_id("user_email").send_keys("new_user@gmail.com")
    find_by_id("user_password").send_keys("123456", :enter)

    assert_selector("sl-alert", text: t("devise.registrations.signed_up"))
    assert_equal current_user_id, User.find_by(email: "new_user@gmail.com").id.to_s
  end

  test "Logout" do
    login_as users(:base)
    visit root_path

    find("sl-button", text: t("auth.logout")).click

    assert_selector("sl-alert", text: t("auth.signed_out"))
    assert_equal current_user_id, ""
  end
end
