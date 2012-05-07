require 'spec_helper'

describe HomeController do

  describe "routing" do
    it "should route correctly" do      
      { :get => "/" }.should be_routable
      { :get => "/" }.should route_to(:controller => "home", :action => "index")

      { :get => "/see_our_work" }.should be_routable
      { :get => "/see_our_work" }.should route_to(:controller => "home", :action => "see_our_work")
    end
  end

  describe "index" do
    it "should be successful and render 'index' template" do
      get :index
      response.should be_success
      response.should render_template('index')
    end     
  end

  describe "see_our_work" do
    it "should be successful and render 'see_our_work' template" do
      get :see_our_work
      response.should be_success
      response.should render_template('see_our_work')
    end
  end

end
