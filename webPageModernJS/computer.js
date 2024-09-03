class computer {
    constructor(
      //processor
      name,
      processor,
      ram,
      storage,
      os,
      wifi,
      monitor,
      wifiband2g,
      wifiband5g,
      image,
  
    ) {
      //properties
      this.name = name;
      this.processor = processor;
      this.ram = ram;
      this.storage = storage;
      this.os = os;
      this.wifi = wifi;
      this.monitor = monitor;
      this.wifispeed = {
        lowspeed: wifiband2g,
        highspeed: wifiband5g
      }
      this.image = image;
    }
    togglewifi(wifistatus) {
      this.wifi = wifistatus;
    }
    newWifiSpeed(upgrade2g, upgarde5g) {
      this.wifiBand2g = upgrade2g;
      this.wifiBand5g = upgarde5g;
  
    }
  }
  export default computer;