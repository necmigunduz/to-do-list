import _, { startCase } from 'lodash';
import './style.scss';
import {displayNav, displayFooter} from './structure';
import {start} from './initStart';



function initializer(){
  displayNav();
  start()
  displayFooter();
}

initializer();


