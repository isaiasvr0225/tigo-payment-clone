<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';
import { usePriceStore } from '../store/price.store';


const priceStore = usePriceStore();

const changePriceValue = (): void => {
  priceStore.changeValue('49.900');
} 


const onSpanClick = () => {
  // Agregar la propiedad transform
  const element: any = document.querySelector("#documentoOneSpan");
  element.style.transform = "translate(12px, -9px) scale(1)";
};

const onLabelClick = () => {
  // Agregar la propiedad transform
  const element: any = document.querySelector("#documentoOneSpan");
  element.style.transform = "translate(12px, -9px) scale(1)";
};

const onSpanClick2 = () => {
  // Agregar la propiedad transform
  const element: any = document.querySelector("#emailOneSpan");
  element.style.transform = "translate(12px, -9px) scale(1)";
};

const onLabelClick2 = () => {
  // Agregar la propiedad transform
  const element: any = document.querySelector("#emailOneSpan");
  element.style.transform = "translate(12px, -9px) scale(1)";
};
</script>

<template>
  <header>
    <nav class="flex flex-row justify-between lg:hidden" id="nav-mobile">
      <div id="icon-container" class="flex flex-row">
        <svg
          viewBox="0 0 24 24"
          width="24px"
          fill="rgb(255, 255, 255)"
          xmlns="http://www.w3.org/2000/svg"
          class="dropdown mt-1 ml-1"
        >
          // tslint:disable-next-line: max-line-length
          <path
            d="M4,
                                18H20a1,1,0,0,0,0-2H4a1,
                                1,0,0,0,0,2Zm0-5H20a1,1,0,0,0,0-2H4a1,1,0,0,0,0,2ZM3,7A1,1,0,0,0,4,8H20a1,1,0,0,0,0-2H4A1,1,0,0,0,3,7Z"
          ></path>
        </svg>

        <svg
          viewBox="0 0 66 46"
          xmlns="http://www.w3.org/2000/svg"
          class="svgTig mt-2 ml-2"
          height="46px"
          version="1.1"
          width="55px"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>logo</title>
          <g
            id="Page-1"
            fill="none"
            stroke="none"
            stroke-width="1"
            fill-rule="evenodd"
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
                      transform="translate(33.000000, 39.500000) rotate(-180.000000) translate(-33.000000, -39.500000) "
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="flex flex-row mr-2">
        <img
          class="mr-4"
          width="25px"
          src="https://express-tigo-com-co-prod.tigocloud.net/sites/default/files/ic-cart.svg"
          alt=""
        />
        <svg
          class="self-center mr-3"
          width="20"
          height="20"
          viewBox="0 0 26 26"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>icon-search</title>
          <g
            id="icon-search"
            stroke="none"
            stroke-width="1"
            fill="none"
            ill-rule="evenodd"
          >
            <g
              id="Group-2"
              transform="translate(2.000000, 2.000000)"
              stroke="#FFFFFF"
              stroke-width="1.3"
            >
              <circle id="Oval" cx="8.25" cy="8.25" r="8.25"></circle>
              <path
                d="M12.7143398,15.9340097 L12.7143398,19.1340097 L21.8143398,19.1340097 C22.6979954,19.1340097 23.4143398,18.4176653 23.4143398,17.5340097 C23.4143398,16.6503541 22.6979954,15.9340097 21.8143398,15.9340097 L12.7143398,15.9340097 Z"
                id="Rectangle"
                transform="translate(18.064340, 17.534010) rotate(-315.000000) translate(-18.064340, -17.534010) "
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </nav>
    
    <nav class="hidden lg:block"
      ><nav class="nav1">
        <div class="div1header">
          <div class="arriba1">
            <ul class="arriba1ul">
              <li class="arrina1li1"><a href="#">PERSONAS</a></li>
              <li class="arrina1li2">
                <span>EMPRESAS</span>
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
                <p class="iconarrina" style="margin: 0"></p>
              </li>
            </ul>
          </div>
          <div class="arriba2">
            <ul class="arriba2ul">
              <li class="meno">
                <span class="meno1span"
                  >INFORMACIÓN IMPORTANTE PARA EL USUARIO</span
                >
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
                <i class="meno1li"></i>
              </li>
              <li class="meno">
                <a href="#" class="meno2a">RADICA/CONSULTA PQR</a>
              </li>
              <li class="meno">
                <a href="#" class="meno3a"
                  ><span
                    ><img
                      src="../assets/img/infoIcon.svg"
                      style="margin-right: 5px"
                      width="24" /></span
                  >CENTRO DE AYUDA</a
                >
              </li>
              <li class="meno">
                <a href="#" class="meno4a"
                  ><span
                    ><img
                      src="../assets/img/personIcon.svg"
                      style="margin-right: 5px"
                      width="24" /></span
                  >MI TIGO</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav class="nav2">
        <div class="div2header">
          <div class="centro">
            <div class="left">
              <svg
                viewBox="0 0 66 46"
                xmlns="http://www.w3.org/2000/svg"
                class="svgTig"
                height="46px"
                version="1.1"
                width="66px"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>logo</title>
                <g
                  id="Page-1"
                  fill="none"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
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
                            transform="translate(33.000000, 39.500000) rotate(-180.000000) translate(-33.000000, -39.500000) "
                            fill-rule="nonzero"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div class="ladoLogo">
                <ul class="ladoLogoul">
                  <li class="menoo">
                    <span class="menoospan1">MÓVIL</span>
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                    <i class="menooli1"></i>
                  </li>
                  <li class="menoo">
                    <a href="#" class="menoo2a">INTERNET</a>
                  </li>
                  <li class="menoo">
                    <span class="menoo3span">TELEVISIÓN</span>
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                    <i class="menoo3i"></i>
                  </li>
                  <li class="menoo"><a href="#" class="menoo4a">PLANES</a></li>
                </ul>
              </div>
            </div>
            <div class="right mr-5">
              <a href="#" class="right1a"
                ><span class="right1span">CELULARES</span> </a
              ><a href="#" class="right2a"
                ><img src="../assets/img/shopIcon.svg" alt=""
              /></a>
              <div class="guaro">
                <button style="margin-top: 4px">
                  <svg
                    viewBox="0 0 26 26"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    version="1.1"
                    width="20"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>icon-search</title>
                    <g
                      id="icon-search"
                      fill="none"
                      stroke="none"
                      stroke-width="1"
                      ill-rule="evenodd"
                    >
                      <g
                        id="Group-2"
                        stroke="#FFFFFF"
                        stroke-width="1.3"
                        transform="translate(2.000000, 2.000000)"
                      >
                        <circle cx="8.25" cy="8.25" id="Oval" r="8.25"></circle>
                        <path
                          d="M12.7143398,15.9340097 L12.7143398,19.1340097 L21.8143398,19.1340097 C22.6979954,19.1340097 23.4143398,18.4176653 23.4143398,17.5340097 C23.4143398,16.6503541 22.6979954,15.9340097 21.8143398,15.9340097 L12.7143398,15.9340097 Z"
                          id="Rectangle"
                          transform="translate(18.064340, 17.534010) rotate(-315.000000) translate(-18.064340, -17.534010) "
                        ></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div></nav
    ></nav>
  </header>
  <main class="md:h-[850px] flex justify-center lg:h-[500px] xl:h-[680px]">
    <form class="w-[378px] pl-5 mx-2.5 my-8 lg:w-[468px] pl-11" action="">
      <h1 class="pt-4">Paga en línea</h1>
      <p class="pt-5">Elige el tipo de factura que vas a pagar.</p>

      <div class="checks flex-col mt-2 md:flex-row">
        <div class="cajaRadio">
          <div class="divchk">
            <input id="interHogar" value="80.900" type="radio" name="group" checked />
            <label></label>
          </div>
          <label style="color: #565656">Internet Hogar<br /></label>
        </div>
        <div class="cajaRadio">
          <div class="divchk2">
            <input id="movilPost" @click="changePriceValue" value="49.900" type="radio" name="group" /> <label></label>
          </div>
          <label style="color: #565656">Móvil Postpago</label>
        </div>
      </div>

      <div class="formulario">
        <div class="flex flex-row">
          <div class="divformulario1">
            <label style="width: 80px" class="divformulario1label"
              ><span class="z-20">Tipo</span>
              <select class="absolute z-10">
                <option value="CC">CC</option>
                <option value="CE">CE</option>
                <option value="NIT">NIT</option>
              </select>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 z-0"
                color="#00c8ff"
                style="position: absolute; top: 10px; right: 15px"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </label>
          </div>
          <div class="divformulario2">
            <label @click="onLabelClick()" class="divformulario2label w-[250px] lg:w-[300px]"
              ><span
                @click="onSpanClick()"
                style="background-color: #fafafa"
                id="documentoOneSpan"
                >No. de Documento</span
              >
              <input id="documentoOne" type="number"
            /></label>
          </div>
        </div>

        <div class="divformulario3 none"></div>
        <div class="divformulario3">
          <div>
            <label
              @click="onLabelClick2()"
              class="divformulario3label w-[334px] lg:w-[384px]"
              style="margin-right: 0px;"
              ><span
                @click="onSpanClick2()"
                style="background-color: #fafafa"
                id="emailOneSpan"
                >Correo electrónico</span
              >
              <input id="emailOne" type="email"
            /></label>
          </div>
        </div>
      </div>

      <em class="emhpta"
        >Al presionar CONTINUAR estás aceptando los
        <a href="#">términos y condiciones</a></em
      >

      <div class="cajaBtn pr-10">
        <RouterLink to="/order-details">
          <button class="font-bold mr-4" id="stepOne" type="button">
          Next
        </button>
        </RouterLink>
      </div>
    </form>
  </main>

  <footer>
    <div class="footer">
      <div class="contenedorF">
        <div class="contenedorF2 flex flex-col md:flex-row">
          <div class="leftF">
            <p class="text-center">
              © Tigo Colombia 2021. Servicios móviles prestados por Colombia
              Móvil S.A. E.S.P. | Servicios fijos prestados por UNE EPM
              Telecomunicaciones S.A. Todos los derechos reservados.
              <a href="#">Términos y condiciones</a> |
              <a href="#">Política de protección de datos personales</a>
            </p>
          </div>
          <div class="rightF flex flex-row mt-4 mb-3 md:ml-6">
            <a href="#"><img src="../assets/img/fb.svg" alt="" /> </a
            ><a href="#"><img src="../assets/img/ig.svg" alt="" /> </a
            ><a href="#"><img src="../assets/img/twt.svg" alt="" /> </a
            ><a href="#"><img src="../assets/img/yt.svg" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
form {
  height: 520px;
  background-color: #fafafa;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.17), 0 10px 10px 0 rgba(0, 0, 0, 0.1);
}

p {
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  color: #565656;
}

h1 {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #00377d;
}

br {
  color: #565656;
}

#nav-mobile {
  background-color: #00377d;
  width: 100%;
  height: 56px;
}

#icon-container {
  height: 100%;
  margin-left: 10px;
  padding-bottom: 5px;
}

.right2a {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin-right: 10px;
  padding: 0;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0px 0.5rem;
  position: relative;
  color: rgb(255, 255, 255);
}

.guaro button {
  background-color: transparent;
  border: none;
  position: relative;
  z-index: 10;
}

.right {
  float: right;
  margin: 6px 0;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.right1a {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0px 0.5rem;
  position: relative;
  color: rgb(255, 255, 255);
  padding-right: 15px;
  margin-right: 10px;
}

.right1span::before {
  content: "";
  border-right: 1px solid rgb(255, 255, 255);
  position: absolute;
  right: 0px;
  top: 5px;
  height: 14px;
}

.menoo2a {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  line-height: 1.5;
  background-color: rgb(0, 55, 123);
  display: inline-block;
  padding: 0px;
  font-size: 1rem;
  color: #fff;
}

.menoo3span {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  color: #fff;
}

.menoo4a {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  line-height: 1.5;
  background-color: rgb(0, 55, 123);
  display: inline-block;
  padding: 0px;
  font-size: 1rem;
  color: #fff;
}

.nav1 {
  box-sizing: border-box;
  height: 74px;
  padding: 12px 100px;
  background: #00377d;
  width: 100%;
  display: flex;
  align-items: center;
  background: #001950;
  padding: 0 100px;
  height: auto;
  height: 32px;
  justify-content: space-between;
  height: auto;
  padding: 0px 3rem;
}

.div1header {
  max-width: 1400px;
  margin: auto;
  width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
  box-sizing: border-box;
}

.arriba1 {
  display: inline-block;
  margin-right: 24px;
}

.arriba1ul {
  margin: 0px;
  display: flex;
  padding: 0px;
}

.arrina1li1 {
  cursor: pointer;
  background-color: rgb(0, 55, 125);
  align-items: center;
  position: relative;
  list-style: none;
  display: flex;
}

.arrina1li1 a {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  line-height: 1.5;
  background-color: rgb(0, 55, 123);
  display: inline-block;
  color: #fff;
  font-size: 0.75rem;
  padding: 11px 12px;
}

.arrina1li2 {
  cursor: pointer;
  align-items: center;
  position: relative;
  list-style: none;
  display: flex;
}

.arrina1li2 span {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  display: inline-block;
  color: #fff;
  font-size: 0.75rem;
  padding: 11px 12px;
  padding-right: 0px;
}

.arriba2 {
  display: inline-block;
  float: right;
}

.arriba2ul {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 40px;
  display: flex;
  align-items: center;
}

.meno {
  list-style: none;
  position: relative;
  display: flex;
  cursor: pointer;
  font-size: 0.75rem;
  color: #565656;
}

.meno1span {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
}

.meno2a {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.7rem 1rem;
  line-height: 1.5;
  background-color: transparent;
  padding-top: 0px;
  padding-bottom: 0px;
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
}

.meno3a {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.7rem 1rem;
  line-height: 1.5;
  background-color: transparent;
  padding-top: 0px;
  padding-bottom: 0px;
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
}

.meno4a {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.7rem 1rem;
  line-height: 1.5;
  background-color: transparent;
  padding-top: 0px;
  padding-bottom: 0px;
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
}

.nav2 {
  box-sizing: border-box;
  height: 74px;
  padding: 12px 100px;
  background: #00377d;
  width: 100%;
  display: flex;
  align-items: center;
  height: 74px;
  position: relative;
  padding: 12px 3rem;
}

.div2header {
  max-width: 1400px;
  margin: auto;
  width: 100%;
  padding-left: 3rem;
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

.ladoLogo {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  width: auto;
}

.ladoLogoul {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  margin-left: 10px;
}

.menoo {
  cursor: pointer;
  font-size: 0.75rem;
  color: #565656;
  text-transform: uppercase;
  padding: 0 24px;
  align-items: center;
  position: initial;
  list-style: none;
  display: flex;
}

.menoospan1 {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  color: #fff;
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
  text-decoration: underline;
}

.rightF {
  width: 35%;
  text-align: right;
}

.cajaBtn {
  width: 100%;
  text-align: right;
  margin-top: 112px;
}

.cajaBtn button:disabled {
  cursor: initial;
  background-color: rgba(0, 200, 255, 0.3);
  color: #fff;
}
.cajaBtn button {
  background: transparent;
  cursor: pointer;
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
  background-color: #00c8ff;
  color: #fff;
}

.emhpta {
  font-family: "robotoregular", sans-serif, sans-serif;
  font-weight: normal;
  color: #00377d;
  margin: 0;
  padding: 0;
  color: #565656;
  font-size: 0.75rem;
  font-style: normal;
}

.emhpta a {
  color: #00c8ff;
  text-decoration: none;
  outline: none;
  cursor: pointer;
}

.divformulario3label {
  font-family: "robotoregular", sans-serif, sans-serif;
  color: #565656;
  display: table;
  position: relative;
  margin: 20px 0;
  display: grid;
  margin-right: 15px;
  margin-top: 0px;
}

.divformulario3label span {
  transform: translate(12px, 15px) scale(1);
  font-size: 0.875rem;
  position: absolute;
  top: -3px;
  left: 0;
  transition: 0.5s all;
  color: #565656;
}

.divformulario3label input {
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
  margin-left: 0px;
}

.divformulario2 {
  box-sizing: border-box;
  flex: 1;
}

.divformulario2label {
  font-family: "robotoregular", sans-serif, sans-serif;
  color: #565656;
  display: table;
  position: relative;
  margin: 20px 0;
  display: grid;
  margin-right: 15px;
  margin-top: 0px;
}

.divformulario2label span {
  transform: translate(12px, 15px) scale(1);
  font-size: 0.875rem;
  position: absolute;
  top: -3px;
  left: 0;
  transition: 0.5s all;
  color: #565656;
}

.divformulario2label input {
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
  margin-left: 7px;
}

.formulario {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.divformulario1 {
  box-sizing: border-box;
  flex: 1;
}

.divformulario1label {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  font-family: "robotoregular", sans-serif, sans-serif;
  color: #565656;
  display: table;
  position: relative;
  margin: 20px 0;
  margin-top: 0px;
  width: 100%;
  box-sizing: border-box;
}

.divformulario1label span {
  position: absolute;
  top: -3px;
  left: 0;
  transition: 0.5s all;
  font-size: 0.75rem;
  transform: translate(12px, -10px) scale(1);
  background-color: #fafafa;
  padding: 0 3px;
  color: rgba(86, 86, 86, 0.8);
  line-height: 1.14rem;
}

.divformulario1label select {
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
  min-width: auto;
  width: 100%;
  border: 1px solid #565656;
  color: #00000a;
  padding-right: 2.5rem;
}
.checks {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.cajaRadio {
  flex: 0 0 100%;
  max-width: 100%;
}
.cajaRadio {
  box-sizing: border-box;
  flex: 1;
}

.divchk {
  position: relative;
  display: inline-block;
  padding-right: 5px;
  top: 4px;
}

.divchk input {
  opacity: 0;
  position: absolute;
}

.divchk input:checked + label {
  border: 2px solid #00c8ff;
}

.divchk input + label {
  padding-left: 0;
  line-height: 0;
  display: inline-block;
  font-size: initial;
  bottom: 0;
  margin: 0;
}
.divchk label {
  width: 16px;
  height: 16px;
  background: #fff;
  border: 2px solid rgba(86, 86, 86, 0.54);
  border-radius: 50%;
  display: inline-block;
  pointer-events: none;
  position: relative;
  box-sizing: content-box;
}

.divchk2 {
  position: relative;
  display: inline-block;
  padding-right: 5px;
  top: 4px;
}

.divchk2 input {
  opacity: 0;
  position: absolute;
}

.divchk2 input + label {
  padding-left: 0;
  line-height: 0;
  display: inline-block;
  font-size: initial;
  bottom: 0;
  margin: 0;
}

.divchk2 label {
  width: 16px;
  height: 16px;
  background: #fff;
  border: 2px solid rgba(86, 86, 86, 0.54);
  border-radius: 50%;
  display: inline-block;
  pointer-events: none;
  position: relative;
  box-sizing: content-box;
}

.divchk input:checked + label::after {
  content: " ";
  width: 100%;
  height: 100%;
  background: #00c8ff;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  display: inline-block;
  transform: scale(0.7);
  opacity: 1;
}

.divchk2 input:checked + label {
  border: 2px solid #00c8ff;
}
.divchk2 input + label {
  padding-left: 0;
  line-height: 0;
  display: inline-block;
  font-size: initial;
  bottom: 0;
  margin: 0;
}
.divchk2 label {
  width: 16px;
  height: 16px;
  background: #fff;
  border: 2px solid rgba(86, 86, 86, 0.54);
  border-radius: 50%;
  display: inline-block;
  pointer-events: none;
  position: relative;
  box-sizing: content-box;
}

.divchk2 input:checked + label::after {
  content: " ";
  width: 100%;
  height: 100%;
  background: #00c8ff;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  display: inline-block;
  transform: scale(0.7);
  opacity: 1;
}

.divchk2 input + label::after {
  display: none;
}
</style>
