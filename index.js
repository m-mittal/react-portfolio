import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <>

        <div class="grid-container-parent">
          <div id="root" class="grid-container">
            <div class="frm1">
              <div class="tile">sample text</div>
            </div>

            <div class="flex-container frm2">
              <div class="tile">Personal details</div>
            </div>

            <div class="flex-container frm3">
              <div class="tile">Download CV</div>
            </div>

            <div class="flex-container frm4">
              <div class="bckgrnd">
                <div class="tile"><p>Experience</p></div>
              </div>
            </div>

            <div class="flex-container frm5">
              <div class="tile">Skill Set</div>
            </div>

            <div class="flex-container frm6">
              <div class="tile">Education</div>
            </div>

            <div class="flex-container frm7">
              <div class="tile">ETC.. </div>
            </div>

            <div class="frmMain">
              <div class="skillSet">
                <div class="frmSkl1"></div>
                <div class="frmSkl2"></div>
                <div class="frmSkl3"></div>
                <div class="frmSkl4"></div>
                <div class="frmSkl5"></div>
                <div class="frmSkl6"></div>
                <div class="frmSkl7"></div>
                <div class="frmSkl8"></div>
                <div class="frmSkl9"></div>
              </div>
            </div>
          </div>
        </div>



      </>
    );
  }
}

render(<App />, document.getElementById('root'));
