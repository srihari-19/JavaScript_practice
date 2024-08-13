class Computer{
    constructor(
        // parameters
        name,
        processor,
        ram,
        storage,
        os,
        wifi,
        monitor,
        wifiBand2g,
        wifiBand5g,

    ){
        // properties
        this.name = name;
        this.processor = processor;
        this.ram = ram;
        this.storage = storage;
        this.os = os;
        this.wifi =wifi ;
        this.monitor=monitor;
        this.wifiSpeed = {
            lowSpeed : wifiBand2g,
            highSpeed: wifiBand5g
        };
    }
    togglewifi(wifiStatus){
        this.wifi=wifiStatus;
    }
    newWifiSpeed(upgrade2g,upgarde5g){
        this.wifiBand2g = upgrade2g;
        this.wifiBand5g = upgarde5g;
    }
}

export default Computer;