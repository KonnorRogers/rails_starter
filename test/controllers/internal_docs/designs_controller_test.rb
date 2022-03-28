require "test_helper"

class InternalDocs::DesignsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get internal_docs_designs_index_url
    assert_response :success
  end
end
