<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';
import { usePriceStore } from '../store/price.store';


const priceStore = usePriceStore();

const today = ref(new Date());

const tomorrow = computed(() => {
  const tomorrowDate = new Date(today.value);
  tomorrowDate.setDate(today.value.getDate() + 1);
  return tomorrowDate;
});

const formattedDate = computed(() => {
  return tomorrow.value.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});


</script>

<template>
  <header class="h-[56px] lg:h-[74px]">
    <nav class="nav2 h-[56px] pl-0 lg:h-[74px]">
      <div class="div2header">
        <div class="centro">
          <div class="left">
            <svg
              viewBox="0 0 66 46"
              xmlns="http://www.w3.org/2000/svg"
              class="svgTig relative right-8 bottom-2 mt-[13px]"
              height="46px"
              version="1.1"
              width="56px"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>logo</title>
              <g
                id="Page-1"
                fill="none"
                fill-rule="evenodd"
                stroke="none"
                stroke-width="1"
              >
                <g
                  id="at-button"
                  fill="#FAFAFA"
                  transform="translate(-49.000000, -18.000000)"
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
                <RouterLink to="/" style="display: block; text-decoration: none; width: 125px;">
                  <a href="#" class="aVolver flex flex-row font-bold" style="width: 125px;"
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
            <div class="payments">
              <div class="cajaRadio">
                <div class="cajaHptaaas">
                  <div>
                    <div class="cajaSaldo">
                      <div class="cajaSaldo2">
                        <div class="cajaSaldo3">
                          <div class="saldoArriba">
                            <div style="padding: 24px 24px 0 24px">
                              <h4 class="h4saldoArriba">Total a pagar</h4>
                              <br />
                              <h1 class="h1saldoArriba" id="totalAPagarGrande">
                                ${{ priceStore.price }}
                              </h1>
                            </div>
                          </div>
                          <div>
                            <div class="saldoAbajo">
                              <summary class="summary">
                                <div class="detalles">
                                  <h4 class="flex flex-row justify-between">
                                    Detalles del pago
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6"
                                      color="#00c8ff"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                      />
                                    </svg>
                                  </h4>
                                </div>
                              </summary>
                              <div
                                style="
                                  border-bottom: 1px solid rgba(86, 86, 86, 0.2);
                                "
                              >
                                <div
                                  style="
                                    padding-left: 24px;
                                    padding-bottom: 10px;
                                  "
                                >
                                  <div class="cajaDetallesPago">
                                    <div class="iconosDetalles">
                                      <svg
                                        viewBox="0 0 555 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon-ref-home pt-mobile"
                                        fill="none"
                                      >
                                        <path
                                          d="M430.24 20.1728L550.024 236.672C553.287 242.576 555 249.231 555 256C555 262.769 553.287 269.424 550.024 275.328L430.265 491.827C426.884 497.951 421.955 503.049 415.984 506.595C410.014 510.141 403.219 512.007 396.3 512H158.7C151.786 512.002 144.996 510.134 139.03 506.588C133.064 503.042 128.139 497.947 124.76 491.827L4.9757 275.328C1.71328 269.424 0 262.769 0 256C0 249.231 1.71328 242.576 4.9757 236.672L124.76 20.1728C128.139 14.0529 133.064 8.95741 139.03 5.41159C144.996 1.86572 151.786 -0.00228032 158.7 2.08906e-06H396.3C403.214 -0.00228032 410.004 1.86572 415.97 5.41159C421.936 8.95741 426.861 14.0529 430.24 20.1728Z"
                                          fill="#00377D"
                                        ></path>
                                        <path
                                          d="M290.589 116.324L429.255 264.666C434.973 270.54 434.973 279.353 429.255 285.228C426.396 288.165 423.537 289.634 419.25 289.634H394.946V392.445C394.946 401.257 389.228 407.132 380.651 407.132H323.469C314.891 407.132 309.173 401.257 309.173 392.445V326.352C309.173 321.946 306.314 319.008 302.026 319.008H259.14C254.851 319.008 251.992 321.946 251.992 326.352V392.445C251.992 401.257 246.274 407.132 237.697 407.132H180.515C171.938 407.132 166.219 401.257 166.219 392.445V289.634H141.917C133.34 289.634 127.622 283.759 127.622 274.946C127.622 270.54 129.052 267.602 131.91 264.666L270.576 116.324C276.294 111.917 284.871 110.449 290.589 116.324ZM282.012 129.542C280.583 128.073 279.153 128.073 277.723 129.542L149.065 269.071L147.635 270.54C149.065 273.477 150.494 274.946 151.924 274.946H173.367C177.656 274.946 180.515 277.884 180.515 282.29V385.101C180.515 389.507 183.374 392.445 187.663 392.445H230.549C234.838 392.445 237.697 389.507 237.697 385.101V319.008C237.697 310.196 243.415 304.321 251.992 304.321H309.173C317.751 304.321 323.469 310.196 323.469 319.008V385.101C323.469 389.507 326.328 392.445 330.616 392.445H373.503C377.791 392.445 380.651 389.507 380.651 385.101V282.29C380.651 277.884 383.511 274.946 387.798 274.946H409.241C410.671 274.946 410.671 274.946 410.671 273.477C412.102 272.009 412.102 270.54 410.671 269.071L282.012 129.542C282.012 129.542 282.012 131.011 282.012 129.542Z"
                                          fill="white"
                                          clip-rule="evenodd"
                                          fill-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div class="infoDetalles">
                                      <div class="misma">
                                        <div class="mismadiv">
                                          <h5 class="mismah5">
                                            <span>Nombre titular:</span>
                                          </h5>
                                        </div>
                                        <div class="mismadiv">
                                          <h5 class="difh5">
                                            <span id="apiDocumento"></span>
                                          </h5>
                                        </div>
                                      </div>
                                      <div class="misma">
                                        <div class="mismadiv">
                                          <h5 class="mismah5">
                                            <span>Referente de pago:</span>
                                          </h5>
                                        </div>
                                        <div class="mismadiv">
                                          <h5 class="difh5">
                                            <span>*******896</span>
                                          </h5>
                                        </div>
                                      </div>
                                      <div class="misma">
                                        <div class="mismadiv">
                                          <h5 class="mismah5">
                                            <span>Fecha límite de pago:</span>
                                          </h5>
                                        </div>
                                        <div class="mismadiv">
                                          <h5 class="difh5">
                                            <span> {{ formattedDate }}</span>
                                          </h5>
                                        </div>
                                      </div>
                                      <div class="misma">
                                        <div class="mismadiv">
                                          <h5 class="mismah5">
                                            <span>Valor Factura:</span>
                                          </h5>
                                        </div>
                                        <div class="mismadiv">
                                          <h5 class="difh5">
                                            <span id="totalAPagarPequeno"
                                              >${{ priceStore.price }}</span
                                            >
                                          </h5>
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="cajaRadio guaroHptaaa">
                <div class="cajitaMetodos">
                  <div class="headerMetodos">
                    <h4>Métodos de pago</h4>
                  </div>
                  <ul class="ulMetodos">
                    <li class="ulMetodos3">
                      <RouterLink to="/card-payment" style="text-decoration: none;">
                        <button class="btnMetodos" id="stepTwo">
                        <img alt="" src="../assets/img/card.svg" />
                        <p>Tarjeta débito o crédito</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          color="#00c8ff"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </button>
                      </RouterLink>
                      
                    </li>
                    <li class="ulMetodos2">
                      <button class="btnMetodos">
                        <img alt="" src="../assets/img/pse.png" />
                        <p>Pago Bancario PSE (No disponible en el momento)</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          color="#00c8ff"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </button>
                    </li>
                    <li class="ulMetodos2">
                      <button class="btnMetodos">
                        <img alt="" src="../assets/img/bc.svg" />
                        <p>Bancolombia (No disponible en el momento)</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          color="#00c8ff"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </button>
                    </li>
                    <li class="ulMetodos2">
                      <button class="btnMetodos">
                        <img alt="" src="../assets/img/nequi.png" />
                        <p>Nequi (No disponible en el momento)</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          color="#00c8ff"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
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
          <img alt="" src="../assets/img/segurata.svg" /> Pago seguro
          <img alt="" src="../assets/img/visita.svg" />
          <img alt="" src="../assets/img/master.svg" />
          <img alt="" src="../assets/img/dinner.svg" />
        </h5>
      </div>
    </div>
    <div class="footer">
      <div class="contenedorF">
        <div class="contenedorF2 flex flex-col md:flex-row">
          <div class="leftF">
            <p>
              © Tigo Colombia 2021. Servicios móviles prestados por Colombia
              Móvil S.A. E.S.P. | Servicios fijos prestados por UNE EPM
              Telecomunicaciones S.A. Todos los derechos reservados.
              <a href="#">Términos y condiciones</a> |
              <a href="#">Política de protección de datos personales</a>
            </p>
          </div>
          <div class="rightF flex flex-row mt-6 md: ml-10">
            <a href="#"><img alt="" src="../assets/img/fb.svg" /> </a
            ><a href="#"><img alt="" src="../assets/img/ig.svg" /> </a
            ><a href="#"><img alt="" src="../assets/img/twt.svg" /> </a
            ><a href="#"><img alt="" src="../assets/img/yt.svg" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}

a{
  text-decoration: underline;
}
.footer0 {
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;
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
  color: #fff;
  font-size: 12px;
  line-height: 16px;
  margin-top: 0;
  -webkit-font-smoothing: antialiased;
}

.leftF a {
  color: #00c8ff;
  -webkit-font-smoothing: antialiased;
}

.rightF {
  width: 35%;
  text-align: right;
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
.body {
  min-height: calc(-212px + 100vh);
  padding: 1px 0px;
}

.payments {
  display: flex;
  flex-wrap: wrap;
}

.cajaRadio {
  flex: 0 0 100%;
  max-width: 100%;
}

.cajaRadio {
  box-sizing: border-box;
  flex: 1;
}

@media (max-width: 768px) .cajaHptaaas {
  margin-right: 0px;
}

.cajaHptaaas {
  margin-right: 10px;
}

.cajaSaldo {
  margin: 0 6px;
}

.cajaSaldo2 {
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
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  border: none;
  height: auto;
  margin-bottom: 20px;
  padding: 0;
}

.cajaSaldo3 {
  padding: 0px;
}

.saldoArriba {
  border-bottom: 1px solid rgba(86, 86, 86, 0.2);
  padding-bottom: 20px;
}

@media (max-width: 768px) .h4saldoArriba {
  font-size: 20px;
}

.h4saldoArriba {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 25px;
  color: #787878;
}

@media (max-width: 768px) .h1saldoArriba {
  font-size: 40px;
  font-weight: bold;
}

.h1saldoArriba {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  font-weight: normal;
  color: rgb(0, 55, 123);
  font-size: 55px;
  letter-spacing: 0px;
  line-height: 70px;
  text-align: center;
}

.saldoAbajo {
  width: 100%;
  display: block;
  margin: 0px auto;
  border-radius: 5px;
  color: rgb(255, 255, 255);
}

.summary {
  background-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  border-radius: 5px 5px 0px 0px;
  cursor: pointer;
  list-style: inside disclosure-closed;
  list-style-type: disclosure-open;
}

@media (max-width: 768px) .detalles {
  padding-bottom: 0px;
}

.detalles {
  padding: 18px 24px 15px;
}

@media (max-width: 768px) .detalles h4 {
  font-size: 20px;
}

.detalles h4 {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 25px;
  color: #787878;
}

.cajaDetallesPago {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.iconosDetalles {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.iconosDetalles {
  flex: 0 0 8.33333%;
  max-width: 8.33333%;
}

.iconosDetalles {
  box-sizing: border-box;
  flex: 1;
}

.iconosDetalles svg {
  width: 30px;
  margin-left: 0px;
  margin-right: 0px;
}

.infoDetalles {
  padding-left: 10px;
}

.infoDetalles {
  flex: 0 0 91.66667%;
  max-width: 91.66667%;
}

.infoDetalles {
  box-sizing: border-box;
  flex: 1;
}

.misma {
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
}

.mismadiv {
  flex: 0 0 50%;
  max-width: 50%;
}

.mismadiv {
  box-sizing: border-box;
  flex: 1;
}

.mismah5 {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  font-size: 1.125rem;
  font-weight: normal;
  text-transform: none;
  letter-spacing: inherit;
  margin-bottom: 0px;
}

.difh5 {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  font-size: 1.125rem;
  font-weight: normal;
  color: rgb(86, 86, 86);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: none;
  letter-spacing: inherit;
  margin-bottom: 0px;
}

@media (max-width: 768px) .mainOrder {
  overflow-x: scroll;
}

.mainOrder {
  max-width: 1170px;
  margin: 0 auto;
  margin-top: 30px;
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
  background: #00377d;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}

.div2header {
  max-width: 1400px;
  margin: auto;
  width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
  box-sizing: border-box;
}

@media (max-width: 768px) .guaroHptaaa {
  padding: 5px;
}

@media (max-width: 768px) .cajitaMetodos {
  margin-left: 0px;
}

.cajitaMetodos {
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
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  border: none;
  margin-left: 10px;
  padding: 0;
}

.headerMetodos {
  padding-top: 25px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
}

@media (max-width: 768px) .headerMetodos h4 {
  font-size: 20px;
}

.headerMetodos h4 {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 25px;
  padding: 0 15px;
}

.ulMetodos {
  padding: 0;
  list-style: none;
  margin: 0;
}

.ulMetodos2 {
  text-decoration: none;
  background-color: #d8d3d3;
  display: block;
  padding: 24px 15px;
  border-bottom: 1px solid rgba(86, 86, 86, 0.2);
  cursor: pointer;
}

.ulMetodos3 {
  text-decoration: none;
  background-color: white;
  display: block;
  padding: 24px 15px;
  border-bottom: 1px solid rgba(86, 86, 86, 0.2);
  cursor: pointer;
}

.ulMetodos3:hover{
  background-color: beige;
}

.btnMetodos {
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
}

.btnMetodos img {
  width: 45px;
  padding: 0px 15px 0px 0px;
}

.btnMetodos p {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  width: 90%;
  text-align: left;
  color: #00377b;
}
</style>
