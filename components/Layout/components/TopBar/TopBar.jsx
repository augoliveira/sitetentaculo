import React from "react";

export default function TopBar() {
  return (
    <div className="main-top">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          
        </div>
        
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="hide_phone">
                        <a href="/login" class="btn btn-sm log_btn">LogIn</a>
                        <a href="/signup" class="btn btn-sm sign_btn btn-rounded navbar-btn">Inscrever-se</a>
                    </div>
          
        </div>
      </div>
    </div>
  </div>
    
  );
}
