export function incrementCounter(number){
  return {
    type: "INCREMENT",
    value: number
  }
}
export function decrementCounter(number){
  return {
    type: "DECREMENT",
    value: number

  }

}
