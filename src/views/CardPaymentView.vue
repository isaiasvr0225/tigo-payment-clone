<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref, computed } from "vue";

const fvChange = () => {
  let eDate: any = document.querySelector("#fv");

  eDate.addEventListener("keyup", function (e: any) {
    let newInput = eDate.value;

    if (e.which !== 8) {
      var numChars = e.target.value.length;
      if (numChars == 2) {
        var thisVal = e.target.value;
        thisVal += "/";
        e.target.value = thisVal;
      }
    }
  });
};

</script>

<template>
  <header>
    <nav class="nav2 h-[56px] lg:h-[74px]">
      <div class="div2header">
        <div class="centro">
          <div class="left relative right-10">
            <svg
              class="svgTig w-[55px] lg:w-[66px]"
              height="46px"
              viewBox="0 0 66 46"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>logo</title>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="at-button"
                  transform="translate(-49.000000, -18.000000)"
                  fill="#FAFAFA"
                >
                  <g id="Group-2">
                    <g id="logo" transform="translate(49.000000, 18.000000)">
                      <g id="Group-2">
                        <g id="Group-3" fill-rule="nonzero">
                          <g id="ic-tigoune">
                            <path
                              d="M56.3496461,3.40562043 C59.9335484,3.40562043 63.1533021,5.16246126 65.3732925,7.95460651 L65.3732925,6.3008795 C65.0897613,2.73668253 60.9409897,0 56.34992,0 C51.7580282,0 47.6449038,2.80724779 47.325451,6.3014003 L47.325451,7.95460651 C49.5454414,5.16246126 52.7649208,3.40562043 56.3496461,3.40562043 L79,3.97730326"
                              id="Fill-1"
                            ></path>
                            <path
                              d="M18.2486548,9.09097887 C19.9097031,9.09097887 21.2563466,7.81885274 21.2563466,6.24978191 C21.2563466,4.68124321 19.9097031,3.40911708 18.2486548,3.40911708 C16.5873248,3.40911708 15.2403995,4.68124321 15.2403995,6.24978191 C15.2403995,7.81885274 16.5873248,9.09097887 18.2486548,9.09097887"
                              id="Fill-4"
                            ></path>
                            <path
                              d="M52.7819765,15.83963 C53.6279883,15.0022632 54.7343948,14.5159919 55.9488488,14.5139282 C57.1624924,14.5159919 58.268629,15.0022632 59.115181,15.83963 C59.9552503,16.6793186 60.4868442,17.8427581 60.4868442,19.1426631 L60.4868442,20.6303695 C60.4868442,21.9300165 59.9552503,23.0937139 59.115181,23.9328866 C58.268629,24.7702535 57.1633029,25.2567827 55.9488488,25.2583305 C54.7343948,25.2567827 53.6279883,24.7702535 52.7819765,23.9328866 C51.9416369,23.093198 51.4092328,21.9300165 51.409773,20.6303695 L51.4092328,19.1426631 C51.4092328,17.8427581 51.9416369,16.6793186 52.7819765,15.83963 M49.2528747,27.1603348 C50.9381456,28.8461612 53.322484,29.9257608 55.9488488,29.9244721 L55.9501996,29.9244721 L55.9547914,29.9244721 C58.5768344,29.9244721 60.9590119,28.8438395 62.6434723,27.1603348 C64.3338756,25.4757982 65.3727523,23.1587221 65.3732925,20.6303695 L65.3727523,20.6303695 L65.3727523,19.1426631 C65.3727523,16.6137945 64.3338756,14.2972343 62.6434723,12.6121818 C60.9584716,10.9273873 58.5733226,9.84727176 55.9488488,9.84856043 C53.322484,9.84727176 50.9381456,10.9273873 49.2528747,12.6121818 C47.5627416,14.2972343 46.523865,16.6137945 46.5233247,19.1426631 L46.523865,20.6303695 C46.523865,23.1587221 47.5627416,25.4757982 49.2528747,27.1603348"
                              id="Fill-6"
                            ></path>
                            <path
                              d="M12.0318943,10.7627836 L5.02085492,10.7627836 L5.02085492,6.44591891 L5.02057895,6.44591891 C4.96703934,6.44462382 4.91487964,6.43944337 4.86134007,6.43944337 C2.1769089,6.43944337 0,8.47665332 0,10.6848179 L0,23.3875278 C0.00910725076,26.9982978 3.11743953,29.9148883 6.96401107,29.9244721 L7.5786125,29.9244721 C11.5907704,29.8755169 11.8466014,27.7447999 11.8466014,25.2791672 C11.0148058,25.7720865 9.85459727,25.905742 8.96567438,25.9785273 C8.96567438,25.9785273 6.28676277,26.18445 5.5292051,25.0175548 C5.1961005,24.6305755 4.99215327,23.8954704 4.99215327,23.3875278 L4.99215327,14.9231989 C10.7923681,14.9330417 12.045581,15.1177246 12.0318943,10.7627836"
                              id="Fill-8"
                            ></path>
                            <path
                              d="M20.9806844,25.4138585 C20.6587427,25.0283779 20.4617932,24.0495722 20.4612602,23.5432577 L20.4612602,14.1127963 L20.4612602,13.5186966 C20.2533839,12.1371113 18.8576814,11.3382654 15.7952377,11.3643428 C15.7438017,11.3648592 15.6931652,11.3676993 15.6417291,11.3692485 L15.6414626,11.3692485 L15.6414626,14.1127963 L15.6414626,24.5261946 C15.6505239,28.1261651 18.2207273,29.7886632 20.7871995,29.9244721 L21.8087248,29.922923 C24.0871019,29.8201626 24.4788686,28.4465813 24.4644772,26.1321485 C24.4644772,26.1321485 21.7119824,26.5775297 20.9806844,25.4138585"
                              id="Fill-10"
                            ></path>
                            <path
                              d="M37.6281505,29.9244721 C38.0011535,29.9244721 38.3663294,29.8932583 38.7207094,29.8377957 C39.5198859,29.7124244 40.7776243,29.4523952 41.431324,29.0850522 C43.0483003,28.1777873 44.158403,26.8727396 44.1157587,24.3586072 L44.1157587,22.4641082 L44.1157587,21.8710453 C44.0064486,21.1526112 43.56759,20.5938579 42.7384541,20.2249671 C41.9738248,19.8841946 40.8780273,19.7059404 39.3900636,19.7185807 C39.3382426,19.7185807 39.2866916,19.7216763 39.2351405,19.723482 L39.2343308,19.723482 L39.2343308,19.8599458 L39.2343308,22.4641082 L39.2343308,25.2578752 L39.2343308,25.4232311 C38.8759024,25.932971 37.7053421,25.8519698 36.8602824,25.8519698 C35.0028244,25.8519698 33.3464425,25.1118667 32.2622506,23.955923 C31.4431013,23.0814197 30.9508021,21.9688143 30.9508021,20.7566341 C30.9508021,20.7298057 30.9535011,20.7045251 30.953771,20.6782126 C30.953771,20.6617028 30.9508021,20.6464828 30.9508021,20.630231 L30.9508021,19.1428016 C30.9508021,18.6175837 31.0479664,18.1155827 31.2182739,17.6453115 C31.460375,16.9769227 31.8563196,16.3743152 32.3764187,15.8764417 C32.6571156,15.6078995 32.9702007,15.3241374 33.3078467,15.0610125 C33.7637093,14.705536 34.2670745,14.391076 34.802288,14.203535 C34.9064698,14.1669039 35.0111913,14.1336264 35.1178022,14.1078298 C35.1205012,14.1070559 35.12374,14.106024 35.1267089,14.1052501 C35.9777064,13.8686957 36.9223596,13.7366173 37.9188338,13.7366173 C39.8507845,13.7366173 41.5924551,14.2324272 42.823743,15.0259292 C43.1559909,15.2330756 43.4669168,15.4598273 43.7478835,15.7105698 L43.7478835,15.5281882 L43.7478835,15.0316045 L43.7478835,14.2401661 C43.6199504,12.0294013 42.1033775,10.5587396 40.1795237,10.0497736 C39.6864148,9.919243 38.1401525,9.84856045 37.6092574,9.84856045 L36.3072555,9.84856045 C30.9424352,9.85758923 26.0785509,14.0152202 26.0691044,19.1428016 L26.0691044,20.630231 C26.0785509,25.7575545 30.4285438,29.9154433 35.7930942,29.9244721 L37.6281505,29.9244721 Z"
                              id="Fill-12"
                            ></path>
                          </g>
                        </g>
                        <path
                          d="M22.6753759,38.5657141 C28.1064653,38.5657141 32.9857197,41.4368719 36.3499203,46 L36.3499203,43.2973583 C35.9202537,37.4724868 29.6331543,33 22.675791,33 C15.7171818,33 9.48410271,37.5878098 9,43.2982094 L9,46 C12.3642007,41.4368719 17.2430393,38.5657141 22.6753759,38.5657141 L57,39.5"
                          id="Fill-1"
                          fill-rule="nonzero"
                          transform="translate(33.000000, 39.500000) rotate(-180.000000) translate(-33.000000, -39.500000) "
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <div class="body">
    <div>
      <div>
        <div>
          <div class="mainOrder">
            <div class="backButton">
              <div class="divformulario3" style="padding-bottom: 20px">
                <RouterLink
                  to="/order-details"
                  style="display: block; width: 125px"
                >
                  <a
                    href="#"
                    class="aVolver flex flex-row font-bold"
                    style="width: 125px; text-decoration: none"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6 mx-2.5 font-bold"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span>REGRESAR</span>
                  </a>
                </RouterLink>
              </div>
            </div>

            <div>
              <div>
                <div class="mainCards">
                  <div class="mainCards2 lg:h-[500px]">
                    <div class="mainCards3">
                      <h2 class="cardsH2">
                        Pago con tarjeta de débito o crédito
                      </h2>
                      <br />
                      <p class="cardsP">Ingresa tu tarjeta</p>
                      <div class="mainCardsBox">
                        <div>
                          <div class="mainOrder">
                            <form id="formularioDatos">
                              <div class="formo1 lg:flex flex-col">
                                <div
                                  class="formo11 w-[331px] md:w-[390px] lg:w-[540px]"
                                >
                                  <label class="formo11label">
                                    <span id="span1">Número de la tarjeta</span>
                                    <input
                                      id="codigo"
                                      name="codigo"
                                      type="number"
                                      placeholder="0000 0000 0000 0000"
                                      max="16"
                                      min="16"
                                      inputmode="numeric"
                                    />
                                    <img
                                      class="relative top-[-33px] left-2"
                                      src="../assets/img/card-img.png"
                                      alt="card-img"
                                    />
                                  </label>
                                </div>

                                <div
                                  class="lg:relative top-[-84px] right-[-540px] max-w-[500px]"
                                >
                                  <div class="flex flex-row lg:block">
                                    <div class="formo12 lg:w-[20px]">
                                      <label class="formo12label lg:w-[150px]">
                                        <span>Fecha Vencimiento</span>
                                        <input
                                          v-on:keyup="fvChange"
                                          id="fv"
                                          name="fv"
                                          type="text"
                                          placeholder="MM/AA"
                                          maxlength="5"
                                          minlength="5"
                                          inputmode="numeric"
                                        />
                                        <i>
                                          <svg
                                            class="pr-2"
                                            width="40px"
                                            height="27px"
                                            viewBox="0 0 38 27"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                          >
                                            <g
                                              id="Symbols"
                                              stroke="none"
                                              stroke-width="1"
                                              fill="none"
                                              fill-rule="evenodd"
                                            >
                                              <g
                                                id="FORMULARIO/Metodos_de_pago/Anónimo"
                                                transform="translate(-102.000000, -167.000000)"
                                              >
                                                <g
                                                  id="ICON/TC_FECHA"
                                                  transform="translate(102.000000, 167.000000)"
                                                >
                                                  <rect
                                                    id="Rectangle"
                                                    fill-opacity="0.5"
                                                    fill="#00377D"
                                                    fill-rule="nonzero"
                                                    x="0"
                                                    y="0"
                                                    width="38"
                                                    height="23"
                                                    rx="2"
                                                  ></rect>
                                                  <rect
                                                    id="Rectangle-Copy-3"
                                                    fill="#FFFFFF"
                                                    fill-rule="nonzero"
                                                    x="3"
                                                    y="2.66666667"
                                                    width="6.60377358"
                                                    height="6.66666667"
                                                    rx="2"
                                                  ></rect>
                                                  <rect
                                                    id="Rectangle-Copy-8"
                                                    fill="#FFFFFF"
                                                    fill-rule="nonzero"
                                                    x="3"
                                                    y="12"
                                                    width="33.0188679"
                                                    height="2.66666667"
                                                    rx="1"
                                                  ></rect>
                                                  <rect
                                                    id="Rectangle-Copy-9"
                                                    fill="#FFFFFF"
                                                    fill-rule="nonzero"
                                                    x="3"
                                                    y="16"
                                                    width="15.1886792"
                                                    height="2.8"
                                                    rx="1"
                                                  ></rect>
                                                  <g
                                                    id="Group"
                                                    stroke-width="1"
                                                    fill-rule="evenodd"
                                                    transform="translate(21.792453, 4.000000)"
                                                    fill="#00377D"
                                                  >
                                                    <path
                                                      d="M2,0 L6.60377358,0 L6.60377358,6.25 L2,6.25 C0.8954305,6.25 1.51397657e-15,5.3545695 8.8817842e-16,4.25 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z"
                                                      id="Rectangle-Copy-5"
                                                      fill-opacity="0.5"
                                                      fill-rule="nonzero"
                                                    ></path>
                                                    <path
                                                      d="M6.60377358,0 L11.2075472,0 C12.3121167,-2.02906125e-16 13.2075472,0.8954305 13.2075472,2 L13.2075472,4.25 C13.2075472,5.3545695 12.3121167,6.25 11.2075472,6.25 L6.60377358,6.25 L6.60377358,0 Z"
                                                      id="Rectangle-Copy-7"
                                                      fill-opacity="0.8"
                                                      fill-rule="nonzero"
                                                    ></path>
                                                  </g>
                                                  <text
                                                    id="11/21"
                                                    font-family=".AppleSystemUIFont"
                                                    font-size="5"
                                                    font-weight="normal"
                                                    fill="#000000"
                                                  >
                                                    <tspan
                                                      x="19.4453823"
                                                      y="19.3333333"
                                                    >
                                                      11/21
                                                    </tspan>
                                                  </text>
                                                  <circle
                                                    id="Oval"
                                                    stroke="#0B0B0B"
                                                    stroke-width="1"
                                                    fill-rule="nonzero"
                                                    cx="25.7857143"
                                                    cy="17.3333333"
                                                    r="9"
                                                  ></circle>
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </i>
                                      </label>
                                    </div>

                                    <div
                                      class="formo12 w-[171px] lg:relative top-[-65px] right-[-160px] w-[20px]"
                                    >
                                      <label
                                        class="formo13label w-[145px] md:w-[400px] lg:w-[100px]"
                                      >
                                        <span>CVV/CVC</span>
                                        <input
                                          class="w-[145px] md:w-[290px] lg:w-[148px]"
                                          id="cvv"
                                          name="cvv"
                                          type="number"
                                          placeholder="000"
                                          max="3"
                                          inputmode="numeric"
                                          required
                                        />
                                        <i class="pr-4">
                                          <svg
                                            width="38px"
                                            height="24px"
                                            viewBox="0 0 38 24"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                          >
                                            <g
                                              id="Symbols"
                                              stroke="none"
                                              stroke-width="1"
                                              fill="none"
                                              fill-rule="evenodd"
                                            >
                                              <g
                                                id="FORMULARIO/Metodos_de_pago/Anónimo"
                                                transform="translate(-239.000000, -167.000000)"
                                              >
                                                <g
                                                  id="ICON/TC_CVV"
                                                  transform="translate(239.000000, 167.000000)"
                                                >
                                                  <rect
                                                    id="Rectangle"
                                                    fill-opacity="0.5"
                                                    fill="#00377D"
                                                    fill-rule="nonzero"
                                                    x="0"
                                                    y="0"
                                                    width="38"
                                                    height="24"
                                                    rx="2"
                                                  ></rect>
                                                  <rect
                                                    id="Rectangle"
                                                    fill-opacity="0.5"
                                                    fill="#00377D"
                                                    fill-rule="nonzero"
                                                    x="0"
                                                    y="3.01428571"
                                                    width="38"
                                                    height="7"
                                                  ></rect>
                                                  <rect
                                                    id="Rectangle-Copy-3"
                                                    fill="#FFFFFF"
                                                    fill-rule="nonzero"
                                                    x="5"
                                                    y="9.55714286"
                                                    width="29.7647059"
                                                    height="9"
                                                  ></rect>
                                                  <text
                                                    id="123"
                                                    font-family=".AppleSystemUIFont"
                                                    font-size="7"
                                                    font-weight="normal"
                                                    fill="#000000"
                                                  >
                                                    <tspan
                                                      x="21.8767787"
                                                      y="18.4"
                                                    >
                                                      123
                                                    </tspan>
                                                  </text>
                                                  <circle
                                                    id="Oval"
                                                    stroke="#000000"
                                                    stroke-width="1"
                                                    fill-rule="nonzero"
                                                    cx="28.1607143"
                                                    cy="14.4"
                                                    r="8.5"
                                                  ></circle>
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </i>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div class="flex flex-row lg:block">
                                  <div
                                    class="formo14 w-[113px] md:w-[185px] lg:relative top-[-214px] right-[-860px] w-[100px]"
                                  >
                                    <label class="formo13label">
                                      <span class="z-20">Cuotas</span>
                                      <select
                                        class="absolute z-10"
                                        style="padding-right: 0px"
                                      >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                        <option value="32">32</option>
                                        <option value="33">33</option>
                                        <option value="34">34</option>
                                        <option value="35">35</option>
                                        <option value="36">36</option>
                                      </select>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6 z-0"
                                        color="#00c8ff"
                                        style="
                                          position: absolute;
                                          top: 10px;
                                          right: 15px;
                                        "
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                        />
                                      </svg>
                                    </label>
                                  </div>

                                  <div class="formo15 lg:relative top-[-170px]">
                                    <label class="formo15label">
                                      <span>Nombre del titular</span>
                                      <input
                                        class="w-[202px] md:w-[390px] lg:w-[526px]"
                                        id="nombre"
                                        name="nombre"
                                        type="text"
                                        placeholder="Nombre y Apellido"
                                        maxlength="40"
                                      />
                                    </label>
                                  </div>
                                </div>

                                <div
                                  class="flex flex-row lg:relative top-[-235px] right-[-540px] max-w-[575px]"
                                >
                                  <div class="formo16 w-[115px]">
                                    <label
                                      class="formo16label w-[100px] md:w-[188px]"
                                    >
                                      <span class="z-20">Documento</span>
                                      <select
                                        class="absolute z-10 w-[101px] md:w-[188px]"
                                      >
                                        <option value="CC">CC</option>
                                        <option value="CE">CE</option>
                                        <option value="TI">TI</option>
                                      </select>

                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6 z-0"
                                        color="#00c8ff"
                                        style="
                                          position: absolute;
                                          top: 10px;
                                          right: 15px;
                                        "
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                        />
                                      </svg>
                                    </label>
                                  </div>

                                  <div
                                    class="formo17 md:relative right-[-10px] lg:relative right-[-10px]"
                                  >
                                    <label class="formo17label">
                                      <span>Número de identificación</span>
                                      <input
                                        class="w-[202px] md:w-[390px] lg:w-[289px]"
                                        id="cedula"
                                        name="cedula"
                                        type="number"
                                        placeholder="Nro. Documento"
                                        maxlength="10"
                                        minlength="7"
                                        inputmode="numeric"
                                      />
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div
                                class="finDelForm flex flex-col md:flex-row lg:relative top-[-234px]"
                              >
                                <div class="fdf1">
                                  <label class="fdf1label">
                                    <span
                                      >Celular del titular de la tarjeta</span
                                    >
                                    <input
                                      class="w-[288px] lg:w-[526px]"
                                      id="telefono"
                                      name="telefono"
                                      type="number"
                                      placeholder="Número de celular"
                                      maxlength="10"
                                      minlength="10"
                                      inputmode="numeric"
                                    />
                                  </label>
                                </div>
                                <div
                                  class="fdf1"
                                  style="padding-right: 0px !important"
                                >
                                  <label class="fdf2label">
                                    <span>Correo electrónico</span>
                                    <input
                                      class="w-[288px] md:w-[340px] lg:w-[490px] pl-2"
                                      id="email"
                                      name="email"
                                      type="email"
                                      placeholder="Correo electrónico"
                                    />
                                  </label>
                                </div>
                              </div>
                            </form>
                            <div class="divABAJOHPTA lg:relative top-[-240px]">
                              <em class="emabajobtn"
                                >Al presionar CONSULTAR estás aceptando los
                                <a href="#">términos y condiciones</a>
                              </em>
                            </div>
                            <em
                              class="emCajaButon absolute right-5 lg:top-[430px]"
                            >
                              <div class="flexBtn pb-6">
                                <RouterLink to="/order-details">
                                  <button
                                    type="submit"
                                    class="cancel font-bold"
                                  >
                                    Cancel
                                  </button>
                                </RouterLink>

                                <RouterLink to="/factura">
                                  <button
                                    type="submit"
                                    id="stepThree"
                                    class="conti font-bold"
                                  >
                                    Next
                                  </button>
                                </RouterLink>
                              </div>
                            </em>
                            <div class="h-[40px]"></div>
                          </div>
                          <em class="emVacio"></em>
                        </div>
                      </div>
                      <em class="emVacio"></em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="footer0">
      <div class="marginales">
        <h5 class="sornerh5">
          <img src="../assets/img/segurata.svg" alt="" />
          Pago seguro
          <img src="../assets/img/visita.svg" alt="" />
          <img src="../assets/img/master.svg" alt="" />
          <img src="../assets/img/dinner.svg" alt="" />
        </h5>
      </div>
    </div>

    <div class="footer">
      <div class="contenedorF">
        <div class="contenedorF2 flex flex-col md:flex-row">
          <div class="leftF">
            <p class="">
              © Tigo Colombia 2021. Servicios móviles prestados por Colombia
              Móvil S.A. E.S.P. | Servicios fijos prestados por UNE EPM
              Telecomunicaciones S.A. Todos los derechos reservados.
              <a href="#">Términos y condiciones</a> |
              <a href="#">Política de protección de datos personales</a>
            </p>
          </div>
          <div class="rightF flex flex-row mt-6 ml-10">
            <a href="#">
              <img src="../assets/img/fb.svg" alt="" />
            </a>
            <a href="#">
              <img src="../assets/img/ig.svg" alt="" />
            </a>
            <a href="#">
              <img src="../assets/img/twt.svg" alt="" />
            </a>
            <a href="#">
              <img src="../assets/img/yt.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  min-height: calc(-212px + 100vh);
  padding: 1px 0px;
}

.footer0 {
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;
}

.marginales {
  max-width: 1170px;
  margin: 0px auto;
}

.sornerh5 {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  font-weight: normal;
  display: flex;
  align-items: center;
  font-size: 14px;
}

.sornerh5 img {
  width: 30px;
  margin: 3px;
}

.footer {
  background: #00377d;
  padding: 12px 0;
}

.contenedorF {
  max-width: 1400px;
  margin: auto;
  width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
  box-sizing: border-box;
}

.contenedorF2 {
  display: flex;
  padding: 1rem 2rem;
  margin: auto;
  align-items: center;
}

.leftF {
  width: 65%;
}

.leftF p {
  text-align: left;
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-size: 12px;
  line-height: 16px;
  margin-top: 0;
  -webkit-font-smoothing: antialiased;
}

.leftF a {
  color: #00c8ff;
  -webkit-font-smoothing: antialiased;
  text-decoration: underline;
}

.rightF {
  width: 35%;
  text-align: right;
}

.formo13label span {
  position: absolute;
  top: -3px;
  left: 0;
  transition: 0.5s all;
  font-size: 0.75rem;
  transform: translate(12px, -10px) scale(1);
  background-color: #fff;
  padding: 0 3px;
  line-height: 1.14rem;
  color: rgba(86, 86, 86, 0.8);
  top: 0;
}

.formo13label input {
  appearance: none;
  -ms-appearance: none;
  background: transparent;
  border: 1px solid #565656;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 12px;
  color: #565656;
  display: block;
  font-size: 1rem;
  font-family: "robotoregular", sans-serif, sans-serif;
  line-height: 1.8rem;
  outline: none;
  min-width: 200px;
  height: 45px;
  margin: 0;
  max-width: 100%;
  min-width: auto;
  padding-right: 3rem;
  color: rgb(0, 0, 10);
}

.formo13label i {
  right: 0.8rem;
  position: absolute !important;
  top: 7px !important;
  font-size: 30px !important;
}

.formo14 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}
.formo14 {
  padding-right: 0px;
  box-sizing: border-box;
  flex: 1;
  padding-right: 1rem;
}

.formo13label {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  font-family: "robotoregular", sans-serif, sans-serif;
  color: #565656;
  display: table;
  position: relative;
  margin: 20px 0;
  margin-top: 0px;
  width: 100%;
  box-sizing: border-box;
}

.formo13label span {
  position: absolute;
  top: -3px;
  left: 0;
  transition: 0.5s all;
  font-size: 0.75rem;
  transform: translate(12px, -10px) scale(1);
  background-color: #fff;
  padding: 0 3px;
  color: rgba(86, 86, 86, 0.8);
  line-height: 1.14rem;
  color: rgba(86, 86, 86, 0.8);
  top: 0;
}

.formo13label select {
  appearance: none;
  -ms-appearance: none;
  background: transparent;
  border: 1px solid #565656;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 12px;
  color: #565656;
  display: block;
  font-size: 1rem;
  font-family: "robotoregular", sans-serif, sans-serif;
  line-height: 1.8rem;
  outline: none;
  min-width: 200px;
  height: 45px;
  width: auto;
  min-width: auto;
  width: 100%;
  border: 1px solid #565656;
  color: #00000a;
  padding-right: 2.5rem;
}

@media only screen and (max-width: 768px) .formo15 {
  padding-right: 0;
}

.formo15 {
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
}
.formo15 {
  padding-right: 1rem;
  box-sizing: border-box;
  flex: 1;
}

.formo15label {
  font-family: "robotoregular", sans-serif, sans-serif;
  color: #565656;
  display: table;
  position: relative;
  margin: 20px 0;
  display: grid;
  margin-right: 15px;
  margin-top: 0px;
  width: 202px;
  box-sizing: border-box;
}

.formo15label span {
  position: absolute;
  top: -3px;
  left: 0;
  transition: 0.5s all;
  font-size: 0.75rem;
  transform: translate(12px, -10px) scale(1);
  background-color: #fff;
  padding: 0 3px;
  color: rgba(86, 86, 86, 0.8);
  line-height: 1.14rem;
}

.formo15label input {
  appearance: none;
  -ms-appearance: none;
  background: transparent;
  border: 1px solid #565656;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 12px;
  color: #565656;
  display: block;
  font-size: 1rem;
  font-family: "robotoregular", sans-serif, sans-serif;
  line-height: 1.8rem;
  outline: none;
  min-width: 200px;
  height: 45px;
  margin: 0;
  max-width: 100%;
  min-width: auto;
  border: 1px solid rgb(86, 86, 86);
  color: rgb(0, 0, 10);
}

.formo16 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}

.formo16 {
  padding-right: 1rem;
  box-sizing: border-box;
  flex: 1;
}

.formo16label {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  font-family: "robotoregular", sans-serif, sans-serif;
  color: #565656;
  display: table;
  position: relative;
  margin: 20px 0;
  margin-top: 0px;
  box-sizing: border-box;
}

.formo16label span {
  position: absolute;
  top: -3px;
  left: 0;
  transition: 0.5s all;
  font-size: 0.75rem;
  transform: translate(12px, -10px) scale(1);
  background-color: #fff;
  padding: 0 3px;
  color: rgba(86, 86, 86, 0.8);
  line-height: 1.14rem;
}

.formo16label select {
  appearance: none;
  -ms-appearance: none;
  background: transparent;
  border: 1px solid #565656;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 12px;
  color: #565656;
  display: block;
  font-size: 1rem;
  font-family: "robotoregular", sans-serif, sans-serif;
  line-height: 1.8rem;
  outline: none;
  min-width: 200px;
  height: 45px;
  margin: 0;
  min-width: auto;
  border: 1px solid #565656;
  color: #00000a;
}

.formo16label option {
  color: #565656;
  padding-top: 1rem;
  padding-bottom: 1rem;
  outline: none;
}

.formo17 {
  flex: 0 0 66.66667%;
  max-width: 290px;
}
.formo17 {
  box-sizing: border-box;
  flex: 1;
}

.formo17label {
  font-family: "robotoregular", sans-serif, sans-serif;
  color: #565656;
  display: table;
  position: relative;
  margin: 20px 0;
  display: grid;
  margin-right: 15px;
  margin-top: 0px;
  width: 100%;
  box-sizing: border-box;
}

.formo17label span {
  position: absolute;
  top: -3px;
  left: 0;
  transition: 0.5s all;
  font-size: 0.75rem;
  transform: translate(12px, -10px) scale(1);
  background-color: #fff;
  padding: 0 3px;
  color: rgba(86, 86, 86, 0.8);
  line-height: 1.14rem;
}

.formo17label input {
  appearance: none;
  -ms-appearance: none;
  background: transparent;
  border: 1px solid #565656;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 12px;
  color: #565656;
  display: block;
  font-size: 1rem;
  font-family: "robotoregular", sans-serif, sans-serif;
  line-height: 1.8rem;
  outline: none;
  min-width: 200px;
  height: 45px;
  margin: 0;
  max-width: 100%;
  min-width: auto;
  border: 1px solid rgb(86, 86, 86);
  color: rgb(0, 0, 10);
}

.finDelForm {
  display: flex;
  flex-wrap: wrap;
}

@media (min-width: 768px) .fdf1 {
  flex: 0 0 50%;
  max-width: 50%;
}

@media (min-width: 480px) .fdf1 {
  flex: 0 0 50%;
  max-width: 50%;
}
.fdf1 {
  flex: 0 0 100%;
  max-width: 100%;
}
@media (min-width: 1280px) .fdf1 {
  flex: 1;
}
@media (min-width: 1024px) .fdf1 {
  flex: 1;
}
@media (min-width: 768px) .fdf1 {
  flex: 1;
}
@media (min-width: 480px) .fdf1 {
  flex: 1;
}
.fdf1 {
  padding-right: 0 !important;
  box-sizing: border-box;
  flex: 1;
}

.fdf1label {
  font-family: "robotoregular", sans-serif, sans-serif;
  color: #565656;
  display: table;
  position: relative;
  margin: 20px 0;
  display: grid;
  margin-right: 15px;
  margin-top: 0px;
  width: 100%;
  box-sizing: border-box;
}

.fdf1label span {
  position: absolute;
  top: -3px;
  left: 0;
  transition: 0.5s all;
  font-size: 0.75rem;
  transform: translate(12px, -10px) scale(1);
  background-color: #fff;
  padding: 0 3px;
  color: rgba(86, 86, 86, 0.8);
  line-height: 1.14rem;
}

.fdf1label input {
  appearance: none;
  -ms-appearance: none;
  background: transparent;
  border: 1px solid #565656;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 12px;
  color: #565656;
  display: block;
  font-size: 1rem;
  font-family: "robotoregular", sans-serif, sans-serif;
  line-height: 1.8rem;
  outline: none;
  min-width: 200px;
  height: 45px;
  margin: 0;
  max-width: 100%;
  min-width: auto;
  border: 1px solid rgb(86, 86, 86);
  color: rgb(0, 0, 10);
}

@media (min-width: 768px) .fdf1 {
  flex: 0 0 50%;
  max-width: 50%;
}

@media (min-width: 480px) .fdf1 {
  flex: 0 0 50%;
  max-width: 50%;
}
.fdf1 {
  flex: 0 0 100%;
  max-width: 100%;
}
@media (min-width: 1280px) .fdf1 {
  flex: 1;
}
@media (min-width: 1024px) .fdf1 {
  flex: 1;
}
@media (min-width: 768px) .fdf1 {
  flex: 1;
}
@media (min-width: 480px) .fdf1 {
  flex: 1;
}
.fdf1 {
  padding-right: 1rem;
  box-sizing: border-box;
  flex: 1;
}

.fdf2label {
  font-family: "robotoregular", sans-serif, sans-serif;
  color: #565656;
  display: table;
  position: relative;
  margin: 20px 0;
  display: grid;
  margin-right: 15px;
  margin-top: 0px;
  width: 288px;
  box-sizing: border-box;
}

.fdf2label span {
  position: absolute;
  top: -3px;
  left: 0;
  transition: 0.5s all;
  font-size: 0.75rem;
  transform: translate(12px, -10px) scale(1);
  background-color: #fff;
  padding: 0 3px;
  color: rgba(86, 86, 86, 0.8);
  line-height: 1.14rem;
  color: rgba(86, 86, 86, 0.8);
  top: 0;
}

.fdf2label input {
  appearance: none;
  -ms-appearance: none;
  background: transparent;
  border: 1px solid #565656;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 12px;
  color: #565656;
  display: block;
  font-size: 1rem;
  font-family: "robotoregular", sans-serif, sans-serif;
  line-height: 1.8rem;
  outline: none;
  min-width: 200px;
  height: 45px;
  margin: 0;
  max-width: 100%;
  min-width: auto;
  border: 1px solid rgb(86, 86, 86);
  color: rgb(0, 0, 10);
}

.emabajobtn {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  color: #565656;
  font-size: 0.75rem;
  font-style: normal;
}

.emabajobtn a {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  color: rgb(0, 200, 255);
  text-decoration: none;
  outline: none;
  cursor: pointer;
}

.emCajaButon {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  color: #565656;
  font-size: 0.75rem;
  font-style: normal;
}

.flexBtn {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.cancel {
  background: transparent;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  vertical-align: middle;
  line-height: 34px;
  border-radius: 50px;
  font-size: 0.875rem;
  color: #00c8ff;
  display: inline-block;
  border: 0;
  border: 1px solid transparent;
  transition: 0.3s;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0;
  position: relative;
  width: auto;
  margin: 0;
  padding: 0 18px;
  font-size: 0.875rem;
}

.conti:disabled {
  cursor: initial;
  background-color: rgba(0, 200, 255, 0.3);
  color: #fff;
}

.conti {
  background: transparent;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  vertical-align: middle;
  line-height: 34px;
  border-radius: 50px;
  font-size: 0.875rem;
  color: #00c8ff;
  display: inline-block;
  border: 0;
  border: 1px solid transparent;
  transition: 0.3s;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0;
  position: relative;
  width: auto;
  margin: 0;
  background-color: #00c8ff;
  color: #fff;
  padding: 0 18px;
}
.formo13label {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  font-family: "robotoregular", sans-serif, sans-serif;
  color: #565656;
  display: table;
  position: relative;
  margin: 20px 0;
  margin-top: 0px;
  box-sizing: border-box;
}

.formo12 {
  flex: 0 0 50%;
  max-width: 50%;
}
.formo12 {
  padding-right: 1rem;
  box-sizing: border-box;
  flex: 1;
}

.formo12label {
  font-family: "robotoregular", sans-serif, sans-serif;
  color: #565656;
  display: table;
  position: relative;
  margin: 20px 0;
  display: grid;
  margin-right: 15px;
  margin-top: 0px;
  box-sizing: border-box;
}

.formo12label span {
  position: absolute;
  top: -3px;
  left: 0;
  transition: 0.5s all;
  font-size: 0.75rem;
  transform: translate(12px, -10px) scale(1);
  background-color: #fff;
  padding: 0 3px;
  color: rgba(86, 86, 86, 0.8);
  line-height: 1.14rem;
}

.formo12label input {
  appearance: none;
  -ms-appearance: none;
  background: transparent;
  border: 1px solid #565656;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 12px;
  color: #565656;
  display: block;
  font-size: 1rem;
  font-family: "robotoregular", sans-serif, sans-serif;
  line-height: 1.8rem;
  outline: none;
  min-width: 200px;
  height: 45px;
  width: auto;
  margin: 0;
  max-width: 100%;
  width: 100%;
  min-width: auto;
  padding-right: 3rem;
  border: 1px solid rgb(86, 86, 86);
  color: rgb(0, 0, 10);
}

.formo12label i {
  right: 0.8rem;
  position: absolute !important;
  top: 10px !important;
  font-size: 30px !important;
}
i {
  font-family: "tigo-icons-pack1";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.formo12 {
  flex: 0 0 50%;
  max-width: 50%;
}

.formo12 {
  padding-right: 1rem;
  box-sizing: border-box;
  flex: 1;
}

.formo13label {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  font-family: "robotoregular", sans-serif, sans-serif;
  color: #565656;
  display: table;
  position: relative;
  margin: 20px 0;
  margin-top: 0px;
  width: 100%;
  box-sizing: border-box;
}

.mainCards {
  margin: 0 6px;
}

.mainCards2 {
  background-color: #fff;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid transparent;
  display: inline-block;
  position: relative;
  padding: 12px;
  max-width: 1170px;
  width: 100%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.17), 0 10px 10px 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) .mainCards3 {
  padding: 5px;
}
.mainCards3 {
  padding: 24px;
}

@media (max-width: 768px) .cardsH2 {
  font-size: 1.5rem;
}
.cardsH2 {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  font-size: 1.75rem;
  font-weight: normal;
}

.cardsP {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  padding-right: 30px;
  display: flex;
  align-items: center;
  place-content: center flex-start;
  color: rgb(0, 55, 125);
  font-weight: 500;
  margin: 0px 0.2rem;
}

.mainCardsBox {
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 768px) .mainOrder {
  overflow-x: scroll;
}

.mainOrder {
  max-width: 1170px;
  margin: 0 auto;
  margin-top: 30px;
}

@media (max-width: 768px) .mainOrder {
  overflow-x: scroll;
}

.mainOrder {
  max-width: 1170px;
  margin: 0 auto;
  margin-top: 30px;
}

.formo11 {
  flex: 0 0 100%;
  max-width: 100%;
}
@media only screen and (max-width: 768px) .formo11 {
  padding-right: 0;
}
.formo11 {
  padding-right: 1rem;
  box-sizing: border-box;
  flex: 1;
}

.formo11label {
  font-family: "robotoregular", sans-serif, sans-serif;
  color: #565656;
  display: table;
  position: relative;
  margin: 20px 0;
  display: grid;
  margin-right: 15px;
  margin-top: 0px;
  width: 100%;
  box-sizing: border-box;
}

.formo11label span {
  position: absolute;
  top: -3px;
  left: 0;
  transition: 0.5s all;
  font-size: 0.75rem;
  transform: translate(12px, -10px) scale(1);
  background-color: #fff;
  padding: 0 3px;
  color: rgba(86, 86, 86, 0.8);
  line-height: 1.14rem;
}

.formo11label input {
  appearance: none;
  -ms-appearance: none;
  background: transparent;
  border: 1px solid #565656;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 12px;
  color: #565656;
  display: block;
  font-size: 1rem;
  font-family: "robotoregular", sans-serif, sans-serif;
  line-height: 1.8rem;
  outline: none;
  min-width: 200px;
  height: 45px;
  margin: 0;
  max-width: 100%;
  min-width: auto;
  padding-left: 3rem;
  border: 1px solid rgb(86, 86, 86);
  color: rgb(0, 0, 10);
}

.formo11label i {
  font-family: "tigo-icons-pack1";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  font-size: 30px !important;
  left: 0.8rem;
  position: absolute !important;
  top: 3px !important;
}

.backButton {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.divformulario3 {
  flex: 0 0 100%;
  max-width: 100%;
}

.divformulario3 {
  box-sizing: border-box;
  flex: 1;
}

.aVolver {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  color: #00c8ff;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
}
.nav2 {
  box-sizing: border-box;
  padding: 12px 100px;
  background: #00377d;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 12px 3rem;
}

.div2header {
  max-width: 1400px;
  margin-left: 0;
  width: 100%;
  padding-left: 0;
  padding-right: 3rem;
  box-sizing: border-box;
}

.centro {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.left {
  margin: 0 24px 0 10px;
  display: flex;
  align-items: center;
}
</style>
