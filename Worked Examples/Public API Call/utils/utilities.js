export const getInitials = (fName, lName) => {
  return `${fName.length!==0 ? fName.substring(0, 1): ""}${lName.length!== 0 ? lName.substring(0, 1) : ""}`;
};

export const extractFNameAndLName = (name) => {
  const nameParts = name.split(" ");
  let fName, lName;
  fName = nameParts[0];
  if (nameParts.length >= 2) lName = nameParts[1];
  else lName = "";
  return [ fName, lName ];
};

export const generateHandler = (username) => {
  const HANDLERICON = "@";
  return `${HANDLERICON}${username}`;
};

export const prepareWeatherIcon = (iconCode) => {
  return `<img src="https://openweathermap.org/img/wn/${iconCode}@4x.png" class="img-fluid">`
}

export function tolowerCase(str){
  return str.toLowerCase();
}

export const formatTime = (unixValue) => {
  const time = new Date(unixValue * 1000)
  return time.toLocaleTimeString("en-GB",{
    hour:"2-digit",
    minute:"2-digit"
  })
}

export function getDayTime(hour){
  const numHour = Number(hour)
  console.log(numHour)
  if(numHour>17){
    return "night"
  } else{
    return "day"
  }
}

export const prepareInitials = (name) => {
  const [fName, lName] = extractFNameAndLName(name);
  const initials = getInitials(fName, lName);
  return initials;
};