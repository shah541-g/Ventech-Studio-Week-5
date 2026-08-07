import * as App from "./imports.js";

export class HtmlCreationEngine {
  prepareUsersListingHtml(usersData) {
    const preparedHtml = usersData
      .map((user) => {
        const {
          id,
          name,
          username,
          email,
          phone,
          website,
          address: {
            geo: { lat, lng },
          },
        } = user;
        const initials = App.prepareInitials(name);
        const handler = App.generateHandler(username);
        return `<div class="col-12 col-sm-6 card p-3">
            <div class="row">
              <div class="col-12 col-lg-5 col-xl-4 d-flex justify-content-center">
                <div
                  class="img-wrapper border border-black rounded-circle border-2"
                >
                  <img
                    src="https://ui-avatars.com/api/?name=${initials}&background=random&size=150&rounded=true"
                    alt=""
                    class="image-fluid"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-7 col-xl-8 text-center text-lg-start">
                <h2 class="fw-bold">${name}</h2>
                <h3 class="text-primary fw-bold">${handler}</h3>
                <div class="col-12 row mt-2 text-start">
                  <div class="col-12 col-xl-6">
                    <div
                      class="d-flex align-items-center justify-content-start gap-2"
                    >
                      <div class="email-icon">
                        <i
                          class="bi bi-envelope p-2 border border-2 rounded border-secondary text-primary"
                        ></i>
                      </div>
                      <div class="email-description">
                        <p class="fw-light text-secondary m-0">Email</p>
                        <p class="m-0">${email}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-xl-6">
                    <div
                      class="d-flex align-items-center justify-content-start gap-2"
                    >
                      <div class="website-icon">
                        <i
                          class="bi bi-globe p-2 border border-2 rounded border-secondary text-primary"
                        ></i>
                      </div>
                      <div class="webiste-description">
                        <p class="fw-light text-secondary m-0">Website</p>
                        <p class="m-0">${website}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-xl-6">
                    <div
                      class="d-flex align-items-center justify-content-start gap-2"
                    >
                      <div class="telephone-icon">
                        <i
                          class="bi bi-telephone p-2 border border-2 rounded border-secondary text-primary"
                        ></i>
                      </div>
                      <div class="telephone-description">
                        <p class="fw-light text-secondary m-0">Phone</p>
                        <p class="m-0">${phone}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-xl-6">
                    <div
                      class="d-flex align-items-center justify-content-start gap-2"
                    >
                      <div class="username-icon">
                        <i
                          class="bi bi-person-square p-2 border border-2 rounded border-secondary text-primary"
                        ></i>
                      </div>
                      <div class="username-description">
                        <p class="fw-light text-secondary m-0">Username</p>
                        <p class="m-0">${username}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="my-3 d-flex flex-column flex-lg-row align-items-start justify-content-between gap-2">
            <button id="user-weather-${id}" class="btn btn-success view-weather-btn" data-lat=${lat} data-lon=${lng}>Checkout My Weather <i class="bi bi-arrow-right-circle"></i></button>
            <button id="user-${id}" class="btn btn-primary view-profile-btn" data-user-id=${id}>View Profile <i class="bi bi-arrow-right-circle"></i></button> 
            </div>
          </div>`;
      })
      .join("");

    return preparedHtml;
  }
  prepareUserProfileModalHtml(user) {
    const {
      id,
      name,
      username,
      email,
      address: {
        street,
        suite,
        city,
        zipcode,
        geo: { lat, lng },
      },
      phone,
      website,
      company: { name: companyName, catchPhrase, bs },
    } = user;
    const initials = App.prepareInitials(name);
    const handler = App.generateHandler(username);
    return `
          <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
    <div class="modal-content">
  
      
      <div class="modal-header">
        <h5 class="modal-title">${name}</h5>
  
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close">
        </button>
      </div>
  
     
      <div class="modal-body">
  
        
        <div class="card shadow-sm border-0 mb-4">
          <div class="card-body">
  
            <div class="row align-items-center g-4">
  
              
              <div
                class="col-12 col-lg-4 d-flex justify-content-center">
                <div class="img-wrapper border border-2 rounded-circle p-1">
                  <img
                    src="https://ui-avatars.com/api/?name=${initials}&background=random&size=150&rounded=true"
                    alt="${name}"
                    class="img-fluid rounded-circle">
                </div>
              </div>
  
              
              <div class="col-12 col-lg-8">
  
                <div class="text-center text-lg-start">
  
                  <h2 class="fw-bold mb-1">${name}</h2>
  
                  <h5 class="text-primary mb-4">${handler}</h5>
  
                </div>
  
                <div class="row g-3">
  
                  
                  <div class="col-12 col-md-6">
                    <div class="d-flex gap-3">
  
                      <i class="bi bi-envelope fs-4 text-primary"></i>
  
                      <div>
                        <small class="text-secondary">Email</small>
                        <p class="mb-0">${email}</p>
                      </div>
  
                    </div>
                  </div>
  
                  
                  <div class="col-12 col-md-6">
                    <div class="d-flex gap-3">
  
                      <i class="bi bi-globe fs-4 text-primary"></i>
  
                      <div>
                        <small class="text-secondary">Website</small>
                        <p class="mb-0">${website}</p>
                      </div>
  
                    </div>
                  </div>
  
                  
                  <div class="col-12 col-md-6">
                    <div class="d-flex gap-3">
  
                      <i class="bi bi-telephone fs-4 text-primary"></i>
  
                      <div>
                        <small class="text-secondary">Phone</small>
                        <p class="mb-0">${phone}</p>
                      </div>
  
                    </div>
                  </div>
  
                  <!-- Username -->
                  <div class="col-12 col-md-6">
                    <div class="d-flex gap-3">
  
                      <i class="bi bi-person-square fs-4 text-primary"></i>
  
                      <div>
                        <small class="text-secondary">Username</small>
                        <p class="mb-0">${username}</p>
                      </div>
  
                    </div>
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
        </div>
  
        
        <div class="row g-4">
  
          
          <div class="col-12 col-lg-6">
  
            <div class="card shadow-sm h-100 border-0">
  
              <div class="card-header bg-primary text-white">
                <i class="bi bi-geo-alt me-2"></i>
                Address
              </div>
  
              <div class="card-body">
  
                <div class="table-responsive">
  
                  <table class="table table-sm align-middle mb-0">
  
                    <tbody>
  
                      <tr>
                        <th width="35%">Street</th>
                        <td>${street}</td>
                      </tr>
  
                      <tr>
                        <th>Suite</th>
                        <td>${suite}</td>
                      </tr>
  
                      <tr>
                        <th>City</th>
                        <td>${city}</td>
                      </tr>
  
                      <tr>
                        <th>Zip Code</th>
                        <td>${zipcode}</td>
                      </tr>
  
                      <tr>
                        <th>Geo</th>
  
                        <td class="text-primary">
  
                          <strong>Lat:</strong> ${lat}
                          <br>
                          <strong>Lng:</strong> ${lng}
  
                        </td>
  
                      </tr>
  
                    </tbody>
  
                  </table>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
          
          <div class="col-12 col-lg-6">
  
            <div class="card shadow-sm h-100 border-0">
  
              <div class="card-header bg-success text-white">
                <i class="bi bi-building me-2"></i>
                Company
              </div>
  
              <div class="card-body">
  
                <div class="table-responsive">
  
                  <table class="table table-sm align-middle mb-0">
  
                    <tbody>
  
                      <tr>
                        <th width="35%">Name</th>
                        <td>${companyName}</td>
                      </tr>
  
                      <tr>
                        <th>Catch Phrase</th>
                        <td>${catchPhrase}</td>
                      </tr>
  
                      <tr>
                        <th>Business</th>
                        <td>${bs}</td>
                      </tr>
  
                    </tbody>
  
                  </table>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </div>
  
     
      <div class="modal-footer justify-content-center">
  
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal">
          Close
        </button>
  
      </div>
  
    </div>
  </div>`;
  }
  prepareWeatherModalHtml(weather) {
    const {
      coord: { lon, lat },
      weather: [{ id: weatherId, main, description, icon }],
      base,
      main: {
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        sea_level,
        grnd_level,
      },
      visibility,
      wind: { speed, deg, gust },
      clouds: { all },
      dt,
      sys: { sunrise, sunset },
      timezone,
      id,
      name,
      cod,
    } = weather;

    const weatherIcon = App.prepareWeatherIcon(icon);
    const themeType = App.tolowerCase(main);
    const time = App.formatTime(dt);
    const hour = time.split(":")[0];
    const partOfDay = App.getDayTime(hour);
    const cartTheme =
      themeType in App.weatherThemes
        ? App.weatherThemes[themeType][partOfDay]
        : App.weatherThemes.default[partOfDay];

    const weatherCard = (icon, title, value, color = "primary") => `
  <div class="col-md-4">
  
      <div class="card h-100 border-0 shadow-sm rounded-4 bg-white">
  
          <div class="card-body d-flex align-items-center gap-3">
  
              <div
                  class="rounded-circle d-flex align-items-center justify-content-center"
                  style="
                      width:52px;
                      height:52px;
                      background:rgba(255,255,255,.55);
                  ">
  
                  <i class="bi bi-${icon} text-${color} fs-4"></i>
  
              </div>
  
              <div>
  
                  <div class="small text-secondary">
                      ${title}
                  </div>
  
                  <div class="fw-bold fs-4 text-dark">
                      ${value}
                  </div>
  
              </div>
  
          </div>
  
      </div>
  
  </div>
  `;

    return `
  <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
      <div
          class="modal-content border-0 overflow-hidden"
          style="
              background:
  linear-gradient(
  135deg,
  ${cartTheme.gradient[0]},
  ${cartTheme.gradient[1]}
  ),
  url('${cartTheme.image}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color:${cartTheme.textColor};
          ">
  
          <div class="modal-header border-0 pb-0">
              <button
                  type="button"
                  class="btn-close ${partOfDay === "night" ? "btn-close-white" : ""}"
                  data-bs-dismiss="modal">
              </button>
          </div>
  
          <div class="modal-body pt-0">
  
              <div class="row align-items-center">
  
                  <div class="col-lg-7">
  
                      <div class="d-flex align-items-center gap-4">
  
                          <div class="weather-modal-icon">
                              ${weatherIcon}
                          </div>
  
                          <div>
  
                              <h2 class="fw-bold mb-1">${name}</h2>
  
                              <div class="small opacity-75 mb-3">
                                  <i class="bi bi-geo-alt"></i>
                                  Pakistan
                              </div>
  
                              <h3 class="fw-bold mb-0 text-capitalize">
                                  ${main}
                              </h3>
  
                              <div class="opacity-75 text-capitalize">
                                  ${description}
                              </div>
  
                          </div>
  
                      </div>
  
                  </div>
  
                  <div class="col-lg-5 text-lg-end mt-4 mt-lg-0">
  
                      <h1 class="display-2 fw-bold mb-0">
                          ${temp.toFixed(1)}°
                      </h1>
  
                      <div class="fs-5 opacity-75">
                          Feels like
                          <span class="p-2 border border-1 rounded bg-white fw-bold"
                              style="color:${cartTheme.iconColor}">
                              ${feels_like.toFixed(1)}°C
                          </span>
                      </div>
  
                  </div>
  
              </div>
  
              <hr class="my-4">
  
              <div class="row g-3">
  
                  ${weatherCard("thermometer-half", "Temperature", `${temp.toFixed(1)}°C`, "danger")}
  
                  ${weatherCard("thermometer-low", "Min Temperature", `${temp_min.toFixed(1)}°C`, "warning")}
  
                  ${weatherCard("thermometer-high", "Max Temperature", `${temp_max.toFixed(1)}°C`, "warning")}
  
                  ${weatherCard("thermometer-sun", "Feels Like", `${feels_like.toFixed(1)}°C`, "success")}
  
                  ${weatherCard("droplet-fill", "Humidity", `${humidity}%`, "primary")}
  
                  ${weatherCard("speedometer2", "Pressure", `${pressure} hPa`, "secondary")}
  
                  ${sea_level ? weatherCard("water", "Sea Level", `${sea_level} hPa`, "info") : ""}
  
                  ${grnd_level ? weatherCard("layers", "Ground Level", `${grnd_level} hPa`, "secondary") : ""}
  
                  ${weatherCard("eye-fill", "Visibility", `${visibility.toLocaleString()} m`, "info")}
  
                  ${weatherCard("wind", "Wind Speed", `${speed} m/s`, "primary")}
  
                  ${weatherCard("compass", "Wind Direction", `${deg}°`, "secondary")}
  
                  ${gust ? weatherCard("wind", "Wind Gust", `${gust} m/s`, "primary") : ""}
  
                  ${weatherCard("cloud", "Clouds", `${all}%`, "secondary")}
  
              </div>
  
              <div
                  class="row mt-4 bg-white rounded-4 p-4 align-items-center"
                  style="
                      
                      backdrop-filter:blur(10px);
                  ">
  
                  <div class="col-md-6 text-center border-end">
  
                      <i class="bi bi-sunrise-fill text-warning fs-1"
                          >
                      </i>
  
                      <div class="small mt-2 opacity-75">
                          Sunrise
                      </div>
  
                      <h3>
                          ${App.formatTime(sunrise)}
                      </h3>
  
                  </div>
  
                  <div class="col-md-6 text-center">
  
                      <i class="bi bi-sunset-fill fs-1 text-warning">
                      </i>
  
                      <div class="small mt-2 opacity-75">
                          Sunset
                      </div>
  
                      <h3>
                          ${App.formatTime(sunset)}
                      </h3>
  
                  </div>
  
              </div>
  
          </div>
  
      </div>
  
  </div>
  `;
  }
  preparePlaceholderHtml() {
    return Array.from({ length: 6 }, App.userPlaceholder).join("");
  };
}
