import { Profile } from "./Profile.js"

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
  }

  get HouseTemplate() {
    return `
       <div class="col-md-6">
      <div class="card">
        <img class="img-fluid card-img-top"
          src="${this.imgUrl}"
          alt="Picture of House">
        <div class="card-body">
          <h5 class="card-title">$${this.priceAsCurrency}</h5>
          <p class="card-text"><strong>${this.bathrooms}</strong> bdrm | <strong>${this.bathrooms}</strong> bath | <strong>${this.levels}</strong> lvls | year built: <strong>${this.year}</strong></p>
          <p class="card-text">${this.description}</p>
        </div>
      </div>
    </div>`
  }

  get priceAsCurrency() {
    return new Intl.NumberFormat().format(this.price)
  }
}