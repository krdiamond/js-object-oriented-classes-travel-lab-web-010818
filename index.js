
class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }
}

let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  getEastWestAveIdx(avenue){
    return eastWest.indexOf(avenue)
  }

  blocksTravelled(){
    let horizontalDistance = Math.abs((this.getEastWestAveIdx(this.beginningLocation.horizontal)) -  (this.getEastWestAveIdx(this.endingLocation.horizontal)))
    let verticalDistance =
    Math.abs((this.beginningLocation.vertical) - (this.endingLocation.vertical))
    return horizontalDistance + verticalDistance
  }
  // 3 blocks == 1 minute

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
};
