import React from "react";
import './NavigationBar.css';

const NavigationBar = props => {
  return (
    <header class="header side_bar">
      <div class="my_menu">
        <a href="/membership/vibe" class="link_membership"> 
          <span id="ticket_pc">첫 구독자, 첫 달 무료</span>
        </a>
      </div>
    </header>
  );
};

export default NavigationBar;
