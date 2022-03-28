require "test_helper"

class InternalDocsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get internal_docs_index_url
    assert_response :success
  end
end
