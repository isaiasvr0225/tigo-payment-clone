<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { usePriceStore } from "../store/price.store";

const priceStore = usePriceStore();

const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const año = fechaActual.getFullYear();
const hora = fechaActual.getHours();
const minutos = fechaActual.getMinutes();

function generarNumeroAleatorioFactura() {
  return Math.floor(Math.random() * 9000000000) + 1000000000;
}

const numeroFactura = generarNumeroAleatorioFactura();
</script>

<template>
  <header class="h-[56px] lg:h-[74px]">
    <nav class="nav2 h-[56px] pl-0 lg:h-[74px]">
      <div class="div2header">
        <div class="centro">
          <div class="left">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              fill="rgb(255, 255, 255)"
              xmlns="http://www.w3.org/2000/svg"
              class="dropdown mt-1 ml-2 mr-4 pb-[8px] lg:hidden"
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
              class="svgTig relative right-[-20] bottom-2 mt-[13px]"
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

  <main class="flex flex-col">
    <section id="firstSection" class="flex flex-col justify-center">
      <img src="../assets/img/check.png" alt="" class="w-[50px] self-center" />
      <h2 id="h2Tittle1" class="bold">¡Tu pago ha sido realizado con éxito!</h2>
      <p id="parrafo1">Gracias por pagar tu factura en línea</p>

      <RouterLink to="/" style="display: block;" class="self-center">
        <button id="primaryBtn" class="w-[200px] self-center py-[5px] mt-4 mb-4">
        PAGAR OTRA FACTURA
      </button>
      </RouterLink>
      
      <RouterLink to="/" style="display: block;" class="self-center">  
        <button
        id="secondaryBtn"
        class="w-[200px] self-center py-[5px] mt-2 mb-4"
      >
        VOLVER AL INICIO
      </button>
      </RouterLink>
      
    </section>
    <section class="self-center mt-2">
      <h2 id="h2Tittle2">DATOS DE LA TRANSACCIÓN</h2>
      <article class="article1 px-4 py-4 rounded-[5px]">
        <h3>Valor:</h3>
        <span>$ {{ priceStore.price }}</span>
        <h3>Fecha y hora de pago:</h3>
        <span>{{ dia }}/{{ mes }}/{{ año }} - {{ hora }}:{{ minutos }}</span>
        <h3>Número de transacción:</h3>
        <span>{{ numeroFactura }}</span>
        <h3>Estado de la transacción:</h3>
        <span>Código: 1 Tu banco aprobó tu transacción </span>
      </article>
      <article class="flex flex-row justify-between article1 mt-2 px-2 py-2 rounded-[5px]">
        <h2 id="h2Tittle3">DETALLES DEL PAGO</h2>
        <div class="flex flex-row justify-around">
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
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <h2 id="h2Tittle4">DESCARGAR</h2>
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
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
h3 {
  color: rgb(136, 127, 127);
  font-family: "Roboto", sans-serif;
}

span {
  font-family: "Roboto", sans-serif;
  color: #000000;
}

.article1 {
  box-shadow: 2px 2px 5px;
}

#firstSection {
  background: #00377d;
}

#h2Tittle1 {
  font-family: "Roboto", sans-serif;
  color: beige;
  font-size: 20px;
  text-align: center;
}

#h2Tittle2 {
  font-family: "Roboto", sans-serif;
  padding-left: 5px;
}

#h2Tittle3 {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

#h2Tittle4 {
  margin-left: 3px;
  margin-right: 8px;
  font-family: "Roboto", sans-serif;
  color: #00c8ff;
}

#parrafo1 {
  font-family: "Roboto", sans-serif;
  color: rgb(219, 219, 207);
  font-size: 14px;
  text-align: center;
}

#primaryBtn {
  font-family: "Roboto", sans-serif;
  color: beige;
  background-color: #00c8ff;
  border-radius: 40px;
}

#secondaryBtn {
  font-family: "Roboto", sans-serif;
  color: #00c8ff;
  background-color: #001950;
  border-radius: 40px;
  border-style: solid;
  border-color: #00c8ff;
  border-width: 1px;
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
