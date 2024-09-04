import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class HousesController {
  constructor() {
    console.log('House Controller loaded')
    AppState.on('houses', this.drawHouses)
    AppState.on('user', this.showHouseForm)

    this.getHouses()
    this.showHouseForm()
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawHouses() {
    const houses = AppState.houses
    let housesHTML = ''
    houses.forEach(house => housesHTML += house.HouseTemplate)
    setHTML('house-listings', housesHTML)
  }

  showHouseForm() {
    if (AppState.user == null) return
    const houseFormElem = document.getElementById('house-form')
    if (houseFormElem == null) return
    houseFormElem.classList.remove('d-none')
  }

  async createHouse() {
    try {
      event.preventDefault()
      const houseFormElem = event.target
      const houseFormData = getFormData(houseFormElem)
      await housesService.createHouse(houseFormData)
      houseFormElem.reset()
    } catch (error) {
      Pop.error(error)
      console.error(error);

    }
  }
}