import { Component } from '@angular/core';
import {getProvince} from '../data/Province'
import {getDistricts} from '../data/Districts'
import {getSubDistricts} from '../data/SubDistricts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProvinceProject';
  pro = getProvince();
  dis = getDistricts();
  sub = getSubDistricts();
  // a = findDistricts(1)
  disShow = this.dis
  subDisShow = this.sub
  
  findDistricts(event) {
    let findDis = this.dis
    const result =  findDis.filter( (provinceName) => {
      return provinceName.PROVINCE_ID == event.target.value
    })
    console.log(result)
    this.disShow = result
  }

  findSubDistricts(event) {
    let findSubDis = this.sub
    const result =  findSubDis.filter( (disName) => {
      return disName.DISTRICT_ID == event.target.value
    })
    console.log(result)
    this.subDisShow = result
  }
}
