import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class HousesController {
  constructor() {
    console.log('House Controller loaded')
    AppState.on('houses', this.drawHouses)

    this.getHouses()
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
}