import axios from 'axios'

export const tp = (name) => {
  // const NativeApp = window.NativeApp // real version
  const NativeApp = {sendTrackingPoint: (name) => {console.log(name)}} // mock version
  if (name == undefined){return null}
  const prefix = "Exp_Grp_"
  name = prefix + name
  NativeApp.sendTrackingPoint(name)
}
  
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}
  
export const postToSheets = (baseUrl, firstEl, secondEl) => { 
  let url = baseUrl + "?groupName=" + firstEl + "&privacy=" + secondEl // for testing
  return axios.get(url)
}